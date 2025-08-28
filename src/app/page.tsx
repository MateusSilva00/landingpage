'use client'
import { ThemeLanguageToggle } from '@/components/ThemeLanguageToggle';
import { useThemeLanguage } from '@/contexts/ThemeLanguageContext';
import { translations } from '@/translations';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { isDarkMode, language } = useThemeLanguage()
  const t = translations[language]

  const projects = {
    pt: [
      {
        title: "Rede Social Universitária",
        description: "Sistema web para integração entre alunos (postagens, perfis, comentários).",
        tech: "Node.js, PostgreSQL (Prisma), Express, Heroku",
        result: "Aplicação funcional em produção com autenticação e CRUD completo."
      },
      {
        title: "Espelho Inteligente",
        description: "Espelho com display, assistente de voz, login por reconhecimento facial e sensores.",
        tech: "Python, Raspberry Pi, OpenAI, APIs externas",
        result: "Interface interativa e automação com IA integrada a hardware embarcado."
      },
      {
        title: "Checkout Automatizado com Visão Computacional",
        description: "Substituição de código de barras por classificação de imagem em supermercados.",
        tech: "Python, Raspberry Pi, Django, OpenAI API",
        result: "Detecção em tempo real (>85% acurácia) e cálculo automático em interface de pagamento."
      }
    ],
    en: [
      {
        title: "University Social Network",
        description: "Web system for student integration (posts, profiles, comments).",
        tech: "Node.js, PostgreSQL (Prisma), Express, Heroku",
        result: "Functional production application with authentication and complete CRUD."
      },
      {
        title: "Smart Mirror",
        description: "Mirror with display, voice assistant, facial recognition login and sensors.",
        tech: "Python, Raspberry Pi, OpenAI, External APIs",
        result: "Interactive interface and automation with AI integrated to embedded hardware."
      },
      {
        title: "Automated Checkout with Computer Vision",
        description: "Barcode replacement using image classification in supermarkets.",
        tech: "Python, Raspberry Pi, Django, OpenAI API",
        result: "Real-time detection (>85% accuracy) and automatic calculation in payment interface."
      }
    ]
  };

  const experiences = {
    pt: [
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
    ],
    en: [
      {
        role: "Junior Data Engineer",
        company: "Driva",
        period: "Feb 2024 – Nov 2024",
        items: [
          "Development of scalable ETL/ELT pipelines with Airflow, reducing execution time by 30%.",
          "Management of permissions and access for +20 users, ensuring security and integrity.",
          "Mentoring interns with practical training, accelerating the learning curve.",
          "Administration of environments with terabytes of data and tables with +50M rows."
        ]
      },
      {
        role: "DataOps Intern",
        company: "Driva",
        period: "Feb 2022 – Jan 2024",
        items: [
          "Advanced data collection with Scrapy, BeautifulSoup and Selenium (LinkedIn, Instagram, Facebook).",
          "Ingestion and processing with Azure Data Factory + PySpark for large data volumes.",
          "Data cataloging and documentation in OpenMetadata.",
          "Support for NoSQL databases like ElasticSearch and MongoDB."
        ]
      }
    ]
  };

  const aboutMe = {
    pt: {
      title: "Sobre Mim",
      content: [
        "Sou estudante do 7º período de Engenharia da Computação na UTFPR, onde tenho me destacado por minha curiosidade nata e paixão pela tecnologia.",
        "Como um entusiasta do aprendizado contínuo, estou constantemente me desafiando a dominar novas tecnologias e ferramentas. Minha sede por conhecimento não se limita apenas à área técnica - sou um ávido leitor e acredito que o desenvolvimento pessoal é tão importante quanto o profissional.",
        "Destaco-me por minhas excelentes habilidades de comunicação, que me permitem traduzir conceitos técnicos complexos em explicações claras e acessíveis. Além disso, mantenho um estilo de vida ativo, praticando exercícios regularmente, o que me ajuda a manter o equilíbrio e a energia necessária para enfrentar novos desafios."
      ]
    },
    en: {
      title: "About Me",
      content: [
        "I'm a 7th-semester Computer Engineering student at UTFPR, where I've distinguished myself through my natural curiosity and passion for technology.",
        "As a lifelong learning enthusiast, I'm constantly challenging myself to master new technologies and tools. My thirst for knowledge extends beyond technical areas - I'm an avid reader and believe that personal development is just as important as professional growth.",
        "I stand out for my excellent communication skills, which allow me to translate complex technical concepts into clear, accessible explanations. Additionally, I maintain an active lifestyle through regular exercise, helping me maintain the balance and energy needed to tackle new challenges."
      ]
    }
  };

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

        {/* SOBRE MIM */}
        <section className="space-y-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            {language === 'pt' ? aboutMe.pt.title : aboutMe.en.title}
          </h2>
          <div className={`${isDarkMode ? 'bg-white/5' : 'bg-white/70'} rounded-2xl p-6 border ${isDarkMode ? 'border-white/10' : 'border-slate-200'} backdrop-blur-3xl`}>
            {(language === 'pt' ? aboutMe.pt.content : aboutMe.en.content).map((paragraph, index) => (
              <p key={index} className={`${isDarkMode ? 'text-gray-300' : 'text-slate-700'} mb-4 text-lg leading-relaxed`}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="space-y-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            {t.experience}
          </h2>
          {(language === 'pt' ? experiences.pt : experiences.en).map((exp) => (
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
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            {t.relevantProjects}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {(language === 'pt' ? projects.pt : projects.en).map((proj) => (
              <Link 
                key={proj.title} 
                href={
                  proj.title === "Espelho Inteligente" || proj.title === "Smart Mirror"
                    ? '/projects/smart-mirror'
                    : proj.title === "Checkout Automatizado com Visão Computacional" || proj.title === "Automated Checkout with Computer Vision"
                    ? '/projects/checkai'
                    : '#'
                }
              >
                <div className={`p-6 ${isDarkMode ? 'bg-white/5' : 'bg-white/70'} rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-slate-200'} hover:border-blue-500/50 transition cursor-pointer`}>
                  <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-slate-700'}>{proj.description}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-500'} mt-2`}>
                    {language === 'pt' ? 'Tech:' : 'Tech:'} {proj.tech}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                    {language === 'pt' ? 'Resultado:' : 'Result:'} {proj.result}
                  </p>
                </div>
              </Link>
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
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            {t.education}
          </h2>
          <p className="text-lg font-medium">
            {language === 'pt' 
              ? "Engenharia da Computação — UTFPR (2020 – 2026)"
              : "Computer Engineering — UTFPR (2020 – 2026)"}
          </p>
          <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-slate-700'} mt-2 space-y-2`}>
            <li>
              {language === 'pt'
                ? "Co-fundador do Centro Acadêmico de Engenharia da Computação."
                : "Co-founder of the Computer Engineering Academic Center."}
            </li>
            <li>
              {language === 'pt'
                ? "Instrutor em cursos de Python e Web Scraping na Semana Acadêmica."
                : "Instructor in Python and Web Scraping courses during Academic Week."}
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
