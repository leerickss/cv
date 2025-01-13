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
    "I am comfortable working with large-scale data and developing and deploying ML models to production, managing every step of the ML model development cycle, from data pipelines and feature engineering to model training, evaluation, deployment, and A/B testing. In the past, I have worked on building DNN-based recommendation models at AppLovin, developed a multi-modal deep semantic embedder for Sponsored Products at Amazon, and led the deployment of open-source LLMs for text generation inference at DreamTavern.",
  avatarUrl: "https://avatars.githubusercontent.com/u/20169753?v=4",
  personalWebsiteUrl: "https://leerickss.github.io",
  contact: {
    email: "rickyleeworks2@gmail.com",
    tel: "",
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
      company: "DreamTavern (Raised seed round from Lux Capital, BoxGroup)",
      link: "https://www.dreamtavern.ai/",
      badges: ["ML Consulting"],
      title: "ML Consultant",
      logo: "", 
      start: "2023",
      end: "2023",
      description: (
        <>
          <li>
          Led the deployment of open-source LLMs for text generation inference, which replaced over 90% of OpenAI (gpt-3.5-turbo) API calls and expanded model offerings to over seven, providing better steerability and story generation while achieving comparable cost and Tokens Per Second.</li>
          <li>
          Conducted comprehensive testing across multiple cloud providers (AWS, RunPod), GPUs (A100, A40, A6000), LLMs (primarily Llama2-based), and inference frameworks (Hugging Face TGI, vLLM) to find the optimal blend of cost-efficiency, low latency and output quality.
          </li>
          <li>
          Performed qualitative evaluations of model outputs and optimized inference parameters and prompts for seamless integration with various LLM-enabled backend services, ensuring alignment with the desired user experience.
          </li>
        </>
      ),
    },
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
          Developed tree-based and DNN recommendation models predicting key ad engagement and revenue metrics that power AppDiscovery, a UA product generating over $300M quarterly revenue, using BigQuery, Spark, XGBoost, and PyTorch.            <a href="https://www.applovin.com/appdiscovery/">[1]</a>
          </li>
          <li>
          Led developments and iterative improvements of ad revenue and event rate models and contributed to the install rate model, increasing advertiser spend and/or profit margins by up to 10% per iteration. Managed deployment and A/B testing for all models.
          </li>
          <li>
          Created a gradient-based feature importance measurement and visualization tool using PyTorch Captum to guide feature and model architecture development for the first launch of deep learning bidder models (Axon 2.0 for AppDiscovery).
          <a href="https://www.applovin.com/blog/appdiscoverys-ai-advancements/">[2]</a>
          </li>
          <li>
          Implemented ML metric logging and monitored 1,000+ models in production using Weights & Biases and Grafana.
          </li>
        </>
      ),
    },
    {
      company: "Machine Zone (Acq. by AppLovin)",
      link: "https://www.mz.com/",
      badges: ["Marketing Data Science Research"],
      title: "Data Scientist",
      logo: "", 
      start: "2019",
      end: "2020",
      description: (
        <>
          <li>
          Automated the aggregation of costs associated with fraudulent marketing channels using Airflow, which saved $500k+(~5% of spend) of monthly cost and replaced manual efforts with auto-generated reports.          </li>
          <li>
          Designed and implemented new signals for a fraud detection system that multiple teams of marketing analysts used daily for campaign optimization, using Pandas, Spark and MySQL.
          </li>
          <li>
          Led technical communications with ad networks (Unity, etc.) for refund negotiations, by explaining statistical methodologies used for fraud detection.
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
          Researched and developed a Deep Semantic Embedding for Sponsored products that jointly embedded query texts and Amazon products for use in ranking, filtering, and other downstream tasks.
          </li>
          <li>
          Implemented a multimodal (text + image) two-tower neural network architecture using TensorFlow, trained on a dataset of 10+ million user purchases with contrastive loss, improving AUC by 2% compared to text-only representations.
          </li>
          <li>
          Created visualization and retrieval demos for in-depth qualitative analysis and final presentation.
          </li>
        </>
      ),
    },
  ],
  skills: [
    "Python", "C++", "Java", "R",
    "SQL", "Spark", "Hive", "Docker", "Kubernetes", "Airflow", "Grafana",
    "Google Cloud Platform", "Amazon Web Services",
    "PyTorch", "TensorFlow", "Keras", "Hugging Face",
    "XGBoost", "scikit-learn", "Pandas", "Weights & Biases", "Grafana", 
  ],
  projects: [
    // {
    //   title: "Deploying Open Source LLMs for DreamTavern.ai",
    //   techStack: ["python", "docker", "cloud", "huggingface", "llms", "prompt engineering"],
    //   description: (
    //     <>
    //       <li>
    //       Spearheaded the deployment of open source LLMs for text generation inference,
    //        transitioning from OpenAI API calls, to offer users broader model and chat experience options.
    //       </li>
    //       <li>
    //       Tested multiple cloud providers (AWS, RunPod), GPUs (A100, RTX A6000, A40),
    //        LLMs (primarily Llama2-based) and inference server frameworks (Hugging Face TGI, vLLM)
    //         to find the optimal blend of cost-efficiency, low latency and output quality.
    //       </li>
    //       <li>
    //       Conducted qualitative evaluations of model outputs and optimized
    //        inference parameters and prompts for several LLM-enabled backend tasks
    //        to ensure alignment with desired user experience.
    //       </li>
    //     </>
    //   ),
    //   logo: "",
    //   link: {
    //     label: "dreamtavern.ai",
    //     href: "https://dreamtavern.ai/",
    //   },
    // },
    {
      title: "Neural Network with CUDA & MPI",
      techStack: ["c++", "cuda", "mpi", "profiling"],
      description: (
        <>
        Trained an MLP network in C++, parallelizing key operations such as
         matrix multiplication and back-propagation with CUDA and 
         trained across 4 GPUs and processes using MPI.
        </>
      ),
      logo: "",
      link: {
        label: "github",
        href: "https://github.com/leerickss/nn-with-cuda",
      },
    },
    {
      title: "Fighting Zombies in Minecraft with Deep Reinforcement Learning",
      techStack: ["python", "tensorflow", "deep q learning"],
      description: (
        <>
        Trained a Minecraft agent to combat zombies with DQN algorithm using
         TensorFlow on Project Malmo (Minecraft simulation platform).
        </>
      ),
      logo: "",
      link: {
        label: "github",
        href: "https://github.com/leerickss/malmo-cs229",
      },
    },
  ],
} as const;
