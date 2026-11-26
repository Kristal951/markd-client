import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  label: string;
  desc: string;
  selected: boolean;
  icon: React.ComponentType<SvgProps>;
  onPress: () => void;
}

const RoleCard = ({ label, desc, icon: Icon, selected, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
      className={`flex-row items-center rounded-3xl border-2 p-5 active:opacity-90 ${
        selected ? 'border-primary bg-primary-tint' : 'border-border bg-white'
      }`}
    >
      <View
        className={`h-16 w-16 items-center justify-center rounded-2xl ${
          selected ? 'bg-primary' : 'bg-primary-light'
        }`}
      >
        <Icon width={32} height={32} color={selected ? '#FFFFFF' : '#2563EB'} />
      </View>

      <View className="ml-4 flex-1 pr-8">
        <Text className="font-poppinsSemibold text-xl text-foreground">{label}</Text>
        <Text className="mt-1 font-inter text-base text-muted">{desc}</Text>
      </View>

      <View
        className={`absolute right-4 top-4 h-7 w-7 items-center justify-center rounded-full ${
          selected ? 'bg-primary' : 'border-2 border-[#CBD5E1]'
        }`}
      >
        {selected && <Ionicons name="checkmark" size={16} color="#FFFFFF" />}
      </View>
    </Pressable>
  );
};

export default RoleCard;