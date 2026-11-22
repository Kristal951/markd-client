import { create } from "zustand";

interface onboardingStep {
  onboardingStep: number;
  totalSteps: number;
  setOnboardingStep: (onboardingStep: number) => void;
}

export const useOnboardingStore = create<onboardingStep>((set) => ({
  onboardingStep: 1,
  totalSteps: 4,
  setOnboardingStep: (onboardingStep) => set({ onboardingStep }),
}));
