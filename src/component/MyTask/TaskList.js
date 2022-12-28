import React from 'react';
import TaskDetail from './TaskDetail';

const TaskList = ({tasks}) => {

    console.log(tasks)
    return (
        <div>
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
          tasks?.map((item,index) => (
            <TaskDetail key={index} item={item} index={index}></TaskDetail>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default TaskList;