// All content below is sourced strictly from Shruthyy M B's resume.
// Replace TODO markers with real links/assets when available.

export const profile = {
  name: "Shruthyy M B",
  role: "Software Developer & AI Engineer",
  tagline:
    "I build real-time AI systems and user-centric web applications — turning language, data, and interfaces into something people can actually use.",
  email: "shruthyymalathkar07@gmail.com",
  phone: "+91-8778711947",
  linkedin: "https://linkedin.com/in/shruthyy-m-b-235baa283",
  github: "https://github.com/shruthyymalathkar07-maker",
  githubRepos: "https://github.com/shruthyymalathkar07-maker?tab=repositories",
  location: "Chennai, India",
  summary:
    "Software Developer & AI Engineer with hands-on experience in Python, Machine Learning, Web Development, SQL, and NLP-based applications. Skilled in designing scalable solutions, building real-time AI systems, and developing user-centric web applications. Proven ability to deliver efficient, innovative projects through internships and academic work, with a strong foundation in data structures, OOP, and problem-solving. Passionate about emerging technologies and eager to contribute to a dynamic software development team.",
  resumeFile: "/resume.pdf", // TODO: drop your resume PDF into /public as resume.pdf
};

export const strengths = [
  "Critical Thinking",
  "Clear Communication",
  "Teamwork & Collaboration",
  "Fast, Hands-on Learning",
];

export const experience = [
  {
    role: "Artificial Intelligence Intern",
    company: "RETECH Solutions Pvt. Ltd.",
    location: "Chennai, India",
    points: [
      "Designed and implemented an AI-powered language translation system using Neural Machine Translation (NMT) models.",
      "Fine-tuned models on domain-specific datasets to improve translation quality and reduce response time.",
      "Integrated the system into real-time multilingual applications, boosting communication efficiency across diverse users.",
    ],
  },
  {
    role: "Web Developer",
    company: "Vulture Lines Tech Management Pvt. Ltd.",
    location: "Chennai, India",
    points: [
      "Designed and prototyped a user-centric E-Book website using Figma, HTML, CSS, and JavaScript.",
      "Optimized responsiveness and navigation speed, ensuring smooth interaction with minimal latency.",
      "Delivered a reliable prototype that improved user engagement and usability.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Artificial Intelligence & Data Science",
    institution: "Dhanalakshmi College of Engineering",
    location: "Chennai, India",
    period: "2022 – 2026",
  },
  {
    degree: "AISSCE (Senior Secondary)",
    institution: "Narayana e-Techno",
    location: "Chennai, India",
    period: "2020 – 2022",
  },
  {
    degree: "AISSE (Secondary)",
    institution: "D.A.V. Public School",
    location: "Chennai, India",
    period: "2019 – 2020",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "SQL", "HTML", "CSS", "JavaScript"],
  },
  {
    label: "Backend & APIs",
    items: ["Flask", "Django", ".NET", "REST APIs"],
  },
  {
    label: "AI & Machine Learning",
    items: [
      "Supervised & Unsupervised Learning",
      "Regression & Classification",
      "Clustering",
      "NLP",
      "Neural Machine Translation",
      "Decision Trees / Random Forest",
      "SVM",
      "KNN",
      "Naive Bayes",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    label: "Deep Learning",
    items: ["TensorFlow", "Keras", "CNN", "Transfer Learning", "MobileNetV2"],
  },
  {
    label: "Python Libraries",
    items: ["NumPy", "Pandas", "Matplotlib", "OpenCV", "SciPy"],
  },
  {
    label: "Databases",
    items: ["SQL", "DBMS", "MongoDB (Basics)"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Figma"],
  },
  {
    label: "Core Practices",
    items: ["Data Structures", "OOP", "SDLC", "Agile", "Test-Driven Development"],
  },
];

export const projects = [
  {
    title: "Tresora – Event Management Website",
    description:
      "A modern and responsive event management website for booking and planning surprise events with an elegant user interface.",
    tech: ["React", "Vite", "TypeScript", "HTML", "CSS", "JavaScript"],
    features: [
      "Elegant, responsive booking flow for surprise events",
      "Built with a modern React + TypeScript stack",
    ],
    github: "https://github.com/shruthyymalathkar07-maker/tresora-event-planner",
  },
  {
    title: "Banana Leaf Disease Detection",
    description:
      "An AI-powered farm assistant that detects banana plant diseases from a leaf photo and gives instant, multilingual diagnosis and care guidance.",
    tech: ["Python", "Deep Learning", "Computer Vision"],
    features: [
      "Instant disease detection from an uploaded leaf image",
      "Multilingual farm assistant chat for fertilizer, water, and soil queries",
    ],
    github: "https://github.com/shruthyymalathkar07-maker/banana_leaf_disease_detection",
    demo: "",
    screenshots: ["/projects/banana-leaf-1.png", "/projects/banana-leaf-2.png"],
  },
  {
    title: "Multimodal Emotion Detection System",
    description:
      "A real-time emotion detection system that reads signals across text, audio, and video — combining NLP, speech recognition, and computer vision into one live pipeline.",
    tech: ["Python", "NLP", "OpenCV", "Speech Recognition", "DeepFace"],
    features: [
      "Real-time detection across multiple input modes",
      "Combines facial, vocal, and textual emotion cues",
    ],
    github: "https://github.com/shruthyymalathkar07-maker/AI-Emotion-Detection-",
    demo: "",
  },
  {
    title: "College Inquiry Chatbot",
    description:
      "A Flask-based chatbot that automates student query handling, giving instant, accurate responses instead of routing every question through a human.",
    tech: ["Python", "Flask"],
    features: [
      "Automated handling of common student queries",
      "Real-time conversational responses",
    ],
    github: "https://github.com/shruthyymalathkar07-maker/ai_chatbot",
    demo: "",
    screenshots: ["/projects/chatbot-1.png"],
  },
  {
    title: "Language Translation System",
    description:
      "An NLP-based translation system built on pre-trained models, translating English into Tamil and Malayalam to bridge regional language gaps.",
    tech: ["Python", "NLP", "Pre-trained Models"],
    features: [
      "English → Tamil translation",
      "English → Malayalam translation",
    ],
    github: "https://github.com/shruthyymalathkar07-maker/AI_Translator",
    demo: "",
  },
  {
    title: "AI Travel Companion Application",
    description:
      "A Streamlit travel planning app that turns a destination into a ready itinerary, with budget-aware recommendations built in.",
    tech: ["Python", "Streamlit"],
    features: [
      "Itinerary generation",
      "Budget-based recommendations",
    ],
    github: "https://github.com/shruthyymalathkar07-maker/AI-Travel-app",
    demo: "",
  },
  {
    title:"Desktop Wellness Reminder",
    description:"A cute desktop wellness companion that provides friendly reminders to take breaks, stay hydrated, and maintain healthy work habits.",
    tech: ["Electron.js","HTML","CSS","JavaScript"],
    features: ["Smart wellness reminders",
    "Hydration and break alerts",
    "Cute desktop companion interface",
    "Automatic reminder notifications",
  ],
    github:"",
    demo:"/WhatsApp Video 2026-07-15 at 9.05.32 AM.mp4",
  },
];

export const certifications = [
  { name: "Process Mining Fundamentals", issuer: "Celonis Academy" },
  { name: "Cyber Security", issuer: "TCS iON" },
  { name: "Data Analytics Assessment", issuer: "Learntube AI" },
  { name: "Modeling of Building Environment", issuer: "Bentley Education" },
];
