// @ts-nocheck
import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Sparkles, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
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

  const experiences = {
    suriya: [
      {
        title: 'Freelance Graphic Designer',
        company: 'Self-Employed',
        location: 'Remote',
        period: '2022 - Present',
        description:
          'Working with diverse clients to create compelling visual content including social media graphics, brand identities, and marketing materials.',
        achievements: [
          'Designed 100+ social media posts for various brands',
          'Created complete brand identity packages',
          'Managed video editing projects for marketing campaigns',
        ],
        skills: ['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro'],
      },
      {
        title: 'Graphic Design Intern',
        company: 'VPX Summit 2023',
        location: 'India',
        period: '2023',
        description:
          'Collaborated with the organizing team to manage all aspects of graphic design needs for the summit including promotional materials and event branding.',
        achievements: [
          'Designed promotional materials for the event',
          'Created visuals for social media campaigns',
        ],
        skills: ['Canva', 'Figma', 'Social Media Design'],
      },
    ],
    suriyaN: [
      {
        title: 'UI/UX Designer',
        company: 'Freelance',
        location: 'Remote',
        period: '2023 - Present',
        description:
          'Designing intuitive and user-centered interfaces for web and mobile applications. Specializing in creating modern, accessible, and visually appealing digital experiences.',
        achievements: [
          'Designed 15+ mobile and web app interfaces',
          'Created comprehensive design systems',
          'Conducted user research and usability testing',
        ],
        skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
      },
      {
        title: 'UI/UX Design Intern',
        company: 'Tech Startup',
        location: 'Remote',
        period: '2022 - 2023',
        description:
          'Worked closely with product teams to design and iterate on user interfaces, creating wireframes, prototypes, and high-fidelity mockups.',
        achievements: [
          'Redesigned core user flows improving usability by 40%',
          'Collaborated with developers for design implementation',
        ],
        skills: ['Wireframing', 'User Flows', 'Accessibility', 'HTML/CSS'],
      },
    ],
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Single Header Line */}
        <div className="text-center mb-20">
          <div
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Briefcase className="w-4 h-4" />
            Work Experience
          </div>
          <h2
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-100 font-heading text-4xl sm:text-5xl font-bold text-black"
          >
            Suriya's Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Experience Details - Two Part Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Part 1 - Graphic Design */}
          <div className="space-y-8">
            <div className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 flex items-center gap-4 border-b border-blue-100 pb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Graphic Design</h3>
            </div>
            
            {experiences.suriya.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>

          {/* Part 2 - UI/UX & Development */}
          <div className="space-y-8">
            <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 flex items-center gap-4 border-b border-blue-100 pb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">UI/UX & Web Dev</h3>
            </div>

            {experiences.suriyaN.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index }) => (
  <Card
    className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group hover:shadow-soft-lg border-0 bg-white shadow-sm"
    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
  >
    <CardContent className="p-6">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <h4 className="font-heading text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {exp.title}
        </h4>
        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
          <Calendar className="w-3 h-3 mr-1" />
          {exp.period}
        </Badge>
      </div>
      
      <p className="text-gray-600 font-medium flex items-center gap-2 mb-3 text-sm">
        <Briefcase className="w-4 h-4 text-blue-400" />
        {exp.company}
      </p>

      <p className="text-gray-500 text-xs flex items-center gap-2 mb-4 uppercase tracking-widest font-bold">
        <MapPin className="w-3 h-3" />
        {exp.location}
      </p>

      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{exp.description}</p>

      <div className="space-y-3">
        <ul className="space-y-2">
          {exp.achievements.map((achievement, i) => (
            <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-50">
        {exp.skills.map((skill, i) => (
          <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-500 px-2.5 py-1 rounded-md">
            {skill}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Experience;
