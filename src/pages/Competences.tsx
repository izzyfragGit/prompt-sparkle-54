import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { competenceClusters } from "@/data/competences";
import { experiences } from "@/data/experiences";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Competences = () => {
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);

  const cluster = selectedCluster
    ? competenceClusters.find((c) => c.id === selectedCluster)
    : null;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold mb-2 text-gradient">Cartographie des Compétences</h1>
          <p className="text-muted-foreground mb-12">Cliquez sur un domaine pour explorer les compétences en détail.</p>
        </motion.div>

        {/* Cluster overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {competenceClusters.map((c, i) => (
            <motion.button
              key={c.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelectedCluster(selectedCluster === c.id ? null : c.id)}
              className={cn(
                "relative text-left glass rounded-xl p-6 transition-all duration-300 group overflow-hidden",
                selectedCluster === c.id
                  ? "glow-border border-primary/40"
                  : "hover:glow-border hover:border-primary/20"
              )}
            >
              {/* Gradient accent */}
              <div className={cn(
                "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-60",
                c.color
              )} />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{c.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {c.hardSkills.length} compétences{c.softSkills ? ` + ${c.softSkills.length} soft skills` : ""}
                    </p>
                  </div>
                </div>
                {selectedCluster === c.id ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Detail drill-down */}
        <AnimatePresence mode="wait">
          {cluster && (
            <motion.div
              key={cluster.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{cluster.icon}</span>
                <div>
                  <h2 className="font-display text-2xl font-bold">{cluster.title}</h2>
                  <div className={cn("h-1 w-20 rounded-full mt-2 bg-gradient-to-r", cluster.color)} />
                </div>
              </div>

              {/* Hard skills */}
              <div className="mb-8">
                <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Hard Skills
                </h3>
                <div className="space-y-3">
                  {cluster.hardSkills.map((skill) => (
                    <div key={skill.name} className="p-3 bg-secondary/30 rounded-lg">
                      <p className="text-sm font-medium text-foreground mb-2">{skill.name}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.experienceIds.map((eid) => {
                          const e = experiences.find((x) => x.id === eid);
                          return e ? (
                            <Badge key={eid} variant="outline" className="text-xs border-border text-muted-foreground">
                              {e.company} ({e.period.split("–")[0].split("(")[0].trim()})
                            </Badge>
                          ) : null;
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft skills */}
              {cluster.softSkills && cluster.softSkills.length > 0 && (
                <div>
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    Soft Skills
                  </h3>
                  <div className="space-y-3">
                    {cluster.softSkills.map((skill) => (
                      <div key={skill.name} className="p-3 bg-secondary/30 rounded-lg">
                        <p className="text-sm font-medium text-foreground mb-2">{skill.name}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {skill.experienceIds.map((eid) => {
                            const e = experiences.find((x) => x.id === eid);
                            return e ? (
                              <Badge key={eid} variant="outline" className="text-xs border-border text-muted-foreground">
                                {e.company}
                              </Badge>
                            ) : null;
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Competences;
