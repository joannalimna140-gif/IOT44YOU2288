import { Book, ArrowRight } from 'lucide-react';
import { blogSuggestions, getCategoryTitle, getAudienceLabel } from '../data/blogSuggestions';

export const BlogSuggestions = () => {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogSuggestions.slice(0, 5).map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "url": `https://iot4you2.vercel.app/blog/${post.slug}`,
        "keywords": post.keywords.join(', '),
        "articleSection": getCategoryTitle(post.category),
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": post.targetAudience
        }
      }
    }))
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <Book className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Apprenez avec nos tutoriels
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guides pas-à-pas, projets pratiques et comparatifs pour maîtriser l'IoT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogSuggestions.slice(0, 6).map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {getCategoryTitle(post.category)}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    post.targetAudience === 'débutant'
                      ? 'bg-green-100 text-green-700'
                      : post.targetAudience === 'intermédiaire'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {getAudienceLabel(post.targetAudience)}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.keywords.slice(0, 3).map((keyword, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Lire l'article</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg inline-flex items-center space-x-2">
            <span>Voir tous les tutoriels</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
