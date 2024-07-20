import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import Animation from "./Animation";

export default function About() {
  return (
    <section className="px-8 lg:px-16 pt-36 pb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-lg leading-relaxed font-light">
      <Animation>
        <div className="max-w-4xl mx-auto text-center bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
          <img
            src="/assets/deeptha.JPG"
            alt="Deeptha Theyyar Maalolan"
            className="w-40 h-40 lg:w-48 lg:h-48 mx-auto rounded-full shadow-xl mb-6 border-4 border-indigo-500"
          />
          <h1 className="text-4xl font-extrabold leading-tight mb-8 text-gray-900">
            Deeptha Theyyar Maalolan
          </h1>
          <div className="text-justify">
            <p className="mb-6 text-gray-800">
              Greetings! I’m a Full Stack Developer with 3 years of experience
              and a Master of Science in Computer Science from the New Jersey
              Institute of Technology. My passion for technology and innovation
              drives my professional endeavors.
            </p>
            <p className="mb-6 text-gray-800">
              I have been involved in all stages of the software development
              life cycle, from gathering initial requirements to designing,
              implementing, and testing software solutions. This experience has
              enhanced my understanding of the software stack and engineering
              principles, as well as my coding skills.
            </p>
            <p className="mb-6 text-gray-800">
              Having worked in both startups and large companies, I have
              developed the ability to adapt and thrive in diverse team
              environments. I am eager to collaborate and create impactful
              solutions.
            </p>
            <p className="text-gray-800">
              Let’s connect and explore how we can work together to create
              impactful solutions and drive positive change!
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Connect with me:</h2>
            <div className="flex items-center justify-center gap-6">
              <a
                href="mailto:tmj.deeptha@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-950 hover:text-gray-700 transition-colors"
              >
                <MdOutlineEmail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/deeptha-maalolan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-950 hover:text-blue-600 transition-colors"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://github.com/Deepthamaalolan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-950 hover:text-gray-700 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </Animation>
      <div id="education" />
    </section>
  );
}
