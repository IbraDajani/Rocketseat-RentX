import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../assets/logo.svg";
import Car from "../../components/Car";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/carDTO";
import Loading from "../../components/Loading";
import { useTheme } from "styled-components";

const Home: React.FC = () => {
  /**
   * Hooks
   */

  const { colors } = useTheme();

  /**
   * Navigation
   */

  const { navigate } = useNavigation();

  /**
   * States
   */

  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Callbacks
   */

  const handleCarDetails = (car: CarDTO) => {
    navigate("CarDetails", { car });
  };

  const handleOpenMyCars = () => {
    navigate("MyCars");
  };

  const fetchCars = useCallback(async () => {
    try {
      const response = await api.get("/cars");
      setCars(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Effects
   */

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

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
          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item: CarDTO) => item.id}
          renderItem={({ item }) => (
            <Car onPress={() => handleCarDetails(item)} data={item} />
          )}
        />
      )}

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons size={32} color={colors.shape} name="ios-car-sport" />
      </MyCarsButton>
    </Container>
  );
};

export default Home;
