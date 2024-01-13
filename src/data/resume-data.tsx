import {
  AmbitLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ricky Lee",
  initials: "RL",
  location: "Mountain View, CA",
  locationLink: "https://www.google.com/maps/place/Mountain+View",
  about:
    "",
  summary:
    "Data Scientist/ML Engineer experienced in building practical machine learning systems. Complex problems that call for ML and AI solutions are what excite me the most!",
  avatarUrl: "https://avatars.githubusercontent.com/u/20169753?v=4",
  personalWebsiteUrl: "https://leerickss.github.io",
  contact: {
    email: "rickyleeworks2@gmail.com",
    tel: "9178379737",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/leerickss",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leerickss",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/leerickss",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Stanford University",
      degree: "Master of Science in Statistics (Track: Data Science)",
      start: "2016",
      end: "2018",
    },
    {
      school: "Columbia University",
      degree: "Bachelor of Science in Applied Mathematics (Cum Laude)",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: ["Remote"],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description:
    //     "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    // },
    {
      company: "AppLovin",
      link: "https://www.applovin.com/",
      badges: ["Core Engineering"],
      title: "Data Scientist",
      logo: "", 
      start: "2020",
      end: "2023",
      description: (
        <>
          <li>
          Developed and shipped ML models predicting key ad metrics
           (including ad revenue, install rate and event rate) that power AppDiscovery,
            a user acquisition service which drove over $300 million in quarterly revenue
             using BigQuery, Spark, and PyTorch.
            <a href="https://www.applovin.com/appdiscovery/">[1]</a>
          </li>
          <li>
          Managed deployment and A/B testing of models developed;
           each improvement boosted advertiser spend and margin by up to 10%.
          </li>
          <li>
          Created a gradient-based feature importance measurement tool
           using PyTorch Captum to guide feature and model architecture development
            for the first launch of deep learning models (Axon 2.0 for AppDiscovery).
            <a href="https://www.applovin.com/blog/appdiscoverys-ai-advancements/">[2]</a>
          </li>
          <li>
          Implemented ML metric logging and monitored 1000+ models in production
           using Weights & Biases and Grafana.
          </li>
        </>
      ),
    },
    {
      company: "Machine Zone",
      link: "https://www.mz.com/",
      badges: ["Marketing Data Science Research"],
      title: "Data Scientist",
      logo: "", 
      start: "2019",
      end: "2020",
      description: (
        <>
          <li>
          Automated the aggregation of costs associated with fraudulent channels
           using Airflow, which saved $500k+(~5% of spend) of monthly cost
            and replaced manual efforts with auto-generated reports.
          </li>
          <li>
          Designed and implemented new signals for a fraud detection system
           that multiple teams of marketing analysts used daily for campaign optimization,
            using Pandas, Spark and MySQL.
          </li>
          <li>
          Led technical communications with ad networks (Unity, Tapjoy) for
           refund negotiations, by explaining statistical methodologies used
            for fraud detection. 
          </li>
        </>
      ),
    },
    {
      company: "A9.com (Amazon)",
      link: "https://en.wikipedia.org/wiki/A9.com",
      badges: ["Ad Technology Predictive Modeling"],
      title: "Graduate Software Development Intern",
      logo: "", 
      start: "2017",
      end: "2017",
      description: (
        <>
          <li>
          Researched and developed a Deep Semantic Embedding for Sponsored products
           using TensorFlow, designed for ranking, filtering and other downstream tasks. 
          </li>
          <li>
          Implemented a multimodal (text + image) two-tower architecture model,
           trained on a data set of 10+ million user purchases.
          </li>
          <li>
          Created visualization and retrieval demos for in-depth qualitative analysis
           and final presentation.
          </li>
        </>
      ),
    },
  ],
  skills: [
    "Python", "C++", "Java", "R",
    "SQL", "Spark", "PyTorch", "TensorFlow", "Airflow"
  ],
  projects: [
    {
      title: "Deploying Open Source LLMs for DreamTavern.ai",
      techStack: ["python", "docker", "cloud", "huggingface", "llms", "prompt engineering"],
      description: (
        <>
          <li>
          Spearheaded the deployment of open source LLMs for text generation inference,
           transitioning from OpenAI API calls, to offer users broader model and chat experience options.
          </li>
          <li>
          Tested multiple cloud providers (AWS, RunPod), GPUs (A100, RTX A6000, A40),
           LLMs (primarily Llama2-based) and inference server frameworks (Hugging Face TGI, vLLM)
            to find the optimal blend of cost-efficiency, low latency and output quality.
          </li>
          <li>
          Conducted qualitative evaluations of model outputs and optimized
           inference parameters and prompts for several LLM-enabled backend tasks
           to ensure alignment with desired user experience.
          </li>
        </>
      ),
      logo: "",
      link: {
        label: "dreamtavern.ai",
        href: "https://dreamtavern.ai/",
      },
    },
    {
      title: "Neural Network with CUDA & MPI",
      techStack: ["c++", "cuda", "mpi", "profiling"],
      description:
        "Trained an MLP network in C++, parallelizing key operations such as" + 
        " matrix multiplication and back-propagation with CUDA and" +  
        " trained across 4 GPUs and processes using MPI.",
      logo: "",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Fighting Zombies in Minecraft with Deep Reinforcement Learning",
      techStack: ["python", "tensorflow", "deep q learning"],
      description:
        "Trained a Minecraft agent to combat zombies with DQN algorithm using" +
        " TensorFlow on Project Malmo (Minecraft simulation platform).",
      logo: "",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
