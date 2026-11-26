
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const BackButton = ({size = 24} : {size?: number}) => {
    const router = useRouter();

    return (
        <TouchableOpacity
            onPress={() => router.back()}
            className="p-2"
            activeOpacity={0.7}
        >
            <Ionicons name="chevron-back" size={size} color="black" />
        </TouchableOpacity>
    );
};

export default BackButton;
