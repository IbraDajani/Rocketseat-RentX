import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Container } from "./styles";
import { PressableProps } from "react-native";

interface Props extends PressableProps {
  color?: string;
}

const BackButton = ({ color, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};

export default BackButton;
