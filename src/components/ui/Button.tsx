import React from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";

interface ButtonProps {
    title: string;
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
    variant?: "primary" | "outline";
    className?: string;
}

export default function Button({
    title,
    onPress,
    loading = false,
    disabled = false,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const inactive = disabled || loading;
    const isPrimary = variant === "primary";

    return (
        <Pressable
            onPress={onPress}
            disabled={inactive}
            accessibilityRole="button"
            accessibilityLabel={title}
            accessibilityState={{ disabled: inactive, busy: loading }}
            className={`h-14 items-center justify-center rounded-2xl active:opacity-90 ${isPrimary ? "bg-primary" : "border-2 border-primary bg-white"
                } ${inactive ? "opacity-60" : ""} ${className}`}
        >
            {loading ? (
                <ActivityIndicator color={isPrimary ? "#FFFFFF" : "#2563EB"} />
            ) : (
                <Text
                    className={`font-interSemibold text-lg ${isPrimary ? "text-white" : "text-primary"
                        }`}
                >
                    {title}
                </Text>
            )}
        </Pressable>
    );
}