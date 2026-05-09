import { useEffect, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { User, Palette, Code, Sparkles, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProfileData {
  [key: string]: {
    title: string;
    subtitle: string;
    icon: LucideIcon;
    description: string;
    skills: string[];
    stats: { exp: string; projects: string };
  };
}

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('designer');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const profileData: ProfileData = {
    designer: {
      title: 'UI/UX Designer',
      subtitle: 'Creative Visionary',
      icon: Palette,
      description: "I focus on creating intuitive, user-centered, and visually appealing digital experiences. My goal is to bridge the gap between user needs and business goals through clean, modern design.",
      skills: ['UI Design', 'UX Research', 'Prototyping', 'Design Systems'],
      stats: { exp: '3+', projects: '80+' }
    },
    developer: {
      title: 'Web Developer',
      subtitle: 'Technical Expert',
      icon: Code,
      description: "I build responsive, high-performance web applications using the latest technologies. I specialize in turning complex designs into functional, pixel-perfect digital products.",
      skills: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      stats: { exp: '2+', projects: '40+' }
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <User className="w-4 h-4" />
            About Me
          </div>
          <h2 className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-100 font-heading text-4xl sm:text-5xl font-bold text-black">
            Meet the <span className="text-gradient">Professional</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Portrait Visual */}
          <div className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-1000 sticky top-24">
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-[2.5rem] animate-spin-slow opacity-40" />
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl bg-blue-50 border-4 border-white">
                <img
                  src="./upload/image-removebg-preview__1_-removebg-preview.png"
                  alt="Suriya N"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 z-20 animate-float border border-blue-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg text-gray-900 leading-none">Creative</p>
                    <p className="text-xs text-gray-500 mt-1">Problem Solver</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Tabs Selection */}
          <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 delay-200">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-50 p-1.5 rounded-2xl mb-10 border border-gray-100">
                <TabsTrigger
                  value="designer"
                  className="rounded-xl py-4 text-sm font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md transition-all flex items-center gap-2"
                >
                  <Palette className="w-4 h-4" />
                  Designer
                </TabsTrigger>
                <TabsTrigger
                  value="developer"
                  className="rounded-xl py-4 text-sm font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md transition-all flex items-center gap-2"
                >
                  <Code className="w-4 h-4" />
                  Developer
                </TabsTrigger>
              </TabsList>

              {Object.entries(profileData).map(([key, data]) => (
                <TabsContent key={key} value={key} className="mt-0 focus-visible:outline-none">
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-2">
                      <p className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">{data.subtitle}</p>
                      <h3 className="text-4xl font-bold text-gray-900">{data.title}</h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-blue-100 pl-6">
                      "{data.description}"
                    </p>

                    <div className="space-y-4">
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Core Skills</p>
                      <div className="grid grid-cols-2 gap-3">
                        {data.skills.map((skill, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all group">
                            <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                            <span className="font-semibold text-gray-700 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-10 pt-8 border-t border-gray-100">
                      <div>
                        <p className="text-3xl font-black text-gray-900 tracking-tighter">{data.stats.exp}</p>
                        <p className="text-xs font-bold text-gray-400 uppercase mt-1">Years Experience</p>
                      </div>
                      <div>
                        <p className="text-3xl font-black text-gray-900 tracking-tighter">{data.stats.projects}</p>
                        <p className="text-xs font-bold text-gray-400 uppercase mt-1">Projects Completed</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
