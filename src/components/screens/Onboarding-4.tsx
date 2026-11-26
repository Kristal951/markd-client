import { useOnboardingStore } from "@/store/onboardingStore";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreenFour() {
    const { onboardingStep, totalSteps, setOnboardingStep } = useOnboardingStore();
    const router = useRouter()

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-primary relative">

            <View className="w-full h-[55%] absolute top-0 flex items-end justify-end">
                <Image
                    source={require("../../../assets/images/onboarding/onboarding-4-start.png")}
                    className="h-4/5 w-full"
                    resizeMode="cover"
                />
            </View>

            <View className="w-full h-[45%] bg-white absolute bottom-0 flex-col justify-between rounded-t-[50px] px-10 pt-10 pb-5">
                <View className="w-full flex gap-3 items-center justify-center px-7.5">
                    <Text className="text-center text-2xl font-poppinsSemibold text-text">Ready to begin?</Text>
                    <Text className="text-center text-muted text-lg font-inter">Sign in now to start get <Text className="font-poppinsSemibold text-primary">
                        Markd
                    </Text>.</Text>
                </View>

                <View>
                    {
                        totalSteps > 0 && (
                            <View className="flex-row items-center justify-center gap-2 mt-5">
                                {
                                    Array.from({ length: totalSteps }).map((_, i) => (
                                        <View key={i} className={`rounded-full ${onboardingStep === i + 1 ? "bg-primary w-4" : "bg-muted w-2"} h-2`}></View>
                                    ))
                                }
                            </View>
                        )
                    }

                    <TouchableOpacity onPress={() => router.replace('/auth/role')} className="bg-primary w-full py-3 rounded-lg mt-10">
                        <Text className="text-white text-center font-semibold">Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}