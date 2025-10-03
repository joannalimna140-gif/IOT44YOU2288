import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `https://iot4you2.vercel.app${item.url}` : undefined
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className="py-4 px-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <a
              href="/"
              className="flex items-center hover:text-blue-600 transition-colors"
              aria-label="Accueil"
            >
              <Home size={16} />
            </a>
          </li>

          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight size={16} className="text-gray-400" />
              {item.url ? (
                <a
                  href={item.url}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <span className="font-semibold text-gray-900">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
