import { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setEmail('');

    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
          <Mail size={32} />
        </div>

        <h2 className="text-3xl font-bold mb-4">
          Restez informé des dernières nouveautés
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Recevez nos meilleurs tutoriels, projets et astuces IoT directement dans votre boîte mail.
          Un email par semaine, pas de spam.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-colors"
              aria-label="Adresse email pour la newsletter"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              S'abonner
            </button>
          </div>

          {status === 'success' && (
            <div className="mt-4 flex items-center justify-center text-green-400 bg-green-900/30 px-4 py-2 rounded-lg">
              <Check size={20} className="mr-2" />
              <span>Merci ! Vous êtes maintenant inscrit à notre newsletter.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 flex items-center justify-center text-red-400 bg-red-900/30 px-4 py-2 rounded-lg">
              <AlertCircle size={20} className="mr-2" />
              <span>Veuillez entrer une adresse email valide.</span>
            </div>
          )}
        </form>

        <p className="text-sm text-gray-400">
          Rejoignez plus de 5 000 abonnés • Désinscription facile à tout moment
        </p>
      </div>
    </section>
  );
};
