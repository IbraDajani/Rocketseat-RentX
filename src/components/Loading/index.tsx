import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

const Loading = () => {
  const { colors } = useTheme();
  return (
    <ActivityIndicator color={colors.main} size={"large"} style={{ flex: 1 }} />
  );
};

export default Loading;
