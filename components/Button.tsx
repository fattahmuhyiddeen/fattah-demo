/* This component is to make Tinted Button when touched (like in waze) */
import React, { useRef } from "react";
import { Alert, Animated, Pressable, PressableProps } from "react-native";

const Root = Animated.createAnimatedComponent(Pressable);

interface ButtonProps extends PressableProps {
  style?: Record<string, unknown>
}

const Button: React.FC<ButtonProps> = (props) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const scaling = (toValue: number) =>
    Animated.spring(scaleAnim, { toValue, useNativeDriver: true }).start();
  return (
    <Root
    {...props}
    onPress={props.onPress}
    onPressIn={() => scaling(0.96)}
    onPressOut={() => scaling(1)}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...props.style,
        transform: [{ scale: scaleAnim }],
      }}
    />
  );
};

export default Button;
