'use client'
import { useThemeLanguage } from '@/contexts/ThemeLanguageContext';
import { translations } from '@/translations';
import Image from 'next/image';
import Link from 'next/link';

export default function SmartMirrorPage() {
  const { isDarkMode, language } = useThemeLanguage()
  const t = translations[language].smartMirror

  const content = {
    pt: {
      title: "Espelho Inteligente com Assistente Virtual e Reconhecimento Facial",
      description: "Projeto acadêmico desenvolvido na UTFPR para a disciplina de Oficinas de Integração 1, integrando hardware e software em um dispositivo do cotidiano através de IoT, Inteligência Artificial, Reconhecimento Facial e Comandos de Voz.",
      features: [
        "Assistente virtual personalizada (Zoey) com integração da API OpenAI",
        "Interação por comando de voz com transcrição automática",
        "Reconhecimento facial para autenticação e interface personalizada",
        "Exibição de informações em tempo real: data, hora, clima, notícias, ações, placares esportivos e versículos bíblicos",
        "Ativação automática da interface por sensor de movimento (HC-SR501)",
        "Leitura de temperatura e umidade com sensor DHT11"
      ],
      hardware: [
        "Raspberry Pi 3B+",
        "Sensor de movimento HC-SR501",
        "Sensor de temperatura e umidade DHT11",
        "Câmera (para reconhecimento facial)",
        "Microfone (para entrada de voz)",
        "Monitor LCD + vidro com película (espelho improviso)",
        "Frame touch"
      ],
      software: [
        "Python 3.11 (backend)",
        "OpenCV (reconhecimento facial)",
        "SpeechRecognition + ChatGPT API (comando de voz e assistente virtual)",
        "FastAPI (servidor backend)",
        "HTML, CSS, JavaScript (frontend/interface)",
        "SQLite (banco de dados local)",
        "APIs externas: NewsAPI, InfoMoney, BibliaOn, CNNBrasil"
      ],
      ai: "A assistente virtual Zoey foi implementada usando a API da OpenAI (modelo GPT-4-o-mini). Capaz de interagir com usuários por voz, responder perguntas, fornecer notícias e até manter diálogos simples. A personalidade e comportamento da Zoey foram customizados para garantir uma experiência única no contexto do espelho inteligente.",
      faceRecognition: "Implementado com OpenCV e o algoritmo LBPH (Local Binary Patterns Histograms). Cada usuário possui um perfil único, com widgets personalizados e autenticação baseada em similaridade facial (>60% de precisão). O sistema armazena dados faciais com segurança em banco local e carrega a interface apenas para usuários reconhecidos.",
      results: "Sistema funcional com todas as funcionalidades planejadas implementadas com sucesso. Reconhecimento facial robusto e seguro. Interface intuitiva e responsiva. Sensor de movimento altamente confiável. A única limitação foi o espelho improviso com película, que não atingiu o mesmo nível de reflexividade de um espelho profissional two-way.",
    },
    en: {
      title: "Smart Mirror with Virtual Assistant and Facial Recognition",
      description: "Academic project developed at UTFPR for the Integration Workshops 1 class, integrating hardware and software into an everyday device through IoT, Artificial Intelligence, Facial Recognition, and Voice Commands.",
      features: [
        "Custom virtual assistant (Zoey) with OpenAI API integration",
        "Voice command interaction with automatic transcription",
        "Facial recognition for authentication and personalized interface",
        "Real-time information display: date, time, weather, news, stocks, sports scores, and Bible verses",
        "Automatic interface activation by motion sensor (HC-SR501)",
        "Temperature and humidity reading with DHT11 sensor"
      ],
      hardware: [
        "Raspberry Pi 3B+",
        "HC-SR501 motion sensor",
        "DHT11 temperature and humidity sensor",
        "Camera (for facial recognition)",
        "Microphone (for voice input)",
        "LCD monitor + glass with film (makeshift mirror)",
        "Touch frame"
      ],
      software: [
        "Python 3.11 (backend)",
        "OpenCV (facial recognition)",
        "SpeechRecognition + ChatGPT API (voice command and virtual assistant)",
        "FastAPI (backend server)",
        "HTML, CSS, JavaScript (frontend/interface)",
        "SQLite (local database)",
        "External APIs: NewsAPI, InfoMoney, BibliaOn, CNNBrasil"
      ],
      ai: "The virtual assistant Zoey was implemented using the OpenAI API (GPT-4-o-mini model). Capable of interacting with users by voice, answering questions, providing news, and even holding simple conversations. Zoey's personality and behavior were customized to ensure a unique experience in the context of the smart mirror.",
      faceRecognition: "Implemented with OpenCV and the LBPH (Local Binary Patterns Histograms) algorithm. Each user has a unique profile, with personalized widgets and authentication based on facial similarity (>60% accuracy). The system securely stores facial data in a local database and loads the interface only for recognized users.",
      results: "Functional system with all planned features successfully implemented. Robust and secure facial recognition. Intuitive and responsive interface. Highly reliable motion sensor. The only limitation was the makeshift mirror with film, which did not reach the same level of reflectivity as a professional two-way mirror.",
    }
  };

  const curr = content[language];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0a0b0d] text-white' : 'bg-slate-50 text-slate-900'} relative p-8`}>
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/" className={`inline-block mb-8 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-white/10' : 'bg-black/10'} hover:bg-blue-500/20 transition`}>
          {t.back}
        </Link>

        <header className="space-y-4">
          <h1 className="text-4xl font-bold">{curr.title}</h1>
          <p className="text-xl text-gray-400">{curr.description}</p>
        </header>

        <div className="grid gap-8">
          <div className="relative h-80 rounded-xl overflow-hidden ">
            <Image src="/SmartMirrorPic.jpg" alt="Smart Mirror in Operation" fill className="object-contain" />
          </div>
        </div>

        <section className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'}`}>
          <h2 className="text-2xl font-semibold mb-6">{t.features}</h2>
          <ul className="list-disc list-inside space-y-2">
            {curr.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'}`}>
          <h2 className="text-2xl font-semibold mb-6">{t.hardware}</h2>
          <ul className="list-disc list-inside space-y-2">
            {curr.hardware.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'}`}>
          <h2 className="text-2xl font-semibold mb-6">{t.software}</h2>
          <ul className="list-disc list-inside space-y-2">
            {curr.software.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'}`}>
          <h2 className="text-2xl font-semibold mb-6">{t.ai}</h2>
          <p>{curr.ai}</p>
        </section>

        <section className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'}`}>
          <h2 className="text-2xl font-semibold mb-6">{t.faceRecognition}</h2>
          <p>{curr.faceRecognition}</p>
        </section>

        <section className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'}`}>
          <h2 className="text-2xl font-semibold mb-6">{t.results}</h2>
          <p>{curr.results}</p>
        </section>

        <section className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'}`}>
          <h2 className="text-2xl font-semibold mb-6">{t.video}</h2>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5a-c2_L6kec"
              title="Smart Mirror Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        </section>

        <Link
          href="https://github.com/MateusSilva00/Smart-Mirror-Oficinas01"
          target="_blank"
          className="fixed bottom-8 right-8 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl hover:scale-105 transition-all shadow-lg shadow-black/20 border border-white/10"
        >
          <svg height="32" viewBox="0 0 16 16" version="1.1" width="32">
            <path fill="white" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
          <span className="font-semibold">Ver no GitHub</span>
        </Link>
      </div>
    </div>
  );
}
