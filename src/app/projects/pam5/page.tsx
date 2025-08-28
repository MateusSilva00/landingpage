'use client'
import { useThemeLanguage } from '@/contexts/ThemeLanguageContext';
import { translations } from '@/translations';
import Image from 'next/image';
import Link from 'next/link';

export default function PAM5Page() {
  const { isDarkMode, language } = useThemeLanguage()
  const t = translations[language].pam5;

  const images = [
    { src: "/pam5/interface.jpeg", alt: "Main Interface" },
    { src: "/pam5/generate_graph.jpeg", alt: "4D-PAM5 Waveform" }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0a0b0d] text-white' : 'bg-slate-50 text-slate-900'} relative p-8`}>
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/" className={`inline-block mb-8 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-white/10' : 'bg-black/10'} hover:bg-blue-500/20 transition`}>
          {t.back}
        </Link>

        <header className="space-y-4">
          <h1 className="text-4xl font-bold">{t.title}</h1>
          <p className="text-xl text-gray-400">{t.description}</p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {images.map((img, i) => (
            <div key={i} className="relative w-full flex justify-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={450}
                className="rounded-xl object-contain"
                style={{ maxHeight: '450px' }}
              />
            </div>
          ))}
        </div>

        <section className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'}`}>
          <h2 className="text-2xl font-semibold mb-4">{t.features}</h2>
          <ul className="space-y-3 list-disc list-inside">
            {t.mainFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'}`}>
          <h2 className="text-2xl font-semibold mb-4">{t.howToRun}</h2>
          <ul className="space-y-3 list-disc list-inside">
            {t.executionSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </section>

        <section className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'}`}>
          <h2 className="text-2xl font-semibold mb-4">{t.structure}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>gui/app.py: Aplicação GUI principal</li>
            <li>client.py, server.py: Lógica de comunicação</li>
            <li>encoder.py, decoder.py: Codificação/decodificação 4D-PAM5</li>
            <li>crypto.py: Utilitários de criptografia</li>
            <li>waveform.py: Plotagem de forma de onda</li>
            <li>ascii_utils.py: Conversão ASCII/binário</li>
          </ul>
        </section>

        <Link
          href="https://github.com/MateusSilva00/4d_pam5_project"
          target="_blank"
          className="fixed bottom-8 right-8 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl hover:scale-105 transition-all shadow-lg shadow-black/20 border border-white/10"
        >
          <svg height="32" viewBox="0 0 16 16" version="1.1" width="32">
            <path fill="white" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
          <span className="font-semibold">{t.github}</span>
        </Link>
      </div>
    </div>
  );
}
