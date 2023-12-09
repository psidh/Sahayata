import React from 'react';

const ProblemSolutionTable: React.FC = () => {
  const problemsAndSolutions = [
    {
      problem: '1: Inadequate Coal Stock Placement',
      solution:
        '1: Develop a digital platform to maintain the updated status of coal stock in railway sidings to ensure that rakes are placed where there is adequate coal supply.',
    },
    {
      problem: '2: Demurrage Charges Payment',
      solution:
        '2: Implement an algorithm to optimize the placement of railway rakes at the nearest location with sufficient coal, reducing demurrage costs.',
    },
    {
      problem: '3: Cluster-Based Rake Supply',
      solution:
        '3: Create a digital platform that offers dynamic and location-based rake supply, eliminating the need for cluster-based supply.',
    },
    {
      problem: '4: Lack of Real-time Information',
      solution:
        '4: Provide real-time updates on coal stock status at railway sidings through the digital platform, enabling better decision-making for rake placement.',
    },
    {
      problem: '5: Inefficient Coal Logistics',
      solution:
        '5: Streamline coal logistics operations by optimizing transportation routes and reducing waiting times for trains, resulting in cost savings.',
    },
  ];

  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-2xl font-semibold mb-4">Problem and Solution Table</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Problem</th>
              <th className="px-4 py-2">Solution</th>
            </tr>
          </thead>
          <tbody>
            {problemsAndSolutions.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : ''}
              >
                <td className="border px-4 py-2 text-left">{item.problem}</td>
                <td className="border px-4 py-2 text-left">{item.solution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProblemSolutionTable;
