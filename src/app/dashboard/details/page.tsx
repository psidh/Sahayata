import Sidebar from '@/components/Sidebar';

export default function Table() {
  return (
    <div className='flex justify-between'>
      <div className='w-[30%]'>
        <Sidebar />
      </div>
      <table className='w-[70%] table-fixed  mx-4 my-8'>
        <thead className='bg-gray-200'>
          <tr>
            <th className='py-2 px-4 border-b'>Column 1</th>
            <th className='py-2 px-4 border-b'>Column 2</th>
            <th className='py-2 px-4 border-b'>Column 3</th>
            <th className='py-2 px-4 border-b'>Column 4</th>
            <th className='py-2 px-4 border-b'>Column 5</th>
            <th className='py-2 px-4 border-b'>Column 6</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className='py-2 px-4 border'>{`Lorem ipsum ${index}`}</td>
              <td className='py-2 px-4 border'>{`Lorem ipsum ${index}`}</td>
              <td className='py-2 px-4 border'>{`Lorem ipsum ${index}`}</td>
              <td className='py-2 px-4 border'>{`Lorem ipsum ${index}`}</td>
              <td className='py-2 px-4 border'>{`Lorem ipsum ${index}`}</td>
              <td className='py-2 px-4 border'>{`Lorem ipsum ${index}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
