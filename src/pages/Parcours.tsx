import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experiences";
import { X, MapPin, Users, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Parcours = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const exp = selected ? experiences.find((e) => e.id === selected) : null;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold mb-2 text-gradient">Parcours Professionnel</h1>
          <p className="text-muted-foreground mb-12">Cliquez sur un poste pour découvrir le détail de l'expérience.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative mb-12 md:w-[calc(50%-2rem)]",
                i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8",
                "ml-12 md:ml-auto"
              )}
            >
              {/* Dot */}
              <div className={cn(
                "absolute top-4 w-3 h-3 rounded-full bg-primary glow-border",
                "left-[-1.85rem] md:left-auto",
                i % 2 === 0 ? "md:right-[-1.6rem]" : "md:left-[-1.6rem]"
              )} />

              <button
                onClick={() => setSelected(exp.id)}
                className="w-full text-left glass rounded-xl p-6 transition-all duration-300 hover:glow-border hover:border-primary/30 group"
              >
                <span className="text-xs font-medium text-primary">{exp.period}</span>
                <h3 className="font-display text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {exp.company}{exp.group ? ` — ${exp.group}` : ""}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.skills.slice(0, 3).map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs bg-secondary/70">
                      {s}
                    </Badge>
                  ))}
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {exp && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-lg z-50 bg-card border-l border-border overflow-y-auto"
            >
              <div className="p-6">
                <button onClick={() => setSelected(null)} className="mb-6 text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>

                <span className="text-sm font-medium text-primary">{exp.period}</span>
                <h2 className="font-display text-2xl font-bold mt-1 mb-1">{exp.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {exp.company}{exp.group ? ` — ${exp.group}` : ""}
                </p>

                {/* Context */}
                <div className="flex items-start gap-3 mb-6 p-4 bg-secondary/30 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-secondary-foreground">{exp.context}</p>
                </div>

                {/* Narrative */}
                <div className="mb-6">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Récit</h3>
                  <p className="text-sm leading-relaxed text-foreground/90">{exp.narrative}</p>
                </div>

                {/* Missions */}
                <div className="mb-6">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" /> Missions
                  </h3>
                  <ul className="space-y-2">
                    {exp.missions.map((m, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                {exp.results && (
                  <div className="mb-6">
                    <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Résultats</h3>
                    <ul className="space-y-2">
                      {exp.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-primary">✓</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Clients */}
                {exp.clients && (
                  <div className="mb-6">
                    <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4" /> Clients
                    </h3>
                    <p className="text-sm text-foreground/80">{exp.clients}</p>
                  </div>
                )}

                {/* Skills */}
                <div>
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Compétences mobilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <Badge key={s} className="bg-primary/10 text-primary border-primary/20">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Parcours;
