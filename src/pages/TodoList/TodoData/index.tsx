import React, { FC } from "react";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import { ITask } from "../../interface";
const ContentContainer = styled.div``;
const ContentBlock = styled.div`
  background: #ffbb91;
  width: 390px;
  min-height: ;
  margin: auto;
  padding: 1.5rem 1.2rem;
  min-height: 55vh;
`;
const TextItem = styled.div`
  display: flex;
  align-items: center;
  color: #515070;
  padding: 0.7rem 0rem;
  margin: 1rem;
  &:not(:last-of-type) {
    border-bottom: 2px solid #fff;
  }
`;
const CheckInput = styled.input`
  width: 23px;
  height: 23px;
  border: none;
`;
const TextBlock = styled.div`
  margin: 0px 0px 0px 0.75rem;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
const TextTime = styled.div`
  padding-top: 0.25rem;
  font-size: 12px;
`;

interface Props {
  dateValue: Dayjs | null;
  data: ITask[];
}

export const TodoData: FC<Props> = ({ dateValue, data }) => {
  let newMonth = null;
  let newDay = null;
  let newDate: string = "";
  if (dateValue !== null) {
    newMonth =
      dateValue.month() + 1 > 9
        ? (dateValue.month() + 1).toString()
        : "0" + (dateValue.month() + 1).toString();

    newDay =
      dateValue.date() < 10
        ? "0" + dateValue.date().toString()
        : dateValue.date().toString();

    newDate = dateValue.year() + newMonth + newDay;
  }

  console.log(data[0].dateValue == newDate, "bb");

  return (
    <>
      <ContentContainer>
        <ContentBlock>
          {data
            .filter((item) => newDate === item.dateValue)
            .map((item) => {
              return (
                <TextItem>
                  <CheckInput type="checkbox" />
                  <TextBlock>
                    <Text>{item.textValue}</Text>
                    <TextTime>at {item.timeValue} </TextTime>
                  </TextBlock>
                </TextItem>
              );
            })}
        </ContentBlock>
      </ContentContainer>
    </>
  );
};

export default TodoData;
