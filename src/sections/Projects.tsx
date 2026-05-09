import { useEffect, useRef } from 'react';
import {
  FolderOpen,
  ArrowRight,
  Eye,
  Layers,
  AlertCircle,
  CheckCircle2,
  Smartphone,
  Users,
  BookOpen,
  Palette,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Projects = () => {
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

  const projects = [
    {
      id: 'book-swap',
      title: 'Book Swap App',
      subtitle: 'UI/UX Case Study',
      description:
        'A mobile application designed to facilitate book exchanges between readers in local communities.',
      icon: BookOpen,
      color: 'bg-blue-600',
      tags: ['UI/UX Design', 'Mobile App', 'Case Study'],
      overview: {
        description:
          'Book Swap is a mobile application that connects book lovers in local communities, allowing them to exchange books they have already read for new ones. The app promotes sustainable reading habits and builds community connections among readers.',
        goals: [
          'Create an intuitive platform for book exchanges',
          'Build a community of local readers',
          'Promote sustainable reading practices',
          'Simplify the book swapping process',
        ],
      },
      problem: {
        description:
          'Many readers struggle with finding affordable ways to access new books while their old books gather dust on shelves. Existing solutions lack community features and intuitive interfaces for local book exchanges.',
        painPoints: [
          'Difficulty finding people interested in swapping books locally',
          'No reliable platform to track book conditions and availability',
          'Complex exchange coordination process',
          'Lack of trust in peer-to-peer exchanges',
        ],
      },
      wireframes: [
        {
          title: 'Home Screen',
          description: 'Browse available books with filtering options',
        },
        {
          title: 'Book Details',
          description: 'View book information and owner profile',
        },
        {
          title: 'Swap Request',
          description: 'Initiate and manage book exchange requests',
        },
        {
          title: 'Profile',
          description: 'Manage personal library and swap history',
        },
      ],
      features: [
        { icon: Users, title: 'Community Building', desc: 'Connect with local readers' },
        { icon: Smartphone, title: 'Easy Swapping', desc: 'Simple 3-step exchange process' },
        { icon: CheckCircle2, title: 'Trust System', desc: 'Ratings and reviews for safety' },
        { icon: Layers, title: 'Book Management', desc: 'Track your library and wishlist' },
      ],
    },
    {
      id: 'brand-identity',
      title: 'Brand Identity Design',
      subtitle: 'Visual Identity System',
      description:
        'Complete brand identity package including logo, color palette, and marketing materials.',
      icon: FolderOpen,
      color: 'bg-purple-600',
      tags: ['Branding', 'Logo Design', 'Visual Identity'],
      overview: {
        description:
          'A comprehensive brand identity project for a tech startup, including logo design, color palette, typography system, and marketing collateral.',
        goals: [
          'Create a memorable and versatile logo',
          'Establish consistent brand guidelines',
          'Design marketing materials',
          'Build brand recognition',
        ],
      },
      problem: {
        description:
          'The client needed a complete visual identity that would stand out in a competitive market while conveying innovation and trustworthiness.',
        painPoints: [
          'Inconsistent visual presence across platforms',
          'Lack of brand recognition',
          'Outdated design elements',
          'Need for scalable brand assets',
        ],
      },
      wireframes: [
        { title: 'Logo Concepts', description: 'Multiple logo variations and applications' },
        { title: 'Color Palette', description: 'Primary and secondary color schemes' },
        { title: 'Typography', description: 'Font pairings and usage guidelines' },
        { title: 'Applications', description: 'Business cards, letterheads, and social media' },
      ],
      features: [
        { icon: Palette, title: 'Color System', desc: 'Cohesive color palette' },
        { icon: Layers, title: 'Logo Variations', desc: 'Flexible logo applications' },
        { icon: Eye, title: 'Brand Guidelines', desc: 'Comprehensive usage rules' },
        { icon: CheckCircle2, title: 'Marketing Kit', desc: 'Ready-to-use templates' },
      ],
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-blue-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <FolderOpen className="w-4 h-4" />
            Featured Projects
          </div>
          <h2
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-100 font-heading text-4xl sm:text-5xl font-bold text-black mb-4"
          >
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-200 text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Showcasing creative solutions and design thinking through real-world projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group cursor-pointer border-0 bg-white shadow-soft hover:shadow-soft-lg overflow-hidden"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-0">
                    {/* Project Header */}
                    <div className={`${project.color} p-8 text-white`}>
                      <div className="flex items-start justify-between">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                          <project.icon className="w-8 h-8" />
                        </div>
                        <div className="flex gap-2">
                          {project.tags.map((tag, i) => (
                            <Badge
                              key={i}
                              className="bg-white/20 text-white border-0 backdrop-blur-sm"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <h3 className="font-heading text-2xl font-bold mt-6">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">{project.subtitle}</p>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">{project.description}</p>

                      {/* Features Preview */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <feature.icon className="w-4 h-4 text-blue-600" />
                            <span>{feature.title}</span>
                          </div>
                        ))}
                      </div>

                      {/* View Case Study Button */}
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group/btn"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl flex items-center gap-3">
                    <div className={`w-10 h-10 ${project.color} rounded-xl flex items-center justify-center`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    {project.title}
                  </DialogTitle>
                  <DialogDescription>{project.subtitle}</DialogDescription>
                </DialogHeader>

                <div className="space-y-8 mt-4">
                  {/* Overview */}
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-blue-600" />
                      Overview
                    </h4>
                    <p className="text-gray-600">{project.overview.description}</p>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-500 mb-2">Key Goals:</p>
                      <ul className="space-y-2">
                        {project.overview.goals.map((goal, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Problem */}
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h4 className="font-heading text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      Problem Statement
                    </h4>
                    <p className="text-gray-600">{project.problem.description}</p>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-500 mb-2">Pain Points:</p>
                      <ul className="space-y-2">
                        {project.problem.painPoints.map((point, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Wireframes */}
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-blue-600" />
                      Wireframes & Flow
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.wireframes.map((wireframe, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors"
                        >
                          <p className="font-medium text-gray-900">{wireframe.title}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {wireframe.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Key Features
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-blue-50 rounded-xl p-4"
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{feature.title}</p>
                            <p className="text-sm text-gray-500">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-center pt-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
