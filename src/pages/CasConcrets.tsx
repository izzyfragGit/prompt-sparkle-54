import { motion } from "framer-motion";
import { caseStudies } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, AlertCircle, Wrench, TrendingUp } from "lucide-react";

const icons = {
  context: Lightbulb,
  problem: AlertCircle,
  solution: Wrench,
  result: TrendingUp,
};

const CasConcrets = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold mb-2 text-gradient">Cas Concrets</h1>
          <p className="text-muted-foreground mb-12">
            Des exemples de projets structurés : Contexte → Problème → Solution → Résultat.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-6">
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">{cs.title}</h2>
                    <p className="text-sm text-muted-foreground">{cs.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.skills.map((s) => (
                      <Badge key={s} className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {(
                    [
                      { key: "context", label: "Contexte", value: cs.context },
                      { key: "problem", label: "Problème", value: cs.problem },
                      { key: "solution", label: "Solution", value: cs.solution },
                      { key: "result", label: "Résultat", value: cs.result },
                    ] as const
                  ).map((item) => {
                    const Icon = icons[item.key];
                    return (
                      <div key={item.key} className="p-4 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {item.label}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/85 leading-relaxed">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasConcrets;
