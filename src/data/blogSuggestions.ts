export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  category: 'tutoriel' | 'projet' | 'guide' | 'comparaison';
  targetAudience: 'débutant' | 'intermédiaire' | 'avancé';
}

export const blogSuggestions: BlogPost[] = [
  {
    title: "Comment créer votre premier projet IoT avec ESP32 - Guide complet pour débutants",
    slug: "premier-projet-iot-esp32-debutants",
    description: "Tutoriel pas-à-pas pour créer votre premier projet IoT connecté avec ESP32. Aucune expérience requise. Apprenez à configurer votre ESP32, connecter des capteurs et envoyer des données au cloud.",
    keywords: ["premier projet IoT", "ESP32 pour débutants", "tutoriel ESP32 français", "débuter en IoT", "projet IoT débutant"],
    category: "tutoriel",
    targetAudience: "débutant"
  },
  {
    title: "ESP32 vs ESP8266 : Quel microcontrôleur choisir pour votre projet IoT ?",
    slug: "esp32-vs-esp8266-comparaison",
    description: "Comparaison détaillée entre ESP32 et ESP8266 : performances, prix, consommation, capacités WiFi/Bluetooth. Découvrez lequel correspond le mieux à vos besoins de projets IoT éducatifs.",
    keywords: ["ESP32 vs ESP8266", "comparaison microcontrôleurs IoT", "choisir ESP32 ou ESP8266", "différence ESP32 ESP8266"],
    category: "comparaison",
    targetAudience: "débutant"
  },
  {
    title: "Intégration Google Sheets avec ESP32 : Enregistrer vos données de capteurs sans base de données",
    slug: "integration-google-sheets-esp32",
    description: "Apprenez à connecter votre ESP32 à Google Sheets pour enregistrer automatiquement vos données de capteurs. Solution simple et gratuite sans serveur ni base de données complexe.",
    keywords: ["ESP32 Google Sheets", "IoT Google Sheets", "envoyer données ESP32", "monitoring IoT temps réel", "capteurs Google Sheets"],
    category: "tutoriel",
    targetAudience: "intermédiaire"
  },
  {
    title: "10 projets IoT utiles pour la maison avec ESP32 - Domotique DIY pour débutants",
    slug: "10-projets-iot-maison-esp32",
    description: "Découvrez 10 projets pratiques de domotique DIY avec ESP32 : station météo, arrosage automatique, contrôle de lumières, alarme connectée et plus. Avec schémas de câblage et code source.",
    keywords: ["projets IoT maison", "domotique ESP32", "DIY IoT débutant", "projets ESP32 utiles", "smart home ESP32"],
    category: "projet",
    targetAudience: "débutant"
  },
  {
    title: "Station météo connectée avec ESP32 et capteur BME280 - Tutoriel complet",
    slug: "station-meteo-esp32-bme280",
    description: "Créez une station météo connectée professionnelle avec ESP32 et capteur BME280. Mesurez température, humidité, pression et affichez les données sur OLED. Tutoriel avec code Arduino complet.",
    keywords: ["station météo ESP32", "BME280 ESP32", "projet météo IoT", "capteur température ESP32", "ESP32 monitoring météo"],
    category: "projet",
    targetAudience: "débutant"
  },
  {
    title: "Guide complet des capteurs IoT pour ESP32/ESP8266 : Prix, caractéristiques et utilisations",
    slug: "guide-capteurs-iot-esp32",
    description: "Catalogue exhaustif des capteurs compatibles ESP32/ESP8266 : température, humidité, mouvement, gaz, lumière, son. Comparatif des prix, précision, consommation et cas d'usage pour chaque capteur.",
    keywords: ["capteurs IoT", "capteurs ESP32", "choisir capteur IoT", "catalogue capteurs ESP32", "composants IoT débutants"],
    category: "guide",
    targetAudience: "débutant"
  },
  {
    title: "Utiliser l'IA Gemini avec ESP32 : Créer un assistant IoT intelligent",
    slug: "ia-gemini-esp32-assistant",
    description: "Intégrez l'intelligence artificielle Gemini de Google dans vos projets ESP32. Créez un assistant vocal IoT, analysez des images ou générez des réponses intelligentes à partir de données de capteurs.",
    keywords: ["IA ESP32", "Gemini ESP32", "IoT intelligence artificielle", "assistant vocal ESP32", "machine learning IoT"],
    category: "tutoriel",
    targetAudience: "avancé"
  },
  {
    title: "ESP32 et notifications Gmail : Recevoir des alertes par email depuis vos capteurs",
    slug: "notifications-gmail-esp32",
    description: "Configurez votre ESP32 pour envoyer automatiquement des emails via Gmail. Recevez des alertes en temps réel lorsque vos capteurs détectent des événements importants. Configuration SMTP simplifiée.",
    keywords: ["ESP32 Gmail", "notifications ESP32", "email IoT", "alertes capteurs ESP32", "SMTP ESP32"],
    category: "tutoriel",
    targetAudience: "intermédiaire"
  }
];

export const getCategoryTitle = (category: BlogPost['category']): string => {
  const titles = {
    tutoriel: 'Tutoriels IoT',
    projet: 'Projets Pratiques',
    guide: 'Guides et Ressources',
    comparaison: 'Comparatifs et Choix'
  };
  return titles[category];
};

export const getAudienceLabel = (audience: BlogPost['targetAudience']): string => {
  const labels = {
    débutant: 'Débutant',
    intermédiaire: 'Intermédiaire',
    avancé: 'Avancé'
  };
  return labels[audience];
};
