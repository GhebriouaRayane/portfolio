import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sliders, Layers } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  features: string[];
  color: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Infrastructure Réseau d'Entreprise Haute Performance",
      category: "Administration & Sécurité Réseaux",
      description: "Conception, simulation et déploiement d'une architecture réseau d'entreprise multisites hautement redondante et sécurisée. Le projet simule une interconnexion robuste entre deux sites géographiques distincts en intégrant un pare-feu périmétrique de nouvelle génération FortiGate pour protéger l'ensemble du trafic d'entreprise.",
      features: [
        "Interconnexion de deux sites distincts émulée via GNS3 et VMware Workstation/ESXi.",
        "Segmentation réseau avancée via VLANs (Voix, Données, Serveurs, Gestion) pour isoler les flux.",
        "Mise en place de protocoles de redondance automatique (HSRP/VRRP) et d'agrégation de liens (LACP).",
        "Intégration d'un Pare-feu FortiGate : politiques de filtrage strictes, routage inter-VLAN, et NAT/PAT.",
        "Mise en place d'un tunnel VPN IPsec sécurisé pour l'interconnexion chiffrée entre les sites.",
        "Surveillance en temps réel et analyse du trafic pour optimiser la bande passante et détecter les anomalies."
      ],
      tags: ["GNS3", "VMware ESXi", "FortiGate", "Cisco CLI", "VLAN / HSRP", "VPN IPsec"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Plateforme Web Dynamique Responsive",
      category: "Développement Web & Automatisation",
      description: "Création et mise en ligne d'une application web complète, moderne et adaptative (Mobile, Tablette, PC). Développée en combinant la flexibilité du HTML/CSS pour le frontend et la puissance de Python pour le backend, l'application propose une interface utilisateur soignée, une navigation fluide et des performances optimisées.",
      features: [
        "Interface utilisateur adaptative et moderne utilisant des grilles flexibles et du CSS avancé.",
        "Backend dynamique propulsé par Python et le micro-framework Flask.",
        "Gestion des requêtes clients, traitement de formulaires et routing dynamique côté serveur.",
        "Optimisation du SEO et de la vitesse de chargement des ressources statiques.",
        "Déploiement continu et hébergement public automatisé sur la plateforme Cloud Render.",
        "Automatisation de scripts via Python pour l'intégration de fonctionnalités (ex: envoi de mails, scraping)."
      ],
      tags: ["HTML5 / CSS3", "JavaScript", "Python", "Flask", "Render Cloud", "Responsive Design"],
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section
      id="projets"
      className="scroll-mt-24 py-24 relative bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative Network Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 border border-purple-200 dark:border-purple-800/50 text-purple-600 dark:text-purple-400 text-sm font-bold mb-4">
              <Layers className="w-4 h-4" />
              <span>Portfolio Technique</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block">
              Projets & Réalisations
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform translate-y-2"></span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Découvrez des réalisations concrètes démontrant l'application d'architectures sécurisées et de solutions logicielles dynamiques.
            </p>
          </motion.div>
        </div>

        {/* Detailed Projects Showcase */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {projects.map((project) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm group relative"
              >
                {/* Visual Accent Background */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.color}`} />
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.03] blur-3xl rounded-full transition-opacity duration-500 pointer-events-none`} />

                <div className="p-8 sm:p-10">
                  {/* Text Details Column */}
                  <div className="space-y-6">
                    {/* Header Info */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 px-3 py-1 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900/30 rounded-lg">
                        {project.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white mt-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Main Description */}
                    <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-4 border-t border-slate-100 dark:border-slate-800/60 pt-6">
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider flex items-center gap-2">
                        <Sliders className="w-4 h-4 text-blue-500" />
                        Caractéristiques & Implémentation :
                      </h4>
                      <ul className="grid grid-cols-1 gap-3 text-slate-600 dark:text-slate-400">
                        {project.features.map((feat, fIdx) => (
                          <motion.li
                            key={fIdx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + fIdx * 0.05 }}
                            className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                          >
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 shadow-sm" />
                            <span>{feat}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges Footer */}
                    <div className="border-t border-slate-100 dark:border-slate-800/60 pt-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Cyber Corner Design Deco */}
                <div className="absolute bottom-2 right-2 flex space-x-1 opacity-20 pointer-events-none">
                  <span className="block w-2 h-2 bg-slate-400 rounded-full" />
                  <span className="block w-2 h-2 bg-slate-400 rounded-full animate-pulse" />
                  <span className="block w-2 h-2 bg-slate-400 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
