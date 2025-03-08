import type React from "react"
import { TrendingUp, PiggyBank, CreditCard, Wallet, DollarSign } from "lucide-react"

const Hero: React.FC = () => {

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      <div className="absolute inset-0 bg-gradient-primary from-primary-900 via-primary-700 to-secondary-600 opacity-90 z-0"></div>

      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-secondary-500 opacity-20 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-accent-500 opacity-10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>


      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-6xl gap-8 md:gap-16">
          {/* Left side - Text content */}
          <div className="text-center md:text-left p-6 space-y-6">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="bg-white p-1 rounded-full shadow-lg mr-4">
                <img src="/images/bolt-logo.svg" alt="Bolt App Logo" className="h-12 w-12" />
              </div>
              <h1 className="text-5xl font-bold text-white">Bolt Wallet</h1>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              <span className="block">Take Control of Your</span>
              <span className="relative">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500">
                  Financial Future
                </span>
              </span>
            </h2>

            <p className="text-xl text-white/90 max-w-lg">
              Be among the first to revolutionize how you manage money, track expenses, and build better spending
              habits.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-2 text-white/90">
                <TrendingUp className="h-5 w-5 text-secondary-400" />
                <span>Track Spending</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <PiggyBank className="h-5 w-5 text-secondary-400" />
                <span>Save Smarter</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <CreditCard className="h-5 w-5 text-secondary-400" />
                <span>Manage Cards</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Wallet className="h-5 w-5 text-secondary-400" />
                <span>Budget Better</span>
              </div>
            </div>
          </div>

          {/* Right side - Form and visual */}
          <div className="relative">
            {/* Phone mockup with app preview */}
            <div className="relative mx-auto w-64 md:w-80 h-[500px] md:h-[600px] bg-primary-950 rounded-[40px] border-[8px] border-primary-800 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-primary-950 rounded-b-xl z-10"></div>

              {/* App screen */}
              <div className="h-full w-full bg-gradient-to-b from-primary-900 to-primary-950 p-4 overflow-hidden">
                {/* App UI elements */}
                <div className="flex justify-between items-center mb-6 mt-8">
                  <div className="text-white text-sm font-bold">Bolt</div>
                  <div className="bg-secondary-500 h-8 w-8 rounded-full flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-primary-950" />
                  </div>
                </div>

                <div className="text-white text-xl font-bold mb-2">Your Balance</div>
                <div className="text-secondary-400 text-3xl font-bold mb-6">$12,458.90</div>

                <div className="bg-primary-800/50 rounded-xl p-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm">Monthly Budget</span>
                    <span className="text-white text-sm">$3,200 / $4,000</span>
                  </div>
                  <div className="w-full h-2 bg-primary-700 rounded-full mt-2">
                    <div className="w-[80%] h-full bg-secondary-500 rounded-full"></div>
                  </div>
                </div>

                <div className="text-white text-sm font-bold mt-6 mb-3">Recent Transactions</div>

                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between bg-primary-800/30 p-3 rounded-lg mb-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center mr-3">
                        <span className="text-xs text-secondary-400">{["☕", "🛒", "🍔", "🚗"][i - 1]}</span>
                      </div>
                      <div>
                        <div className="text-white text-xs">
                          {["Coffee Shop", "Grocery Store", "Restaurant", "Gas Station"][i - 1]}
                        </div>
                        <div className="text-white/50 text-xs">
                          {["Today", "Yesterday", "2 days ago", "3 days ago"][i - 1]}
                        </div>
                      </div>
                    </div>
                    <div className="text-white text-sm">{["-$4.50", "-$68.32", "-$24.99", "-$45.00"][i - 1]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form embed */}
            <div className="prefinery-form-embed absolute -bottom-10 right-0 md:right-10 bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl w-full max-w-sm">
              {/* Your form content will be injected here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

