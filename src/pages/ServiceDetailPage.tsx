import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Cpu,
  Users,
  UserCheck,
  ShieldCheck,
  Building,
  MonitorSmartphone,
  Brain,
} from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';



const services = {
 jarvis: {
  title: 'Jarvis',
  icon: <Cpu className="h-12 w-12" />,
  backgroundImage: '/jarvis.jpg', 
  description:
    'Jarvis is an advanced AI-powered customer service assistant designed to deliver instant, accurate, and personalized support across chat, email, and voice channels. It combines natural language understanding with intelligent automation to resolve issues, route complex queries, and improve continuously—all while reducing operational costs and enhancing customer satisfaction.',
  features: [
    'Effortless integration with CRM and helpdesk systems to unify customer data and streamline workflows',
    'Round-the-clock automated support for instant responses anytime, including outside business hours',
    'Context-aware, personalized assistance tailored to each customer’s history and profile',
    'Multichannel support across chat, email, voice, and social media for cohesive service delivery',
    'Smart ticket categorization and routing based on urgency, topic, and agent expertise',
    'Natural Language Understanding for interpreting customer intent, tone, and context accurately',
    'Continuous performance improvement through machine learning based on past interactions'
  ],
  benefits: [
    'Delivers enhanced customer satisfaction and loyalty by making customers feel heard and valued',
    'Reduces average response times and lowers operational costs by automating repetitive tasks',
    'Maintains consistent customer service tone and quality across all communication platforms',
    'Proactively solves problems by detecting patterns and providing relevant fixes before escalation',
    'Provides real-time support without requiring human intervention, improving response speed',
    'Enables smarter and faster decisions through real-time insights and intelligent recommendations'
  ]
},
'mariah-ai': {
  title: 'Mariah AI',
  icon: <Users className="h-12 w-12" />,
    backgroundImage: '/mariah.jpg', 

  description:
    'Mariah AI is a powerful, always-on desktop intelligence designed to boost productivity, ensure privacy, and provide real-time intelligent support for writing, research, task management, and more—all with adaptive learning and natural interaction.',
  features: [
    'Human-like natural conversations with emotional and intent awareness',
    'Runs locally on your desktop for maximum privacy and minimal latency',
    'Smart document handling with summarization, insights, and clause extraction',
    'Seamless integration with your calendar and email for scheduling and follow-ups',
    'Mood-aware interactions that adapt tone based on emotional context',
    'Hands-free productivity through conversational voice mode',
    'Adaptive learning to personalize assistance based on habits and preferences'
  ],
  benefits: [
    'Fully desktop-based operation for fast, distraction-free performance',
    'Guaranteed privacy and security with local data control and no third-party training usage',
    'Highly personalized experience with evolving intelligence that fits your workflows',
    'Offline-capable for uninterrupted productivity even without internet',
    'Elegant and minimal user interface that reduces cognitive load and boosts focus',
    'Supports a wide range of use cases including students, professionals, and entrepreneurs',
    'Empathetic and responsive AI assistant tailored for everyday tasks and creative collaboration'
  ]
},
'ai-hr': {
  title: 'AI HRMS',
  icon: <UserCheck className="h-12 w-12" />,
    backgroundImage: '/iot.jpg', 

  description: 'Revolutionize your recruitment and onboarding with AI-powered HR automation.',
  features: [
    'Smart resume parsing and automated screening',
    'AI-driven candidate matching with predictive analytics',
    'One-click job posting and talent sourcing',
    'AI-powered interview scheduling',
    'Personalized onboarding workflows',
    'Real-time onboarding progress tracking',
    'Automated document management',
    'Advanced analytics for HR metrics',
    'Integration with Slack, Google Workspace, Teams, and more'
  ],
  benefits: [
    'Faster and smarter hiring decisions',
    'Reduced time-to-hire by up to 50%',
    'Improved talent matching and culture fit',
    'Streamlined and scalable onboarding',
    'Higher employee retention and engagement',
    'Data-driven HR strategy through actionable insights',
    'Minimized manual effort and paperwork',
    'Better candidate experience',
    'Seamless integration into your existing workflow'
  ]
},
'vciso': {
  title: 'AI vCISO',
  icon: <ShieldCheck className="h-12 w-12" />,
    backgroundImage: '/desktop.jpg', 

  description: 'AI-powered Virtual Chief Information Security Officer providing 24/7 cybersecurity strategy, compliance, and risk management.',
  features: [
    'AI-powered threat intelligence and real-time response',
    'Continuous 24/7 security monitoring',
    'Automated security audits and gap analysis',
    'Compliance automation (GDPR, HIPAA, ISO 27001)',
    'AI-driven risk evaluation and mitigation',
    'Dynamic incident response planning',
    'Customizable cybersecurity strategies',
    'Scalable protection for startups to enterprises'
  ],
  benefits: [
    'Affordable alternative to a full-time CISO',
    'Proactive identification and mitigation of cyber threats',
    'Improved regulatory compliance and audit readiness',
    'Real-time insights and automated reporting',
    'Reduced risk exposure and enhanced resilience',
    'Scalable and adaptive to business growth',
    'Expert-level security guidance around the clock',
    'Streamlined incident response and recovery'
  ]
},
'enterprise-ai': {
  title: 'Enterprise AI (Chris)',
  icon: <Building className="h-12 w-12" />,
    backgroundImage: '/enterprise.jpg', 

  description: 'Secure AI assistant for executives and growing teams, offering scalable, enterprise-grade automation and insights.',
  features: [
    'Enterprise-level data encryption',
    'Multi-Factor Authentication (MFA)',
    'Role-Based Access Control (RBAC)',
    'Intelligent task automation',
    'Personalized and adaptive AI learning',
    'AI as a Service (AIaaS) deployment',
    'Compliance with GDPR, HIPAA & industry standards',
    'Multi-device compatibility for mobile executives',
    'Integration with Slack, Teams, Zoom, and more',
    'Real-time collaboration and reporting tools'
  ],
  benefits: [
    'Highly secure and private AI environment',
    'Boosted executive productivity',
    'Streamlined operations for small to mid-sized businesses',
    'Scalable from individual use to full teams',
    'Faster decision-making with real-time analytics',
    'Seamless integration into existing workflows',
    'Lower infrastructure costs via cloud deployment',
    'Tailored assistance for strategic leadership roles',
    'Improved team collaboration and task management',
    'Future-proof digital transformation solution'
  ]
},
  'desktop-ai': {
    title: 'Desktop AI',
    icon: <MonitorSmartphone className="h-12 w-12" />,
      backgroundImage: '/other.jpg', 
    description: 'AI solutions designed for offline and on-device operations.',
    features: [
      'On-device NLP',
      'Offline inference engines',
      'Lightweight AI models',
      'Data privacy control',
      'Low-latency responses',
      'Custom UI integrations'
    ],
    benefits: [
      'Works without internet',
      'Fast performance',
      'Data stays local',
      'Highly responsive',
      'Custom-branded experiences',
      'Secure environments'
    ]
  },
  'other-ai-services': {
    title: 'Other AI Services',
    icon: <Brain className="h-12 w-12" />,
    backgroundImage: '/other.jpg', 
    description: 'Additional AI services including consulting, custom models, and integration support.',
    features: [
      'AI readiness assessment',
      'Custom ML solutions',
      'Integration support',
      'Ongoing AI consulting',
      'Staff training',
      'AI roadmap planning'
    ],
    benefits: [
      'Expertise on demand',
      'Future-ready strategies',
      'Flexible project scopes',
      'Seamless integrations',
      'AI adoption acceleration',
      'Cost-effective guidance'
    ]
  }
};

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
          <Button variant="primary" onClick={() => navigate('/services')}>
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <AnimatedSection>
  {service.backgroundImage && (
  <div
    className="text-white py-20 bg-cover bg-center"
    style={{ backgroundImage: `url('${service.backgroundImage}')` }}
  >
    <div className="">
      <div className="container mx-auto px-4">

        <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-white/10 flex items-center justify-center relative">
          <div className="bg-white/80 rounded-full p-2">
            {service.icon}
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          {service.title}
        </h1>

        <p className="text-violet-200 text-lg max-w-2xl font-semibold mx-auto text-center">
          {service.description}
        </p>

      </div>
    </div>
  </div>
)}

      </AnimatedSection>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-violet-900">Key Features</h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                      </div>
                      <span className="ml-4 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-violet-900">Benefits</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                      </div>
                      <span className="ml-4 text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-16 text-center">
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's build your free POC .</h3>
              <p className="text-violet-100 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about how our {service.title.toLowerCase()} can benefit your business.
              </p>
              <Button variant="primary" onClick={() => navigate('/contact')} className="bg-violet-500 text-white hover:bg-violet-50">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
