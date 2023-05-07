/* eslint-disable react/prop-types */
export default function Status({ status, icon }) {
  return (
    <div className='flex items-center justify-center gap-2'>
      <p className='whitespace-nowrap text-xl'>{status}</p>
      {icon}
    </div>
  );
}
