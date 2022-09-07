import React, { useState, FC } from "react";

import Stack from "@mui/material/Stack";
import {
  ThemeProvider,
  createTheme,
  experimental_sx as sx,
} from "@mui/material/styles";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import Badge from "@mui/material/Badge";

export interface ITask {
  text: string;
  isDone: Boolean;
  isDate: string;
}

export interface Props {
  data: ITask[];
  setData: React.Dispatch<React.SetStateAction<ITask[]>>;
  dateValue: Dayjs | null;
  setDateValue: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

// const theme = createTheme(
//   {
//     palette: {
//       primary: { main: "#1976d2" },
//     },
//   },
//   {
//     components: {
//       // Name of the component
//       MuiStaticDatePicker: {
//         styleOverrides: {
//           // Name of the slot
//           ActionBar: {
//             ".MuiCalendarPicker-root": {
//               border: "1px solid black",
//             },
//           },
//         },
//       },
//     },
//   }
// );
const DatePicker: FC<Props> = ({ data, setData, dateValue, setDateValue }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={dateValue}
            onChange={(newValue) => {
              setDateValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            renderDay={(day, selectedDays, pickersDayProps) => {
              let newMonth =
                day.month() + 1 > 9
                  ? (day.month() + 1).toString()
                  : "0" + (day.month() + 1).toString();
              let newDay =
                day.date() < 10
                  ? "0" + day.date().toString()
                  : day.date().toString();
              let newDate = day.year() + newMonth + newDay;

              const isDaySelected =
                !pickersDayProps.outsideCurrentMonth &&
                data
                  .map((item) => {
                    return item.isDate;
                  })
                  .indexOf(newDate) >= 0;
              return (
                <Badge
                  key={day.toString()}
                  overlap="circular"
                  badgeContent={isDaySelected ? "🌚" : undefined}
                >
                  <PickersDay {...pickersDayProps} />
                </Badge>
              );
            }}
            // componentsProps={{
            //   actionBar: {
            //     actions: ["today"],
            //   },
            // }}
          />
        </Stack>
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
