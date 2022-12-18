import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const loadUserData = async () => {
    const response = await fetch(`http://52.74.166.134:3000/api/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${localStorage.getItem("token")}`,
      },
    });
    const json = await response.json();
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
              Location
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
                <td className="py-4 px-6">{item.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <Pie
          width={400}
          height={300}
          data={{
            labels: ["Location", "Device ID"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
                borderWidth: 1,
              },
            ],
          }}
          options={{}}
        />
      </div>
    </div>
  );
};

export default Details;
