import React from 'react';
import { motion } from 'framer-motion';
import { Network, Server, Video, Code, Radio, Wrench, Shield, CheckCircle2 } from 'lucide-react';

interface Skill {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  tags: string[];
}

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      id: 1,
      title: "Administration Réseaux",
      icon: <Network className="w-8 h-8" />,
      description: "Configuration et gestion avancée d'équipements réseau, optimisation des performances, routage/commutation, sécurisation et surveillance en temps réel. Solides bases en informatique générale.",
      color: "from-blue-500 to-cyan-500",
      tags: ["Cisco CCNA", "Packet Tracer", "GNS3", "Routage/VLAN", "Wireshark"]
    },
    {
      id: 2,
      title: "Virtualisation",
      icon: <Server className="w-8 h-8" />,
      description: "Connaissances pratiques approfondies en mise en place et administration d'infrastructures virtualisées d'entreprise, ainsi qu'une initiation robuste aux concepts de Cloud computing.",
      color: "from-indigo-500 to-purple-500",
      tags: ["VMware ESXi", "Workstation", "vSphere", "Systèmes Virtualisés"]
    },
    {
      id: 3,
      title: "Surveillance Vidéo",
      icon: <Video className="w-8 h-8" />,
      description: "Installation, paramétrage, intégration réseau et maintenance de systèmes de vidéosurveillance CCTV complets avec options avancées de monitoring local et de visionnage à distance.",
      color: "from-red-500 to-orange-500",
      tags: ["Caméras IP/CCTV", "NVR/DVR", "Alerte Sécurité", "Accès à distance"]
    },
    {
      id: 4,
      title: "Développement Web & Python",
      icon: <Code className="w-8 h-8" />,
      description: "Création de sites web et applications web modernes, performants et responsive. Expérience avec Python pour l'automatisation de scripts réseaux, le scripting système ou le développement Backend.",
      color: "from-emerald-500 to-teal-500",
      tags: ["HTML5 / CSS3", "JavaScript", "Python", "Flask", "Vite / Tailwind"]
    },
    {
      id: 5,
      title: "Télécommunications",
      icon: <Radio className="w-8 h-8" />,
      description: "Maîtrise des protocoles de communication, transmission de données par canaux physiques ou sans fil, et architectures télécoms complexes (canaux de transmission, fibre optique, RTC).",
      color: "from-amber-500 to-orange-500",
      tags: ["Fibre Optique", "Protocoles Comm.", "Transmission", "Architecture RTC"]
    },
    {
      id: 6,
      title: "Support Technique",
      icon: <Wrench className="w-8 h-8" />,
      description: "Diagnostic avancé de pannes matérielles et logicielles, résolution proactive d'incidents critiques sur site ou à distance, et maintenance préventive rigoureuse des systèmes d'information.",
      color: "from-fuchsia-500 to-pink-500",
      tags: ["Diagnostic matériel", "Helpdesk", "Dépannage OS", "Maintenance préventive"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="competences"
      className="scroll-mt-24 py-24 relative bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Network Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4">
              <Shield className="w-4 h-4" />
              <span>Savoir-faire Technique</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block">
              Compétences Professionnelles
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform translate-y-2"></span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Un profil polyvalent axé sur la gestion des réseaux d'entreprise, la virtualisation, la cybersécurité et le développement de solutions logicielles.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 relative group overflow-hidden flex flex-col h-full backdrop-blur-sm"
            >
              {/* Animated Glow on Hover */}
              <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-[0.03] blur-xl transition-opacity duration-300 pointer-events-none`} />

              {/* Skill Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className={`p-4 bg-gradient-to-br ${skill.color} text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  {skill.icon}
                </div>
                {/* Tech Indicator Node */}
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow shadow-emerald-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {skill.description}
              </p>

              {/* Tags/Chips */}
              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200/50 dark:border-slate-800 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Line Decorative Accent */}
              <div className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
