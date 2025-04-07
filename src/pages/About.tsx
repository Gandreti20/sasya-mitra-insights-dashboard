
import { SiteHeader } from "@/components/SiteHeader";
import { Leaf, Sprout, Users, BarChart, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main>
        <section className="py-12 md:py-20 bg-sasya-green/80 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About Aedaa</h1>
              <p className="text-lg md:text-xl text-white/90">
                Empowering farmers with intelligent agricultural solutions for sustainable and profitable farming.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sasya-green">Our Mission</h2>
                <p className="text-lg mb-6 text-slate-700">
                  At Aedaa, we're on a mission to transform agriculture through technology. 
                  We believe in making modern farming techniques accessible to all farmers, 
                  helping them optimize resources, increase yields, and contribute to a 
                  more sustainable food system.
                </p>
                <p className="text-lg text-slate-700">
                  Our Sasya Mitra platform connects farmers with real-time data, predictive analytics, 
                  and expert guidance to make informed decisions about their crops and resources.
                </p>
              </div>
              <div className="bg-sasya-green/10 p-8 rounded-2xl">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start">
                    <div className="bg-sasya-green h-10 w-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Sprout className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Sustainable Agriculture</h3>
                      <p className="text-slate-600">
                        We promote farming practices that conserve resources and reduce environmental impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-sasya-green h-10 w-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Farmer Support</h3>
                      <p className="text-slate-600">
                        We provide education, tools, and community to help farmers succeed.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-sasya-green h-10 w-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <BarChart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Data-Driven Decisions</h3>
                      <p className="text-slate-600">
                        We enable farmers to make informed choices based on real-time analytics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-20 bg-sasya-green/5">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-sasya-green">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-sasya-green/10 mb-4">
                  <Trophy className="h-8 w-8 text-sasya-green" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-sasya-green">10K+</h3>
                <p className="text-slate-600">Farmers Served</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-sasya-green/10 mb-4">
                  <Leaf className="h-8 w-8 text-sasya-green" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-sasya-green">50K+</h3>
                <p className="text-slate-600">Acres Monitored</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-sasya-green/10 mb-4">
                  <BarChart className="h-8 w-8 text-sasya-green" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-sasya-green">30%</h3>
                <p className="text-slate-600">Average Yield Increase</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-sasya-green/10 mb-4">
                  <Users className="h-8 w-8 text-sasya-green" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-sasya-green">12</h3>
                <p className="text-slate-600">States Covered</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
