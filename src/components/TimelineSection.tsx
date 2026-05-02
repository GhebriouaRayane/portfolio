import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, Award, Check } from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'education' | 'experience';
  title: string;
  institution: string;
  date: string;
  location: string;
  description: string;
  skillsAcquired?: string[];
}

export const TimelineSection: React.FC = () => {
  const educationItems: TimelineItem[] = [
    {
      id: 1,
      type: 'education',
      title: "Études en Master 2 Réseaux Télécommunication",
      institution: "Université Abderrahmane-mira de Bejaia, Algérie",
      date: "En cours (2025 - 2026)",
      location: "Béjaïa, Algérie",
      description: "Spécialisation approfondie en architectures réseaux modernes, protocoles de nouvelle génération (IPv6, MPLS), sécurité avancée des communications, routage dynamique complexe, et intégration des technologies émergentes en télécommunication (5G, SDN).",
      skillsAcquired: ["SDN", "Sécurité Réseau", "Protocoles Avancés", "Architecture Cloud"]
    },
    {
      id: 2,
      type: 'education',
      title: "Licence en Télécommunication",
      institution: "Université Abderrahmane-mira de Bejaia, Algérie",
      date: "Diplôme obtenu en 2024 (Mention Bien)",
      location: "Béjaïa, Algérie",
      description: "Formation rigoureuse couvrant les fondamentaux théoriques et pratiques des télécommunications, des systèmes de transmission par canaux physiques ou guidés, du traitement numérique du signal. Mise en pratique intensive de l'architecture réseau et du routage à travers les outils Packet Tracer et GNS3.",
      skillsAcquired: ["Transmission", "Traitement du Signal", "Packet Tracer", "Routage statique/dynamique"]
    },
    {
      id: 3,
      type: 'education',
      title: "Formation Administration & Sécurité des réseaux et Caméras CCTV",
      institution: "Campus NTS Academy",
      date: "Certifié avec distinction en 2023",
      location: "Algérie",
      description: "Formation certifiante d'excellence mêlant théorie et ateliers pratiques. Axée sur la configuration avancée, la gestion et la sécurisation des infrastructures réseau LAN/WAN d'entreprise, ainsi que sur l'installation, le paramétrage et la maintenance proactive de systèmes de vidéosurveillance CCTV IP avec solutions de monitoring local et distant.",
      skillsAcquired: ["Sécurisation Réseau", "CCTV IP / NVR", "Maintenance préventive", "Accès distant"]
    },
    {
      id: 4,
      type: 'education',
      title: "Formation en Déploiement Fibre Optique FTTH",
      institution: "Jura School Excellencia",
      date: "Certifié avec distinction en 2023",
      location: "Algérie",
      description: "Formation technique complète abordant les principes fondamentaux de la transmission optique, les bilans de liaison, ainsi que la pratique sur site : techniques de raccordement, soudure par fusion (épissurage), jarretiérage, et procédures de test, de mesure de réflectométrie (OTDR) et de maintenance des réseaux FTTH.",
      skillsAcquired: ["Épissure par fusion", "Réflectométrie OTDR", "FTTH", "Bilan de liaison"]
    },
    {
      id: 5,
      type: 'education',
      title: "Baccalauréat en Technique Mathématique",
      institution: "Lycée les sept martyrs Mahrez Maala",
      date: "Diplôme obtenu en 2020",
      location: "Sidi-Aïch, Béjaïa, Algérie",
      description: "Formation complète d'excellence couvrant les fondamentaux théoriques avancés en mathématiques, en sciences physiques et en méthodes techniques de génie civil/mécanique.",
      skillsAcquired: ["Mathématiques Avancées", "Analyse Technique", "Physique appliquée"]
    }
  ];

  const experienceItems: TimelineItem[] = [
    {
      id: 101,
      type: 'experience',
      title: "Stage - Technicien Câbleur Raccordeur Fibre Optique FTTH",
      institution: "Campus NTS Academy",
      date: "Juin 2023 - Décembre 2023",
      location: "Algérie",
      description: "Participation active aux opérations de déploiement réseau très haut débit : raccordements par soudure à la soudeuse optique, préparation de boîtes de distribution (PBO), tirage de câbles en conduite et en aérien, tests de continuité optique, mise en service chez l'abonné et diagnostic de coupures.",
      skillsAcquired: ["Soudure Optique", "Préparation PBO/PA", "Tirage de câbles", "Support Client FTTH"]
    },
    {
      id: 102,
      type: 'experience',
      title: "Stage Pratique - Étude et Réalisation d'un Réseau Fibre Optique",
      institution: "Algérie Télécom",
      date: "Décembre 2022 - Janvier 2023",
      location: "Béjaïa, Algérie",
      description: "Immersion au cœur de l'opérateur historique national. Étude des plans de raccordement de transport et de distribution, observation des chantiers de génie civil pour passage de fibre, initiation à l'architecture GPON, études de cas de saturation de boucles locales et assistance aux ingénieurs réseau lors des phases de tests.",
      skillsAcquired: ["Architecture GPON", "Réseau de transport", "Plan de tirage", "Ingénierie Télécom"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="formation" className="scroll-mt-24 py-24 relative bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION 1: FORMATION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Parcours Académique</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block">
              Formation & Diplômes
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform translate-y-2"></span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Un parcours universitaire et certifiant d'excellence, axé sur les technologies réseau avancées, la sécurité et l'ingénierie des télécoms.
            </p>
          </motion.div>
        </div>

        {/* Education Timeline (Vertical) */}
        <div className="relative max-w-4xl mx-auto mb-28">
          {/* Central Fiber Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 transform sm:-translate-x-1/2 rounded-full overflow-hidden">
            {/* Glowing active progress bar on scroll/hover simulation */}
            <div className="h-full w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 animate-pulse-slow" />
          </div>

          {/* Timeline Nodes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12 relative"
          >
            {educationItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  variants={isEven ? itemLeftVariants : itemRightVariants}
                  className={`relative flex flex-col sm:flex-row items-start sm:justify-center ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot with Glowing Ring */}
                  <div className="absolute left-2.5 sm:left-1/2 transform sm:-translate-x-1/2 flex items-center justify-center z-10 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 border-4 border-white dark:border-slate-950 shadow-md shadow-blue-500/50 mt-6" />

                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-32px)] pl-12 sm:pl-0 ${isEven ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'}`}>
                    <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm relative group hover:border-blue-500/50 dark:hover:border-blue-400/30">
                      
                      {/* Sub-header */}
                      <div className={`flex flex-wrap gap-2 items-center text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <span className="flex items-center gap-1 bg-blue-50 dark:bg-blue-950 px-2.5 py-1 rounded-lg border border-blue-100 dark:border-blue-800/30">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>

                      {/* Institution */}
                      <h4 className="text-sm font-bold text-indigo-500 dark:text-indigo-400 mt-1 mb-4">
                        {item.institution}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Acquired Skills */}
                      {item.skillsAcquired && (
                        <div className={`flex flex-wrap gap-1.5 mt-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                          {item.skillsAcquired.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-medium"
                            >
                              <Check className="w-3 h-3 text-emerald-500" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Glow outline on card */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tr-2xl pointer-events-none" />
                    </div>
                  </div>

                  {/* Empty Spacer column for layout alignment */}
                  <div className="hidden sm:block w-[calc(50%-32px)]" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* SECTION 2: EXPÉRIENCES */}
        <div id="experiences" className="scroll-mt-24 pt-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400 text-sm font-bold mb-4">
                <Briefcase className="w-4 h-4" />
                <span>Parcours Professionnel</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block">
                Expériences Professionnelles
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transform translate-y-2"></span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
                Des stages formateurs sur le terrain et en entreprise, renforçant l'expertise pratique dans les infrastructures FTTH et les réseaux de télécommunication.
              </p>
            </motion.div>
          </div>

          {/* Experience Timeline (Vertical) */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central Fiber Line - Green theme for experience */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 transform sm:-translate-x-1/2 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-b from-emerald-500 via-teal-500 to-blue-500 animate-pulse-slow" />
            </div>

            {/* Timeline Nodes */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-12 relative"
            >
              {experienceItems.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    variants={isEven ? itemLeftVariants : itemRightVariants}
                    className={`relative flex flex-col sm:flex-row items-start sm:justify-center ${
                      isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot with Glowing Ring (Green theme) */}
                    <div className="absolute left-2.5 sm:left-1/2 transform sm:-translate-x-1/2 flex items-center justify-center z-10 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 border-4 border-white dark:border-slate-950 shadow-md shadow-emerald-500/50 mt-6" />

                    {/* Content Card */}
                    <div className={`w-full sm:w-[calc(50%-32px)] pl-12 sm:pl-0 ${isEven ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'}`}>
                      <div className="bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm relative group hover:border-emerald-500/50 dark:hover:border-emerald-400/30">
                        
                        {/* Sub-header */}
                        <div className={`flex flex-wrap gap-2 items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                          <span className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {item.title}
                        </h3>

                        {/* Institution */}
                        <h4 className="text-sm font-bold text-teal-500 dark:text-teal-400 mt-1 mb-4">
                          {item.institution}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Acquired Skills */}
                        {item.skillsAcquired && (
                          <div className={`flex flex-wrap gap-1.5 mt-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                            {item.skillsAcquired.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-medium hover:bg-emerald-50 dark:hover:bg-emerald-950 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors"
                              >
                                <Award className="w-3 h-3 text-amber-500 flex-shrink-0" />
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Glow outline on card */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-tr-2xl pointer-events-none" />
                      </div>
                    </div>

                    {/* Empty Spacer column for layout alignment */}
                    <div className="hidden sm:block w-[calc(50%-32px)]" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
