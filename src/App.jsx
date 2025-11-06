import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <section id="mission" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl border border-gray-200 p-8 bg-gradient-to-br from-blue-50 to-white">
            <h3 className="text-2xl font-bold">Aligned with UN SDG 4: Quality Education</h3>
            <p className="mt-3 text-gray-700">EduBridge advances Target 4.c by strengthening teacher training and collaboration. We connect urban and rural educators to share best practices, resources, and mentorships for equitable learning outcomes.</p>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc pl-5">
              <li>Resource sharing with syllabus tags (KSSR/KSSM)</li>
              <li>Community discussions and training announcements</li>
              <li>Mentorship matching by subject and experience</li>
              <li>Dashboard insights with simple charts</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <h4 className="text-xl font-semibold">What’s in the prototype</h4>
            <p className="mt-3 text-gray-700">A clean, responsive landing that previews the five core modules: Authentication, Resources, Community, Mentorship, and Dashboard. The 3D hero uses a playful Spline scene to convey building together.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border p-4">
                <p className="text-sm font-medium">Fast</p>
                <p className="text-xs text-gray-600">Optimized to load in under 3 seconds</p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="text-sm font-medium">Accessible</p>
                <p className="text-xs text-gray-600">Readable typography and contrast</p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="text-sm font-medium">Usable</p>
                <p className="text-xs text-gray-600">Simple navigation and actions</p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="text-sm font-medium">Scalable</p>
                <p className="text-xs text-gray-600">Built with modern React patterns</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Footer />
    </div>
  );
}

export default App;
