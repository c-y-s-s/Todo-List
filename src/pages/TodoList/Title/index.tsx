import React, { useState, ChangeEvent, FC, useRef } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputUnstyled from "@mui/base/InputUnstyled";
import { ITask } from "../../interface";
import AddCircleIcon from "@mui/icons-material/AddCircle";
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
  boxShadow: 20,
  p: 3,
};

const AddTaskTitleName = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #515070;
`;

const InputName = styled.div`
  padding: 0.55rem 0;
  font-size: 12px;
  color: #515070;
`;
const Input = styled.input`
  width: 320px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 0.25rem;
  border-radius: 12px;
  color: #515070;
  font-weight: 800;
  background: "#1A2027";
  border: none;
  box-shadow: 0px 2px 2px "#1A2027";
`;

const AddTaskButtonBlock = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 1rem 0 0;
`;

interface TaskButtonProps {
  primary?: string;
}
const TaskButton = styled.div<TaskButtonProps>`
  border: 1px solid #515070;
  font-size: 14px;
  border-radius: 5px;
  padding: 0.35rem 0.95rem;
  margin: 1.25rem 0.5rem 0.25rem 0.25rem;
  cursor: pointer;
  font-weight: 800;
  color: ${(props) => (props.primary ? "#fff" : "#515070")};
  background: ${(props) => props.primary && "#515070"};
`;
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
            <AddTodo onClick={handleOpen}>
              <AddCircleIcon sx={{ color: "#fff" }} />
            </AddTodo>
            {/* <Setting>設定</Setting> */}
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
          <AddTaskTitleName>Add Task</AddTaskTitleName>
          <div>
            <InputName>Text</InputName>
            <Input
              onChange={handleTextValue}
              type="text"
              value={addTaskData.textValue}
              placeholder="add task text..."
            />
          </div>

          <div>
            <InputName>Date</InputName>{" "}
            <Input type="date" onChange={handleDateValue} />
          </div>
          <div>
            <InputName>Time</InputName>
            <Input onChange={handleTimeValue} type="time" />
          </div>

          <AddTaskButtonBlock>
            <TaskButton onClick={handleClose}>Cancel</TaskButton>
            <TaskButton primary={"add"} onClick={handleAddTask}>
              Add
            </TaskButton>
          </AddTaskButtonBlock>
        </Box>
      </Modal>
    </>
  );
};
export default Title;
