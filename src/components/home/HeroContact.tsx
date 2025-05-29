import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../common/Button';
import AnimatedSection from '../common/AnimatedSection';

const HeroContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });

        setTimeout(() => setSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
      <div className="mx-auto">
        <AnimatedSection>
          <div className="bg-white rounded-lg shadow p-4 text-xs">
            <h3 className="text-base font-semibold text-gray-800 mb-3">Send Us a Message</h3>

            {submitted ? (
              <div className="p-3 bg-green-50 rounded-md border border-green-200 text-center text-xs">
                <div className="w-10 h-10 mx-auto bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-gray-800">Message Sent!</h4>
                <p className="text-gray-600">We’ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block mb-0.5 font-medium text-gray-700">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-2 py-1 border rounded focus:ring-1 focus:ring-violet-400 text-xs ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-600 mt-0.5">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-0.5 font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-2 py-1 border rounded focus:ring-1 focus:ring-violet-400 text-xs ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-600 mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block mb-0.5 font-medium text-gray-700">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Your message..."
                    className={`w-full px-2 py-1 border rounded focus:ring-1 focus:ring-violet-400 text-xs ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.message && <p className="text-red-600 mt-0.5">{errors.message}</p>}
                </div>

                <Button type="submit" variant="primary" size="sm" className="w-full text-xs py-1.5">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send <Send className="ml-1 h-3.5 w-3.5" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
  );
};

export default HeroContact;
