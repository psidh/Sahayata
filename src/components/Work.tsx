import React from 'react';

const DemurrageCalculator = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Demurrage Charges Calculator
      </h2>
      <p className="mb-4">
        Demurrage is a charge imposed for the delay in loading or unloading
        cargo beyond the allowed free time at a port or terminal. Here's how you
        can calculate demurrage charges:
      </p>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Days</th>
            <th className="border border-gray-300 p-2">Charge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Upto 6 hours</td>
            <td className="border border-gray-300 p-2">
              Base Rate(Rs.150 per wagon per hour or part thereof)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Beyond 6 hours upto 12 hours
            </td>
            <td className="border border-gray-300 p-2">Base Rate + 10%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Beyond 12 hours upto 24 hours
            </td>
            <td className="border border-gray-300 p-2">Base Rate + 25%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Beyond 24 hours upto 48 hours
            </td>
            <td className="border border-gray-300 p-2">Base Rate + 50%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Beyond 48 hours upto 72 hours
            </td>
            <td className="border border-gray-300 p-2">Twice of Base Rate</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Beyond 72 hours</td>
            <td className="border border-gray-300 p-2">Thrice of Base Rate</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">
        To calculate demurrage charges, follow these steps:
      </p>
      <ol className="list-decimal ml-6 mt-2">
        <li>
          Identify the number of days the cargo is delayed beyond the allowed
          free time.
        </li>
        <li>
          Refer to the table above to determine the applicable charge per day
          based on the number of days.
        </li>
        <li>
          Multiply the number of days by the daily charge to calculate the total
          demurrage charges.
        </li>
      </ol>
    </div>
  );
};

export default DemurrageCalculator;
