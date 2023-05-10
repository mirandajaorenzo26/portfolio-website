/* eslint-disable react/prop-types */
export default function HeroSection({ left: Left, right: Right }) {
  return (
    <div className='items-center justify-center gap-5 py-10 md:flex md:flex-col lg:flex-row xl:px-[5vw]'>
      <div>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
}
