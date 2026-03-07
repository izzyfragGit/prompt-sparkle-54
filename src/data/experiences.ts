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
    context: "Conseil digital en environnement B2B santé, intégration au sein du Groupe Service Plan",
    missions: [
      "Encadrement et montée en compétences d'une équipe de 15 collaborateurs",
      "Mise en place de modules de formation thématiques (SEA, Social Ads, gestion de projet, analyse de performances)",
      "Co-conception et animation des « Formations Digitales » à destination des clients",
      "Gestion opérationnelle et stratégique de 10 clients prioritaires parmi 60 (Sanofi, Danone, MSD, GSK…)",
      "Organisation d'un Digital Day interne pour 70 collaborateurs autour des innovations digitales",
      "Gestion du compte Dr. Beckmann France (stratégie digitale, Meta, TikTok, Google, Amazon)"
    ],
    skills: ["Leadership & coaching", "Stratégie digitale omnicanale", "Formation & vulgarisation", "Storytelling client", "Innovation & IA"],
    results: [
      "Homogénéisation de l'expertise de 15 collaborateurs",
      "Digital Day interne pour 70 collaborateurs",
      "Lancement innovation produit Dr. Beckmann"
    ],
    clients: "Sanofi, Danone, MSD, GSK, Dr. Beckmann",
    narrative: "J'avais pour mission d'encadrer une équipe de 15 personnes afin de les faire monter en compétences, en m'appuyant sur ma forte expertise B2C pour enrichir les dispositifs digitaux en contexte B2B santé. Cela passait par des accompagnements personnalisés, des modules de formation, et un travail approfondi sur la qualité des livrables clients et du storytelling en restitution."
  },
  {
    id: "snovae",
    title: "Digital Marketing Consultant – Fondateur",
    company: "SNOVAE",
    period: "Depuis 2019",
    context: "Activité indépendante de conseil et d'accompagnement digital pour des entreprises de tailles et de secteurs variés",
    missions: [
      "Transformation des enjeux business en objectifs de communication digitale mesurables",
      "Conception de solutions digitales sur-mesure (SEO, SEA, Social Media, programmatique, CRM)",
      "Pilotage complet des projets de l'audit au suivi des résultats",
      "Conseil stratégique auprès de dirigeants sur le digital comme levier de croissance",
      "Formation et coaching opérationnel des équipes marketing/communication"
    ],
    skills: ["Diagnostic stratégique", "Planification média omnicanale", "Conseil en transformation digitale", "Coaching C-level", "Gestion de projet complexe"],
    clients: "LVMH, Arkema, Cofidis, Gisou, ADEME, SACI, Clic & Bim, City Linked, Origins Studio, La Bonne Agence",
    narrative: "J'ai pu collaborer avec une grande variété de clients, que ce soit par la taille, le secteur d'activité ou l'expertise sur les univers digitaux. Mon objectif est d'apporter des réponses sur les différents aspects de la communication digitale, afin de faciliter son appropriation, sa maîtrise et son optimisation pour générer de la valeur."
  },
  {
    id: "wavemaker",
    title: "Digital Business Director",
    company: "KR Wavemaker",
    group: "GroupM – WPP",
    period: "2022 (Mission 6 mois)",
    context: "Gestion du compte Colgate pour le hub Western Europe (FR/BE/NL) et pilotage stratégique de comptes multi-sectoriels",
    missions: [
      "Référent digital pour le hub Colgate WEH (>12M€)",
      "Définition de la roadmap digitale annuelle omnicanale",
      "Conception du framework stratégique global (Insights, Data, Création, Analyse, Acculturation)",
      "Pilotage des activations digitales 360° avec ciblages avancés",
      "Coordination transverse de plus de 10 experts métiers",
      "Supervision des dispositifs eRetail (Amazon, Carrefour, Google)"
    ],
    skills: ["Leadership stratégique international", "Planification média omnicanale", "Data & CRM", "eRetail & marketplaces", "Coordination multi-expertise"],
    results: [
      "Framework stratégique unique déployé à l'échelle du hub WEH",
      "Renforcement de la collecte et activation de données propriétaires",
      "Dashboards consolidés et KPIs orientés business"
    ],
    clients: "Colgate-Palmolive (FR/BE/NL), Perrigo, Hill's, Filorga",
    narrative: "Au sein de KRWavemaker j'ai eu la gestion de plusieurs clients, avec une équipe de 4 collaborateurs en gestion directe et une dizaine d'experts. Je me suis principalement occupé du compte Colgate (>12M€) pour le hub Western European Hub en lead digital, en définissant les best-practices au niveau France et en les déployant sur les 2 autres pays."
  },
  {
    id: "iprospect",
    title: "Directeur Associé Digital",
    company: "iProspect",
    group: "Groupe Dentsu",
    period: "2016 – 2018",
    context: "Accompagnement de l'ensemble des équipes Carat (70 collaborateurs) dans la transformation digitale",
    missions: [
      "Accompagnement de clients majeurs sur leurs stratégies médias et digitales",
      "Définition de dispositifs full-funnel répondant à des enjeux business spécifiques",
      "Participation aux appels d'offres nationaux et internationaux",
      "Conception et animation de modules de formation digitale",
      "Membre du Comité de Direction Carat",
      "Interface avec les partenaires majeurs : Google, Meta, Amazon, Microsoft, TF1"
    ],
    skills: ["Conseil stratégique omnicanal", "Formation & acculturation digitale", "Leadership d'équipes", "Compétitions majeures", "Innovation & R&D"],
    results: [
      "Transformation des pratiques digitales pour 70 personnes",
      "Programme de formation structuré sur 2 ans",
      "Accès aux innovations prioritaires des plateformes clés"
    ],
    clients: "Gouvernement, Société Générale, GM, Beiersdorf, Pernod Ricard, BPI, Ikea, Coca-Cola, L'Oréal, Sony",
    narrative: "J'ai accompagné pendant 2 ans l'ensemble des équipes Carat (70 collaborateurs) et leurs clients. Garant de la practice digitale, j'ai mis en place un programme de formation sur 2 ans avec ateliers pratiques, questionnaires et suivi de l'évolution. J'étais membre du Comité de Direction et participais aux appels d'offres majeurs."
  },
  {
    id: "carat-pluri",
    title: "Directeur Plurimédia",
    company: "Carat",
    group: "Groupe Dentsu",
    period: "2014 – 2015",
    context: "Conseil stratégique global (on & offline) pour deux comptes majeurs",
    missions: [
      "Définition et pilotage des stratégies de communication 360° (TV, radio, presse, affichage, OOH, digital)",
      "Construction de dispositifs full-funnel alignés sur les consumer journeys",
      "Gestion de la stratégie média annuelle (CA > 17M€)",
      "Management direct de 10 collaborateurs",
      "Lancement d'innovations produit pour Pernod Ricard (marque « 51 »)"
    ],
    skills: ["Stratégie plurimédia", "Consumer journey & personae", "Management d'équipe", "Lancement produit", "Coordination cross-média"],
    results: [
      "Gestion d'un budget média de 17M€",
      "Lancement de nouvelles gammes Pernod Ricard « 51 » aromatisée"
    ],
    clients: "Gouvernement, Pernod Ricard",
    narrative: "Vision 360° des stratégies de communication dans des approches full funnel des consumer journey pour 2 clients majeurs. Management direct d'une équipe de 10 collaborateurs pour un CA de 17M€ annuel."
  },
  {
    id: "iprospect-digital",
    title: "Directeur Digital",
    company: "iProspect",
    group: "Groupe Dentsu",
    period: "2006 – 2013",
    context: "Référent digital pour des comptes majeurs, dans un environnement dynamique en forte croissance",
    missions: [
      "Pilotage de portefeuilles digitaux > 8M€",
      "Élaboration de plans digitaux complets : branding, performance, acquisition, fidélisation",
      "Mise en place de campagnes multi-leviers (Vidéo, Social, Search, Display) en mode full-funnel",
      "Construction de reportings incluant insights et recommandations stratégiques",
      "Participation active aux appels d'offres et compétitions",
      "Management et montée en compétences d'équipes de 2 à 8 collaborateurs"
    ],
    skills: ["Gestion de comptes stratégiques", "Campagnes digitales full-funnel", "Analyse de performance", "Excellence opérationnelle", "Appels d'offres"],
    clients: "Gouvernement, BMW, Lesieur, D'Aucy, Société Générale, Bouygues Telecom",
    narrative: "En charge de la planification, de l'exécution et de l'optimisation de campagnes vidéo, social, search et display pour de grandes marques avec des portefeuilles clients > 8M€ en digital."
  }
];
