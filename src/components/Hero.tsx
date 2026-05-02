import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Server, Shield, Globe, ArrowRight, Network } from 'lucide-react';
import { NetworkParticles } from './NetworkParticles';

const roles = [
  'Administrateur Réseaux & Sécurité',
  'Expert en Télécommunications',
  'Spécialiste en Virtualisation',
  'Développeur Web & Python',
  'Étudiant en Master 2 Réseaux',
];

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = isDeleting ? 40 : 80;
  const pauseTime = isDeleting ? 0 : 1500;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: number;

    if (!isDeleting && charIndex < currentRole.length) {
      timer = window.setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timer = window.setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 250);
    }

    return () => window.clearTimeout(timer);
  }, [charIndex, isDeleting, pauseTime, roleIndex, roles, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="accueil"
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950 pt-20"
    >
      <NetworkParticles density={80} />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow delay-1000" />
      <div className="absolute top-1/2 left-2/3 w-80 h-80 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow delay-2000" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Disponible pour opportunités</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="block">Bonjour, je suis</span>
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 bg-clip-text text-transparent font-extrabold pb-2 block mt-2">
                  Rayane Ghebrioua
                </span>
              </h1>

              <div className="h-12 flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 flex items-center">
                  <Terminal className="w-6 h-6 mr-3 text-blue-500 dark:text-cyan-400" />
                  <span className="text-slate-900 dark:text-white font-mono border-r-2 border-blue-500 dark:border-cyan-400 pr-1 animate-blink">
                    {typedText}
                  </span>
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Étudiant en Master 2 Réseaux Télécommunication, passionné par la virtualisation, le développement web et la sécurisation des infrastructures. Je conçois des environnements réseau fiables, sécurisés et pensés pour les besoins actuels des entreprises.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.03, boxShadow: '0 20px 25px -5px rgba(37,99,235,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/30 dark:shadow-blue-500/10 cursor-pointer group transition-all duration-300"
                >
                  Me contacter
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => scrollToSection('projets')}
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(148, 163, 184, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold backdrop-blur-sm cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm"
                >
                  Voir mes projets
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center h-[350px] sm:h-[450px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 rounded-3xl opacity-20 dark:opacity-40 blur-2xl animate-spin-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center text-white font-bold z-10 border border-white/20">
                <Network className="w-10 h-10 animate-pulse" />
              </div>

              <motion.div
                className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center space-x-3 z-10 cursor-pointer hover:scale-105 transition-transform"
                animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="p-3 bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-400 rounded-xl">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Sécurité
                  </h3>
                  <p className="text-sm font-extrabold text-slate-800 dark:text-white">
                    Pare-feu FortiGate
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-12 left-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center space-x-3 z-10 cursor-pointer hover:scale-105 transition-transform"
                animate={{ y: [0, 15, 0], x: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-xl">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Virtualisation
                  </h3>
                  <p className="text-sm font-extrabold text-slate-800 dark:text-white">
                    VMware ESXi & GNS3
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-12 right-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center space-x-3 z-10 cursor-pointer hover:scale-105 transition-transform"
                animate={{ y: [0, 10, 0], x: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div className="p-3 bg-purple-100 dark:bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-xl">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Web & Dev
                  </h3>
                  <p className="text-sm font-extrabold text-slate-800 dark:text-white">
                    Python & FullStack
                  </p>
                </div>
              </motion.div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-blue-500/20 dark:stroke-cyan-500/20 stroke-2 fill-none">
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="68px"
                  initial={{ strokeDasharray: '4 4', strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -20 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="90px"
                  y2="calc(100% - 68px)"
                  initial={{ strokeDasharray: '4 4', strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -20 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="calc(100% - 90px)"
                  y2="calc(100% - 68px)"
                  initial={{ strokeDasharray: '4 4', strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -20 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] border border-slate-200/50 dark:border-slate-800/40 rounded-full border-dashed animate-spin-slow pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
