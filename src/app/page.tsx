"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Lenis from "lenis"; // Added Lenis
import { 
  SiWhatsapp, SiTelegram, SiTiktok, SiGithub, SiNextdotjs, SiReact, 
  SiPostgresql, SiAstro, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, 
  SiHtml5, SiCss, SiRedis, SiMarkdown, SiTypescript, SiJavascript, SiMysql, 
  SiSupabase, SiGit, SiLinux, SiCloudflare, SiVercel, 
  SiDocker, SiGnubash 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaAws } from "react-icons/fa6";

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    function revealOnScroll() {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      lenis.destroy();
    };
  }, []);

  const handleProjectScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const containerCenter = scrollLeft + container.clientWidth / 2;    
    let closestIndex = 0;
    let closestDistance = Infinity;
    Array.from(container.children).forEach((child, index) => {
      const htmlChild = child as HTMLElement;
      const childCenter = htmlChild.offsetLeft + htmlChild.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    setActiveProject(closestIndex);
  };
  
  const projects = [
    {
      id: 1,
      name: "Heavstal Tech Platform",
      description: "Central platform providing access to Heavstal services including APIs, authentication, password management, and productivity tools.",
      url: "https://heavstal.com.ng",
      image: "/heavstal.png",
      languages: [<SiNextdotjs key="next" />, <SiReact key="react" />, <SiPostgresql key="pg" />],
    },
    {
      id: 2,
      name: "Heavstal Auth",
      description: "Africa-built OAuth 2.0 and OpenID Connect (OIDC) identity provider designed to simplify authentication and authorization for developers.",
      url: "https://accounts.heavstal.com.ng",
      image: "/accounts.png",
      languages: [<SiNextdotjs key="next" />, <SiReact key="react" />, <SiPostgresql key="pg" />],
    },
    {
      id: 3,
      name: "Heavstal Docs",
      description: "Documentation hub containing implementation guides, references, and usage instructions for all Heavstal products and services.",
      url: "https://docs.heavstal.com.ng",
      image: "/docs.png",
      languages: [<SiAstro key="astro" />, <SiNextdotjs key="next" />, <SiMarkdown key="md" />],
    },
    {
      id: 4,
      name: "Heavstal Bots",
      description: "Automation-focused platform for generating and managing authentication codes used by third-party Heavstal services and bots.",
      url: "https://bots.heavstal.com.ng",
      image: "/bots.png",
      languages: [<SiNextdotjs key="next" />, <SiReact key="react" />, <SiRedis key="redis" />],
    },
    {
      id: 5,
      name: "Verselor V1",
      description: "WhatsApp-based automation platform featuring an autonomous AI assistant named Gideon, integrated with the Heavstal ecosystem.",
      url: "https://github.com/HeavstalTech/Verselor-V1",
      image: "/verselor.png",
      languages: [<SiNodedotjs key="node" />, <SiHtml5 key="html" />, <SiCss key="css" />],
    },
    {
      id: 7,
      name: "MediSphere",
      description: "MediSphere is a blockchain-powered ecosystem making healthcare accessible, affordable, and connected worldwide. Powered by the $MEDISPHERE token.",
      url: "https://medispheretoken.com",
      image: "/MediSphere-Logo.jpg",
      tag: "Built for a Client",
      languages: [<SiHtml5 key="html" />, <SiCss key="css" />, <MdOutlineRocketLaunch key="cicd" />],
    },
    {
      id: 6,
      name: "Gideon",
      description: "An autonomous AI agent designed for both individuals and developers, with capabilities extending beyond traditional AI chatbot experiences.",
      url: "#",
      image: "/ai.png",
      tag: "Upcoming",
      languages: [],
    },
    {
      id: 8,
      name: "Full Project Collection",
      description: "Explore additional products and services through our official ecosystem.",
      url: "https://heavstal.com.ng/projects",
      image: "/logo.png",
      languages: [],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 pt-32 pb-20 overflow-hidden">
      <section id="about" className="mb-32">
        <div className="flex flex-row items-center gap-4 md:gap-8 mb-6">
          <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#ff0055] border-b-[#ff0055] opacity-90 animate-[spin_5s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border-[2px] border-dashed border-gray-400 opacity-60 animate-[spin_10s_linear_infinite_reverse]" />
            
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-800 rounded-full overflow-hidden relative z-10 border-2 border-[#0F1115]">
               <img src="/mr_promise.png" alt="Mr Promise" className="w-full h-full object-cover" /> 
            </div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-5xl font-bold text-white tracking-tight mb-1 md:mb-2 uppercase">
              Ekiverere Promise Edesiri
            </h1>
            <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-widest">
              Founder & Chief Technology Officer (CTO), Heavstal Tech
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 mb-10 pl-2 md:pl-40">
          <Link href="https://wa.me/2348166546725" target="_blank"><SiWhatsapp size={24} color="#25D366" className="hover:scale-110 transition-transform" /></Link>
          <Link href="https://wa.me/2348137256404" target="_blank" className="relative group hover:scale-110 transition-transform">
            <SiWhatsapp size={24} color="#128C7E" />
            <span className="absolute -bottom-1 -right-1 bg-[#128C7E] text-white text-[9px] font-bold px-1 rounded-sm border border-[#0F1115]">B</span>
          </Link>
          <Link href="https://t.me/mr_promise818" target="_blank"><SiTelegram size={24} color="#26A5E4" className="hover:scale-110 transition-transform" /></Link>
          <Link href="https://tiktok.com/@mr_promise8181" target="_blank"><SiTiktok size={24} color="#FFFFFF" className="hover:scale-110 transition-transform" /></Link>
          <Link href="https://github.com/HeavstalTech" target="_blank"><SiGithub size={24} color="#FFFFFF" className="hover:scale-110 transition-transform" /></Link>
        </div>
        
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-4xl font-light">
          <p>Hi there! I&apos;m Mr. Promise, and I love developing infrastructure that solves and simplifies real-world problems. I&apos;m a software engineer with expertise in building accessible infrastructure and ecosystems. I take pride in engineering thoughtful, comprehensive products and have a sharp eye for the small details that separate good products and services from exceptional ones.</p>
          <p>I love making services that are only accessible to a few available to everyone, especially in Africa. I enjoy working at the intersection of software architecture, engineering, and design, where great UX meets clean, scalable code.</p>
          <p>Presently, I&apos;m the Founder & CTO of <Link href="https://heavstal.com.ng" className="text-[#ff0055] font-medium hover:underline">Heavstal Tech</Link>, where I lead our system design and backend engineering. I help shape our engineering strategy, covering authentication, APIs, and core infrastructure, aligning with our team to ensure accessibility is built into everything we build.</p>
          <p>Previously, I&apos;ve worked across a wide range of environments in the bot development community on WhatsApp and Telegram. Outside of my day-to-day work, I also created a boilerplate on how to build a full-fledged <Link href="https://simple-webapp-ht.vercel.app" className="text-[#ff0055] font-medium hover:underline">Next.js and React application</Link> with PWA & Proper sitemap from scratch. These journey has helped shape how I handle and think about developing services and products for both developers and non-developers that are well crafted and generally accessible as well as usable.</p>
          <p>When I&apos;m away from my keyboard, I&apos;m usually playing football, listening to music, binge-watching movie series, hanging out with friends and my pet cat, or simply taking a walk to enjoy what the world has to offer.</p>
        </div>
      </section>

      <section id="experiences" className="reveal mb-32">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">Experience</h2>
        
        <div className="space-y-12">
          <div className="relative pl-6 border-l border-gray-800">
            <div className="absolute w-3 h-3 bg-[#ff0055] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_#ff0055]"></div>
            <p className="text-sm text-gray-500 font-mono mb-2">2025 - 2026</p>
            <h3 className="text-xl font-semibold text-white mb-2">Senior Engineer & CTO • <Link href="https://heavstal.com.ng" className="text-gray-300 hover:text-white">Heavstal Tech</Link></h3>
            <p className="text-gray-400 font-light leading-relaxed mb-4">Founded Heavstal Tech with the vision of building accessible software infrastructure for Africa while aiming for global scale. Currently focused on architecting products, establishing engineering standards, provding services and products that help shape developer applications for users, reducing limitations of technology and turning ambitious ideas into production-ready software.</p>
            <div className="flex flex-wrap gap-4 text-gray-500 text-xl">
              <SiNextdotjs title="Next.js" /> <SiReact title="React" /> <SiPostgresql title="PostgreSQL" /> <SiAstro title="Astro" /> <SiTailwindcss title="TailwindCSS" />
            </div>
          </div>

          <div className="relative pl-6 border-l border-gray-800">
            <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[6.5px] top-1.5"></div>
            <p className="text-sm text-gray-500 font-mono mb-2">2024 - May, 2025</p>
            <h3 className="text-xl font-semibold text-white mb-2">Developer • <Link href="https://github.com/HeavstalTech/Promise-Md" className="text-gray-300 hover:text-white">Promise Md</Link></h3>
            <p className="text-gray-400 font-light leading-relaxed mb-4">My early development journey was centered around the WhatsApp and Telegram bot ecosystem, where I built, maintained, and shipped production-ready automation bots used by the community. Along the way, I expanded into full-stack web development, creating MERN applications, React and Next.js projects, developer tools, and educational resources.</p>
            <div className="flex flex-wrap gap-4 text-gray-500 text-xl">
              <SiNodedotjs title="Node.js" /> <SiNextdotjs title="Next.js" /> <SiReact title="React" /> <SiExpress title="Express" /> <SiMongodb title="MongoDB" /> <SiHtml5 title="HTML5" /> <SiCss title="CSS3" /> <SiTailwindcss title="Tailwind CSS" />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="reveal mb-32">
        <div className="flex items-end justify-between mb-8 border-b border-gray-800 pb-4">
          <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
          
          <div className="flex gap-1.5 pb-1">
            {projects.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeProject === idx ? 'bg-[#ff0055]' : 'bg-gray-700'}`} 
              />
            ))}
          </div>
        </div>

        <div 
          className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
          onScroll={handleProjectScroll}
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="snap-center shrink-0 w-[85vw] max-w-[350px] md:max-w-none md:w-[400px] bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-colors flex flex-col group"
            >
              <div className="w-full h-48 bg-gray-800 overflow-hidden relative">
                {project.tag && (
                  <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full border border-gray-700 z-10 text-gray-200">
                    {project.tag}
                  </span>
                )}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-600">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" /> 
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-gray-400 font-light flex-grow mb-6 line-clamp-3">
                  {project.description}
                </p>                
                <div className="flex items-center justify-between border-t border-gray-800 pt-4 mt-auto">
                  {project.url !== "#" ? (
                    <Link href={project.url} target="_blank" className="text-sm font-semibold text-[#ff0055] hover:text-white transition-colors flex items-center gap-1">
                      Visit Project ↗
                    </Link>
                  ) : (
                    <span className="text-sm font-semibold text-gray-600 cursor-not-allowed">In Development</span>
                  )}
                  <div className="flex items-center gap-3 text-gray-400 text-lg">
                    {project.languages}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="tech-stack" className="reveal mb-32">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">TECH STACK</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase">Languages</h3>
            <div className="flex flex-wrap gap-4 text-3xl">
              <SiJavascript color="#F7DF1E" title="JavaScript" />
              <SiTypescript color="#3178C6" title="TypeScript" />
              <SiHtml5 color="#E34F26" title="HTML5" />
              <SiCss color="#1572B6" title="CSS3" />
              <SiMysql color="#4479A1" title="SQL" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase">Frameworks</h3>
            <div className="flex flex-wrap gap-4 text-3xl">
              <SiReact color="#61DAFB" title="React" />
              <SiNextdotjs color="#FFFFFF" title="Next.js" />
              <SiAstro color="#FF5D01" title="Astro" />
              <SiTailwindcss color="#06B6D4" title="Tailwind CSS" />
              <SiNodedotjs color="#339933" title="Node.js" />
              <SiExpress color="#FFFFFF" title="Express" />
              <SiGnubash color="#4EAA25" title="Bash" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase">Architecture & DBs</h3>
            <div className="flex flex-wrap gap-4 text-3xl">
              <div className="bg-[#FFD43B] rounded-md p-1"><TbApi color="#000" size={24} title="APIs" /></div>
              <SiSupabase color="#3ECF8E" title="Supabase" />
              <SiMongodb color="#47A248" title="MongoDB" />
              <SiRedis color="#DC382D" title="Redis" />
              <FaAws color="#232F3E" title="AWS" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase">Others</h3>
            <div className="flex flex-wrap gap-4 text-3xl">
              <SiGit color="#F05032" title="Git" />
              <SiGithub color="#FFFFFF" title="GitHub" />
              <SiLinux color="#FCC624" title="Linux" />
              <SiCloudflare color="#F38020" title="Cloudflare" />
              <SiVercel color="#FFFFFF" title="Vercel" />
              <SiDocker color="#2496ED" title="Docker" />
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs border border-gray-600" title="Heavstal Tech">HT</div>
            </div>
          </div>
        </div>
      </section>

      <section id="cv" className="reveal mb-32 flex flex-col items-start">
        <h2 className="text-2xl font-bold text-white mb-4 uppercase">CHECK OUT MY CURRICULUM VITAE (CV)</h2>
        <a 
          href="/mr_promise_cv.pdf" 
          download="mr_promise_cv.pdf"
          className="bg-white text-black font-bold py-3 px-8 mt-2 rounded-full hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] inline-block"
        >
          Grab A Copy
        </a>
      </section>

      <section id="contact" className="reveal flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 uppercase">LET&apos;S BUILD TOMORROW&apos;S WEB, TODAY!</h2>
        <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
          Whether you have a project in mind, a technical challenge to solve, or an opportunity to collaborate, let&apos;s connect and build the future, for the future of tomorrow&apos;s web is built together.
        </p>
        <Link 
          href="mailto:ekivererepromise@gmail.com"
          className="flex items-center gap-3 bg-[#0F1115] border border-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 hover:border-gray-500 transition-all"
        >
          <SiTelegram size={20} color="#26A5E4" />
          Let&apos;s Build Together
        </Link>
      </section>

    </div>
  );
}
