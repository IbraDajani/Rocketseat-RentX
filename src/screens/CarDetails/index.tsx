import React from "react";
import { useNavigation } from "@react-navigation/native";
import Acessories from "../../components/Acessories";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import speedSVG from "../../assets/speed.svg";
import accelerationSVG from "../../assets/acceleration.svg";
import forceSVG from "../../assets/force.svg";
import gasolineSVG from "../../assets/gasoline.svg";
import exchangeSVG from "../../assets/exchange.svg";
import peopleSVG from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  AccessoriesWrapper,
  Footer,
} from "./styles";
import Button from "../../components/Button";

const CarDetails: React.FC = () => {
  const navigation = useNavigation();

  const handleConfirmRental = () => {
    navigation.navigate("Scheduling");
  };

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <CarImage>
        <ImageSlider
          imagesUrls={[
            "https://beta.alpes.one/storage/app/uploads/public/5fb/85c/f66/5fb85cf668154370944208.png",
          ]}
        />
      </CarImage>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <AccessoriesWrapper>
          <Acessories name="380KM/h" icon={speedSVG} />
          <Acessories name="3.2s" icon={accelerationSVG} />
          <Acessories name="800HP" icon={forceSVG} />
          <Acessories name="Gasoline" icon={gasolineSVG} />
          <Acessories name="Auto" icon={exchangeSVG} />
          <Acessories name="2 Pessoas" icon={peopleSVG} />
        </AccessoriesWrapper>

        <About>
          Este é um automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. E um belíssimo carro
          para quem gosta de acelerar
        </About>
      </Content>
      <Footer>
        <Button
          onPress={handleConfirmRental}
          title="Escolher período do aluguel"
        />
      </Footer>
    </Container>
  );
};

export default CarDetails;
