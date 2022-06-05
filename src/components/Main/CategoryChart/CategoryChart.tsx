import React from "react";
import { useAppSelector } from "src/hooks/reduxHooks";
import Chart from "react-apexcharts";
import { IAddForm } from "src/interface/formInterface/IAddForm";
import { ttlAmountByCategory } from "src/utils/ttlAmountByCategory";

const CategoryChart = () => {
  const orderListByMonth = useAppSelector(
    (state: { addOrderForm: IAddForm }) => state.addOrderForm.buyItemArrByMonth
  );
  const categoryList = orderListByMonth.map((category) => category.category);
  const filteredCategory = categoryList.filter(
    (v, i) => categoryList.indexOf(v) === i
  );
  const ttlFoodAmount = ttlAmountByCategory(orderListByMonth, "food");
  const ttlShoppingAmmount = ttlAmountByCategory(orderListByMonth, "shopping");
  const ttlNessecityAmount = ttlAmountByCategory(orderListByMonth, "necessity");
  const ttlTransportationAmount = ttlAmountByCategory(
    orderListByMonth,
    "transportation"
  );
  const ttlEtcAmount = ttlAmountByCategory(orderListByMonth, "etc");

  console.log(ttlFoodAmount);

  const options = {
    labels: filteredCategory,
    series: [
      ttlFoodAmount.amount,
      ttlShoppingAmmount.amount,
      ttlNessecityAmount.amount,
      ttlTransportationAmount.amount,
      ttlEtcAmount.amount,
    ],
    expandOnClick: true,
    plotOptions: {
      donut: {
        size: "65%",
      },
      size: 400,
      customScale: 0.8,
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(2) + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "14px",
        colors: ["#a8bccb"],
      },
    },
    horizontalAlign: "right",

    xaxis: {
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#67c8ad",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val;
        },
      },
    },
    noData: {
      text: "Loading...",
    },
  };

  return (
    <section className="w-full mt-16 py-10 flex justify-center">
      <Chart
        options={options}
        series={options.series}
        type="pie"
        // height="420px"
      />
    </section>
  );
};

export default CategoryChart;
