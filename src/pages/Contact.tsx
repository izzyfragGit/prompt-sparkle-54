import { motion } from "framer-motion";
import { Linkedin, Mail, GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold mb-2 text-gradient">Contact</h1>
          <p className="text-muted-foreground mb-12">Pour en savoir plus ou échanger sur un projet.</p>
        </motion.div>

        <div className="space-y-8">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-8"
          >
            <h2 className="font-display text-xl font-semibold mb-6">Me contacter</h2>
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/alexandrepapas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/alexandrepapas</p>
                </div>
              </a>
              <a
                href="mailto:contact@alexandrepapas.com"
                className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">contact@alexandrepapas.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Formations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-8"
          >
            <h2 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Formations
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-secondary/30 rounded-lg">
                <p className="font-medium text-foreground">HEC Paris — Executive Certificate</p>
                <p className="text-sm text-muted-foreground">Digital & Business Transformation</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <p className="font-medium text-foreground">Université Paris-Sorbonne — Master II</p>
                <p className="text-sm text-muted-foreground">Communication & Multimédia</p>
              </div>
            </div>
          </motion.div>

          {/* CV Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8 text-center"
          >
            <h2 className="font-display text-xl font-semibold mb-3">CV Classique</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Téléchargez la version PDF de mon CV.
            </p>
            <Button className="bg-primary text-primary-foreground glow-border">
              <Download className="mr-2 h-4 w-4" />
              Télécharger le CV (PDF)
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
