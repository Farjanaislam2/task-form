import React, { useEffect, useState } from "react";

const MyTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "First Title",
        description: "Text description",
      },
      {
        id: 2,
        title: "Second Title",
        description: "Text description",
      },
      {
        id: 3,
        title: "third Title",
        description: "Text description",
      },
      {
        id: 4,
        title: "Fourth Title",
        description: "Text description",
      },
    ];
    setTasks(data);
  }, []);

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg border-4 p-8 m-auto w-auto">
      <h1 className="text-4xl font-bold mt-5 mb-8">My Task</h1>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Task Name
            </th>
            <th scope="col" class="py-3 px-6">
              Task
            </th>
            <th scope="col" class="py-3 px-6">
              Update
            </th>
            <th scope="col" class="py-3 px-6">
              Delete
            </th>
            <th scope="col" class="py-3 px-6">
              Completed
            </th>
          </tr>
        </thead>
        <tbody>
          {
          tasks.map((item,index) => (
            <tr key={index} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                 <td class="py-4 px-6"> {item.title}
              </td>
                 <td class="py-4 px-6"> {item.description}
              </td>
              <td class="py-4 px-6">
                <button
                  type="button"
                  class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Update
                </button>
              </td>
              <td class="py-4 px-6">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Delete
                </button>
              </td>
              <td class="py-4 px-6">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTask;
