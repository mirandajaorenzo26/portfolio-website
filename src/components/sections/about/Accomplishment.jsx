/* eslint-disable react/prop-types */
export default function Accomplishment({ number, title }) {
  return (
    <div className='accomplishment'>
      <p className='text-2xl font-bold '>{number}</p>
      <p className='font-bold'>{title}</p>
    </div>
  );
}
