export function AboutLayout({ left, right, bottom }) {
  return (
    <div className=' my-10 flex h-max gap-10'>
      <div className='hidden md:block'>{left}</div>
      <div className=''>{right}</div>
    </div>
  );
}
