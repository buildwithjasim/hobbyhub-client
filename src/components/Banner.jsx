import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-20 text-white rounded-xl"
      style={{
        backgroundImage: `url('https://i.ibb.co/5x4QQn2H/dcbde648-c9d9-427a-a050-f8bcf895d928.png')`,
      }}
    >
      <div className="bg-black/60 py-10 px-6 md:px-16 rounded-lg max-w-6xl mx-auto">
        <Fade direction="down" duration={1200} triggerOnce>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Communities Around <br />
            <span className="text-yellow-300">
              <Typewriter
                words={[
                  'Books 📚',
                  'Art 🎨',
                  'Gaming 🎮',
                  'Fitness 🏃‍♂️',
                  'Cooking 🍳',
                  'Music 🎵',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-lg mb-6 max-w-xl">
            Join hobby-based groups, make friends, and grow your passion at
            HobbyHub.
          </p>
          <Link to="/groups" className="btn btn-warning font-bold">
            Explore Groups
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
