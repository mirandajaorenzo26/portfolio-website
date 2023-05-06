function About() {
  return (
    <div id='about'>
      <div className='text-center lg:mx-40 lg:px-20 xl:px-52'>
        <div className=''>
          <p className='font-semibold uppercase'>About me</p>
          <strong className='text-xl font-bold md:text-2xl'>
            A dedicated{' '}
            <span className='hover-underline-animation '>
              Frond-End Developer
            </span>{' '}
            from the Philippines.
          </strong>
        </div>
        <div> {/* Tabs */}</div>
        <div>
          {' '}
          {/* INTRODUCTION */}
          <p>
            As a dedicated and passionate student currently pursuing a Bachelor
            of Science in Information Technology (BSIT) at Bulacan State
            University,
            <b>
              &nbsp;I am highly motivated to excel in the field of front-end
              development.
            </b>
            &nbsp;My desire to constantly expand my knowledge and skills in the
            field, paired with my strong motivation and eagerness for new
            challenges, makes me a strong asset to any team.
          </p>
          <br />
          <p>
            I am also a self-taught UI/UX designer, I&apos;m driven by a passion
            for creating visually stunning and user-friendly interfaces.
            I&apos;m always excited to learn new technologies and take on new
            challenges to grow and develop as a designer and developer.
          </p>
          <br />
          <p>
            I am committed to continuous learning and growth as a developer and
            am eager to join a company that values innovation and creativity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
