import React from 'react';

const TaskDetail = (props) => {
    const {item,index} = props;
    return (
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
    );
};

export default TaskDetail;