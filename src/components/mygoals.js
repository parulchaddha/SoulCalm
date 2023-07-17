// import { useState } from "react";
// import styled from "styled-components";
// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;
// const Button = styled.button`
//   display:inline-block;
//   flex: 1;
//   border: none;
//   background-color: teal;
//   color: white;
//   height: 30px;
//   width: 50px;
//   border-radius: 2px;
//   cursor: pointer;
// `;
// const Text = styled.input`
//   border: 2px solid #000;
//   width: 200px;
//   padding: 5px;
//   border-radius: 2px;
//   margin: 5px;
// `;
// const TaskCount = styled.span`
//   margin: 10px;
// `;
// const Tasks = styled.div`
// `;
// const LIST = styled.li`
//     listStyle:"none";
//     text-decoration: "line-through";
// `;
// const Mygoals = () => {
//   const [input, setInput] = useState("");
//   const [completedTaskCount, setCompletedTaskCount] = useState(0);
//   const [todoList, setTodoList] = useState([]);
// const handleClick = () => {
//     const id = todoList.length + 1;
//     setTodoList((prev) => [
//       ...prev,
//       {
//         id: id,
//         task: input,
//         complete: false,
//       }
//     ]);
//     setInput("");
//   };
//   const handleComplete = (id) => {
//     let list = todoList.map((task) => {
//       let item = {};
//       if (task.id == id) {
//         if (!task.complete){
//             //Task is pending, modifying it to complete and increment the count
//             setCompletedTaskCount(completedTaskCount + 1);
//         } 
//         else {
//             //Task is complete, modifying it back to pending, decrement Complete count
//             setCompletedTaskCount(completedTaskCount - 1);
//         }
// item = { ...task, complete: !task.complete };
//       } else item = { ...task };
// return item;
//     });
//     setTodoList(list);
//   };
// return (
//     <Container>
//       <div>
//           <h2>Todo List</h2>
//           <Text value={input} onInput={(e) =>setInput(e.target.value)} />
//           <Button onClick={() => handleClick()}>Add</Button>
//         <Tasks>
//           <TaskCount>
//             <b>Pending Tasks</b> {todoList.length - completedTaskCount}
//           </TaskCount>
//           <TaskCount>
//             <b>Completed Tasks</b> {completedTaskCount}
//           </TaskCount>
//         </Tasks>
//         <div>
//           <ul>
//             {todoList.map((todo) => {
//               return (
//                 <LIST
//                   complete = {todo.complete}
//                   id={todo.id}
//                   onClick={() => handleComplete(todo.id)}
//                   style={{
//                     listStyle: "none",
//                     textDecoration: todo.complete && "line-through",
//                   }}
//                 >
//                   {todo.task}
//                 </LIST>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </Container>
//   );
// };
// export default Mygoals;
// import { useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;

// const Button = styled.button`
//   display: inline-block;
//   flex: 1;
//   border: none;
//   background-color: teal;
//   color: white;
//   height: 30px;
//   width: 50px;
//   border-radius: 2px;
//   cursor: pointer;
// `;

// const Text = styled.input`
//   border: 2px solid #000;
//   width: 200px;
//   padding: 5px;
//   border-radius: 2px;
//   margin: 5px;
// `;

// const TaskCount = styled.span`
//   margin: 10px;
// `;

// const TaskRow = styled.div`
//   display: flex;
//   width: 100%;
// `;

// const TaskCard = styled.div`
//   flex: 1;
//   max-width: calc(25% - 10px);
//   border: 1px solid #ccc;
//   padding: 10px;
//   margin: 5px;
//   text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
//   background-color: ${(props) => props.color};
// `;

// const Mygoals = () => {
//   const [input, setInput] = useState("");
//   const [completedTaskCount, setCompletedTaskCount] = useState(0);
//   const [todoList, setTodoList] = useState([]);

//   const randomColor = () => {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   const handleClick = () => {
//     const id = todoList.length + 1;
//     const color = randomColor();
//     setTodoList((prev) => [
//       ...prev,
//       {
//         id: id,
//         task: input,
//         complete: false,
//         color: color,
//       },
//     ]);
//     setInput("");
//   };

