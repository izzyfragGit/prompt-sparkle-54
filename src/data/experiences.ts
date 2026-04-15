export interface Experience {
  id: string;
  title: string;
  company: string;
  group?: string;
  period: string;
  context: string;
  missions: string[];
  skills: string[];
  results?: string[];
  clients?: string;
  narrative: string;
}

export const experiences: Experience[] = [
  {
    id: "cdo-cms",
    title: "Chief Digital Officer",
    company: "Conseil Media Santé",
    group: "Groupe Service Plan",
    period: "2024 – 2025",
    context: "Direction digitale d'une régie média B2B santé au sein du Groupe Service Plan, avec double mission : structuration de l'expertise interne et pilotage des comptes stratégiques",
    missions: [
      "Encadrement et montée en compétences d'une équipe de 15 collaborateurs (SEA, Social Ads, analyse de performance, gestion de projet)",
      "Conception et animation de modules de formation thématiques à destination des équipes et des clients",
      "Organisation du Digital Day interne pour 70 collaborateurs autour des innovations digitales",
      "Gestion opérationnelle et stratégique de 10 comptes prioritaires parmi 60 (Sanofi, Danone, MSD, GSK)",
      "Pilotage stratégique du compte Dr. Beckmann France : définition des orientations digitales, coordination de l'équipe activation, suivi des performances et recommandations",
    ],
    skills: ["Leadership & coaching", "Stratégie digitale B2B", "Formation & vulgarisation", "Pilotage de comptes", "Innovation & IA"],
    results: [
      "Homogénéisation du niveau d'expertise pour 15 collaborateurs",
      "Digital Day interne pour 70 collaborateurs",
      "Déploiement d'un dispositif digital structuré pour Dr. Beckmann France",
    ],
    clients: "Sanofi, Danone, MSD, GSK, Dr. Beckmann",
    narrative: "J'avais pour mission d'encadrer une équipe de 15 personnes et de les faire monter en compétences, en m'appuyant sur ma forte expertise B2C pour enrichir les dispositifs digitaux en contexte B2B santé. Cela passait par des accompagnements personnalisés, des modules de formation et un travail approfondi sur la qualité des livrables clients. Sur Dr. Beckmann, je pilotais la stratégie et coordonnais l'équipe activation : définition des orientations, suivi des performances, recommandations.",
  },
  {
    id: "snovae",
    title: "Digital Marketing Consultant – Fondateur",
    company: "SNOVAE",
    period: "Depuis 2019",
    context: "Activité indépendante de conseil et d'accompagnement digital pour des entreprises de tailles et secteurs variés, avec une dimension IA croissante depuis 2023",
    missions: [
      "Transformation des enjeux business en objectifs de communication digitale mesurables",
      "Conception de solutions digitales sur-mesure (SEO, SEA, Social Media, programmatique, CRM)",
      "Pilotage complet des projets de l'audit au suivi des résultats",
      "Conseil stratégique auprès de dirigeants sur le digital comme levier de croissance",
      "Mission pour un grand cabinet d'audit international : conception d'un copilote commercial IA (architecture RAG, intégration M365, 12 one-pagers offres de services)",
      "Conception et déploiement de workflows IA pour clients et usage interne (prompt engineering, automatisation, orchestration LLM)",
    ],
    skills: ["Diagnostic stratégique", "Planification média omnicanale", "Conseil en transformation digitale", "Architecture IA & workflows", "Coaching C-level"],
    clients: "LVMH, Arkema, Cofidis, Gisou, ADEME, SACI, Clic & Bim, City Linked, Origins Studio, La Bonne Agence",
    narrative: "J'ai collaboré avec une grande variété de clients, par la taille, le secteur et la maturité digitale. Mon objectif : apporter des réponses concrètes sur les différents aspects de la communication digitale, pour faciliter son appropriation et générer de la valeur. Depuis 2023, je travaille également sur des projets IA : orchestration de LLMs, conception de copilotes métier et automatisation de workflows pour des clients exigeants.",
  },
  {
    id: "wavemaker",
    title: "International Business Director",
    company: "KR Wavemaker",
    group: "GroupM – WPP",
    period: "2022 (6 mois)",
    context: "Mission 6 mois en lead digital du hub Western Europe pour Colgate-Palmolive (France, Belgique, Pays-Bas), avec pilotage de comptes multi-sectoriels",
    missions: [
      "Référent digital pour le hub Colgate WEH (budget > 12M€)",
      "Définition de la roadmap digitale annuelle omnicanale",
      "Conception du framework stratégique global (Insights, Data, Création, Analyse, Acculturation)",
      "Coordination transverse de plus de 10 experts métiers (search, programmatique, social, data)",
      "Supervision des dispositifs eRetail (Amazon, Carrefour, Google)",
      "Déploiement des best practices France sur la Belgique et les Pays-Bas",
    ],
    skills: ["Leadership stratégique international", "Planification média omnicanale", "Data & CRM", "eRetail & marketplaces", "Coordination multi-expertise"],
    results: [
      "Framework stratégique unique déployé à l'échelle du hub Western Europe",
      "Consolidation des données propriétaires et KPIs orientés business",
    ],
    clients: "Colgate-Palmolive (FR/BE/NL), Perrigo, Hill's, Filorga",
    narrative: "Au sein de KR Wavemaker, j'avais en gestion plusieurs clients avec une équipe de 4 collaborateurs en direct et une dizaine d'experts métiers. Je me suis principalement occupé du compte Colgate (> 12M€) pour le hub Western Europe, en lead digital : définition des best practices au niveau France et déploiement sur les deux autres marchés, coordination de l'ensemble des expertises.",
  },
  {
    id: "iprospect",
    title: "Directeur Associé Digital",
    company: "iProspect",
    group: "Groupe Dentsu",
    period: "2016 – 2018",
    context: "Pilotage de la practice digitale pour l'ensemble des équipes Carat (70 collaborateurs) et accompagnement des clients majeurs du groupe sur leurs stratégies omnicanales",
    missions: [
      "Accompagnement de clients majeurs sur leurs stratégies médias et digitales full-funnel",
      "Définition de dispositifs répondant à des enjeux business spécifiques, de la notoriété à la conversion",
      "Conception et animation d'un programme de formation digitale sur 2 ans (ateliers pratiques, évaluations, suivi individuel)",
      "Participation aux appels d'offres nationaux et internationaux",
      "Membre du Comité de Direction Carat",
      "Interface avec les partenaires majeurs : Google, Meta, Amazon, Microsoft, TF1",
    ],
    skills: ["Conseil stratégique omnicanal", "Formation & acculturation digitale", "Leadership", "Compétitions majeures", "Innovation & R&D"],
    results: [
      "Transformation des pratiques digitales pour 70 collaborateurs",
      "Programme de formation structuré et déployé sur 2 ans",
      "Accès prioritaire aux bêtas et innovations des plateformes clés",
    ],
    clients: "Gouvernement, Société Générale, GM, Beiersdorf, Pernod Ricard, BPI, Ikea, Coca-Cola, L'Oréal, Sony",
    narrative: "J'ai accompagné pendant 2 ans l'ensemble des équipes Carat (70 collaborateurs) et leurs clients. Garant de la practice digitale, j'ai conçu et déployé un programme de formation structuré sur 2 ans, avec ateliers pratiques, évaluations et suivi individuel. Membre du Comité de Direction, je participais aux appels d'offres majeurs et portais la relation avec les partenaires stratégiques du groupe.",
  },
  {
    id: "carat-pluri",
    title: "Directeur Plurimédia",
    company: "Carat",
    group: "Groupe Dentsu",
    period: "2014 – 2015",
    context: "Conseil stratégique global on & offline pour deux comptes majeurs, avec management direct d'une équipe de 10 collaborateurs",
    missions: [
      "Définition et pilotage des stratégies de communication 360° (TV, radio, presse, affichage, OOH, digital)",
      "Construction de dispositifs full-funnel alignés sur les consumer journeys",
      "Gestion de la stratégie média annuelle (CA > 17M€)",
      "Management direct de 10 collaborateurs",
      "Lancement d'innovations produit pour Pernod Ricard (gamme « 51 » aromatisée)",
    ],
    skills: ["Stratégie plurimédia 360°", "Consumer journey & insights", "Management d'équipe", "Lancement produit", "Coordination cross-média"],
    results: [
      "Pilotage d'un budget média annuel de 17M€",
      "Lancement réussi de la gamme Pernod Ricard « 51 » aromatisée",
    ],
    clients: "Gouvernement, Pernod Ricard",
    narrative: "Vision 360° des stratégies de communication avec une approche full funnel couvrant l'ensemble du consumer journey. Pour Pernod Ricard, j'ai piloté le lancement de la gamme « 51 » aromatisée, en coordonnant TV, digital, point de vente et relations publiques. Management direct d'une équipe de 10 personnes pour un CA annuel de 17M€.",
  },
  {
    id: "iprospect-digital",
    title: "Directeur de Clientèle Digital",
    company: "iProspect",
    group: "Groupe Dentsu",
    period: "2006 – 2013",
    context: "Première longue expérience en agence digitale, progressivement de directeur de clientèle à directeur conseil, sur des comptes variés dans un secteur en forte croissance",
    missions: [
      "Pilotage de portefeuilles digitaux > 8M€ : branding, performance, acquisition, fidélisation",
      "Élaboration de plans digitaux full-funnel (Vidéo, Social, Search, Display)",
      "Construction de reportings orientés insights et recommandations stratégiques",
      "Participation active aux appels d'offres et compétitions",
      "Management et montée en compétences d'équipes de 2 à 8 collaborateurs",
    ],
    skills: ["Gestion de comptes stratégiques", "Campagnes digitales full-funnel", "Analyse de performance", "Excellence opérationnelle", "Appels d'offres"],
    clients: "Gouvernement, BMW, Lesieur, D'Aucy, Société Générale, Bouygues Telecom",
    narrative: "7 ans chez iProspect, de directeur de clientèle à directeur conseil. En charge de la planification, de l'exécution et de l'optimisation de campagnes digitales full-funnel pour de grandes marques, avec des portefeuilles > 8M€. Une période fondatrice pour construire l'expertise, les réflexes et le réseau qui structurent mon positionnement actuel.",
  },
];
