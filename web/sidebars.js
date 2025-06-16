// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "1.1 - Intro 🏁",
      id: "cours/intro",
    },
    {
      type: "doc",
      label: "1.2 - Mise en page 📄",
      id: "cours/mise-en-page",
    },
    {
      type: "doc",
      label: "2.1 - Navigation 🧭",
      id: "cours/navigation",
      customProps: {
        avancementLabel: "TP1 - Créé",
        avancement: 0.0,
      },
    },
    {
      type: "doc",
      label: "2.2 - Liste 📋",
      id: "cours/liste",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.1,
      },
    },
    {
      type: "doc",
      label: "3.1 - Liste 📋",
      id: "cours/liste",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.25,
      },
    },
    {
      type: "doc",
      label: "3.2 - DIO 🙏",
      id: "cours/dio",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.5,
      },
    },
    {
      type: "doc",
      label: "4.1 - DIO 🙏",
      id: "cours/dio",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.75,
      },
    },
    {
      type: "doc",
      label: "4.2 - Intégration 🔨",
      id: "cours/integration",
      className: "remise-tp1",
      customProps: {
        avancementLabel: "TP1",
        avancement: 1,
      },
    },
    {
      type: "doc",
      label: "5.1 - Organisation du code 🧹",
      id: "cours/organisation",
      customProps: {
        avancementLabel: "TP2 - Créé",
        avancement: 0.0,
      },
    },
    {
      type: "doc",
      label: "5.2 - Multilingue 🌐",
      id: "cours/multilingue",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.1,
      },
    },
    {
      type: "doc",
      label: "6.1 - Déploiement 🤖",
      id: "cours/deploiement",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.2,
      },
    },
    {
      type: "doc",
      label: "6.2 - Image Picker 🤏",
      id: "cours/image-picker",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.3,
      },
    },
    {
      type: "doc",
      label: "7.1 - Formatif ✍️",
      id: "cours/formatif-intra",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.3,
      },
    },
    {
      type: "doc",
      label: "7.2 - Examen Intra (20%) ✍️",
      id: "cours/examen",
      className: "examen",
    },
    {
      type: "doc",
      label: "8.1 - Image Cookie 🍪",
      id: "cours/image-cookie",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.4,
      },
    },
    {
      type: "doc",
      label: "8.2 - Image Client 🖼️",
      id: "cours/image-client",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.6,
      },
    },
    {
      type: "doc",
      label: "9.1 - Spring Boot 🍃",
      id: "cours/springboot-delete",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.7,
      },
    },
    {
      type: "doc",
      label: "9.2 - Spring Boot 🍃",
      id: "cours/springboot-delete",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.8,
      },
    },
    {
      type: "doc",
      label: "10.1 - Gestion de l'état 💱",
      id: "cours/gestion-etat",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.9,
      },
    },
    {
      type: "doc",
      label: "10.2 - Intégration 🔨",
      id: "cours/integration",
      className: "remise-tp2",
      customProps: {
        avancementLabel: "TP2",
        avancement: 1,
      },
    },
    {
      type: "doc",
      label: "11.1 - Authentification Firebase 👮",
      id: "cours/firebase-authentification",
      customProps: {
        avancementLabel: "TP3 - Créé",
        avancement: 0.0,
      },
    },
    {
      type: "doc",
      label: "11.2 - Firebase Firestore 🏪",
      id: "cours/firebase-datastore",
      customProps: {
        avancementLabel: "TP3",
        avancement: 0.1,
      },
    },
    {
      type: "doc",
      label: "12.1 - Control d'accès Firebase 💂",
      id: "cours/firebase-access-control",
      customProps: {
        avancementLabel: "TP3",
        avancement: 0.2,
      },
    },
    {
      type: "doc",
      label: "12.2 - Control d'accès Firebase 💂",
      id: "cours/firebase-access-control",
      customProps: {
        avancementLabel: "TP3",
        avancement: 0.3,
      },
    },
    {
      type: "doc",
      label: "13.1 - Stockage Firebase 💾",
      id: "cours/firebase-storage",
      customProps: {
        avancementLabel: "TP3",
        avancement: 0.4,
      },
    },
    {
      type: "doc",
      label: "13.2 - Stream Firebase 🚣",
      id: "cours/firebase-stream",
      customProps: {
        avancementLabel: "TP3",
        avancement: 0.5,
      },
    },
    {
      type: "doc",
      label: "14.1 - Règles d'accès Firebase 📐",
      id: "cours/firebase-rules",
      customProps: {
        avancementLabel: "TP3",
        avancement: 0.7,
      },
    },
    {
      type: "doc",
      label: "14.2 - Intégration 🔨",
      id: "cours/integration",
      className: "remise-tp3",
      customProps: {
        avancementLabel: "TP3",
        avancement: 1,
      },
    },
    {
      type: "doc",
      label: "15.1 - Formatif ✍️",
      id: "cours/formatif-final",
    },
    {
      type: "doc",
      label: "15.2 - Examen Final (20%) ✍️",
      id: "cours/examen",
      className: "examen",
    },
  ],
  tp: [
    { type: "doc", label: "TP1 - Flutter 🐤", id: "tp/tp1" },
    { type: "doc", label: "TP2 - Gestion des images 🖼️", id: "tp/tp2" },
    { type: "doc", label: "TP3 - Sans serveur 🙅", id: "tp/tp3" },
  ],
};

module.exports = sidebars;
