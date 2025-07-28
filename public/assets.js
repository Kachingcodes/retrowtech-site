'use client';
import human from './ai.jpg';
import hud_bg from './hud_bg4.gif';
import { LineChart, Bot, MessageCircle, PieChart } from 'lucide-react';
import graph from "@/public/animations/graph.json";
import conveyor from "@/public/animations/conveyor.json";
import chatbot from "@/public/animations/chatbot.json";
import dashboard from "@/public/animations/dashboard.json";


export const assets ={
human,
hud_bg
};

export const terminalLines = [
  "Running AI models...",
  "Analyzing trends...",
  "Automating decisions..."
];


export const brands = [
  {
    name: 'Lonadek Global Services',
    service: 'AI Marketing Campaign',
    logo: '/technova.png',
  },
  {
    name: 'FinEdge',
    service: 'Predictive Analytics',
    logo: '/finedge.png',
  },
  {
    name: 'RetailIQ',
    service: 'Customer Behavior Forecasting',
    logo: '/retailiq.png',
  },
  {
    name: 'MedAssist',
    service: 'Healthcare AI Assistant',
    logo: '/medassist.png',
  },
  // Add more as needed
];


export const capabilities = [
  {
    icon: <LineChart size={40} className="text-blue-400" />,
    title: "Predictive Analytics",
    description:
      "Anticipate trends and make data-driven decisions using AI-powered forecasting.",
    animation: graph,
  },
  {
    icon: <Bot size={40} className="text-green-400" />,
    title: "AI-Powered Automation",
    description:
      "Automate repetitive tasks and workflows to boost productivity and reduce errors.",
    animation: conveyor,
  },
  {
    icon: <MessageCircle size={40} className="text-purple-400" />,
    title: "Conversational AI & Chatbots",
    description:
      "Deliver personalized customer support through intelligent, human-like interactions.",
    animation: chatbot,
  },
  {
    icon: <PieChart size={40} className="text-yellow-400" />,
    title: "Business Intelligence Dashboards",
    description:
      "Visualize insights and track KPIs in real-time for smarter business operations.",
    animation: dashboard,
  },
];


export const caseStudies = [
  {
    name: "Globex Inc.",
    quote: "AI-powered automation reduced our processing time by over 40%. The impact was immediate and measurable.",
    result: "⬇ 40% in Processing Time",
    logo: "/globex.png", 
    link: "/case-studies/globex"
  },
  {
    name: "Apex Bank",
    quote: "With predictive analytics, we increased loan approvals without raising default risks.",
    result: "📈 25% Growth in Safe Loan Approvals",
    logo: "/apex.png",
    link: "/case-studies/apex"
  },
  {
    name: "TechNova",
    quote: "Our customer service scores jumped after implementing AI-powered chatbots.",
    result: "⭐ 4.9/5 Avg. Customer Satisfaction",
    logo: "/technova.png",
    link: "/case-studies/technova"
  }
];