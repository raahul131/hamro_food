import { ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-wrap p-4 justify-between items-center bg-black font-mono text-white md:p-6 md:justify-between">
      <div className="mb-1 md:mb-0">
        © {new Date().getFullYear()} Made ❤️ by Rahul
      </div>
      <div className="flex items-center">
        <a
          href="https://www.linkedin.com/in/rahulray131/"
          target="_blank"
          rel="noreferrer"
          className="mr-4 text-white hover:text-blue-600 transition-all duration-300"
        >
          <ImLinkedin fontSize="20px" />
        </a>
        <a
          href="https://www.instagram.com/rahulray_0131"
          target="_blank"
          rel="noreferrer"
          className="mr-4 text-white hover:text-pink-600 transition-all duration-300"
        >
          <BsInstagram fontSize="20px" />
        </a>
        <a
          href="mailto:rryadav2025@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="mr-4 text-white"
        >
          <AiOutlineMail fontSize="20px" />
        </a>
        <a
          href="https://github.com/raahul131"
          target="_blank"
          rel="noreferrer"
          className="mr-4 text-white"
        >
          <AiFillGithub fontSize="20px" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
