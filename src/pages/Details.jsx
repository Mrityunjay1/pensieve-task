import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(id);
  const loadUserData = async () => {
    const response = await fetch(`http://52.74.166.134:3000/api/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${localStorage.getItem("token")}`,
      },
    });
    const json = await response.json();
    console.log(json);
    setData(json);
  };
  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <div className="overflow-x-auto relative flex align-center justify-around">
      <table className="w-75 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Device ID
            </th>
            <th scope="col" className="py-3 px-6">
              Device Type
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.device_id}
                </th>
                <td className="py-4 px-6">{item.device_type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>hello</div>
    </div>
  );
};

export default Details;
