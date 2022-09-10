import React, { useState, ChangeEvent, FC, useRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ITask } from "../../interface";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import * as Styles from "./style";
import ReactLoading from "react-loading";
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
const LoadingStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-10%, -10%)",
  width: 500,
};

interface Props {
  data: ITask[];
  setData: React.Dispatch<React.SetStateAction<ITask[]>>;
}
const Title: FC<Props> = ({ data, setData }) => {
  const [open, setOpen] = useState(false);
  const dataId = useRef<number>(data[data.length - 1].id + 1);
  const [loading, setLoading] = useState<boolean>(false);
  const [addTaskData, setAddTaskData] = useState<ITask>({
    id: dataId.current,
    textValue: "",
    dateValue: "",
    timeValue: "",
    isDone: false,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.name) {
      case "textValue": {
        setAddTaskData({ ...addTaskData, textValue: event.target.value });
        break;
      }
      case "dateValue": {
        setAddTaskData({
          ...addTaskData,
          dateValue: event.target.value.split("-").join(""),
        });
        break;
      }
      case "timeValue": {
        setAddTaskData({ ...addTaskData, timeValue: event.target.value });
        break;
      }
      default:
    }
  };

  const handleAddTask = () => {
    console.log(addTaskData);
    if (
      addTaskData.textValue === "" ||
      addTaskData.dateValue === "" ||
      addTaskData.timeValue === ""
    ) {
      return;
    }
    handleClose();
    setLoading(true);

    setTimeout(() => {
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
      setLoading(false);

      setAddTaskData({
        ...addTaskData,
        textValue: "",
        dateValue: "",
        timeValue: "",
      });
    }, 1000);
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
          <>
            <Styles.AddTaskTitleName>Add Task</Styles.AddTaskTitleName>
            <div>
              <Styles.InputName>Text</Styles.InputName>
              <Styles.Input
                onChange={handleFormChange}
                type="text"
                value={addTaskData.textValue}
                placeholder="add task text..."
                name="textValue"
              />
            </div>
            <div>
              <Styles.InputName>Date</Styles.InputName>{" "}
              <Styles.Input
                type="date"
                onChange={handleFormChange}
                name="dateValue"
              />
            </div>
            <div>
              <Styles.InputName>Time</Styles.InputName>
              <Styles.Input
                onChange={handleFormChange}
                type="time"
                name="timeValue"
              />
            </div>
            <Styles.AddTaskButtonBlock>
              <Styles.TaskButton onClick={handleClose}>
                Cancel
              </Styles.TaskButton>
              <Styles.TaskButton primary={"add"} onClick={handleAddTask}>
                Add
              </Styles.TaskButton>
            </Styles.AddTaskButtonBlock>
          </>
        </Box>
      </Modal>

      <Modal
        open={loading}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={LoadingStyle}>
          <>
            <ReactLoading
              type={"spokes"}
              color={"#fff"}
              height={"20%"}
              width={"20%"}
            />
          </>
        </Box>
      </Modal>
    </>
  );
};
export default Title;
