import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from 'next/link'
import AnimatedHamburgerButton from "./Hamburger";
const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const [navbarScroll, setNavbarScroll] = useState(false);

  useEffect(() => {
    const updateNavbarBg = () => {
      // Your logic for updating navbar background based on scroll
      if(window.scrollY >= 80){
        setNavbarScroll(true);
      }
      else {
        setNavbarScroll(false)
      }
      
    };

    // Add event listener only in the browser environment
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', updateNavbarBg);
    }

    // Clean up function to remove event listener when component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', updateNavbarBg);
      }
    };
  }, []);
  return (
    <nav className={`${navbarScroll ? 'navbar active':'navbar'} flex py-8 px-6 lg:px-10 justify-center items-center z-10`}>
        <div className='grow'>
            <h1 className={`${navbarScroll ? 'text-xl':'text-sm'} font-bold text-xl md:text-2xl lg:text-3xl text-white`}>Developer <span className="text-blue-400">Shahab</span>.</h1>
        </div>
        <div className="lg:hidden">
            <AnimatedHamburgerButton />
        </div>
        <div className="hidden lg:flex items-center flex-wrap gap-2">
          {tabs.map((tab) => (
            <Chip
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              key={tab}
            />
          ))}
        </div>

    </nav>
  )
}

export interface ChipProps {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const tabs = ["Home", "About", "Skills", "Projects", "Contact"];
export const Chip: React.FC<ChipProps> = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <Link href={`#${text.toLowerCase()}`}>
      <li
        onClick={() => setSelected(text)}
        className={`${
          selected
            ? "text-white"
            : "text-white lg:text-slate-400 hover:text-slate-500 hover:scale-105 transition 1s"
        } text-sm md:text-lg md:font-semibold transition-colors px-2.5 py-1.5 rounded-md relative list-none font-bold`}
      >
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 bg-gradient-to-r from-gray-800 to-violet-600 lg:from-violet-600 lg:to-slate-950 rounded-md"
          ></motion.span>
        )}
      </li>
    </Link>
  );
};


export default Navbar