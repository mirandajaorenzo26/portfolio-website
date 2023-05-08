/* eslint-disable react/prop-types */
function Technology({ icon, name, status }) {
  return (
    <div className='skill-technology animate__animated animate__fadeInDown hover:'>
      <div className='absolute right-0 top-0'>
        <span className='relative flex h-3 w-3'>
          {status === 1 && (
            <>
              <span className='relative inline-flex h-3 w-3 rounded-full bg-green-600'></span>
            </>
          )}
          {status === 2 && (
            <>
              <span className='relative inline-flex h-3 w-3 rounded-full bg-violet-600'></span>
            </>
          )}
          {status === 3 && (
            <>
              <span className='relative inline-flex h-3 w-3 rounded-full bg-red-600'></span>
            </>
          )}
        </span>
      </div>

      <img src={icon} className='w-5' />
      <p className=' '>{name}</p>
    </div>
  );
}

export default Technology;
