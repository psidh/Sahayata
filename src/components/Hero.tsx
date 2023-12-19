'use client';
// 'use client';
import { useState } from 'react';

export default function Hero() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const text = [
    {
      id: 1,
      name: 'Operator',
      description:
        'The person who is in charge of dumping coal from the mine to the dumper.',
    },
    {
      id: 2,
      name: 'Admin',
      description:
        'Person who has access to all the data points and can monitor all activities.',
    },
  ];

  const toggleItem = (itemId: number) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(itemId)) {
        // Item is open, close it
        return prevOpenItems.filter((id) => id !== itemId);
      } else {
        // Item is closed, open it
        return [...prevOpenItems, itemId];
      }
    });
  };

  return (
    <div className="bg-cover bg-top h-screen bg-[url('/home.jpg')]">
      <div className='flex '>
        <div className="p-8">
          <div className="p-8 backdrop-lg bg-opacity-80 bg-white w-[45%] rounded-xl">
            <div>
              <h1 className="text-4xl font-semibold px-4 py-2">What We Do</h1>
              <p className="leading-10 text-justify px-4 py-2 text-xl">
                Specialize in delivering cutting-edge real-time monitoring
                solutions. Focus on dumper load status through intuitive
                visualization and proactive alerts. Provide a seamlessly
                integrated platform for smooth data transmission. Ensure
                compatibility across diverse systems and scalability. Fortify
                solutions with robustness for reliability. Elevate user
                experience through professional and reliable solutions.
                Prioritize security and privacy in all aspects of our services.
                Offer comprehensive monitoring and management of dumper
                operations.
              </p>
            </div>
          </div>
        </div>
        <div>
          {text.map((faq) => (
            <div key={faq.id} className="my-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleItem(faq.id)}
              >
                <h3 className="text-xl font-semibold text-black">{faq.name}</h3>
                <span
                  className={`transition-transform transform duration-300 ${
                    openItems.includes(faq.id) ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </div>
              {openItems.includes(faq.id) && (
                <p className="my-2 text-black">{faq.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
