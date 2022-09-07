import React, { useState, ChangeEvent, FC, useRef } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ITask } from "../../interface";
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0px;
  z-index: 999;
`;
const TitleBlock = styled.div`
  background: #ff8e6e;
  display: flex;
  width: 390px;
  justify-content: space-between;
  align-items: center;
  padding: 1.9rem 1rem;
`;
const TitleName = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  color: #fff;
`;

const IconBlock = styled.div`
  display: flex;
`;
const AddTodo = styled.div`
  padding: 0rem 1rem;
`;
const Setting = styled.div``;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FFBB91",
  boxShadow: 24,
  p: 4,
};

interface AddTaskDataType {
  id: number;
  textValue: string;
  dateValue: string;
  timeValue: string;
  isDone: boolean;
}

interface Props {
  data: ITask[];
  setData: React.Dispatch<React.SetStateAction<ITask[]>>;
}
const Title: FC<Props> = ({ data, setData }) => {
  const [open, setOpen] = useState(false);
  const dataId = useRef<number>(data[data.length - 1].id + 1);

  const [addTaskData, setAddTaskData] = useState<AddTaskDataType>({
    id: dataId.current,
    textValue: "",
    dateValue: "",
    timeValue: "",
    isDone: false,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTextValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setAddTaskData({ ...addTaskData, textValue: event.target.value });
  };
  const handleDateValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setAddTaskData({
      ...addTaskData,
      dateValue: event.target.value.split("-").join(""),
    });
  };
  const handleTimeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setAddTaskData({ ...addTaskData, timeValue: event.target.value });
  };

  const handleAddTask = () => {
    setData([
      {
        id: addTaskData.id++,
        textValue: addTaskData.textValue,
        dateValue: addTaskData.dateValue,
        timeValue: addTaskData.timeValue,
        isDone: addTaskData.isDone,
      },
      ...data,
    ]);
    handleClose();
  };
  console.log(addTaskData);
  return (
    <>
      <TitleContainer>
        <TitleBlock>
          <TitleName>Check List</TitleName>
          <IconBlock>
            <AddTodo onClick={handleOpen}>+</AddTodo>
            <Setting>設定</Setting>
          </IconBlock>
        </TitleBlock>
      </TitleContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>Add Task</div>
          <div>
            Text:{" "}
            <input
              onChange={handleTextValue}
              type="text"
              value={addTaskData.textValue}
            />
          </div>
          <div>
            Date: <input type="date" onChange={handleDateValue} />
          </div>
          <div>
            Time: <input onChange={handleTimeValue} type="time" />
          </div>
          <br />
          <br />
          <br />
          <div>
            <div onClick={handleClose}>Cancel</div>
            <div onClick={handleAddTask}>Add</div>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default Title;
