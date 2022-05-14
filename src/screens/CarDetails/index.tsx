import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
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
export interface Params {
  car: CarDTO;
}

import Button from "../../components/Button";
import { CarDTO } from "../../dtos/carDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

const CarDetails: React.FC = () => {
  const route = useRoute();

  const { car } = route.params as Params;

  const { navigate, goBack } = useNavigation();

  const handleConfirmRental = () => {
    navigate("Scheduling", {
      car,
    });
  };

  const handleGoBack = () => {
    goBack();
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>
      <CarImage>
        <ImageSlider imagesUrls={car.photos} />
      </CarImage>
      <Content>
        <Details>
          <Description>
            <Brand>{car?.brand}</Brand>
            <Name>{car?.name}</Name>
          </Description>
          <Rent>
            <Period>{car?.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <AccessoriesWrapper>
          {car.accessories.map((accessory) => (
            <Acessories
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </AccessoriesWrapper>

        <About>{car.about}</About>
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
