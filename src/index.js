import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';

const t = [
  {
    name: "Fairel les courses",
  },
  {
    name: "Apprendre React",
  },
  {
    name: "Faire du sport",
  }
]

function App() {
  return (
    <div>
      <h1>Hello World !</h1>
      <TaskList tasks={t}/>
    </div>
  );
}


function Task({name}) {
  return(
    <li>{name}</li>
  )
}

function TaskList({ tasks }) {
  
  return(

    <ul>
      {tasks.map(task => (
        <Task key={task.name} name={task.name} />
      ))}
    </ul>

  )

}



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);



