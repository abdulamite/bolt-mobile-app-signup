import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import WaitlistForm from './WaitlistForm';
import type { PrefineryResponse } from '../types/prefinery';

interface Feature {
  image: string;
  title: string;
  description: string;
}

interface HeroProps {
  onWaitlistSubmit: (email: string) => Promise<PrefineryResponse>;
}

const features: Feature[] = [
  {
    image: "/images/p2p.png",
    title: "Instant Transfers",
    description: "Send money instantly to anyone, anywhere"
  },
  {
    image: "/images/cc.png",
    title: "Digital Card",
    description: "Your Bolt Card, your rewards"
  },
  {
    image: "/images/social.png",
    title: "Social Banking",
    description: "Split bills and manage expenses together"
  },
  {
    image: "/images/revolution.png",
    title: "Join the Revolution",
    description: "Be part of the next generation of banking"
  }
];

const Hero: React.FC<HeroProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      zIndex: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + features.length) % features.length);
  };

  return (
    <section className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-500/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center lg:text-left relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-secondary-400 to-secondary-600">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-secondary-200 text-transparent bg-clip-text">
                Bolt App
              </h1>
            </div>
            <p className="text-xl text-secondary-100">
              Join thousands of users who are already managing their money smarter with Bolt
            </p>
            
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <WaitlistForm/>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-400/30 to-primary-500/30 rounded-3xl transform scale-105 blur-xl" />
              <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl border border-secondary-400/20 bg-gradient-to-br from-primary-800 to-secondary-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-500/20 via-transparent to-transparent">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className="absolute inset-0 flex items-center justify-center p-4 pb-20"
                    >
                      <img
                        src={features[currentIndex].image}
                        alt={features[currentIndex].title}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900 via-primary-900/95 to-transparent p-4 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-secondary-200 mb-1">{features[currentIndex].title}</h3>
                  <p className="text-sm text-secondary-100/80">{features[currentIndex].description}</p>
                </div>

                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-secondary-500/10 backdrop-blur-sm rounded-full p-2 hover:bg-secondary-500/20 transition-colors border border-secondary-400/20"
                  onClick={() => paginate(-1)}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary-500/10 backdrop-blur-sm rounded-full p-2 hover:bg-secondary-500/20 transition-colors border border-secondary-400/20"
                  onClick={() => paginate(1)}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;