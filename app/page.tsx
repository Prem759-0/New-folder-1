"use client";

import Header from "@/components/Header";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

import { MessageCircle, Video, Shield, Users, Zap } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 sm:py-12 md:py-16 lg:py-20 sm:px-6 lg:px-8 text-center gap-8 sm:gap-12 md:gap-16 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-500 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 rounded-3xl blur-3xl scale-150 opacity-60"></div>

        {/* Hero Content */}
        <div className="max-w-4xl space-y-4 sm:space-y-6 md:space-y-8 relative w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 leading-tight sm:leading-tight md:leading-tight">
            Connect instantly.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Chat smarter.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 md:px-0">
            The modern messaging platform that combines lightning-fast chat and
            crystal-clear video calls in one seamless experience.
          </p>

          <div className="pt-2 sm:pt-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="px-6 sm:px-8 md:px-10 h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-medium bg-black text-white hover:bg-gray-800 rounded-md transition-all duration-200 hover:scale-105">
                  Start Chatting Free
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* ✅ Social Proof Section */}
        <div className="pt-8 sm:pt-10 md:pt-12 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-xs sm:text-sm md:text-base text-gray-500 text-center mb-4 sm:mb-6 md:mb-8">
            Trusted by thousands of users worldwide
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-gray-800">
            {/* Stat 1 */}
            <div className="text-center px-3 sm:px-4 py-2">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">50K+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">
                Active Users
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 md:h-10 lg:h-12 bg-gray-300"></div>

            {/* Stat 2 */}
            <div className="text-center px-3 sm:px-4 py-2">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">1M+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">
                Messages Sent
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 md:h-10 lg:h-12 bg-gray-300"></div>

            {/* Stat 3 */}
            <div className="text-center px-3 sm:px-4 py-2">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">99.9%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">Uptime</div>
            </div>
          </div>

          {/* Divider with dot */}
          <div className="w-full flex items-center justify-center mt-8 sm:mt-10 md:mt-12">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="px-3 sm:px-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-400"></div>
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-black">
                Everything you need to stay connected
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-4 md:px-0">
                Powerful features designed for seamless communication, whether
                you&apos;re chatting with friends or collaborating with teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center max-w-5xl mx-auto">
              <FeatureCard
                icon={MessageCircle}
                title="Instant Messaging"
                description="Lightning-fast messages with real-time delivery. Chat with friends and colleagues seamlessly."
              />
              <FeatureCard
                icon={Video}
                title="HD Video Calls"
                description="Crystal-clear video calls with one click. Perfect quality for personal chats and team meetings."
              />
              <FeatureCard
                icon={Shield}
                title="Privacy First"
                description="End-to-end encryption keeps your conversations private. Your data belongs to you, always."
              />
              <FeatureCard
                icon={Users}
                title="Group Chats"
                description="Create groups with friends, family, or colleagues. Manage conversations with advanced controls."
              />
              <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Optimized for speed and performance. Works seamlessly across all your devices with instant sync."
              />
            </div>
          </div>
        </div>

{/* ✅ CTA Section */}
<div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20">
  <div className="w-full max-w-2xl rounded-xl sm:rounded-2xl bg-gray-100 shadow-md p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 text-center">
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900">
      Ready to transform your conversations?
    </h2>

    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto px-2 sm:px-4 md:px-0">
      Join thousands of users who&apos;ve already discovered a better way to communicate. 
      Start your journey with TeleChat today — it&apos;s completely free.
    </p>

    {/* CTA Button */}
    <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="px-6 sm:px-8 md:px-10 h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-medium bg-black text-white hover:bg-gray-800 rounded-md transition-all duration-200 hover:scale-105">
            Get Started Free
          </Button>
        </SignInButton>
      </SignedOut>
    </div>

    {/* Bullet Points with green dots */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base text-gray-600">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 inline-block flex-shrink-0"></span>
        <span>No credit card required</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 flex-shrink-0"></span>
        <span>Free forever plan</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 flex-shrink-0"></span>
        <span>Setup in 30 seconds</span>
      </div>
    </div>
  </div>
</div>


      </main>

  <footer className="border-t bg-gray-100 mt-8 sm:mt-12 md:mt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-gray-900">TeleChat</span>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1">
            The future of communication
          </p>
        </div>
        
        {/* Links */}
        <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-gray-800 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-gray-800 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-gray-800 transition-colors">
            Support
          </a>
        </div>
      </div>
      
      {/* Bottom Note */}
      <div className="border-t mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
        <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 max-w-4xl mx-auto px-2 sm:px-4 md:px-0">
          2025 TeleChat. This is a Demo. We have no affiliation with any of the brands mentioned in the video including Beam, any usage is purely educational. In the event of any infringement, please contact us and we will remove/alter the content immediately.
        </p>
        <p className="text-xs sm:text-sm font-medium text-gray-600">❤️ Made By Prem . Gaikwad ❤️</p>
      </div>
    </div>
  </footer>

    </div>
  );
}
