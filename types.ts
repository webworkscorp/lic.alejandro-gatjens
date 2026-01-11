// Import React to resolve the 'React' namespace error for React.ReactNode usage.
import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ValuePillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface MethodologyStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}