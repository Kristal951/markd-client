import { useRef, useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";
import Input, { InputRef } from "@/components/ui/Input";

type Role = "student" | "lecturer";

export default function LoginScreen() {
    const router = useRouter();
    const { role } = useLocalSearchParams<{ role: Role }>();
    const isStudent = role !== "lecturer";

    const passwordRef = useRef<InputRef>(null);
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ identifier?: string; password?: string; form?: string }>({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const next: typeof errors = {};
        if (!identifier.trim()) {
            next.identifier = isStudent ? "Enter your matric number" : "Enter your staff ID";
        }
        if (!password) next.password = "Enter your password";
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onLogin = async () => {
        if (!validate()) return;
        setLoading(true);
        setErrors({});
        try {
            // TODO: call your API here with { identifier, password, role }
            // const { token, user } = await api.login(...)
            // await signIn(token, user);
            router.replace("/"); // the gate in index.tsx sends the user to the right home
        } catch {
            setErrors({ form: "Incorrect details. Check them and try again." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView className="flex-1">
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    className="flex-1"
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View className="flex-1 px-5 pb-6 pt-2">
                        <View className="flex-row items-center justify-between py-2">
                            <BackButton size={30} />
                            <View className="rounded-full bg-primary-light px-4 py-2">
                                <Text className="font-interSemibold text-[15px] text-primary">
                                    {isStudent ? "Student" : "Lecturer"}
                                </Text>
                            </View>
                        </View>

                        <View className="mt-8">
                            <Text className="font-poppinsBold text-[32px] text-text">Welcome back</Text>
                            <Text className="mt-1 font-inter text-base text-muted">
                                {isStudent ? "Log in to your student account" : "Log in to your lecturer account"}
                            </Text>
                        </View>

                        <View className="mt-16 gap-8">
                            <Input
                                label={isStudent ? "Matric number" : "Staff ID"}
                                placeholder={isStudent ? "e.g. 24/123CSC/001" : "e.g. STF/0245"}
                                value={identifier}
                                onChangeText={setIdentifier}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                onSubmitEditing={() => passwordRef.current?.focus()}
                                error={errors.identifier}
                            />
                            <Input
                                ref={passwordRef}
                                label="Password"
                                placeholder="Enter your password"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                                autoCapitalize="none"
                                returnKeyType="done"
                                onSubmitEditing={onLogin}
                                error={errors.password}
                            />
                        </View>

                        <Pressable
                            // onPress={() => router.push("/forgot-password")}
                            hitSlop={10}
                            className="mt-3 self-end"
                            accessibilityRole="link"
                        >
                            <Text className="font-interMedium text-[15px] text-primary">Forgot password?</Text>
                        </Pressable>

                        {errors.form ? (
                            <Text className="mt-4 font-inter text-[14px] text-[#EF4444]">{errors.form}</Text>
                        ) : null}

                        <View className="flex-1" />

                        <Button title="Sign in" onPress={onLogin} loading={loading} className="mt-6" />
                        <View className="mt-4 flex-row items-center justify-center">
                            <Text className="font-inter text-base text-muted">Don't have an account? </Text>
                            <Pressable
                                onPress={() => router.push({ pathname: "/auth/signup", params: { role } })}
                                hitSlop={10}
                                accessibilityRole="link"
                            >
                                <Text className="font-interSemibold text-base text-primary">Sign up</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}