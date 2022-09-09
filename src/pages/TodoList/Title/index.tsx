import React, { useState, ChangeEvent, FC, useRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ITask } from "../../interface";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import * as Styles from "./style";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "#FFBB91",
  boxShadow: 20,
  p: 3,
  borderRadius: 4,
};

interface Props {
  data: ITask[];
  setData: React.Dispatch<React.SetStateAction<ITask[]>>;
}
const Title: FC<Props> = ({ data, setData }) => {
  const [open, setOpen] = useState(false);
  const dataId = useRef<number>(data[data.length - 1].id + 1);

  const [addTaskData, setAddTaskData] = useState<ITask>({
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

  return (
    <>
      <Styles.TitleContainer>
        <Styles.TitleBlock>
          <Styles.TitleName>Check List</Styles.TitleName>
          <Styles.IconBlock>
            <Styles.AddTodo onClick={handleOpen}>
              <AddCircleIcon sx={{ color: "#fff" }} />
            </Styles.AddTodo>
            {/* <Setting>設定</Setting> */}
          </Styles.IconBlock>
        </Styles.TitleBlock>
      </Styles.TitleContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Styles.AddTaskTitleName>Add Task</Styles.AddTaskTitleName>
          <div>
            <Styles.InputName>Text</Styles.InputName>
            <Styles.Input
              onChange={handleTextValue}
              type="text"
              value={addTaskData.textValue}
              placeholder="add task text..."
            />
          </div>

          <div>
            <Styles.InputName>Date</Styles.InputName>{" "}
            <Styles.Input type="date" onChange={handleDateValue} />
          </div>
          <div>
            <Styles.InputName>Time</Styles.InputName>
            <Styles.Input onChange={handleTimeValue} type="time" />
          </div>

          <Styles.AddTaskButtonBlock>
            <Styles.TaskButton onClick={handleClose}>Cancel</Styles.TaskButton>
            <Styles.TaskButton primary={"add"} onClick={handleAddTask}>
              Add
            </Styles.TaskButton>
          </Styles.AddTaskButtonBlock>
        </Box>
      </Modal>
    </>
  );
};
export default Title;
