import mypicture from '../../../assets/images/mirandajaorenzo.png';

export default function MyImage() {
  return (
    <div className='relative hidden md:block'>
      <img
        src={mypicture}
        alt='Jao Renzo Miranda'
        className='relative z-10 w-full'
      />
      <div className='absolute bottom-0 z-0 h-[70%] w-full bg-dark-neutral-white shadow-inner dark:bg-neutral-black'></div>
    </div>
  );
}