//   const handleComplete = (id) => {
//     let list = todoList.map((task) => {
//       if (task.id === id) {
//         const updatedTask = { ...task, complete: !task.complete };
//         setCompletedTaskCount(
//           task.complete ? completedTaskCount - 1 : completedTaskCount + 1
//         );
//         return updatedTask;
//       } else {
//         return task;
//       }
//     });
//     setTodoList(list);
//   };

//   const renderTaskRows = () => {
//     const rows = [];
//     const totalTasks = todoList.length;
//     let rowStartIndex = 0;

//     while (rowStartIndex < totalTasks) {
//       const rowTasks = todoList.slice(rowStartIndex, rowStartIndex + 4);
//       rows.push(
//         <TaskRow key={`row-${rowStartIndex}`}>
//           {rowTasks.map((task) => (
//             <TaskCard
//               complete={task.complete}
//               color={task.color}
//               key={task.id}
//               onClick={() => handleComplete(task.id)}
//             >
//               {task.task}
//             </TaskCard>
//           ))}
//         </TaskRow>
//       );

//       rowStartIndex += 4;
//     }

//     return rows;
//   };

//   return (
//     <Container>
//       <div>
//         <h2>Todo List</h2>
//         <Text value={input} onInput={(e) => setInput(e.target.value)} />
//         <Button onClick={handleClick}>Add</Button>
//         <TaskCount>
//           <b>Pending Tasks</b> {todoList.length - completedTaskCount}
//         </TaskCount>
//         <TaskCount>
//           <b>Completed Tasks</b> {completedTaskCount}
//         </TaskCount>
//         {renderTaskRows()}
//       </div>
//     </Container>
//   );
// };

// export default Mygoals;


import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  display: inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;

const Text = styled.input`
  border: 2px solid #000;
  width: 200px;
  padding: 5px;
  border-radius: 2px;
  margin: 5px;
`;

const TaskCount = styled.span`
  margin: 10px;
`;

const TaskRow = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const TaskCard = styled.div`
  width: 100px; /* Fixed width for square shape */
  height: 100px; /* Fixed height for square shape */
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; /* Center the text in the card */
  background-color: ${(props) => props.color};
`;

const TaskDescription = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`;

const Mygoals = () => {
  const [input, setInput] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClick = () => {
    const id = todoList.length + 1;
    const color = randomColor();
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
        color: color,
      },
    ]);
    setInput("");
  };

  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task, complete: !task.complete };
        setCompletedTaskCount(
          task.complete ? completedTaskCount - 1 : completedTaskCount + 1
        );
        return updatedTask;
      } else {
        return task;
      }
    });
    setTodoList(list);
  };

  const renderTaskRows = () => {
    const rows = [];
    const totalTasks = todoList.length;
    let rowStartIndex = 0;

    while (rowStartIndex < totalTasks) {
      const rowTasks = todoList.slice(rowStartIndex, rowStartIndex + 4);
      rows.push(
        <TaskRow key={`row-${rowStartIndex}`}>
          {rowTasks.map((task) => (
            <TaskCard
              complete={task.complete}
              color={task.color}
              key={task.id}
              onClick={() => handleComplete(task.id)}
            >
              {task.task}
            </TaskCard>
          ))}
        </TaskRow>
      );

      rowStartIndex += 4;
    }

    return rows;
  };

  return (
    <Container>
      <div>
        <h2>Todo List</h2>
        <Text value={input} onInput={(e) => setInput(e.target.value)} />
        <Button onClick={handleClick}>Add</Button>
        <TaskCount>
          <b>Pending Tasks</b> {todoList.length - completedTaskCount}
        </TaskCount>
        <TaskCount>
          <b>Completed Tasks</b> {completedTaskCount}
        </TaskCount>
        {renderTaskRows()}
      </div>
    </Container>
  );
};

export default Mygoals;
