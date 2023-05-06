import mypicture from '../../../assets/images/mirandajaorenzo.png';

export default function MyImage() {
  return (
    <div className='relative m-5  hidden md:block'>
      <img
        src={mypicture}
        alt='Jao Renzo Miranda'
        className='relative z-10 w-[100%] rounded-3xl'
      />
      <div className='absolute bottom-0 z-0 h-[60%] w-full rounded-3xl bg-semi-white drop-shadow-2xl dark:bg-navy-blue'></div>
    </div>
  );
}
