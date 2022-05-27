import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        <Task/>
        {/* Task List */}
         {/* <li>{props.tasks}</li> */}
        {/* <li>{props.tasklist}</li> */}
     
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
