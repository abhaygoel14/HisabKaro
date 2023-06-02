import React, { useEffect, useState } from "react";
import { ExpenseData } from "../Data";
import BarChart from "../components/BarChart";
import { useNavigate } from "react-router-dom";
import { Segregator } from "../utilities/Categorysegregator";
let total = 0;
export default function DailySpendAnalysis() {
  const navigate = useNavigate();
  const [expenseData, SetExpenseData] = useState({
    datasets: [
      {
        label: "Expense",
        color: "red",
        data: [],
        borderColor: "black",
        backgroundColor: [
          "rgba(195, 193, 200,1)",
          "rgba(179, 178, 186,1)",
          "rgb(173, 172, 181,1)",
          "rgba(157, 157, 167, 1)",
          "rgba(141, 142, 153, 1)",
          "rgba(109, 111, 124, 1)",
          "rgba(157, 157, 167, 1)",
        ],
      },
    ],
    labels: ExpenseData.map((data) => data.day),
  });

  useEffect(() => {
    async function fetchDailyData() {
      const data =
        (await JSON.parse(localStorage.getItem("userExpense"))) || [];
      var today = new Date();
      var formattedToday = today.toDateString();
      var todayObject = data.find(function (item) {
        return item.date === formattedToday;
      });

      const Segregated = Segregator([todayObject]);
      total = Segregated[1];
      SetExpenseData({
        datasets: [
          {
            label: "Expense",
            data: Object.values(Segregated[0]),
            borderColor: "black",
            backgroundColor: [
              "rgba(255, 99, 132, 0.4)",
              "rgba(255, 159, 64, 0.4)",
              "rgba(255, 205, 86, 0.4)",
              "rgba(75, 192, 192, 0.4)",
              "rgba(54, 162, 235, 0.4)",
              "rgba(153, 102, 255, 0.4)",
              "rgba(201, 203, 207, 0.4)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
        ],
        labels: Object.keys(Segregated[0]),
      });
    }
    fetchDailyData();
  }, []);
  return (
    <div className="bg-jp-black">
      <div className="bg-rp-black w-3/4 p-5 flex m-auto mt-14 rounded-md justify-center">
        <h1 className="font-bold text-xl font-lexand text-slate-300 mr-3 mt-3">
          Today's Spending
        </h1>
        <span className="font-bold text-2xl font-lexend text-mj-black bg-rp-yellow p-3 rounded-md">
          {total}
        </span>
      </div>
      <div className="w-3/4 m-auto mt-14 bg-slate-300 rounded-lg p-6">
        <BarChart chartData={expenseData} />
      </div>
    </div>
  );
}
