import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import type { PrefineryResponse } from './types/prefinery';

function App() {
  const [prefineryWidget, setPrefineryWidget] = useState<any>(null);

  useEffect(() => {
    const PREFINERY_ID = "tehvtncq";
    const WAITLIST_ID = 1234;

    const initWidget = () => {
      try {
        if (window.Prefinery?.widget) {
          const widget = new window.Prefinery.widget({
            id: PREFINERY_ID,
            waitlist_id: WAITLIST_ID,
            domain: window.location.origin
          });
          setPrefineryWidget(widget);
        }
      } catch (error) {
        console.error('Failed to initialize Prefinery:', error);
      }
    };

    // Try to initialize if already loaded
    initWidget();

    // Set up listener for script load
    window.addEventListener('load', initWidget);

    return () => {
      window.removeEventListener('load', initWidget);
    };
  }, []);

  const handleWaitlistSubmit = async (email: string) => {
    try {
      if (!prefineryWidget) {
        // Fallback behavior when Prefinery isn't available
        // You could store emails locally or show a success message
        return {
          success: true,
          user: {
            email,
            referral_code: 'EARLY',
            referral_count: 0,
            position: 0,
            status: 'pending',
            id: 0
          }
        };
      }

      const response: PrefineryResponse = await prefineryWidget.addUser({ 
        email,
        profile: {
          source: 'website_signup'
        }
      });
      
      if (!response.success) {
        throw new Error(response.error || 'Failed to join waitlist');
      }
      
      return response;
    } catch (error) {
      console.error('Error joining waitlist:', error);
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-white">
      <Hero onWaitlistSubmit={handleWaitlistSubmit} />
      <Features />
      <FAQ />
      
      <footer className="bg-primary-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-400">
            © 2024 Bolt App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;