export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  context: string;
  problem: string;
  solution: string;
  result: string;
  skills: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "copilote-ia",
    title: "Copilote Commercial IA",
    company: "SNOVAE (mission confidentielle)",
    context: "Grand cabinet d'audit international souhaitant moderniser sa démarche commerciale avec l'IA.",
    problem: "Offre de services étendue mais peu valorisée en interne : les équipes commerciales n'avaient pas d'outil pour construire rapidement des supports contextualisés en RDV client.",
    solution: "Conception d'un copilote commercial IA basé sur une architecture RAG : ingestion des documents de référence du cabinet, intégration M365, production de 12 one-pagers offres de services prêts à l'emploi.",
    result: "Copilote opérationnel livré. Équipes commerciales autonomes pour générer des supports de vente contextualisés en quelques minutes.",
    skills: ["Architecture RAG", "Prompt engineering", "Intégration M365", "Gestion de projet IA"]
  },
  {
    id: "colgate-framework",
    title: "Framework Stratégique Colgate WEH",
    company: "KR Wavemaker / WPP",
    context: "Lead digital du hub Western Europe Colgate-Palmolive (> 12M€) couvrant trois marchés : France, Belgique, Pays-Bas.",
    problem: "Absence de cadre stratégique unifié à l'échelle du hub, avec des pratiques et niveaux de maturité disparates entre marchés.",
    solution: "Conception d'un framework articulé autour de 5 piliers (Insights & Audience, Data, Création & Optimisation, Mesure & Analyse, Acculturation) et déployé sur trois marchés avec coordination de 10 experts métiers.",
    result: "Adoption d'un référentiel commun à l'échelle du hub, activations data-driven plus ciblées, dashboards consolidés et KPIs orientés business.",
    skills: ["Framework stratégique", "Déploiement international", "Data & Performance", "Coordination multi-expertise"]
  },
  {
    id: "transformation-carat",
    title: "Transformation Digitale Carat",
    company: "iProspect / Dentsu",
    context: "Practice digitale à structurer pour l'ensemble des équipes Carat (70 collaborateurs), avec des niveaux de maturité très hétérogènes.",
    problem: "Pas de culture digitale commune, des pratiques disparates selon les équipes, et un besoin fort de montée en compétences pour répondre aux briefs clients.",
    solution: "Programme de formation sur 2 ans : modules thématiques, ateliers pratiques, évaluations individualisées et suivi de progression. Interface avec Google, Meta, Amazon pour accès aux innovations et bêtas.",
    result: "Transformation effective des pratiques pour 70 personnes, cadre pédagogique structuré, intégration du digital dans les réponses aux appels d'offres majeurs.",
    skills: ["Transformation digitale", "Formation & acculturation", "Management", "Partenariats stratégiques"]
  },
  {
    id: "digital-day",
    title: "Digital Day Interne",
    company: "Conseil Media Santé / Service Plan",
    context: "Agence B2B santé de 70 collaborateurs avec une faible exposition aux innovations digitales et IA.",
    problem: "Manque de culture digitale transversale, faible visibilité sur les tendances et peu de dynamique d'innovation en interne.",
    solution: "Organisation d'un Digital Day pour 70 collaborateurs : veille tendances, partage d'expertise, cas concrets sectoriels et modules participatifs. Coordination complète de l'événement.",
    result: "Acculturation de l'ensemble des collaborateurs, dynamique d'innovation renforcée et émergence de nouvelles idées de dispositifs clients.",
    skills: ["Évangélisation digitale", "Innovation", "Pédagogie", "Leadership"]
  },
  {
    id: "formations-digitales",
    title: "Programme Formations Client",
    company: "Conseil Media Santé / Service Plan",
    context: "Clients B2B santé avec une maturité digitale limitée, générant des frictions lors des briefs et des restitutions campagnes.",
    problem: "Les annonceurs ne maîtrisaient pas suffisamment le digital pour collaborer efficacement avec l'agence et évaluer les recommandations.",
    solution: "Co-conception et animation de formations (format demi-journée) : panorama des activations disponibles, tendances marché, quiz interactifs et pédagogie orientée business.",
    result: "Renforcement des compétences côté annonceur, briefs plus précis, restitutions mieux comprises et relation client fluidifiée.",
    skills: ["Formation", "Vulgarisation", "Relation client senior", "Pédagogie"]
  },
  {
    id: "dr-beckmann",
    title: "Pilotage Stratégique Dr. Beckmann",
    company: "Conseil Media Santé / Service Plan",
    context: "Gestion du compte Dr. Beckmann France lors du rapprochement avec MediaPlus, avec une double pression : lancement produit et relance de marque.",
    problem: "Lancement d'une innovation produit (adoucissant en feuilles) et relance de Fess'net en digital, avec un besoin de coordination étroite entre équipes locales et internationales.",
    solution: "Définition des orientations stratégiques digitales annuelles, coordination de l'équipe d'activation (leviers social, search, vidéo, retail), suivi des performances et recommandations d'optimisation.",
    result: "Lancement produit réussi avec une présence multi-plateforme cohérente, performances mesurées et reporting structuré.",
    skills: ["Stratégie digitale", "Pilotage de compte", "Coordination internationale", "Performance media"]
  },
];
