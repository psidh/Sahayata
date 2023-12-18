"use client";
// BarGraph.js





import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BarGraph = () => {
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

    // Initialize new Chart.js instance
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
          {
            label: "Tonnes",
            data: [10, 12, 13, 9, 5, 20, 17],
            backgroundColor: [
              "rgba(1, 11, 148, 1)",
              "rgba(1, 11, 148, 0.9)",
              "rgba(1, 11, 148, 0.8)",
              "rgba(1, 11, 148, 0.7)",
              "rgba(1, 11, 148, 0.6)",
              "rgba(1, 11, 148, 0.5)",
              "rgba(1, 11, 148, 0.4)",

            ],
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "black",
              font: {
                size: 14,
              },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10,
              color: "black",
              font: {
                size: 18,
              },
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="text-black container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10">
      <h1 className="md:text-4xl text-3xl font-semibold my-4 text-center md:text-left ">Coal dumper in tonnes</h1>
      <div className="my-4">
        <div className="rounded-xl p-8">
          <canvas ref={chartRef} width={200} height={100} className="w-full md:h-auto text-black"></canvas>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
