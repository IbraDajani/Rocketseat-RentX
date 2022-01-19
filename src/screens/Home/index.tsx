import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import Logo from "../../assets/logo.svg";
import Car from "../../components/Car";
import CarDetails from "../CarDetails";

const Home: React.FC = () => {
  const carDataOne = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao Dia",
      price: 120,
    },
    thumbnail:
      "https://beta.alpes.one/storage/app/uploads/public/5fb/85c/f66/5fb85cf668154370944208.png",
  };
  // const carDataTwo = {
  //   brand: "Porsche",
  //   name: "Panamera",
  //   rent: {
  //     period: "Ao Dia",
  //     price: 340,
  //   },
  //   thumbnail:
  //     "https://mediastorage.medula.co.uk/medialibrary/primerentcar.com/images/full-landscape2-fb/751063484932355.png",
  // };
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(112)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => <Car data={carDataOne} />}
      />
    </Container>
  );
};

export default Home;
