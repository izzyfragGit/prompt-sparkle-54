import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const SUPABASE_URL = "https://uxstxbhdyyuwabjkywnt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4c3R4YmhkeXl1d2Fiamt5d250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNjk3ODcsImV4cCI6MjA5MTg0NTc4N30.0KXa1HdGmV2YVSZh6xiCEox0_-pjFfeYxLPjL4Zz-6Y";

const suggestedQuestions = [
  "Quelle est son expérience avec l'IA ?",
  "Quels types de projets a-t-il pilotés ?",
  "Quelle est sa vision de la stratégie digitale ?",
];

// Génère ou récupère un session_id anonyme stocké en localStorage
// Permet de corréler les messages d'un même visiteur sans l'identifier
function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  const key = "chat_session_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState<string>(() => getOrCreateSessionId());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Msg = { role: "user", content: text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
          session_id: sessionId,
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply ?? "Désolé, une erreur est survenue." }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [...prev, { role: "assistant", content: "Désolé, je rencontre un problème technique. Veuillez réessayer dans quelques instants." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={cn("fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg", isOpen ? "bg-secondary text-foreground" : "bg-primary text-primary-foreground animate-pulse-glow")}>
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] glass rounded-xl flex flex-col overflow-hidden border border-border shadow-2xl animate-scale-in">
          <div className="p-4 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-display font-semibold text-sm">Explorer mon profil</h3>
                <p className="text-xs text-muted-foreground">Posez vos questions sur mon parcours</p>
              </div>
            </div>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Message d'accueil toujours affiché en tête de la conversation */}
            <div className="text-sm text-left">
              <div className="inline-block max-w-[85%] px-3 py-2 rounded-xl bg-secondary text-secondary-foreground rounded-bl-sm">
                Bonjour, je suis l'assistant d'Alexandre Papas. Posez-moi vos questions sur son parcours, ses compétences ou le fit avec votre recherche. Pour bien cibler, dites-moi sur quel type de poste vous évaluez son profil.
              </div>
            </div>
            {/* Suggestions affichées uniquement tant qu'aucune conversation n'est engagée */}
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Ou choisissez une suggestion :</p>
                {suggestedQuestions.map((q) => (
                  <button key={q} onClick={() => send(q)} className="block w-full text-left text-sm px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground transition-colors">{q}</button>
                ))}
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={cn("text-sm", msg.role === "user" ? "text-right" : "text-left")}>
                <div className={cn("inline-block max-w-[85%] px-3 py-2 rounded-xl", msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-secondary text-secondary-foreground rounded-bl-sm")}>
                  {msg.role === "assistant" ? <div className="prose prose-sm prose-invert max-w-none"><ReactMarkdown>{msg.content}</ReactMarkdown></div> : msg.content}
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
          <div className="p-3 border-t border-border">
            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Posez une question..." maxLength={2000} className="flex-1 bg-secondary/50 border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <Button type="submit" size="icon" disabled={!input.trim() || isLoading}><Send className="h-4 w-4" /></Button>
            </form>
            <div className={cn(
              "text-xs text-right mt-1 transition-colors",
              input.length >= 2000 ? "text-destructive" :
              input.length >= 1800 ? "text-orange-500" :
              "text-muted-foreground"
            )}>
              {input.length}/2000
            </div>
          </div>
        </div>
      )}
    </>
  );
}
