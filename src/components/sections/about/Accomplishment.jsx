/* eslint-disable react/prop-types */
export default function Accomplishment({ number, title }) {
  return (
    <div className='accomplishment'>
      <p className='text-lg font-bold '>{number}</p>
      <p className=' text-lg font-bold'>{title}</p>
    </div>
  );
}
