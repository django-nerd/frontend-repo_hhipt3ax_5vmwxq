import { BookOpen, Users, Upload, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Resource Sharing',
    desc: 'Upload and discover lesson plans, worksheets, and videos tagged by subject and syllabus.'
  },
  {
    icon: Users,
    title: 'Community Forum',
    desc: 'Discuss challenges, share tips, and announce training opportunities.'
  },
  {
    icon: Upload,
    title: 'Mentorship',
    desc: 'Match mentors and mentees by subject expertise and years of experience.'
  },
  {
    icon: BarChart3,
    title: 'Dashboard & Analytics',
    desc: 'Track your contributions, engagement, and progress over time.'
  }
];

function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-blue-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 text-center">What you can do</h3>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">Five modules — Authentication, Resources, Community, Mentorship, and Dashboard — designed for simplicity and impact.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <f.icon size={22} />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
