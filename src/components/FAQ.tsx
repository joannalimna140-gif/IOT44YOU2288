import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qu'est-ce que IOT4YOU2 ?",
    answer: "IOT4YOU2 est une plateforme éducative qui démocratise l'Internet des Objets (IoT). Elle permet aux débutants, étudiants et passionnés de créer facilement des projets connectés avec ESP32 et ESP8266, sans nécessiter de connaissances techniques avancées."
  },
  {
    question: "Ai-je besoin de savoir coder pour utiliser IOT4YOU2 ?",
    answer: "Non ! IOT4YOU2 est conçu pour être accessible aux débutants. Notre plateforme offre des outils intuitifs, des tutoriels pas-à-pas et des intégrations simplifiées (Google Sheets, Gmail, IA Gemini) qui vous permettent de créer des projets IoT sans expertise en programmation."
  },
  {
    question: "Quels microcontrôleurs sont supportés ?",
    answer: "IOT4YOU2 supporte principalement les ESP32 et ESP8266, qui sont des microcontrôleurs WiFi abordables et puissants, parfaits pour débuter dans l'IoT. Nous proposons également des ressources pour Arduino et d'autres plateformes compatibles."
  },
  {
    question: "Comment puis-je intégrer mes données avec Google Sheets ?",
    answer: "Notre plateforme offre une intégration native avec Google Sheets, vous permettant d'envoyer automatiquement les données de vos capteurs vers une feuille de calcul. C'est idéal pour le monitoring en temps réel et l'analyse de données sans configuration complexe."
  },
  {
    question: "IOT4YOU2 est-il gratuit ?",
    answer: "Oui ! IOT4YOU2 est une plateforme gratuite et open-source. Notre mission est de rendre l'IoT accessible à tous. Vous pouvez accéder à tous nos tutoriels, outils et ressources sans frais."
  },
  {
    question: "Quel matériel ai-je besoin pour commencer ?",
    answer: "Pour débuter, vous avez besoin d'une carte ESP32 ou ESP8266 (environ 5-10€), un câble USB, et éventuellement quelques composants de base (LED, capteurs, breadboard). Consultez notre catalogue de composants pour voir les options disponibles."
  },
  {
    question: "Puis-je partager mes projets avec la communauté ?",
    answer: "Absolument ! IOT4YOU2 encourage le partage de connaissances. Vous pouvez partager vos projets, tutoriels et solutions avec notre communauté francophone d'étudiants, makers et passionnés d'IoT."
  },
  {
    question: "La plateforme est-elle adaptée pour l'enseignement ?",
    answer: "Oui ! IOT4YOU2 est parfaitement adapté pour les enseignants et formateurs. Nos ressources pédagogiques, tutoriels structurés et projets progressifs facilitent l'apprentissage de l'IoT en classe ou en formation professionnelle."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Questions Fréquentes sur IOT4YOU2
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 text-blue-600" size={24} />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-gray-400" size={24} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous avez d'autres questions ? Rejoignez notre communauté !
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            Rejoindre la Communauté
          </button>
        </div>
      </div>
    </section>
  );
};
