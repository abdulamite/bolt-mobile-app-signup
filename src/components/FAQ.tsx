import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does the waitlist work?',
    answer: 'Join our waitlist to get early access to our platform. The more friends you refer, the higher your position on the waitlist and the sooner you\'ll get access.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use bank-level encryption and security measures to protect your data. We never store sensitive financial information on our servers.'
  },
  {
    question: 'How do referral rewards work?',
    answer: 'For each friend you refer who joins the waitlist, you\'ll move up in priority. Plus, both you and your friend will receive bonus features when we launch.'
  },
  {
    question: 'When will the app launch?',
    answer: 'We\'re currently in beta testing and plan to launch publicly in the coming months. Waitlist members will get access first!'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;