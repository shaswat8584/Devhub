import { image } from "motion/react-client";

const details = [
  // Frontend
  {
    id: 1,
    name: "React",
    description:
      "A JavaScript library for building interactive user interfaces.",
    category: "Frontend",
    url: "https://react.dev",
    icon: "Atom",
    image:
      "https://images.seeklogo.com/logo-png/65/1/react-logo-png_seeklogo-653380.png",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    category: "Frontend",
    url: "https://tailwindcss.com",
    icon: "Wind",
    image:
      "https://logowik.com/content/uploads/images/tailwind-css7675.logowik.com.webp",
  },
  {
    id: 3,
    name: "Next.js",
    description: "A React framework for building full-stack web applications.",
    category: "Frontend",
    url: "https://nextjs.org",
    icon: "Triangle",
    image:
      "https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp",
  },

  // Backend
  {
    id: 4,
    name: "Node.js",
    description:
      "A JavaScript runtime for building scalable server-side applications.",
    category: "Backend",
    url: "https://nodejs.org",
    icon: "Server",
    image: "https://logowik.com/content/uploads/images/nodejs.jpg",
  },
  {
    id: 5,
    name: "Express.js",
    description: "A minimal and flexible Node.js web application framework.",
    category: "Backend",
    url: "https://expressjs.com",
    icon: "Network",
    image:
      "https://i.pinimg.com/736x/83/1c/14/831c14fcebd3f448a0c3cbc0f69534fc.jpg",
  },
  {
    id: 6,
    name: "Postman",
    description:
      "An API platform for designing, testing, and documenting APIs.",
    category: "Backend",
    url: "https://www.postman.com",
    icon: "Send",
    image: "https://logowik.com/content/uploads/images/postman2461.jpg",
  },

  // AI/ML
  {
    id: 7,
    name: "Hugging Face",
    description:
      "Explore machine learning models, datasets, and AI applications.",
    category: "AI/ML",
    url: "https://huggingface.co",
    icon: "Brain",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.LiYrNygffDYTQ6VuafRSOAHaFl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 8,
    name: "Kaggle",
    description:
      "Discover datasets, participate in ML competitions, and learn data science.",
    category: "AI/ML",
    url: "https://www.kaggle.com",
    icon: "ChartNoAxesCombined",
    image:
      "https://logowik.com/content/uploads/images/t_kaggle4255.logowik.com.webp",
  },
  {
    id: 9,
    name: "Google AI Studio",
    description:
      "Experiment with Google's Gemini models and build AI-powered applications.",
    category: "AI/ML",
    url: "https://aistudio.google.com",
    icon: "Sparkles",
    image: "https://boluda.com/files/curso-google-ai-studio.gif",
  },

  // Design
  {
    id: 10,
    name: "Figma",
    description: "A collaborative interface design and prototyping platform.",
    category: "Design",
    url: "https://www.figma.com",
    icon: "Figma",
    image:
      "https://logowik.com/content/uploads/images/figma459.logowik.com.webp",
  },
  {
    id: 11,
    name: "Dribbble",
    description:
      "Discover creative work and design inspiration from designers worldwide.",
    category: "Design",
    url: "https://dribbble.com",
    icon: "Dribbble",
    image: "https://logowik.com/content/uploads/images/dribbble.jpg",
  },

  // DevOps
  {
    id: 12,
    name: "Docker",
    description:
      "Build, package, and run applications inside portable containers.",
    category: "DevOps",
    url: "https://www.docker.com",
    icon: "Container",
    image:
      "https://logowik.com/content/uploads/images/docker-applicaton-development8084.logowik.com.webp",
  },
  {
    id: 13,
    name: "GitHub Actions",
    description: "Automate software workflows, testing, and CI/CD pipelines.",
    category: "DevOps",
    url: "https://github.com/features/actions",
    icon: "Workflow",
    image:
      "https://techblog.asia-quest.jp/hubfs/TechBlog/202210-02github-thum.png",
  },

  // Database
  {
    id: 14,
    name: "Supabase",
    description:
      "An open-source backend platform with database, authentication, and storage.",
    category: "Database",
    url: "https://supabase.com",
    icon: "Database",
    image:
      "https://logowik.com/content/uploads/images/supabase1597.logowik.com.webp",
  },
  {
    id: 15,
    name: "MongoDB",
    description: "A document-oriented NoSQL database for modern applications.",
    category: "Database",
    url: "https://www.mongodb.com",
    icon: "Database",
    image:
      "https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp",
  },

  // Tools
  {
    id: 16,
    name: "VS Code",
    description:
      "A lightweight code editor with extensions, debugging, and Git integration.",
    category: "Tools",
    url: "https://code.visualstudio.com",
    icon: "Code2",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.Q2TfQfCAQpOV-iBuhDeybQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 17,
    name: "Vite",
    description:
      "A fast frontend build tool with a powerful development server.",
    category: "Tools",
    url: "https://vite.dev",
    icon: "Zap",
    image:
      "https://digitalpress.fra1.cdn.digitaloceanspaces.com/pnl5oqh/2022/12/1_In1BgimeWvX8_9NjKwoY2w.png",
  },
  {
    id: 18,
    name: "Vue.js",
    description:
      "A progressive JavaScript framework for building user interfaces.",
    category: "Frontend",
    url: "https://vuejs.org",
    icon: "Layers",
    image:
      "https://images.teepublic.com/derived/production/designs/53097351_0/1699843215/i_p:c_ffffff,bnr_1,s_630,q_90.jpg",
  },

  {
    id: 19,
    name: "shadcn/ui",
    description:
      "Beautifully designed, accessible, and customizable UI components.",
    category: "Frontend",
    url: "https://ui.shadcn.com",
    icon: "Component",
    image: "https://shadcn.com/og.jpg",
  },
  {
    id: 20,
    name: "Framer Motion",
    description: "A production-ready motion library for React interfaces.",
    category: "Frontend",
    url: "https://motion.dev",
    icon: "Waves",
    image:
      "https://images.seeklogo.com/logo-png/40/1/framer-logo-png_seeklogo-405057.png",
  },

  // Backend
  {
    id: 21,
    name: "FastAPI",
    description:
      "A modern Python framework for building high-performance APIs.",
    category: "Backend",
    url: "https://fastapi.tiangolo.com",
    icon: "Zap",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.jDcn4x7eTOP8DqccTSTPsAHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 22,
    name: "Prisma",
    description:
      "A type-safe ORM for working with databases in modern applications.",
    category: "Backend",
    url: "https://www.prisma.io",
    icon: "Database",
    image:
      "https://images.seeklogo.com/logo-png/44/1/prisma-logo-png_seeklogo-441035.png",
  },
  {
    id: 23,
    name: "GraphQL",
    description: "A query language and runtime for flexible API development.",
    category: "Backend",
    url: "https://graphql.org",
    icon: "Network",
    image: "https://davidwalsh.name/demo/graphql-intro/graphql.png",
  },

  // AI/ML
  {
    id: 24,
    name: "Google Colab",
    description:
      "A cloud-based notebook environment for Python and machine learning.",
    category: "AI/ML",
    url: "https://colab.research.google.com",
    icon: "Notebook",
    image:
      "https://www.marketing-branding.com/wp-content/uploads/2020/07/google-colaboratory-colab-guia-completa-1024x683.jpg",
  },
  {
    id: 25,
    name: "Weights & Biases",
    description:
      "Track experiments, visualize metrics, and manage ML workflows.",
    category: "AI/ML",
    url: "https://wandb.ai",
    icon: "ChartLine",
    image:
      "https://mms.businesswire.com/media/20240418287123/en/1876265/22/logo_Weights_Biases_black_and_gold_1_Logo_(1)_(1).jpg",
  },
  {
    id: 26,
    name: "Ollama",
    description: "Run and manage open-source large language models locally.",
    category: "AI/ML",
    url: "https://ollama.com",
    icon: "Brain",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.HpC6UVYgkOT7HCb01mao1AAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 27,
    name: "LangChain",
    description: "Build applications powered by large language models.",
    category: "AI/ML",
    url: "https://www.langchain.com",
    icon: "Link",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.nu7ZXSdSXeo6aCLEJYoZpgHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },

  // Design
  {
    id: 28,
    name: "Behance",
    description: "Explore creative portfolios and discover design inspiration.",
    category: "Design",
    url: "https://www.behance.net",
    icon: "Palette",
    image:
      "https://i.pinimg.com/736x/1d/59/4c/1d594c07a782fabf27334495834acdf7.jpg",
  },

  // DevOps
  {
    id: 29,
    name: "Vercel",
    description:
      "Deploy frontend applications with automated builds and previews.",
    category: "DevOps",
    url: "https://vercel.com",
    icon: "Triangle",
    image: "https://logowik.com/content/uploads/images/t_vercel1868.jpg",
  },
  {
    id: 30,
    name: "Netlify",
    description: "Build, deploy, and host modern web applications.",
    category: "DevOps",
    url: "https://www.netlify.com",
    icon: "Cloud",
    image: "https://logowik.com/content/uploads/images/t_netlify9261.jpg",
  },
  {
    id: 31,
    name: "GitHub",
    description: "Host code repositories and collaborate on software projects.",
    category: "DevOps",
    url: "https://github.com",
    icon: "Github",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.Jd5gRS76Ml0sX1uA6XdvXwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 32,
    name: "Kubernetes",
    description:
      "Automate deployment, scaling, and management of containerized applications.",
    category: "DevOps",
    url: "https://kubernetes.io",
    icon: "Boxes",
    image:
      "https://images.seeklogo.com/logo-png/48/1/kubernetes-logo-png_seeklogo-480987.png",
  },

  // Database
  {
    id: 33,
    name: "Redis",
    description:
      "An in-memory data store used for caching and real-time applications.",
    category: "Database",
    url: "https://redis.io",
    icon: "Database",
    image:
      "https://images.seeklogo.com/logo-png/38/1/redis-logo-png_seeklogo-389140.png",
  },
  {
    id: 34,
    name: "Neon",
    description:
      "A serverless PostgreSQL platform built for modern applications.",
    category: "Database",
    url: "https://neon.tech",
    icon: "Database",
    image:
      "https://logowik.com/content/uploads/images/t_neon-js6615.logowik.com.webp",
  },

  // Tools
  {
    id: 35,
    name: "Raycast",
    description:
      "A productivity launcher with extensions and developer workflows.",
    category: "Tools",
    url: "https://www.raycast.com",
    icon: "Command",
    image:
      "https://logowik.com/content/uploads/images/t_raycast-shortcut73856.logowik.com.webp",
  },
  {
    id: 36,
    name: "Excalidraw",
    description: "A virtual whiteboard for creating hand-drawn-style diagrams.",
    category: "Tools",
    url: "https://excalidraw.com",
    icon: "Pencil",
    image:
      "https://cdn.prod.website-files.com/63994dae1033718bee6949ce/656649f3efcd6b1743386991_og-image-2.png    ",
  },
  {
    id: 37,
    name: "JSON Crack",
    description: "Visualize JSON data as interactive graphs and diagrams.",
    category: "Tools",
    url: "https://jsoncrack.com",
    icon: "Braces",
    image:
      "https://cdn-1.webcatalog.io/catalog/json-crack/json-crack-social-preview.png?v=1714774835377",
  },
  {
    id: 38,
    name: "DevDocs",
    description:
      "A unified documentation browser for multiple programming languages and tools.",
    category: "Tools",
    url: "https://devdocs.io",
    icon: "BookOpen",
    image:
      "https://cdn.prod.website-files.com/61fc4082d1990015ce74e415/661e8bd614a1f5fef469a62d_devdocs%20documentation%20consulting.webp",
  },
];

export default details;
