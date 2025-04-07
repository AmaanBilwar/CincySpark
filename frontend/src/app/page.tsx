"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  MessageCircle, 
  Users, 
  Shield, 
  Calendar, 
  MapPin,
  ChevronRight
} from "lucide-react";

const Page = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/70 to-red-900/80 z-10" />
          <Image
            src="/hero-background.jpg" 
            alt="UC campus"
            fill
            className="object-cover -z-20"
            priority
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">CincySpark</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          Connecting University of Cincinnati Students, One Spark at a Time
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-red-600 hover:bg-white/90">
            Sign Up with UC Email
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose CincySpark?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="bg-red-100 p-3 rounded-full mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">UC Students Only</h3>
                <p className="text-gray-600">
                  Exclusive platform for University of Cincinnati students, verified through UC email addresses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="bg-red-100 p-3 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Match By Interest</h3>
                <p className="text-gray-600">
                  Find connections based on majors, clubs, hobbies, and campus activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="bg-red-100 p-3 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
                <p className="text-gray-600">
                  Verified profiles and robust reporting system to ensure a safe dating environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How CincySpark Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Create an account using your UC email address
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Build Profile</h3>
              <p className="text-gray-600">
                Add photos and share your interests, major, and campus activities
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Find Matches</h3>
              <p className="text-gray-600">
                Discover fellow Bearcats who share your interests
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Connect</h3>
              <p className="text-gray-600">
                Chat and meet up on campus for coffee or study dates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Events */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Campus Mixers & Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-none shadow-md">
              <div className="relative h-48">
                <Image 
                  src="/event-1.jpg" 
                  alt="CincySpark Mixer Event"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                  <span className="text-sm text-gray-600">April 15, 2025</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="text-sm text-gray-600">Tangeman University Center</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Spring Mixer</h3>
                <p className="text-gray-600 mb-4">
                  Meet your matches in person at our Spring semester mixer event with games, music, and refreshments.
                </p>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md">
              <div className="relative h-48">
                <Image 
                  src="/event-2.jpg" 
                  alt="CincySpark Game Night"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                  <span className="text-sm text-gray-600">April 28, 2025</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="text-sm text-gray-600">1819 Innovation Hub</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Game Night</h3>
                <p className="text-gray-600 mb-4">
                  Break the ice with fellow students at our popular game night featuring board games and team challenges.
                </p>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-red-600 hover:bg-red-700">
              View All Events <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image 
                      src="/testimonial-1.jpg" 
                      alt="Student testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "CincySpark helped me find someone in my same engineering program. We started as study buddies and now we've been dating for 6 months!"
                </p>
                <p className="font-bold">Emma S.</p>
                <p className="text-sm text-gray-600">Computer Science, Class of 2026</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image 
                      src="/testimonial-2.jpg" 
                      alt="Student testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "I was new to UC and having trouble meeting people. CincySpark connected me with others who love photography like I do!"
                </p>
                <p className="font-bold">Marcus T.</p>
                <p className="text-sm text-gray-600">Digital Media, Class of 2025</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image 
                      src="/testimonial-3.jpg" 
                      alt="Student testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "The campus events hosted by CincySpark are a fun, low-pressure way to meet people. I've made great friends through this app!"
                </p>
                <p className="font-bold">Olivia J.</p>
                <p className="text-sm text-gray-600">Business Administration, Class of 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Match?</h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join CincySpark today and connect with fellow Bearcats!
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-white/90">
            Sign Up with UC Email
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white/80">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-white">CincySpark</h2>
              <p className="text-sm">© 2025 CincySpark. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">About</a>
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Page;
