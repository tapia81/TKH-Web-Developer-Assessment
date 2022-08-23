import axios from "axios";
import { useState, useEffect } from "react";
import { RenderEditArea } from "./RenderEditArea";
export const Tasks = (props) => {
  const [newTask, setNewTask] = useState({
    taskDescription: "",
  });
  const [isEditRendered, setIsEditRendered] = useState("none");
  const [isCheckRendered, setIsCheckRendered] = useState("none");
  const [editId, setEditId] = useState();

  const handleClick = (event, completed) => {
    event.preventDefault();
    for (let i = 0; i < props.taskData.length; i++) {
      if (!completed) {
        setIsCheckRendered("block");
      }
    }
  };

  const handleInputChange = (event) => {
    const updatedTextArea = { [event.target.name]: event.target.value };
    const newTaskDescription = Object.assign(newTask, updatedTextArea);
    setNewTask(newTaskDescription);
  };

  const handleDisplayChange = (event) => {
    event.preventDefault();

    if (isEditRendered == "none") {
      setIsEditRendered("block");
    } else {
      setIsEditRendered("none");
    }
  };

  const createTask = async (event) => {
    event.preventDefault();
    await axios({
      url: `http://localhost:3001/`,
      method: "POST",
      data: newTask,
    })
      .then(() => {
        console.log("task added!!!");
      })
      .catch(console.error);
  };

  const deleteTask = async (event, id) => {
    event.preventDefault();
    await axios({
      url: `http://localhost:3001/${id}`,
      method: "DELETE",
    })
      .then(() => console.log("task deleted"))
      .catch(console.error);
  };

  const updateTask = async (id) => {
    await axios({
      url: `http://localhost:3001/${id}`,
      method: "PUT",
      data: newTask,
    })
      .then(() => {
        console.log("task edited");
        setIsEditRendered("none");
      })
      .catch(console.error);
  };
  useEffect(() => {});

  return (
    <div className="container">
      <h1>Todo</h1>
      <div className="task-submission">
        <textarea
          className="textarea"
          name="taskDescription"
          placeholder="e.g. Hello world"
          defaultValue={newTask.taskDescription}
          onChange={(e) => handleInputChange(e)}
        ></textarea>
        <div className="field is-grouped">
          <p className="control">
            <button
              className="button is-primary"
              onClick={(e) => createTask(e)}
            >
              Submit
            </button>
          </p>
          <p className="control">
            <button className="button is-light">Cancel</button>
          </p>
        </div>
      </div>
      <div className="tasks">
        <RenderEditArea
          handleInputChange={(e) => handleInputChange(e)}
          updateTask={(e) => updateTask(e)}
          handleDisplayChange={(e) => handleDisplayChange(e)}
          isEditRendered={isEditRendered}
          editId={editId}
        />
        {props.taskData.map((task, key) => {
          return (
            <div className="task-content" key={key}>
              <img
                className="check"
                style={{ display: `${isCheckRendered}` }}
                src={require("../assets/check.png")}
                id={key}
              />
              <div className="task">
                <p>{task.taskDescription}</p>
              </div>
              <div className="task-buttons">
                <button
                  className="button is-hovered"
                  onClick={(e) => handleClick(e, task.taskCompleted)}
                >
                  Done
                </button>
                <button
                  className="button is-hovered"
                  onClick={(e) => {
                    handleDisplayChange(e);
                    setEditId(task._id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="button is-hovered"
                  onClick={(e) => deleteTask(e, task._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
