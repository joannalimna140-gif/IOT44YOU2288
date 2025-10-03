import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEOHead = ({
  title = "IOT4YOU2 - Plateforme IoT Éducative pour Débutants | Projets ESP32 Faciles",
  description = "Apprenez l'IoT facilement avec IOT4YOU2 ! Créez vos projets ESP32 et ESP8266 sans coder. Intégration Google Sheets, Gmail, IA Gemini. Tutoriels pour débutants et étudiants. Commencez gratuitement !",
  keywords = "IoT pour débutants, projets ESP32 faciles, apprendre IoT, ESP8266 tutoriel, plateforme IoT éducative, créer projet connecté",
  image = "https://iot4you2.vercel.app/smart-esp-preview.png",
  url = "https://iot4you2.vercel.app/",
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }
  }, [title, description, keywords, image, url]);

  return null;
};
