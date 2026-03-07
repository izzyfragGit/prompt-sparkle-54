

# CV Expérientiel Interactif — Alexandre Papas

## Concept
Une plateforme personnelle interactive en mode sombre et moderne, permettant d'explorer votre parcours professionnel de manière dynamique, avec un chat IA intégré.

---

## Page 1 — Landing Page Narrative
- **Hero section** plein écran avec votre nom, titre ("Digital Strategy & AI Workflow Architect") et une accroche invitant à explorer le profil plutôt qu'à le lire
- **3 modes d'exploration** présentés visuellement : Navigation classique, Exploration par compétences, Chat IA
- Bouton CTA principal : "Explorer mon parcours"
- Design sombre avec accents lumineux (bleu/violet), typographie moderne

## Page 2 — Parcours Professionnel
- **Timeline verticale interactive** avec les postes clés :
  - CDO – Conseil Media Santé / Service Plan (2024-2025)
  - Fondateur – SNOVAE (depuis 2019)
  - Digital Business Director – KR Wavemaker / WPP (2022-2023)
  - Directeur Associé Digital – iProspect / Dentsu (2016-2018)
  - Et les postes précédents (Havas, Beiersdorf, etc.)
- Au clic sur chaque poste : panneau latéral avec le récit narratif (contexte, missions, résultats concrets)
- Tags de compétences cliquables sur chaque expérience, reliant vers la cartographie

## Page 3 — Cartographie des Compétences
- **Vue overview** : clusters visuels animés par domaine (Stratégie & Conseil, Data & Performance, Omnicanal & Media, Leadership, Transformation, IA)
- Au clic sur un cluster : **drill-down** en liste détaillée avec hard skills et soft skills
- Chaque compétence liée aux expériences où elle a été mobilisée (navigation croisée)
- Section dédiée aux compétences IA (cartographie V3 : prompt engineering, workflows IA, gestion du contexte)

## Page 4 — Cas Concrets (Mini études de cas)
- Cartes visuelles présentant des projets clés
- Chaque cas suit la structure : Contexte → Problème → Solution → Résultat
- Exemples tirés de vos expériences narratives (Digital Day, formations clients, lancement Dr. Beckmann, etc.)

## Page 5 — Chat IA Conversationnel
- **Widget chat** accessible depuis toutes les pages (bouton flottant en bas à droite)
- Alimenté par Lovable AI (via edge function) avec votre base de connaissances en system prompt
- Questions suggérées au démarrage : "Quelle est votre expérience avec l'IA ?", "Comment gérez-vous un projet complexe ?", "Sur quels types de projets avez-vous travaillé ?"
- Réponses en streaming, formatées en markdown

## Page 6 — Contact & CV Classique
- Lien LinkedIn, email
- Téléchargement CV PDF
- Formations (HEC Executive Certificate, Master II Sorbonne)

---

## Design & Ambiance
- **Dark mode** par défaut, palette sombre (fond très foncé) avec accents bleu électrique / violet
- Animations subtiles (fade-in au scroll, hover effects sur les compétences)
- Typographie sans-serif moderne et lisible
- Navigation top bar fixe avec les sections principales
- Responsive mobile

## Backend
- Lovable Cloud pour l'edge function du chat IA
- Base de connaissances structurée injectée dans le system prompt (expériences, compétences, cas concrets issus de vos documents)

