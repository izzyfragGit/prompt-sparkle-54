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
    id: "digital-day",
    title: "Digital Day Interne",
    company: "Conseil Media Santé / Service Plan",
    context: "Agence B2B santé avec 70 collaborateurs peu exposés aux innovations digitales.",
    problem: "Manque de culture digitale transversale et faible visibilité sur les innovations (IA, nouveaux formats, dispositifs participatifs).",
    solution: "Organisation d'un événement interne « Digital Day » pour 70 collaborateurs : détection de tendances, partage d'expertise, cas concrets et modules participatifs.",
    result: "Acculturation de l'ensemble des collaborateurs, dynamique d'innovation interne renforcée.",
    skills: ["Évangélisation", "Innovation", "Pédagogie", "Leadership"]
  },
  {
    id: "formations-digitales",
    title: "Formations Digitales Client",
    company: "Conseil Media Santé / Service Plan",
    context: "Clients B2B santé avec une faible maturité digitale, générant des frictions lors des briefs et restitutions.",
    problem: "Les clients ne comprennent pas suffisamment le digital pour interagir efficacement avec l'agence.",
    solution: "Co-conception et animation de « Formations Digitales » (format ½ journée) : panorama des activations possibles, tendances, quiz, Q/R, pédagogie orientée business.",
    result: "Renforcement des compétences des annonceurs, fluidification des échanges en briefs et restitutions.",
    skills: ["Formation", "Vulgarisation", "Relation client", "Pédagogie"]
  },
  {
    id: "dr-beckmann",
    title: "Lancement Dr. Beckmann",
    company: "MediaPlus / Service Plan",
    context: "Gestion du compte Dr. Beckmann France dans le cadre du rapprochement avec MediaPlus.",
    problem: "Lancement d'une innovation produit (adoucissant en feuilles) et relance de la marque Fess'net en digital avec un besoin de coordination locale et internationale.",
    solution: "Définition de la stratégie digitale annuelle, paramétrage et suivi des KPI sur Meta, TikTok, Google, OLV et Amazon. Coordination avec les équipes locales et internationales.",
    result: "Lancement réussi avec une présence multi-plateforme cohérente et des performances mesurées.",
    skills: ["Stratégie digitale", "Lancement produit", "Coordination internationale", "Performance media"]
  },
  {
    id: "colgate-framework",
    title: "Framework Stratégique Colgate WEH",
    company: "KR Wavemaker / WPP",
    context: "Compte Colgate pour le hub Western Europe (>12M€) couvrant 3 marchés (FR/BE/NL).",
    problem: "Absence de cadre stratégique unifié à l'échelle du hub, avec des pratiques disparates entre les marchés.",
    solution: "Conception d'un framework stratégique global articulé autour de 5 piliers (Insights & Audience, Data, Création & Optimisation, Mesure & Analyse, Empowerment des équipes) et décliné sur 3 marchés.",
    result: "Adoption d'un framework unique à l'échelle du hub, activations data-driven plus ciblées et personnalisées, dashboards consolidés.",
    skills: ["Framework stratégique", "Déploiement international", "Data & Performance", "Leadership"]
  },
  {
    id: "transformation-carat",
    title: "Transformation Digitale Carat",
    company: "iProspect / Dentsu",
    context: "Équipes Carat (70 collaborateurs) avec une practice digitale à structurer et professionnaliser.",
    problem: "Besoin de transformer les pratiques digitales de l'ensemble des équipes et de créer une culture digitale commune.",
    solution: "Programme de formation structuré sur 2 ans : modules de formation, ateliers pratiques, questionnaires d'évaluation, suivi individuel. Interface avec les partenaires (Google, Meta, Amazon) pour accès aux innovations.",
    result: "Transformation effective des pratiques pour 70 personnes, cadre pédagogique structuré, intégration du digital dans les réponses stratégiques aux appels d'offres majeurs.",
    skills: ["Transformation digitale", "Formation", "Management", "Partenariats stratégiques"]
  }
];
