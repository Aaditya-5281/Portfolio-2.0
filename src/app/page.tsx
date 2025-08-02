"use client";

import SocialMedia from "@/components/SocialMedia";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
//import Nextjs from "@/components/icons/Next";
import Nodejs from "@/components/icons/Nodejs";
import Python from "@/components/icons/Python";
//import ReactIcon from "@/components/icons/React";
import TypeScript from "@/components/icons/Typescript";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { track } from "@vercel/analytics";
import { ExternalLink } from "lucide-react";
import Javascript from "@/components/icons/Javascript";
import AmazonWebServices from "@/components/icons/Aws";
import Langchain from "@/components/icons/Langchain";
import Mongo from "@/components/icons/Mongo";
import Ollama from "@/components/icons/ollama";
import Mcp from "@/components/icons/Mcp";
import Prisma from "@/components/icons/Prisma";
import Postgres from "@/components/icons/Postgres";
// import { title } from "process";
import Rust from "@/components/icons/Rust";

export default function Home() {
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-6xl mx-auto px-4 py-4 mt-16">
      <AnimateIn variant="fadeUp">
        <section className="mb-6">
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h1 className="text-xl font-medium tracking-tight mb-4 flex items-baseline justify-between">
              <span>Hey, I&apos;m Aaditya</span>
              <ThemeToggle />
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.4}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-6xl mb-8">
                Hi, I&apos;m <b>Korella Aaditya</b>, a Final-year <b>Computer Science and Engineering</b> student at <b>VNR Vignana Jyothi Institute of Engineering and Technology</b>. 
                <br /><br />
                I specialize in <b>Artificial Intelligence </b> and <b>Machine Learning</b> with a strong focus on <b>Agentic AI systems</b>, <b>multi-agent orchestration</b>, and <b>LLM-based applications</b>.
                <br /><br />
                My recent work involves building intelligent apps using <b>AutoGen</b>, <b>LangChain</b>, and <b>OpenAI APIs</b>, including a Travel Planner and a Company Research Agent — each powered by autonomous agents handling complex workflows. I&apos;ve also built projects in <b>computer vision</b> using <b>Vision Transformer</b> and in <b>retrieval systems</b>, enabling real-time performance in similarity search and analysis.
                <br /><br />
                My core interest lies in creating intelligent, scalable AI systems that go beyond traditional ML pipelines — integrating <b>reasoning</b>, <b>orchestration</b>, and <b>real-time interaction</b>.
                <br /><br />
                I enjoy solving open-ended problems, experimenting with new architectures, and continuously learning how to make <b>AI systems more useful and autonomous</b>.
            </p>
          </AnimateIn>


          <AnimateIn variant="fadeUp" delay={0.6}>
            <div className="flex items-center gap-5">
              <SocialMedia />
            </div>
          </AnimateIn>
        </section>
      </AnimateIn>

      <Tabs defaultValue="projects">
        <AnimateIn variant="fadeUp" delay={0.2}>
          <TabsList className="mb-4 border-none bg-transparent p-0 -ml-[8px]">
            <TabsTrigger value="projects" className="!bg-transparent !border-none !shadow-none">
              Projects
            </TabsTrigger>
            {/*
            <TabsTrigger value="experience" className="!bg-transparent !border-none !shadow-none">
              
            </TabsTrigger>
            */}
            <TabsTrigger value="tools" className="!bg-transparent !border-none !shadow-none">
              Tools
            </TabsTrigger>
            <TabsTrigger value="resume" className="!bg-transparent !border-none !shadow-none">
              Resume
            </TabsTrigger>
          </TabsList>
        </AnimateIn>

        <TabsContent value="projects">
          <AnimateIn variant="fadeUp" delay={0}>
            <section className="mb-12">
              <div className="space-y-8">
                <ul className="space-y-8">
                  {projects.map((project, index) => {
                    const delay = 0.1 + index * 0.1;
                    return (
                      <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                        <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                          <div className="flex items-baseline justify-between mb-1">
                            <h3 className="text-md font-medium">{project.title}</h3>
                            <div className="flex flex-row gap-2">
                              {project.github ? (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                  onClick={() => track(`${project.title}_github_clicked`)}
                                >
                                  GitHub <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : null}
                              {/*
                              {project.link ? (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                  onClick={() => track(`${project.title}_clicked`)}
                                >
                                  View <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : null}
                              */}
                            </div>
                          </div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                                {tech}
                                {techIndex < project.technologies.length - 1 ? " /" : ""}
                              </span>
                            ))}
                          </div>
                        </li>
                      </AnimateIn>
                    );
                  })}
                </ul>
              </div>
            </section>
          </AnimateIn>
        </TabsContent>
 
        <TabsContent value="experience">
          {/* Commented out as per the instructions */}
          {/*
          <AnimateIn variant="fadeUp" delay={0}>
            <section className="mb-12">
              <div className="space-y-8">
                <ul className="space-y-8">
                  {experience.map((job, index) => {
                    const delay = 0.1 + index * 0.1;
                    return (
                      <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                        <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            <h3 className="text-md font-medium">
                              {job.role} {job.role.toLowerCase().includes("freelance") ? "" : "at"} {job.company}
                            </h3>
                            <span className="text-xs text-zinc-400 dark:text-zinc-500">{job.period}</span>
                          </div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{job.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                                {tech}
                                {techIndex < job.technologies.length - 1 ? " /" : ""}
                              </span>
                            ))}
                          </div>
                        </li>
                      </AnimateIn>
                    );
                  })}
                </ul>
              </div>
            </section>
          </AnimateIn>
          */}
        </TabsContent>

        <TabsContent value="resume">
          <AnimateIn variant="fadeUp" delay={0}>
            <section className="mb-12">
              <div className="space-y-8">
                <ul className="space-y-8">
                  {resume.map((item, index) => {
                    const delay = 0.1 + index * 0.1;
                    return (
                      <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                        <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            <h3 className="text-md font-medium">{item.title}</h3>
                          </div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{item.description}</p>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-500 hover:underline"
                            >
                              View Resume
                            </a>
                          )}
                        </li>
                      </AnimateIn>
                    );
                  })}
                </ul>
              </div>
            </section>
          </AnimateIn>
        </TabsContent>

        <TabsContent value="tools">
        <AnimateIn variant="fadeUp" delay={0}>
            <h2 className="text-md font-medium mb-4">Languages</h2>
            <section className="mb-12">
              <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                {tools.Languages.map(({ Logo, title }, index) => (
                  <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03} className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]">
                    <div className="flex flex-col items-center group">
                      <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                        <Logo className="h-full w-full" />
                      </div>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </section>
          </AnimateIn>



          <AnimateIn variant="fadeUp" delay={0}>
            <h2 className="text-md font-medium mb-4">Frameworks</h2>
            <section className="mb-12">
              <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                {tools.frameworks.map(({ Logo, title }, index) => (
                  <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03} className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]">
                    <div className="flex flex-col items-center group">
                      <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                        <Logo className="h-full w-full" />
                      </div>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </section>
          </AnimateIn>

          
          <AnimateIn variant="fadeUp" delay={0}>
            <h2 className="text-md font-medium mb-4">Backend and Infrastructure</h2>
            <section className="mb-12">
              <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                {tools.backend_and_infrastructure.map(({ Logo, title }, index) => (
                  <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03} className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]">
                    <div className="flex flex-col items-center group">
                      <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                        <Logo className="h-full w-full" />
                      </div>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </section>
          </AnimateIn>
        </TabsContent>
      </Tabs>

      <AnimateIn variant="fadeUp" delay={0.8}>
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div>Aaditya</div>
        </footer>
      </AnimateIn>
    </main>
  );
}

const projects = [{
  title: "Agentic Deep Researcher",
  description: "AI-powered research assistant designed to automate and enhance the process of gathering, analyzing, and synthesizing information from the web. By leveraging multi-agent orchestration, integration with external APIs, and a user-friendly web interface.",
  github: "https://github.com/Aaditya-5281/Agentic-Deep-Researcher",
  technologies: ["streamlit", "Python", "CrewAI","Model Context Protocol","Agentic AI", "Multi-Agent Orchestration","Ollama"]
  },
  {
    title: "AI Travel Planner",
    description: "A powerful AI-powered travel planning application that creates personalized travel itineraries using multiple AI agents.",
    github: "https://github.com/Aaditya-5281/travel",
    technologies: ["streamlit", "Python", "Langchain", "OpenAI", "AutoGen", "LangGraph", "LangChain-Community"],
  },
  {
    title: "Company Research Agent",
    description: " powerful AI-powered financial research tool that generates comprehensive company reports using multiple specialized AI agents.",
    github: "https://github.com/Aaditya-5281/Company_research",
    technologies: ["streamlit", "Python", "Langchain", "OpenAI", "AutoGen", "LangGraph", "LangChain-Community",]
  },
  {
    title: "Research Assistant",
    description: " An application for automating literature review processes and research paper analysis.",
    github: "https://github.com/Aaditya-5281/research-assistant",
    technologies: ["streamlit", "Python", "Langchain", "Google Gemini", "AutoGen", "LangGraph", "LangChain-Community",]
  },
  {
    title: "Financial Advisor",
    description: " AI Financial Coach is a personalized financial advisor.",
    github: "https://github.com/Aaditya-5281/Finance-Advisor",
    technologies: ["streamlit", "Python", "Langchain", "Google Gemini", "AutoGen", "LangGraph", "LangChain-Community","Google ADK"],
  },
  {
    title:"Brainly",
    description: "Brainly is your personal knowledge management system designed to store, organize, and access your thoughts, ideas, and learning materials. With sleek, intuitive UI components and powerful search and organization features, Brainly is the ultimate digital brain for managing your thoughts.",
    github: "https://github.com/Aaditya-5281/Brainly",
    technologies: ["Node", "TypeScript", "MongoDb", "Express", "React", "Tailwind",]
  },
];
/*
const experience = [
  {
    role: "AI Developer Intern",
    company: "Viswam.AI",
    period: "Feb 2025 - Present",
    description:
      "Software engineer responsible for core features and performance optimisations for an innovative AI-powered email client, focusing on intelligent email processing and real-time collaboration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres", "Google APIs"],
  }
];
*/


const resume = [
  {
    title: "Resume",
    description: "My Resume",
    link: "https://drive.google.com/file/d/12YS7NWKeuRGwOwDVksAs9w3nauG3sa8M/view?usp=sharing",
  }
]

const tools = {

    Languages: [
      {
        Logo: (props: React.SVGProps<SVGSVGElement>) => <Javascript {...props} />,
        title: "Javascript",
      },
      {
        Logo: (props: React.SVGProps<SVGSVGElement>) => <TypeScript {...props} />,
        title: "Typescript",
      },
      {
        Logo: (props: React.SVGProps<SVGSVGElement>) => <Python {...props} />,
        title: "Python",
      },
      {
        Logo: () => <Rust width={32} height={32} />,
        title: "Rust",
      },
    ],



  frameworks: [
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <ReactIcon {...props} />,
    //   title: "React",
    // },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Nextjs {...props} />,
    //   title: "NextJS",
    // },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Langchain {...props} />,
      title: "Langchain",
    },
    {
      Logo: () => <Ollama width={32} height={32} />,
      title: "Ollama",
    },
    {
      Logo: () => <Mcp width={32} height={32} />,
      title: "MCP",
    },
    
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <ReactRouter {...props} />,
    //   title: "React Router",
    // },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Vue {...props} />,
    //   title: "VueJS",
    // },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Nuxt {...props} />,
    //   title: "NuxtJS",
    // },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Html {...props} />,
    //   title: "HTML",
    // },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Css {...props} />,
    //   title: "CSS",
    // },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Sass {...props} />,
    //   title: "Sass",
    // },
    //{
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <TailwindCSS {...props} />,
    //   title: "TailwindCSS",
    // },
  ],
  backend_and_infrastructure: [
    //{
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Trpc {...props} />,
    //   title: "TRPC",
    // },
    // {
    //   Logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    //   title: "Google Cloud",
    // },
     {
       Logo: (props: React.SVGProps<SVGSVGElement>) => <AmazonWebServices {...props} />,
       title: "AWS",
     },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Cloudflare {...props} />,
    //   title: "Cloudflare",
    // },
    //{
    //  Logo: (props: React.SVGProps<SVGSVGElement>) => <Vercel {...props} />,
    //  title: "Vercel",
    //},
    {
       Logo: (props: React.SVGProps<SVGSVGElement>) => <Prisma {...props} />,
       title: "Prisma",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Postgres {...props} />,
      title: "Postgres",
    },
    //{
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Bun {...props} />,
    //   title: "Bun",
    // },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Nodejs {...props} />,
      title: "NodeJS",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Mongo {...props} />,
      title: "MongoDB",
    },
  ],
};
