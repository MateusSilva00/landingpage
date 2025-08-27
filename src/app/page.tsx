'use client'
import { ThemeLanguageToggle } from '@/components/ThemeLanguageToggle';
import { useThemeLanguage } from '@/contexts/ThemeLanguageContext';
import { translations } from '@/translations';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { isDarkMode, language } = useThemeLanguage()
  const t = translations[language]

  const experiences = [
    {
      role: "Engenheiro de Dados Júnior",
      company: "Driva",
      period: "Fev 2024 – Nov 2024",
      items: [
        "Desenvolvimento de pipelines ETL/ELT escaláveis com Airflow, reduzindo em 30% o tempo de execução.",
        "Administração de permissões e acessos para +20 usuários, garantindo segurança e integridade.",
        "Mentoria de estagiários com treinamentos práticos, acelerando a curva de aprendizado.",
        "Administração de ambientes com terabytes de dados e tabelas com +50M linhas."
      ]
    },
    {
      role: "Estagiário em DataOps",
      company: "Driva",
      period: "Fev 2022 – Jan 2024",
      items: [
        "Coleta avançada de dados com Scrapy, BeautifulSoup e Selenium (LinkedIn, Instagram, Facebook).",
        "Ingestão e processamento com Azure Data Factory + PySpark para grandes volumes de dados.",
        "Catalogação e documentação de dados no OpenMetadata.",
        "Suporte a bancos NoSQL como ElasticSearch e MongoDB."
      ]
    }
  ];

  const projects = [
    {
      title: "Rede Social Universitária",
      description:
        "Sistema web para integração entre alunos (postagens, perfis, comentários).",
      tech: "Node.js, PostgreSQL (Prisma), Express, Heroku",
      result: "Aplicação funcional em produção com autenticação e CRUD completo."
    },
    {
      title: "Espelho Inteligente",
      description:
        "Espelho com display, assistente de voz, login por reconhecimento facial e sensores.",
      tech: "Python, Raspberry Pi, OpenAI, APIs externas",
      result:
        "Interface interativa e automação com IA integrada a hardware embarcado."
    },
    {
      title: "Checkout Automatizado com Visão Computacional",
      description:
        "Substituição de código de barras por classificação de imagem em supermercados.",
      tech: "Python, Raspberry Pi, Django, OpenAI API",
      result:
        "Detecção em tempo real (>85% acurácia) e cálculo automático em interface de pagamento."
    }
  ];

  const skills = [
    "Python", 
    "PostgreSQL",
    "SQL",
    "Pandas",
    "FastAPI",
    "JavaScript",
    "Django",
    "Airflow", 
    "PySpark",
    "Docker", 
    "Azure", 
    "Bucket AWS", 
    "GCP",
    "ElasticSearch", 
    "Machine Learning", "CI/CD", "Git", 
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0a0b0d] text-white' : 'bg-slate-50 text-slate-900'} relative`}>
      <ThemeLanguageToggle />
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20' : 'bg-gradient-to-tr from-blue-100/30 via-transparent to-purple-100/30'} animate-gradient-xy`}></div>

      <main className="relative max-w-6xl mx-auto px-6 py-24 space-y-24">
        {/* HERO */}
        <section className="text-center space-y-6">
          <div className="relative w-40 h-40 mx-auto mb-6">
            <Image
              src="/linkedin.jpg"
              alt="Mateus Silva"
              fill
              className="rounded-full object-cover border-4 border-blue-500/30"
              priority
            />
          </div>
          <h1 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Mateus Silva
          </h1>
          <p className="text-xl text-gray-300">
            {t.role}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="mailto:mateus.sgrilli@gmail.com"
              className="px-6 py-3 rounded-xl border border-blue-500/40 hover:bg-blue-500/10 transition">
              Email
            </Link>
            <Link href="https://www.linkedin.com/in/mateus-silva00/" target="_blank"
              className="px-6 py-3 rounded-xl border border-blue-500/40 hover:bg-blue-500/10 transition">
              LinkedIn
            </Link>
            <Link href="https://github.com/mateusSilva00" target="_blank"
              className="px-6 py-3 rounded-xl border border-blue-500/40 hover:bg-blue-500/10 transition">
              GitHub
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=5513997085228"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-green-500/40 hover:bg-green-500/10 transition">
              WhatsApp
            </Link>
          </div>
        </section>

        {/* RESUMO */}
        <section className={`space-y-4 backdrop-blur-3xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'} rounded-2xl p-8 border ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{t.professionalSummary}</h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-slate-700'} leading-relaxed`}>
            {t.summary}
          </p>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="space-y-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Experiência</h2>
          {experiences.map((exp) => (
            <div key={exp.role} className={`${isDarkMode ? 'bg-white/5' : 'bg-white/70'} rounded-2xl p-6 border ${isDarkMode ? 'border-white/10' : 'border-slate-200'} backdrop-blur-3xl`}>
              <h3 className="text-xl font-bold">{exp.role} | {exp.company}</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-500'} mb-4`}>{exp.period}</p>
              <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                {exp.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* PROJETOS */}
        <section className="space-y-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Projetos Relevantes</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((proj) => (
              <div key={proj.title} className={`p-6 ${isDarkMode ? 'bg-white/5' : 'bg-white/70'} rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-slate-200'} hover:border-blue-500/50 transition`}>
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-slate-700'}>{proj.description}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-500'} mt-2`}>Tech: {proj.tech}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>Resultado: {proj.result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HABILIDADES */}
        <section className="space-y-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Stack & Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill}
                className={`px-4 py-2 ${isDarkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-slate-100 to-white'} rounded-xl border ${isDarkMode ? 'border-white/10' : 'border-slate-200'} hover:border-blue-500/50 transition-all hover:scale-105 shadow-md shadow-black/5 text-sm`}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* FORMAÇÃO */}
        <section className={`space-y-4 backdrop-blur-3xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'} rounded-2xl p-8 border ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Formação Acadêmica</h2>
          <p className="text-lg font-medium">Engenharia da Computação — UTFPR (2020 – 2026)</p>
          <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-slate-700'} mt-2 space-y-2`}>
            <li>Co-fundador do Centro Acadêmico de Engenharia da Computação.</li>
            <li>Instrutor em cursos de Python e Web Scraping na Semana Acadêmica.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
