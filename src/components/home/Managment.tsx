import { Link } from 'react-router-dom';

export default function Management() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4" data-aos="fade-right">
              Meet the Leadership Team at Solution AI
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up">
              Experts Driving Innovation Across the Globe
            </p>
          </div>
        </div>
      </section>

      {/* About the Team */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-700" data-aos="fade-right">
              Meet Our Experienced and Passionate Leaders
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed" data-aos="fade-up">
            At Solution AI, our mission is to harness the power of artificial intelligence and data analytics to drive impactful results for businesses globally. Our leadership team spans the USA and India, combining decades of consulting and tech expertise to deliver transformative solutions with business insight, technical skill, and visionary strategy.
          </p>
        </div>
      </section>

      {/* Hal Lavender Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
          <div className="w-full lg:w-3/5 space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent" data-aos="fade-up">
              Hal Lavender - Chief Technology Officer (CTO)
            </h2>
            <p className="text-gray-700 leading-relaxed" data-aos="fade-up">
              Hal Lavender serves as the CTO of Solution AI, bringing over 30 years of experience leading tech orgs through digital transformation. Known for customer-centric experiences and agile innovation, Hal drives AI and data strategies that fuel our global growth.
            </p>
            <p className="text-gray-700 leading-relaxed" data-aos="fade-up">
              With a track record at IBM, Capgemini, and Cognizant, Hal led large-scale programs across industries, from defense to healthcare. He holds dual Master’s degrees in Business and Computer Science from Florida Tech.
            </p>
          </div>
          <img
            src="/hal.jpeg"
            alt="Hal Lavender"
            className="w-full max-w-sm rounded-2xl shadow-lg border border-gray-200 object-cover transition-transform duration-300 hover:scale-105"
            data-aos="fade-right"
          />
        </div>
      </section>

      {/* Leadership Team Sections */}
      {[
        {
          title: 'USA Leadership Team',
          cards: [
            {
              title: 'Chief Executive Officer (CEO)',
              desc: 'Leads with a strategic vision focused on growth, innovation, and customer success.',
            },
            {
              title: 'Director of Customer Success',
              desc: 'Aligns our services with client goals, ensuring satisfaction and long-term partnerships.',
            },
          ],
        },
        {
          title: 'India Leadership Team',
          cards: [
            {
              title: 'Head of Operations (India)',
              desc: 'Oversees all operations and ensures seamless collaboration globally.',
            },
            {
              title: 'Lead Data Scientist',
              desc: 'Drives machine learning innovation and breakthrough AI solutions.',
            },
            {
              title: 'Director of Engineering',
              desc: 'Leads platform development, driving scalable and robust technical solutions.',
            },
          ],
        },
        {
          title: 'Our Vision and Values',
          cards: [
            {
              title: 'Customer-Centric Innovation',
              desc: 'Innovates based on real-world client needs to deliver high-impact solutions.',
            },
            {
              title: 'Global Collaboration',
              desc: 'Merges insights across USA and India to build diverse, effective solutions.',
            },
            {
              title: 'Commitment to Excellence',
              desc: 'Dedicated to quality and long-term client success in every engagement.',
            },
          ],
        },
        {
          title: 'Decades of Consulting Experience',
          cards: [
            {
              title: 'Industry Expertise',
              desc: 'Hands-on experience across defense, telecom, finance, healthcare, and more.',
            },
            {
              title: 'Digital Transformation',
              desc: 'Migrates businesses from legacy systems to modern tech platforms.',
            },
            {
              title: 'AI & Data-Driven Strategies',
              desc: 'Uses data and AI to deliver insights that drive decisions and optimize processes.',
            },
          ],
        },
        {
          title: 'Why Choose Solution AI?',
          cards: [
            {
              title: 'Experienced Leadership',
              desc: 'Led by Hal Lavender, our team brings deep domain expertise.',
            },
            {
              title: 'Global Presence',
              desc: 'Local expertise with global reach in both USA and India.',
            },
            {
              title: 'Exceptional Talent',
              desc: 'Skilled professionals passionate about solving business challenges.',
            },
          ],
        },
      ].map((section, index) => (
        <section key={index} className="py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-purple-700" data-aos="fade-up">{section.title}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {section.cards.map((card, i) => (
                <div
                  key={i}
                  className="w-full md:w-[45%] lg:w-[30%] bg-white border border-purple-600 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  data-aos="fade-right"
                >
                  <h3 className="text-lg font-semibold text-white text-center bg-gradient-to-r from-purple-600 to-purple-800 p-3 rounded-lg mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-center">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="p-8 bg-white rounded-2xl shadow-lg" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Let's Build a Free POC for You</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Experience the power of AI with Solution AI. Get a free proof-of-concept (POC) to explore how our solutions can transform your business.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-purple-700 text-white rounded-full transition hover:bg-purple-800"
            >
              Get Your Free POC Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
