import OnboardingScreenOne from "@/components/screens/Onboarding-1";
import OnboardingScreenTwo from "@/components/screens/Onboarding-2";
import OnboardingScreenThree from "@/components/screens/Onboarding-3";
import OnboardingScreenFour from "@/components/screens/Onboarding-4";
import { useOnboardingStore } from "@/store/onboardingStore";

export default function Index() {
  const { onboardingStep } = useOnboardingStore()
  return (
    <>
      {
        onboardingStep === 1 ? (
          <OnboardingScreenOne />
        ) : onboardingStep === 2 ? (
          <OnboardingScreenTwo />
        ) : onboardingStep === 3 ? (
          <OnboardingScreenThree />
        ) : (
          <OnboardingScreenFour />
        )
      }
    </>
  );
}