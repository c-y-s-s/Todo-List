import React, { FC } from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import Badge from "@mui/material/Badge";
import { ITask } from "../../interface";
import Brightness1Icon from "@mui/icons-material/Brightness1";
export interface Props {
  data: ITask[];
  setData: React.Dispatch<React.SetStateAction<ITask[]>>;
  dateValue: Dayjs | null;
  setDateValue: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

const DatePicker: FC<Props> = ({ data, setData, dateValue, setDateValue }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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

            // 日期是有資料
            const isDaySelected =
              !pickersDayProps.outsideCurrentMonth &&
              data
                .map((item) => {
                  return item.dateValue;
                })
                .indexOf(newDate) >= 0;

            // 判斷選中日期的資料還有沒有未完成
            const dateIsDone = data
              .filter((item) => {
                return item.dateValue === newDate;
              })
              .some((item) => {
                return item.isDone === false;
              });

            return (
              <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={
                  isDaySelected && dateIsDone ? (
                    <Brightness1Icon
                      sx={{
                        width: "10px",
                        color: "#ff8e6e",
                      }}
                    />
                  ) : undefined
                }
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
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
