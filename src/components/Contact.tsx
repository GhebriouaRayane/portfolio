import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MessageCircle, Github, Send, MessageSquareText, ShieldAlert } from 'lucide-react';

interface ContactMethod {
  id: number;
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactMethods: ContactMethod[] = [
    {
      id: 1,
      label: "Email",
      value: "rayaneghebrioua10@gmail.com",
      href: "mailto:rayaneghebrioua10@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      label: "LinkedIn",
      value: "Rayane Ghebrioua",
      href: "https://www.linkedin.com/in/rayane-ghebrioua-82070122b/",
      icon: <Linkedin className="w-5 h-5" />,
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 3,
      label: "Téléphone",
      value: "+213 790 940 731",
      href: "tel:+213790940731",
      icon: <Phone className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      label: "WhatsApp",
      value: "+213 790 940 731",
      href: "https://wa.me/qr/X5EPSTSCKGJQE1",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 5,
      label: "GitHub",
      value: "GhebriouaRayane",
      href: "https://github.com/GhebriouaRayane",
      icon: <Github className="w-5 h-5" />,
      color: "from-slate-800 to-slate-950 dark:from-slate-700 dark:to-slate-800"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:rayaneghebrioua10@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 relative bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[300px] bg-gradient-to-t from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4">
              <MessageSquareText className="w-4 h-4" />
              <span>Restons connectés</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block">
              Me Contacter
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform translate-y-2"></span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Vous avez un projet en réseau, une opportunité professionnelle ou une question technique ? Parlons-en !
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                Mes Coordonnées
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                Retrouvez-moi sur mes canaux de communication directs ou sur mes réseaux professionnels.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.id}
                    href={method.href}
                    target={method.href.startsWith('http') ? "_blank" : undefined}
                    rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    variants={itemVariants}
                    whileHover={{ x: 6, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all group"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${method.color} text-white shadow-md shadow-blue-500/10 group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>

                    <div className="overflow-hidden">
                      <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {method.label}
                      </h4>
                      <p className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-200 mt-0.5 break-all group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              <div className="absolute top-4 right-4 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold">
                <ShieldAlert className="w-3.5 h-3.5 text-blue-500" />
                <span>Sécurisé TLS 1.3</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Envoyer un message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 text-slate-800 dark:text-slate-200 text-sm font-medium transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Votre Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean.dupont@email.com"
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 text-slate-800 dark:text-slate-200 text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Sujet du message
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Opportunité d'alternance / CDD..."
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 text-slate-800 dark:text-slate-200 text-sm font-medium transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Bonjour Rayane, j'ai vu votre portfolio..."
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 text-slate-800 dark:text-slate-200 text-sm font-medium transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 15px -3px rgba(37,99,235,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                >
                  <span>Envoyer le message</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                Le formulaire ouvre votre messagerie avec le message prérempli, ce qui fonctionne sans backend sur Vercel.
              </p>
            </motion.div>
          </div>
        </div>

        <footer className="border-t border-slate-100 dark:border-slate-900 pt-12 mt-24 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GHEBRIOUA Rayane
            </div>

            <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
              Administrateur Réseaux • Télécommunications • Sécurité
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 pt-4">
              &copy; {new Date().getFullYear()} Portfolio. Tous droits réservés. Développé avec React, Vite et Tailwind CSS v4.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};
