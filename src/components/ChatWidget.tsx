import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const suggestedQuestions = [
  "Quelle est votre expérience avec l'IA ?",
  "Comment gérez-vous un projet complexe ?",
  "Sur quels types de projets avez-vous travaillé ?",
];

// For now, the chat uses a local knowledge base simulation.
// When Lovable Cloud is enabled, this will be replaced by a streaming edge function.
function simulateResponse(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("ia") || q.includes("intelligence artificielle") || q.includes("ai")) {
    return `**Mon expertise IA** couvre plusieurs dimensions :\n\n- **Prompt Engineering** structuré avec contraintes stylistiques et opérationnelles\n- **Architecture de workflows IA** : conception de pipelines multi-outils intégrant LLMs et automatisation\n- **Gestion du contexte** : conception de documents de continuité contextuelle\n- **Pensée systémique** appliquée aux LLMs\n\nJe suis positionné comme **AI Systems Strategist & AI Workflow Architect**, capable de transformer des analyses IA en livrables exécutifs.`;
  }
  if (q.includes("projet") || q.includes("complex")) {
    return `**Ma gestion de projets complexes** repose sur plusieurs piliers :\n\n1. **Structuration stratégique** : cadrage des enjeux, diagnostic de maturité, traduction business → plans d'activation\n2. **Coordination multi-acteurs** : jusqu'à 15+ personnes en gestion directe, 10+ experts en transversal\n3. **Delivery excellence** : mise en place de frameworks, templates, KPIs et rituels de suivi\n4. **Conduite du changement** : acculturation, formation, accompagnement des équipes\n\nExemples concrets : Framework Colgate WEH (3 marchés, >12M€), Transformation Carat (70 personnes sur 2 ans).`;
  }
  if (q.includes("type") || q.includes("travaillé") || q.includes("expérience")) {
    return `**J'ai travaillé sur une grande diversité de projets** :\n\n- 🏥 **B2B Santé** : CDO chez Conseil Media Santé (Sanofi, Danone, MSD, GSK)\n- 🌍 **FMCG International** : Colgate (hub WEH FR/BE/NL, >12M€)\n- 🏛️ **Secteur public** : Gouvernement (client n°1 Dentsu France)\n- 🚗 **Automobile** : BMW, General Motors\n- 💄 **Beauté/Luxe** : LVMH, Beiersdorf, Gisou, L'Oréal, Filorga\n- 🍷 **Alcool** : Pernod Ricard (lancement innovation « 51 »)\n- 💰 **Finance** : Société Générale, Cofidis\n\nSecteurs variés, budgets de 100K€ à 17M€, en agence média (Dentsu, WPP, Service Plan) et en consulting indépendant (SNOVAE).`;
  }
  return `**Alexandre Papas** est un professionnel du digital avec plus de 18 ans d'expérience en agences médias (Dentsu, WPP, Service Plan) et en consulting indépendant.\n\n**Positionnement** : Digital Strategy & AI Workflow Architect\n\n**Domaines clés** :\n- Stratégie digitale omnicanale\n- Leadership & transformation d'organisations\n- Data & performance media\n- Intelligence artificielle appliquée au marketing\n\nN'hésitez pas à me poser une question plus précise !`;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Msg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Simulate streaming delay
    await new Promise((r) => setTimeout(r, 800));
    const response = simulateResponse(text);
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg",
          isOpen
            ? "bg-secondary text-foreground"
            : "bg-gradient-to-r from-primary to-accent text-primary-foreground animate-pulse-glow"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] glass rounded-xl flex flex-col overflow-hidden border border-border shadow-2xl animate-scale-in">
          {/* Header */}
          <div className="p-4 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-display font-semibold text-sm">Explorer mon profil</h3>
                <p className="text-xs text-muted-foreground">Posez-moi vos questions</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Suggestions :</p>
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="block w-full text-left text-sm px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "text-sm",
                  msg.role === "user" ? "text-right" : "text-left"
                )}
              >
                <div
                  className={cn(
                    "inline-block max-w-[85%] px-3 py-2 rounded-xl",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-secondary-foreground rounded-bl-sm"
                  )}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-sm prose-invert max-w-none">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-1 px-3 py-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez une question..."
                className="flex-1 bg-secondary/50 border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
