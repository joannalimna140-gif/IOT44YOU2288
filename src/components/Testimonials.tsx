import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  institution: string;
  text: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Benali",
    role: "Étudiante en Informatique",
    institution: "Université Hassan II, Casablanca",
    text: "IOT4YOU2 m'a permis de réaliser mon premier projet IoT en quelques jours seulement. L'intégration avec Google Sheets est géniale pour suivre mes données en temps réel. Les tutoriels sont clairs et parfaits pour les débutants.",
    rating: 5,
    date: "2025-09-15"
  },
  {
    name: "Thomas Dupont",
    role: "Professeur de Technologie",
    institution: "Lycée Victor Hugo, Paris",
    text: "J'utilise IOT4YOU2 avec mes élèves depuis 6 mois. La plateforme est idéale pour l'enseignement : documentation en français, projets progressifs et communauté active. Mes élèves créent maintenant des projets impressionnants.",
    rating: 5,
    date: "2025-08-22"
  },
  {
    name: "Karim Moussaoui",
    role: "Développeur IoT Junior",
    institution: "Startup TechInnov, Rabat",
    text: "Même en tant que développeur, IOT4YOU2 me fait gagner un temps précieux pour le prototypage. Les intégrations natives avec Gmail et l'IA Gemini sont particulièrement utiles. Une vraie valeur ajoutée pour nos projets.",
    rating: 5,
    date: "2025-09-01"
  },
  {
    name: "Marie Fontaine",
    role: "Maker et Passionnée",
    institution: "FabLab Montréal",
    text: "J'adore la philosophie open-source d'IOT4YOU2. La communauté francophone est super accueillante et partage volontiers ses projets. J'ai pu créer une station météo et un système d'arrosage automatique sans aucune connaissance préalable.",
    rating: 5,
    date: "2025-08-10"
  }
];

export const Testimonials = () => {
  const reviewSchema = testimonials.map(testimonial => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": "IOT4YOU2",
      "applicationCategory": "Educational Platform",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR"
      }
    },
    "author": {
      "@type": "Person",
      "name": testimonial.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating,
      "bestRating": "5"
    },
    "reviewBody": testimonial.text,
    "datePublished": testimonial.date
  }));

  return (
    <section className="py-16 px-4 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rejoignez des milliers d'étudiants, enseignants et passionnés qui apprennent l'IoT avec IOT4YOU2
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-blue-600">{testimonial.institution}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="font-semibold text-gray-900">
              5.0/5 - Noté par plus de 500 utilisateurs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
