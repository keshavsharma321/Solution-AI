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
    description:
      'Jarvis is your AI-powered customer service assistant, revolutionizing the way businesses interact with customers through seamless automation and intelligent support.',
    features: [
      'Seamless integration with CRM and helpdesk platforms',
      '24/7 automated support availability',
      'Personalized assistance based on customer data',
      'Multichannel support (chat, email, voice, social media)',
      'Intelligent ticket categorization and routing',
      'Natural Language Understanding and automated responses',
      'Machine learning-powered continuous improvement'
    ],
    benefits: [
      'Enhanced customer satisfaction and loyalty',
      'Reduced response times and operational costs',
      'Consistent multichannel customer experience',
      'More efficient and scalable support operations',
      'Proactive problem-solving capabilities',
      'Real-time support without human intervention',
      'Smarter and faster decision-making'
    ]
  },
 'mariah-ai': {
  title: 'Mariah AI',
  icon: <Users className="h-12 w-12" />,
  description: 'Affordable multi-modal AI chatbot for intelligent, 24/7 customer engagement across text, voice, and visual channels.',
  features: [
    'Multi-modal communication (text, voice, image)',
    'Omni-channel support across web, apps, and messaging platforms',
    'Natural Language Processing, voice recognition, and image analysis',
    'AI as a Service (AIaaS) with cloud-based deployment',
    'Customizable chatbot personality, appearance, and responses',
    'Conversational and behavioral analytics for business insights',
    'Simple setup and CRM integration without technical expertise'
  ],
  benefits: [
    'Improved customer satisfaction through human-like interactions',
    '24/7 automated support and sales engagement',
    'Cost-effective solution tailored for small and medium businesses',
    'Increased customer engagement and loyalty',
    'Lead generation and conversion through proactive conversations',
    'Scalable and flexible to grow with your business',
    'Streamlined internal support and HR automation'
  ]
},
'ai-hr': {
  title: 'AI HRMS',
  icon: <UserCheck className="h-12 w-12" />,
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
        <div className="bg-violet-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                {service.icon}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{service.title}</h1>
            <p className="text-violet-200 text-lg max-w-2xl mx-auto text-center">
              {service.description}
            </p>
          </div>
        </div>
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
