import React, { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Chip } from '@/components/Home/Navbar'

const AnimatedHamburgerButton = () => {
  const tabs = ["Home", "About", "Skills", "Projects", "Contact"];

    const [selected, setSelected] = useState(tabs[0]); 
    const [active, setActive] = useState(false);
  
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            >
            <motion.button
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={() => {
                    setActive((pv) => !pv);
                    setIsOpen(true)
                }}
                className="relative h-11 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
            >
                <motion.span
                variants={VARIANTS.top}
                className="absolute h-1 w-10 bg-white"
                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                variants={VARIANTS.middle}
                className="absolute h-1 w-10 bg-white"
                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                variants={VARIANTS.bottom}
                className="absolute h-1 w-5 bg-white"
                style={{
                    x: "-50%",
                    y: "50%",
                    bottom: "35%",
                    left: "calc(50% + 10px)",
                }}
                />
            </motion.button>
        </MotionConfig>

        {
            active && isOpen && <>
                    <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => {
                            setIsOpen(false);
                            setActive(false)
                        }}
                        className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                        >
                        <motion.div
                            initial={{ scale: 0, rotate: "12.5deg" }}
                            animate={{ scale: 1, rotate: "0deg" }}
                            exit={{ scale: 0, rotate: "0deg" }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                        >
                            <div className="">
                                {tabs.map((tab:any) => (
                                    <Chip
                                        text={tab}
                                        selected={selected === tab}
                                        setSelected={setSelected}
                                        key={tab}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </ AnimatePresence>
            </>
        }
            
        
    </>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default AnimatedHamburgerButton;