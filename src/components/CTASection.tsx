import { Zap, Users, BookOpen } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Prêt à créer votre premier projet IoT ?
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-100">
          Rejoignez des milliers d'étudiants et passionnés qui apprennent l'IoT avec IOT4YOU2
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Démarrage Rapide</h3>
            <p className="text-blue-100">
              Créez votre premier projet en moins de 30 minutes
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Tutoriels Gratuits</h3>
            <p className="text-blue-100">
              Accès illimité à tous nos guides et ressources
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Communauté Active</h3>
            <p className="text-blue-100">
              Entraide et partage avec la communauté francophone
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
            Commencer Maintenant
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-lg transition-all duration-300 text-lg">
            Explorer les Projets
          </button>
        </div>

        <p className="mt-8 text-blue-100 text-sm">
          Gratuit et open-source • Aucune carte bancaire requise • Commencez en 2 minutes
        </p>
      </div>
    </section>
  );
};
