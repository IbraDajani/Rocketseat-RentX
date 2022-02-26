import React from "react";
import Acessories from "../../components/Acessories";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import speedSVG from "../../assets/speed.svg";
import accelerationSVG from "../../assets/acceleration.svg";
import forceSVG from "../../assets/force.svg";
import gasolineSVG from "../../assets/gasoline.svg";
import exchangeSVG from "../../assets/exchange.svg";
import peopleSVG from "../../assets/people.svg";
import { Feather } from "@expo/vector-icons";

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
  AccessoriesWrapper,
  Footer,
  CalendarIcon,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import Button from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

const SchedulingDetails: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const handleConfirmRental = () => {
    navigation.navigate("SchedulingComplete");
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
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};

export default SchedulingDetails;
