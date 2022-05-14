import React from "react";

import {
  Calendar as CustomCalendar,
  LocaleConfig,
  DateCallbackHandler,
} from "react-native-calendars";
import { Feather } from "@expo/vector-icons";

import { Container } from "./styles";
import { useTheme } from "styled-components";
import { ptBR } from "./localeConfig";
import { generateInterval } from "./generateInterval";

LocaleConfig.locales["pt-BR"] = ptBR;
LocaleConfig.defaultLocale = "pt-BR";

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent: boolean;
  };
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
}

const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {
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
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
};

export { Calendar, MarkedDateProps, DayProps, generateInterval };
