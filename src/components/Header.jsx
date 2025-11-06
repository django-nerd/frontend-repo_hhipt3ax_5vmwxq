import { GraduationCap } from 'lucide-react';

function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
            <GraduationCap size={22} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">EduBridge</h1>
            <p className="text-xs text-gray-500">Connecting Teachers • Advancing SDG 4</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-blue-600 transition-colors" href="#features">Features</a>
          <a className="hover:text-blue-600 transition-colors" href="#mission">Mission</a>
          <a className="hover:text-blue-600 transition-colors" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-sm font-medium text-blue-700 hover:text-blue-900">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm">Get the App</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
