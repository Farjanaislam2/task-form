import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";

const MyTask = () => {
  const [tasks, setTasks] = useState([]);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [isAdded,setIsAdded] = useState(false);
  console.log(tasks)

  useEffect(() => {
    // const data = [
    //   {
    //     id: 1,
    //     title: "First Title",
    //     description: "Text description",
    //   },
    //   {
    //     id: 2,
    //     title: "Second Title",
    //     description: "Text description",
    //   },
    //   {
    //     id: 3,
    //     title: "third Title",
    //     description: "Text description",
    //   },
    //   {
    //     id: 4,
    //     title: "Fourth Title",
    //     description: "Text description",
    //   },
    // ];
    // setTasks(data);
  }, []);

  const createTask =(e) =>{
    e.preventDefault();
    const taskItem = {
      id:5,
      title,
      description
    }
    const taskData = tasks;
    taskData.push(taskItem);
    setTasks(taskData);
    setTitle('')
    setDescription('');
   }

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg border-4 p-8 m-auto w-auto">
      <h1 className="text-4xl font-bold mt-5 mb-8">My Task</h1>
      <form onSubmit={(e) => createTask(e)} className='w-96 justify-center align-middle m-auto border rounded-md border-md p-6 mt-10'>
  <div class="mb-6">
  
    <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Write your Task Title" required/>
   
  </div>
  <div class="mb-6">
    
    <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Write your Task " required/>
    
  </div>
 
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    <TaskList tasks={tasks}></TaskList>
    
    </div>
  );
};

export default MyTask;
