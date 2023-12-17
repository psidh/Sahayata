export default function Loading() {
  return (
    <div className='fixed inset-0 flex flex-col justify-center items-center z-50 bg-opacity-75'>
      <img src="/loading.gif" alt="Loading GIF" />
    </div>
  );
}
