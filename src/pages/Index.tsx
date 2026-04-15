import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, Brain, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const explorationModes = [
  {
    icon: Compass,
    title: "Navigation classique",
    description: "Parcourez les expériences, compétences et projets de manière structurée.",
    link: "/parcours",
  },
  {
    icon: Brain,
    title: "Exploration par compétences",
    description: "Explorez la cartographie interactive et découvrez les compétences en contexte.",
    link: "/competences",
  },
  {
    icon: MessageCircle,
    title: "Chat IA",
    description: "Posez vos questions et explorez le profil de manière conversationnelle.",
    link: "#chat",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              CV Expérientiel Interactif
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-bold mb-6 leading-tight" style={{ color: '#096C6C' }}>
              Alexandre Papas
            </h1>
            <p className="text-xl sm:text-2xl font-display text-muted-foreground mb-4">
              Digital Strategy & AI Workflow Architect
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-10">
              Explorez un parcours de plus de 18 ans en stratégie digitale, transformation d'organisations 
              et intelligence artificielle appliquée. Ne lisez pas un CV — explorez un profil.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link to="/parcours">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-base px-8 py-6 glow-border">
                Explorer mon parcours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Exploration modes */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-display text-3xl font-bold text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            3 façons d'explorer
          </motion.h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            Choisissez le mode qui vous convient pour découvrir ce profil professionnel.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {explorationModes.map((mode, i) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link to={mode.link} className="block group">
                  <div className="glass rounded-xl p-8 h-full transition-all duration-300 group-hover:glow-border group-hover:border-primary/30">
                    <mode.icon className="h-10 w-10 text-primary mb-5 transition-transform group-hover:scale-110" />
                    <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                      {mode.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mode.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "18+", label: "Années d'expérience" },
              { value: "6", label: "Postes stratégiques" },
              { value: "50+", label: "Clients accompagnés" },
              { value: "70", label: "Collaborateurs formés" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
