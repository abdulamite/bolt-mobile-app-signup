import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Feature {
  icon?: React.ElementType;
  image?: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    image: "/images/p2p.png",
    title: 'Peer-to-Peer Instant Transfers',
    description: 'Your data is protected with military-grade encryption and security protocols.'
  },
  {
    image: "/images/cc.png",
    title: 'Debit Card',
    description: 'Use tap to pay anywhere in the world.'
  },
  {
    image: "/images/debit_card.png",
    title: 'Social Banking',
    description: 'Split bills, share subscriptions, and manage group expenses easily.'
  },
  {
    image: "/images/revolution.png",
    title: 'Join the Revolution',
    description: 'Join the revolution of next-gen payment App'
  },
];

const Features: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + features.length) % features.length);
  };

  const renderFeatureIcon = (feature: Feature) => {
    if (feature.icon) {
      const IconComponent = feature.icon;
      return <IconComponent className="w-32 h-32 text-white" />;
    }
    if (feature.image) {
      return (
        <img 
          src={feature.image} 
          alt={feature.title}
          className="w-full h-full object-contain"
        />
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-gradient-radial from-primary-50 to-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-primary-700">
            Experience the future of banking with our innovative features
          </p>
        </div>

        <div ref={ref} className="relative h-[500px] w-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
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
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                console.log(e)
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div className="w-full max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-secondary-500/20">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                      <div className="aspect-square rounded-xl bg-gradient-secondary from-secondary-500 to-secondary-400 p-8 flex items-center justify-center">
                        {renderFeatureIcon(features[currentIndex])}
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 text-left">
                      <h3 className="text-3xl font-bold text-primary-900 mb-4">
                        {features[currentIndex].title}
                      </h3>
                      <p className="text-xl text-primary-700">
                        {features[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors border border-secondary-500/20"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6 text-primary-900" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors border border-secondary-500/20"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6 text-primary-900" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-secondary-500' : 'bg-secondary-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;