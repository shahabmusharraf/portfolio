import Typewriter from 'typewriter-effect';

const TitlesComp = () => {
  return (
    <>
      <div className='text-blue-400 text-3xl lg:text-4xl font-bold'>
        <Typewriter
          options={{
            strings: ["Full Stack Developer", 'UI/UX Designer', "Software Engineer", "Backend Developer", "Coding Teacher"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  )
}
export default TitlesComp