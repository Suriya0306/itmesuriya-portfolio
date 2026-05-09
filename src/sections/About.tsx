// @ts-nocheck
import { useEffect, useRef } from 'react';
import { User, Palette, Code, Lightbulb, Sparkles } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const expertise = [
    { name: 'UI/UX Design', icon: Palette, color: 'bg-blue-50 text-blue-600' },
    { name: 'Web Development', icon: Code, color: 'bg-blue-50 text-blue-600' },
    { name: 'Graphic Design', icon: Sparkles, color: 'bg-blue-50 text-blue-600' },
    { name: 'Prototyping', icon: Lightbulb, color: 'bg-blue-50 text-blue-600' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <User className="w-4 h-4" />
            About Me
          </div>
          <h2
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-100 font-heading text-4xl sm:text-5xl font-bold text-black mb-4"
          >
            Creative <span className="text-gradient">Professional</span>
          </h2>
        </div>

        {/* Unified Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual Element */}
          <div
            className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-1000"
          >
            <div className="relative group">
              {/* Decorative rings */}
              <div className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-[2rem] animate-spin-slow opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl bg-blue-50">
                <img
                  src="./upload/image-removebg-preview__1_-removebg-preview.png"
                  alt="Suriya N"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 z-20 animate-float border border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xl text-gray-900 leading-none">3+ Years</p>
                    <p className="text-sm text-gray-500 mt-1">Creative Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Narrative */}
          <div
            className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 delay-200 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Hi, I'm <span className="text-blue-600">Suriya N</span>
              </h3>
              <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm">
                UI/UX Designer & Web Developer
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              I am a passionate creative professional with a strong foundation in building responsive, user-centric digital experiences. My expertise lies at the intersection of **Design** and **Development**, allowing me to solve complex technical challenges while maintaining a clean, modern aesthetic.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Whether I'm wireframing an intuitive user flow or coding a high-performance React application, my goal is always to deliver outstanding digital products that solve real problems.
            </p>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {expertise.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-white transition-all group"
                >
                  <div className={`p-2 rounded-lg ${item.color} group-hover:bg-blue-600 group-hover:text-white transition-colors`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700 text-sm">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex gap-8 pt-6 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">150+</p>
                <p className="text-sm text-gray-500">Projects Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
