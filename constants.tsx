
import React from 'react';
import { Briefcase, Home, HardHat, LandPlot, ShieldCheck, MessageSquare, FileText, CheckCircle, Search, Lightbulb, PlayCircle, ClipboardCheck } from 'lucide-react';
import { Service, ValuePillar, MethodologyStep } from './types.ts';

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: "Enfoque Práctico",
    description: "Orientado a negocios, evitando tecnicismos innecesarios para agilizar la toma de decisiones.",
    icon: <Briefcase className="w-5 h-5 text-champagne" strokeWidth={1.5} />
  },
  {
    title: "Claridad",
    description: "Lenguaje claro y directo. Aquí no solo se revisan documentos, se construyen decisiones seguras.",
    icon: <MessageSquare className="w-5 h-5 text-white" strokeWidth={1.5} />
  },
  {
    title: "Acompañamiento Real",
    description: "Soporte constante en decisiones importantes, más allá del simple trámite legal.",
    icon: <ShieldCheck className="w-5 h-5 text-champagne" strokeWidth={1.5} />
  },
  {
    title: "Visión Estratégica",
    description: "Confidencialidad y criterio profesional para respaldar el crecimiento de su proyecto.",
    icon: <Lightbulb className="w-5 h-5 text-white" strokeWidth={1.5} />
  }
];

export const SERVICES: Service[] = [
  {
    title: "Ventas y Negocios",
    description: "Acompañamiento legal para operaciones comerciales, contratos y estructuración de acuerdos. Ideal para empresas que buscan crecer con bases sólidas.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Bienes Raíces",
    description: "Asesoría integral en compra-venta, estudios legales de propiedades y estructuración de proyectos inmobiliarios.",
    icon: <Home className="w-6 h-6" />
  },
  {
    title: "Asfalto e Infraestructura",
    description: "Soporte legal especializado en contratos de obra, acuerdos comerciales y formalización de operaciones técnicas.",
    icon: <HardHat className="w-6 h-6" />
  },
  {
    title: "Proyecto Golden Estate",
    description: "Liderazgo legal y estructural garantizando seguridad jurídica y orden contractual para inversionistas con visión a largo plazo.",
    icon: <LandPlot className="w-6 h-6" />
  }
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    title: "Análisis Inicial",
    description: "Estudio profundo del caso o proyecto para entender el contexto.",
    icon: <Search className="w-5 h-5 text-champagne" strokeWidth={1.5} />
  },
  {
    title: "Evaluación",
    description: "Revisión legal y estratégica para identificar riesgos y oportunidades.",
    icon: <ClipboardCheck className="w-5 h-5 text-white" strokeWidth={1.5} />
  },
  {
    title: "Propuesta",
    description: "Definición clara de la ruta de acción a seguir.",
    icon: <Lightbulb className="w-5 h-5 text-champagne" strokeWidth={1.5} />
  },
  {
    title: "Ejecución",
    description: "Implementación y acompañamiento directo en cada paso.",
    icon: <PlayCircle className="w-5 h-5 text-white" strokeWidth={1.5} />
  },
  {
    title: "Seguimiento",
    description: "Respaldo continuo para garantizar orden y seguridad.",
    icon: <CheckCircle className="w-5 h-5 text-champagne" strokeWidth={1.5} />
  }
];
