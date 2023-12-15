// Popup.tsx

interface PopupItem {
  dumperId: string;
  date: string;
  status: string;
  currentCapacity: number;
  availableCapacity: number;
  operatorId: string;
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

      <div className="bg-white py-6 px-16 rounded-lg z-10 flex-col relative  flex items-center justify-center">
        <div className="my-4 text-2xl">
          <h1 className=" font-bold my-4">{item.dumperId}</h1>
          <p className="text-gray-600 my-4">Date: {item.date}</p>
          <p
            className={`${
              item.status === 'isfilled' ? 'text-green-500' : 'text-red-500 '
            }  font-semibold my-4`}
          >
            Status: {item.status}
          </p>

          <p className="text-gray-600 my-4">
            Current Capacity: {item.currentCapacity}
          </p>
          <p className="text-gray-600 my-4">
            Available Capacity: {item.availableCapacity}
          </p>
          <p className="text-gray-600 mt-4">Operator ID: {item.operatorId}</p>
        </div>
        <button
          className="relative bg-red-500 mt-6 w-full text-white py-2 px-8 rounded-md hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
        {/* Additional details or content can be added here */}
      </div>
    </div>
  );
};

export default Popup;
