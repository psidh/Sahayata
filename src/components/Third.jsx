// PieChart.js
"use client";

import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Use a ref to keep track of the Chart.js instance

  useEffect(() => {
    AOS.init({ 
      delay: 50,
      offset: 100,
      duration: 500,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });

    const chartCanvas = chartRef.current;
    const ctx = chartCanvas.getContext("2d");

    // Destroy existing Chart.js instance before initializing a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Initialize new Chart.js instance for Pie Chart
    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Q1", "Q2", "Q3", "Q4",],
        datasets: [
          {
            label: "Tonnes",
            data: [10, 12, 13, 9, ],
            backgroundColor: [
              "rgb(255, 99, 132, 1)",
              "rgb(255, 159, 64, 0.9)",
              "rgb(255, 205, 86, 0.8)",
              "rgb(75, 192, 192, 0.7)",
              "rgb(54, 162, 235, 0.6)",
              "rgb(153, 102, 255, 0.5)",
              "rgb(201, 203, 207, 0.4)",
            ],
            
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }, []);

  return (
    <div className="text-black container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10">
      <h1 className="md:text-4xl text-3xl font-semibold my-4 text-center md:text-left ">
        Quarterly (Q1) <span className='text-lg font-light'>(in tonnes)</span>
      </h1>
      <h2> JAN, FEB, MAR, APR</h2>
      <div className="my-4">
        <div className="rounded-xl p-4">
          <canvas ref={chartRef} width={50} height={50} className="w-1/2 h-1/2 text-black"></canvas>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
