import React, { forwardRef, useState } from "react";
import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type InputRef = React.ComponentRef<typeof TextInput>;

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    helper?: string;
    locked?: boolean; // read-only, grey, with a lock icon
    containerClassName?: string;
}

const Input = forwardRef<InputRef, InputProps>(
    (
        {
            label,
            error,
            helper,
            locked = false,
            secureTextEntry,
            editable = true,
            onFocus,
            onBlur,
            containerClassName = "",
            ...rest
        },
        ref
    ) => {
        const [focused, setFocused] = useState(false);
        const [hidden, setHidden] = useState(true);

        const isPassword = !!secureTextEntry;
        const isEditable = editable && !locked;

        const borderClass = error
            ? "border-[#EF4444]"
            : focused
                ? "border-primary"
                : "border-border";

        return (
            <View className={`w-full ${containerClassName}`}>
                {label ? (
                    <Text className="mb-2 font-interMedium text-[15px] text-text">{label}</Text>
                ) : null}

                <View
                    className={`h-14 flex-row items-center rounded-2xl border-2 px-4 ${borderClass} ${locked ? "bg-[#F1F5F9]" : "bg-white"
                        }`}
                >
                    <TextInput
                        ref={ref}
                        editable={isEditable}
                        secureTextEntry={isPassword && hidden}
                        placeholderTextColor="#94A3B8"
                        selectionColor="#2563EB"
                        cursorColor="#2563EB"
                        accessibilityLabel={label}
                        accessibilityState={{ disabled: !isEditable }}
                        onFocus={(e) => {
                            setFocused(true);
                            onFocus?.(e);
                        }}
                        onBlur={(e) => {
                            setFocused(false);
                            onBlur?.(e);
                        }}
                        style={{ paddingVertical: 0 }}
                        className={`h-full flex-1 font-inter text-[17px] ${locked ? "text-muted" : "text-text"
                            }`}
                        {...rest}
                    />

                    {isPassword ? (
                        <Pressable
                            onPress={() => setHidden((h) => !h)}
                            hitSlop={12}
                            accessibilityRole="button"
                            accessibilityLabel={hidden ? "Show password" : "Hide password"}
                        >
                            <Ionicons
                                name={hidden ? "eye-outline" : "eye-off-outline"}
                                size={22}
                                color="#64748B"
                            />
                        </Pressable>
                    ) : null}

                    {locked ? <Ionicons name="lock-closed" size={18} color="#94A3B8" /> : null}
                </View>

                {error ? (
                    <Text
                        accessibilityLiveRegion="polite"
                        className="mt-1.5 font-inter text-[13px] text-[#EF4444]"
                    >
                        {error}
                    </Text>
                ) : helper ? (
                    <Text className="mt-1.5 font-inter text-[13px] text-muted">{helper}</Text>
                ) : null}
            </View>
        );
    }
);

Input.displayName = "Input";
export default Input;