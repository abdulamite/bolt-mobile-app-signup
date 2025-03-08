import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';

function App() {
  return (
    <div>
      <Hero />
      <Features />
      <FAQ />
      
      <footer className="bg-primary-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white">
            © 2025 Bolt App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;