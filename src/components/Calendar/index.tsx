import React from "react";

import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";
import { Feather } from "@expo/vector-icons";

import { Container } from "./styles";
import { useTheme } from "styled-components";

LocaleConfig.locales["pt-BR"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt-BR";

const Calendar = () => {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          name={direction == "left" ? "chevron-left" : "chevron-right"}
          size={24}
          color={theme.colors.text}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderWidth: 0.2,
        borderColor: "#fff",
        borderBottomColor: theme.colors.text_details,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.secondary_600,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date()}
    />
  );
};

export default Calendar;
