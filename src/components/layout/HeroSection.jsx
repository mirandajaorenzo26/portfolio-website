/* eslint-disable react/prop-types */
export default function HeroSection({ left: Left, right: Right }) {
  return (
    <div className='items-center justify-center gap-5 py-10 md:flex lg:flex-row xl:px-[5vw]'>
      <div>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
}

// my-5 flex min-h-[75vh] min-w-full flex-col items-center justify-center  rounded-3xl bg-white p-5 text-center dark:bg-light-navy-blue md:gap-0 xl:flex-row xl:gap-20 xl:text-left
