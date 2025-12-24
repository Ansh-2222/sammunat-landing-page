import React from "react";

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />

      <section id="home" className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Empowering Growth Through Innovation
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Sammunat is focused on enabling students and professionals to
              grow through hands-on learning, real-world exposure, and
              technology-driven opportunities.
            </p>
            <div className="flex gap-4">
              <button className="bg-indigo-600 text-white px-7 py-3 rounded-md hover:bg-indigo-700 transition">
                Join Now
              </button>
              <a
                href="#impact"
                className="px-7 py-3 rounded-md border border-gray-300 hover:bg-gray-100 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Team collaboration"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <Value title="Real Experience" text="Work on meaningful tasks, not dummy assignments." />
          <Value title="Mentor Guidance" text="Learn directly from professionals and founders." />
          <Value title="Career Focused" text="Build skills that actually matter in industry." />
        </div>
      </section>

      <section id="impact" className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="Discussion"
            className="rounded-xl shadow-md"
          />

          <div>
            <h2 className="text-3xl font-bold mb-5">Our Impact</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sammunat bridges the gap between learning and real-world
              expectations. Our initiatives help participants gain confidence,
              apply their skills practically, and prepare for professional
              environments.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Hands-on project exposure</li>
              <li>• Industry-relevant learning</li>
              <li>• Supportive learning ecosystem</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to make quality learning accessible and practical.
            We believe growth happens when individuals are given the right
            guidance, environment, and opportunities to apply what they learn.
          </p>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8">
            Join Sammunat and take the next step towards meaningful growth and
            professional development.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}


function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold tracking-wide">
          SAMMUNAT
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-200">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#impact" className="hover:text-white transition">Impact</a>
          <a href="#mission" className="hover:text-white transition">Mission</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}


function Value({ title, text }) {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}


function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Samm<span className="text-orange-400">unat</span>
          </h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sammunat. <br />
            All rights reserved.
          </p>

          <div className="flex space-x-4 text-gray-400 text-sm">
            <span className="cursor-pointer hover:text-white">Fb</span>
            <span className="cursor-pointer hover:text-white">Tw</span>
            <span className="cursor-pointer hover:text-white">In</span>
            <span className="cursor-pointer hover:text-white">Ig</span>
            <span className="cursor-pointer hover:text-white">Yt</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-gray-400 leading-relaxed">
            <li>Our Address</li>
            <li>127 N Higgins Ave Ste 307d</li>
            <li>Missoula, MT 59802, USA</li>
            <li className="pt-2">contact@sammunat.com</li>
            <li>+1 588 749 689</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Learn More</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#mission" className="hover:text-white transition">Our Story</a></li>
            <li><a href="#impact" className="hover:text-white transition">Projects</a></li>
            <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Our Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter to get our news & deals delivered to you.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-l-md bg-slate-700 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-r-md hover:bg-indigo-600 transition text-sm font-medium">
              Join
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

