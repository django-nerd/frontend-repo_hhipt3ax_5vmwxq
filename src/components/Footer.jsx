function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h5 className="text-lg font-semibold text-gray-900">EduBridge</h5>
          <p className="mt-2 text-sm text-gray-600">A community-driven platform empowering Malaysian educators and advancing SDG 4: Quality Education.</p>
        </div>
        <div>
          <h6 className="text-sm font-semibold text-gray-900">Quick Links</h6>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><a href="#features" className="hover:text-blue-600">Features</a></li>
            <li><a href="#mission" className="hover:text-blue-600">Mission</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-sm font-semibold text-gray-900">Contact</h6>
          <p className="mt-2 text-sm text-gray-600">hello@edubridge.app</p>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} EduBridge</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
