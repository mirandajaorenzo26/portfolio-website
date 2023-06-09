/* eslint-disable react/prop-types */
export default function HeroSection({ left: Left, right: Right }) {
  return (
    <div className='my-5 gap-5 md:grid md:grid-cols-2 md:items-center md:justify-evenly lg:grid-cols-3 '>
      <div className='lg:col-span-2 '>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
}
