import React from "react";
import { useAppSelector } from "src/hooks/reduxHooks";
import Chart from "react-apexcharts";
import { IAddForm } from "src/interface/formInterface/IAddForm";

const CategoryChart = () => {
  const orderList = useAppSelector((state) => state.addOrderForm.buyItemArr);
  const orderListByMonth = useAppSelector(
    (state: { addOrderForm: IAddForm }) => state.addOrderForm.buyItemArrByMonth
  );
  const categoryList = orderListByMonth.map((category) => category.category);
  const filteredCategory = categoryList.filter(
    (v, i) => categoryList.indexOf(v) === i
  );
  const sample = orderListByMonth.map((el) => {
    if (filteredCategory.includes(el.category)) {
      return { el };
    }
  });

  console.log(sample);
  const options = {
    labels: filteredCategory,
    chart: {
      width: 380,
      type: "pie",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 700,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 400,
        },
      },
    },
    plotOptions: {
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
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      // categories: categoryName,
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
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: false,
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

  // const series = [
  //   {
  //     name: "total",
  //     data: categoryData,
  //   },
  // ];

  return (
    <section className="w-full mt-16  flex justify-center">
      {/* <Chart 
       options={options} 
       series={series} 
       type="pie" 
       height='420px'
    /> */}
    </section>
  );
};

export default CategoryChart;
