import React from 'react';

export default function page() {
  return (
    <div>
      <div className="flex justify-center items-center space-x-16 my-16">

        <div className="p-4 border shadow-lg rounded-xl bg-amber-200 transition duration-500">
          <ol className="py-4">
            <li className="text-xl font-medium py-2">Features</li>
            <li className="text-lg py-2">Volumetric Analysis</li>
            <li className="text-lg py-2">
              <span className="px-2 py-1 rounded-2xl bg-amber-500 text-white text-md mr-2">
                NEW
              </span>
              Weight Analysis
            </li>
            <li className="text-lg py-2">Components: Ultrasonic Sensor</li>
            <li className="text-lg py-2">Accuracy: 90+%</li>
          </ol>
          <h2 className="py-2 text-3xl">Total: Rs 26, 000 </h2>
          <h3 className="font-light">+ Software Cost: Rs 5, 700</h3>

          <div className="mt-8 font-light">
            <p className=" text-lg">Details</p>
            <hr />
            <p className="py-2">Ultra Sonic Sensors: 12, 000</p>
            <p className="py-2">Load Sensors: 14, 000</p>
            <p className="py-2">Software (Cloud + Database): 5, 700</p>
            <p className="py-2">Maintenance 10%: 3, 117</p>
            <p className="py-2">Total: 35, 000/shovel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
