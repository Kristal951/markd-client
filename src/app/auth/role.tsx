import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import RoleCard from "@/components/ui/RoleCard";
import StudentIcon from "@/assets/icons/Student_icon.svg";
import LecturerIcon from "@/assets/icons/Lecturer_icon.svg";

type Role = "student" | "lecturer";

export default function RoleSelection() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("student");

  const onContinue = () => {
    router.push({ pathname: "/auth/login", params: { role } });
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-5 pb-6 pt-8">
          <View className="items-center">
            <View className="h-20 w-24">
              <Image
                source={require("@/assets/images/Markd_logo_2.png")}
                className="h-full w-full"
                resizeMode="contain"
              />
            </View>
            <Text className="font-poppinsSemibold text-xl text-text">Markd.</Text>
          </View>

          <View className="mt-12">
            <Text className="font-poppinsSemibold text-2xl text-text">Continue as</Text>
            <Text className="mt-1 font-inter text-lg text-muted">
              Choose how you want to get started
            </Text>
          </View>

          <View className="mt-8 gap-4" accessibilityRole="radiogroup">
            <RoleCard
              label="Student"
              desc="Mark attendance and track your records."
              icon={StudentIcon}
              selected={role === "student"}
              onPress={() => setRole("student")}
            />
            <RoleCard
              label="Lecturer"
              desc="Run attendance sessions and manage your courses."
              icon={LecturerIcon}
              selected={role === "lecturer"}
              onPress={() => setRole("lecturer")}
            />
          </View>

          <View className="flex-1" />

          <TouchableOpacity
            onPress={onContinue}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="Continue"
            className="mt-8 items-center justify-center rounded-2xl bg-primary py-4"
          >
            <Text className="font-inter text-lg text-white">Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}