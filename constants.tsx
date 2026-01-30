
import React from 'react';
import { Briefcase, ShieldCheck, TrendingUp, Landmark, Search, ClipboardList, Target, BarChart3, Clock } from 'lucide-react';
import { Service, ValuePillar, MethodologyStep } from './types.ts';

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: "30 Años de Trayectoria",
    description: "Tres décadas de experiencia sólida garantizando la salud financiera de diversos negocios.",
    icon: <Clock className="w-5 h-5 text-white" strokeWidth={1.5} />
  },
  {
    title: "Del Caos al Control",
    description: "Transformamos su estructura financiera en un sistema ordenado y funcional en 90 días.",
    icon: <TrendingUp className="w-5 h-5 text-white" strokeWidth={1.5} />
  },
  {
    title: "Tranquilidad Tributaria",
    description: "Cumplimiento ante las autoridades para que usted se enfoque en el desarrollo de su actividad.",
    icon: <ShieldCheck className="w-5 h-5 text-white" strokeWidth={1.5} />
  },
  {
    title: "Acceso a Crecimiento",
    description: "Estados financieros diseñados para facilitar la obtención de créditos y patentes.",
    icon: <Landmark className="w-5 h-5 text-white" strokeWidth={1.5} />
  }
];

export const SERVICES: Service[] = [
  {
    title: "Contabilidad Estratégica",
    description: "Más que registros: análisis financiero para optimizar utilidades y flujo de caja mensualmente.",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: "Transformación en 90 Días",
    description: "Protocolo para negocios que buscan sanear cuentas y formalizar procesos administrativos.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Gestión de Patentes y Créditos",
    description: "Trámites ágiles y estructuración de expedientes bancarios para financiamiento.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Asesoría Tributaria Preventiva",
    description: "Protección legal-contable para evitar sanciones y optimizar la carga fiscal bajo la ley.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    title: "S - Sistematización",
    description: "Diagnóstico profundo y ordenamiento de la información histórica.",
    icon: <Search className="w-5 h-5 text-white" strokeWidth={1.5} />
  },
  {
    title: "A - Análisis Financiero",
    description: "Evaluación de rentabilidad y detección de áreas de mejora en el capital.",
    icon: <ClipboardList className="w-5 h-5 text-white" strokeWidth={1.5} />
  },
  {
    title: "F - Formalización",
    description: "Estandarización de procesos contables bajo la normativa vigente.",
    icon: <ShieldCheck className="w-5 h-5 text-white" strokeWidth={1.5} />
  },
  {
    title: "E - Evolución",
    description: "Seguimiento estratégico para el crecimiento sostenido de su negocio.",
    icon: <TrendingUp className="w-5 h-5 text-white" strokeWidth={1.5} />
  }
];
