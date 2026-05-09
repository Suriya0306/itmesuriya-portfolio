import { useEffect, useRef } from 'react';
import {
  Layers,
  PenTool,
  Figma,
  Code2,
  Users,
  Clock,
  Lightbulb,
  Monitor,
  FileCode,
  Palette,
  Video,
  Layout,
  Smartphone,
  Database,
  GitBranch,
  Coffee,
  Terminal,
} from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'UI/UX Design',
      icon: Layers,
      color: 'bg-blue-500',
      skills: [
        { name: 'Wireframing', icon: Layout },
        { name: 'Prototyping', icon: Smartphone },
        { name: 'User Flow', icon: GitBranch },
        { name: 'Design Systems', icon: Database },
      ],
    },
    {
      title: 'Graphic Design',
      icon: Palette,
      color: 'bg-purple-500',
      skills: [
        { name: 'Photoshop', icon: PenTool },
        { name: 'Illustrator', icon: Palette },
        { name: 'InDesign', icon: Layout },
        { name: 'After Effects', icon: Video },
        { name: 'Premiere', icon: Monitor },
      ],
    },
    {
      title: 'Tools',
      icon: Figma,
      color: 'bg-pink-500',
      skills: [
        { name: 'Figma', icon: Figma },
        { name: 'Canva', icon: Palette },
        { name: 'MS Office', icon: Monitor },
      ],
    },
    {
      title: 'Development',
      icon: Code2,
      color: 'bg-green-500',
      skills: [
        { name: 'HTML', icon: FileCode },
        { name: 'CSS', icon: Palette },
        { name: 'JavaScript', icon: Code2 },
      ],
    },
    {
      title: 'Programming',
      icon: Terminal,
      color: 'bg-orange-500',
      skills: [
        { name: 'Python', icon: Coffee },
        { name: 'C++', icon: Terminal },
        { name: 'Java', icon: Code2 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'bg-teal-500',
      skills: [
        { name: 'Leadership', icon: Users },
        { name: 'Time Management', icon: Clock },
        { name: 'Problem Solving', icon: Lightbulb },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Layers className="w-4 h-4" />
            Skills & Expertise
          </div>
          <h2
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-100 font-heading text-4xl sm:text-5xl font-bold text-black mb-4"
          >
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-200 text-gray-600 text-lg max-w-2xl mx-auto"
          >
            A diverse skill set combining design expertise with technical knowledge to deliver comprehensive solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="bg-gray-50 rounded-3xl p-6 h-full hover:bg-blue-50/50 transition-colors group">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:bg-blue-50 transition-all cursor-default"
                    >
                      <skill.icon className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-600 mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium">
            <Lightbulb className="w-4 h-4" />
            Always learning and expanding my skill set
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
