import React from 'react';
import { motion } from 'framer-motion';
import { User, Server, ShieldCheck, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { label: "Niveau d'études", value: "Master 2", icon: <GraduationCap className="w-5 h-5" /> },
    { label: "Spécialité", value: "Réseau/Sécu", icon: <ShieldCheck className="w-5 h-5" /> },
    { label: "Outils Clés", value: "VMware/GNS3", icon: <Server className="w-5 h-5" /> },
  ];

  return (
    <section
      id="apropos"
      className="scroll-mt-24 py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/5 dark:bg-blue-600/5 rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/5 dark:bg-purple-600/5 rounded-tr-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block">
              À Propos de Moi
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform translate-y-2"></span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Découvrez mon parcours, mes passions, et comment je combine les compétences réseau et le développement pour concevoir le futur numérique.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[320px] aspect-square group"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 rounded-3xl opacity-30 dark:opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-300" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 flex items-center justify-center shadow-xl">
                <img
                  src="/images/profile.jpg"
                  alt="Rayane Ghebrioua"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = parent.querySelector('.fallback-avatar');
                      if (fallback) fallback.classList.remove('hidden');
                    }
                  }}
                />

                <div className="fallback-avatar hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/20">
                    <User className="w-12 h-12" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">RG</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center font-medium">
                    Administrateur Réseaux & Télécoms
                  </p>
                </div>

                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blue-500" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-500" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-purple-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-bold">Ghebrioua Rayane</p>
                    <p className="text-xs text-blue-400">En recherche d'alternance / CDD</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                Expertise en Infrastructure & Passion pour l'Innovation
              </h3>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Bienvenue, je suis <strong className="text-blue-600 dark:text-blue-400 font-bold">Rayane Ghebrioua</strong>, étudiant en Réseaux et Télécommunications, passionné par la technologie et motivé par la résolution de problèmes complexes. J'accorde une grande importance à l'apprentissage continu pour rester à la pointe d'un environnement numérique en constante évolution.
                </p>

                <p>
                  Titulaire d'une licence en télécommunications, j'ai conçu et déployé un <strong className="text-indigo-600 dark:text-indigo-400 font-bold">environnement réseau virtuel complexe</strong> reliant deux sites distincts. En m'appuyant sur <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-sm border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-300">VMware</span> et <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-sm border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-300">GNS3</span>, j'ai intégré un <strong className="text-red-500 dark:text-red-400">pare-feu FortiGate</strong> afin d'assurer la sécurité, la segmentation avancée et la haute disponibilité de l'infrastructure.
                </p>

                <p>
                  Mon approche allie rigueur technique et innovation pour concevoir des infrastructures sécurisées, résilientes et performantes. Je continue à développer mes compétences autour de la cybersécurité, de la virtualisation, du cloud et du développement web pour répondre aux besoins concrets des entreprises.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 flex items-center space-x-4 hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl shadow-md shadow-blue-500/20 flex-shrink-0">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5">
                        {stat.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
