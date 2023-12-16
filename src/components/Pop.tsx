// Popup.tsx

interface PopupItem {
  dumperId: string;
  date: string;
  status: string;
  currentCapacity: number;
  availableCapacity: number;
  operatorId: string;
  time: string;
}

interface PopupProps {
  onClose: () => void;
  item: PopupItem;
}

const Popup: React.FC<PopupProps> = ({ onClose, item }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="bg-white py-6 w-[50%] px-8 rounded-lg  z-10 flex-col relative ">
        <div className="my-4 flex-col text-2xl">
          <div className='flex justify-between items-center'>
            <p className='my-4 font-semibold'>Date</p>
            <p className='my-4  py-2  px-4 rounded-xl '>{item.date}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='my-4 font-semibold'>Dumper ID</p>
            <p className='my-4  py-2  px-4 rounded-xl '>{item.dumperId}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='my-4 font-semibold'>Status</p>
            <p
              className={`${
                item.status === 'isfilled' ? 'text-green-500   py-2  px-4 rounded-xl ' : 'text-red-500   py-2  px-4 rounded-xl '
              }  font-semibold my-4`}
            >
              {item.status}
            </p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='my-4 font-semibold'>Current Capacity</p>
            <p className='my-4  py-2  px-4 rounded-xl '>{item.currentCapacity}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='my-4 font-semibold'>Available Capacity</p>
            <p className='my-4  py-2  px-4 rounded-xl '>{item.availableCapacity}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='my-4 font-semibold'>Operator ID</p>
            <p className="my-4  py-2  px-4 rounded-xl ">{item.operatorId}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className="my-4 font-semibold">Time </p>
            <p className='my-4  py-2  px-4 rounded-xl '> {item.time}</p>
          </div>
        </div>
        <button
          className="relative bg-red-500 mt-6 w-full text-white py-2 px-8 rounded-md hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
