import React from "react";
import { useWindowDimensions } from "react-native";
import LogoSVG from "../../assets/logo_background_gray.svg";
import DoneSVG from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import ConfirmButton from "../../components/ConfirmButton";

const SchedulingComplete: React.FC = () => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <LogoSVG width={width} />
      <Content>
        <DoneSVG width={80} height={80} />
        <Title>Carro Alugado</Title>
        <Message>
          Agora você só precisa ir {"\n"} ate a concessionária da RENTX {"\n"} e
          pegar o seu automóvel
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" />
      </Footer>
    </Container>
  );
};

export default SchedulingComplete;
