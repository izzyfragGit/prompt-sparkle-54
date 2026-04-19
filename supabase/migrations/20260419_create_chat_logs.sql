-- Table de logging des échanges chat (user + assistant)
-- Objectif : permettre à Alexandre de consulter a posteriori les conversations des visiteurs
-- Approche : anonyme (session_id UUID généré côté client, pas d'IP, pas de cookie tracking)

CREATE TABLE IF NOT EXISTS public.chat_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  role text NOT NULL CHECK (role IN ('user', 'assistant')),
  content text NOT NULL,
  user_agent text
);

-- Index pour reconstituer rapidement une conversation (session_id) et filtrer par date
CREATE INDEX IF NOT EXISTS idx_chat_logs_session_created
  ON public.chat_logs (session_id, created_at);

-- RLS activée
ALTER TABLE public.chat_logs ENABLE ROW LEVEL SECURITY;

-- Anon (frontend via Edge Function appelée avec anon key) : peut INSERT uniquement
-- NB : dans notre setup, l'Edge Function utilise le SERVICE_ROLE_KEY qui bypasse RLS,
-- donc cette policy anon est une double sécurité au cas où le frontend appellerait
-- directement la table un jour. Interdit la lecture/modif/suppression depuis le client.
CREATE POLICY "Anon can insert chat logs"
  ON public.chat_logs
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Pas de policy SELECT / UPDATE / DELETE pour anon → accès impossible sans service role
-- Le service role (utilisé par Edge Function + consultation Dashboard) bypasse la RLS
