export interface Skill {
  name: string;
  experienceIds: string[];
}

export interface CompetenceCluster {
  id: string;
  title: string;
  icon: string;
  color: string;
  hardSkills: Skill[];
  softSkills?: Skill[];
}

export const competenceClusters: CompetenceCluster[] = [
  {
    id: "strategie",
    title: "Stratégie & Conseil",
    icon: "🧠",
    color: "from-primary to-accent",
    hardSkills: [
      { name: "Conseil en stratégie digitale & omnicanale", experienceIds: ["cdo-cms", "snovae", "wavemaker", "iprospect"] },
      { name: "Cadrage stratégique & diagnostic de maturité digitale", experienceIds: ["snovae", "iprospect"] },
      { name: "Traduction enjeux business en plans d'activation", experienceIds: ["cdo-cms", "snovae", "wavemaker"] },
      { name: "Go-to-market digital & media", experienceIds: ["wavemaker", "carat-pluri"] },
      { name: "Business case digital & ROI marketing", experienceIds: ["snovae", "wavemaker"] },
      { name: "Due diligence digitale / media / performance", experienceIds: ["wavemaker", "iprospect"] },
      { name: "Conseil C-level (CEO, CMO, CDO)", experienceIds: ["snovae", "iprospect", "wavemaker"] },
    ],
    softSkills: [
      { name: "Esprit d'analyse et de synthèse", experienceIds: ["cdo-cms", "snovae", "wavemaker", "iprospect"] },
      { name: "Vision stratégique", experienceIds: ["cdo-cms", "snovae", "wavemaker", "iprospect"] },
    ]
  },
  {
    id: "data",
    title: "Data & Performance",
    icon: "📊",
    color: "from-accent to-primary",
    hardSkills: [
      { name: "Pilotage de la performance media (KPI, ROAS, CAC, LTV)", experienceIds: ["wavemaker", "iprospect", "iprospect-digital"] },
      { name: "Measurement frameworks & reporting exécutif", experienceIds: ["wavemaker", "cdo-cms"] },
      { name: "Data-driven decision making", experienceIds: ["wavemaker", "iprospect"] },
      { name: "Lecture & interprétation de dashboards (GA4, plateformes media)", experienceIds: ["wavemaker", "cdo-cms"] },
      { name: "Exploitation data 1st / 2nd / 3rd party", experienceIds: ["wavemaker"] },
      { name: "Media governance & coordination multi-marchés", experienceIds: ["wavemaker"] },
    ]
  },
  {
    id: "omnicanal",
    title: "Omnicanal & Media",
    icon: "🌍",
    color: "from-blue-500 to-cyan-400",
    hardSkills: [
      { name: "Stratégies full-funnel (brand & performance)", experienceIds: ["wavemaker", "iprospect", "carat-pluri", "iprospect-digital"] },
      { name: "Omnichannel orchestration (Paid / Owned / Earned)", experienceIds: ["wavemaker", "iprospect"] },
      { name: "Programmatic & retail media strategy", experienceIds: ["wavemaker"] },
      { name: "E-retail & marketplace strategy (Amazon, Carrefour)", experienceIds: ["wavemaker"] },
      { name: "Audience strategy & advanced targeting", experienceIds: ["wavemaker", "iprospect"] },
      { name: "Media planning international & hubs régionaux", experienceIds: ["wavemaker"] },
      { name: "Stratégie plurimédia (TV, presse, radio, OOH, digital)", experienceIds: ["carat-pluri"] },
    ]
  },
  {
    id: "leadership",
    title: "Leadership & Management",
    icon: "🤝",
    color: "from-purple-500 to-pink-500",
    hardSkills: [
      { name: "Pilotage d'équipes pluridisciplinaires (jusqu'à 15 personnes)", experienceIds: ["cdo-cms", "iprospect", "carat-pluri"] },
      { name: "Coaching, upskilling & acculturation digitale", experienceIds: ["cdo-cms", "iprospect", "snovae"] },
      { name: "Gestion de projets complexes multi-stakeholders", experienceIds: ["snovae", "wavemaker", "iprospect"] },
      { name: "Storytelling stratégique & présentations exécutives", experienceIds: ["cdo-cms", "wavemaker"] },
      { name: "Appels d'offres complexes (nationaux & internationaux)", experienceIds: ["iprospect", "iprospect-digital"] },
    ],
    softSkills: [
      { name: "Leadership collaboratif", experienceIds: ["cdo-cms", "iprospect", "carat-pluri"] },
      { name: "Pédagogie & vulgarisation", experienceIds: ["cdo-cms", "snovae", "iprospect"] },
      { name: "Écoute active", experienceIds: ["snovae", "cdo-cms"] },
      { name: "Engagement dans la progression des équipes", experienceIds: ["cdo-cms", "iprospect"] },
    ]
  },
  {
    id: "transformation",
    title: "Transformation & Organisation",
    icon: "🧩",
    color: "from-emerald-500 to-teal-400",
    hardSkills: [
      { name: "Transformation digitale des organisations", experienceIds: ["snovae", "iprospect", "cdo-cms"] },
      { name: "Structuration des organisations marketing & media", experienceIds: ["snovae", "wavemaker"] },
      { name: "Coordination agences / partenaires technologiques", experienceIds: ["wavemaker", "iprospect"] },
      { name: "Gouvernance internationale (global / régional / local)", experienceIds: ["wavemaker"] },
      { name: "Conduite du changement", experienceIds: ["cdo-cms", "iprospect"] },
    ],
    softSkills: [
      { name: "Adaptabilité (B2B/B2C, grands groupes/start-ups)", experienceIds: ["cdo-cms", "snovae", "wavemaker"] },
      { name: "Curiosité intellectuelle", experienceIds: ["snovae", "cdo-cms"] },
      { name: "Détermination & résilience", experienceIds: ["snovae"] },
    ]
  },
  {
    id: "ia",
    title: "Intelligence Artificielle",
    icon: "🤖",
    color: "from-violet-500 to-fuchsia-500",
    hardSkills: [
      { name: "Conception de copilotes métier (architecture RAG, intégration M365)", experienceIds: ["snovae"] },
      { name: "Automatisation de workflows IA multi-étapes (Make.com, API Anthropic)", experienceIds: ["snovae"] },
      { name: "Prompt engineering avancé : multi-contraintes, portabilité cross-modèles", experienceIds: ["snovae"] },
      { name: "Pilotage de LLMs par sédimentation contextuelle et continuité inter-sessions", experienceIds: ["snovae"] },
      { name: "Structuration de problématiques business complexes avec LLMs", experienceIds: ["snovae"] },
      { name: "Transformation d'analyses IA en livrables exécutifs", experienceIds: ["snovae"] },
      { name: "Exploration de faisabilité d'intégrations API et MCP", experienceIds: ["snovae"] },
    ]
  }
];
