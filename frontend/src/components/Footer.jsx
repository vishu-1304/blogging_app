const Footer = () => {
  return (
    <>
      <div className="mt-12 w-full bg-gray-50 px-8 md:px-[200px] py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600 text-sm md:text-base">
        {/* Column 1 */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-800 font-semibold mb-2">Explore</h3>
          <p className="hover:text-blue-500 cursor-pointer transition">Featured Blogs</p>
          <p className="hover:text-blue-500 cursor-pointer transition">Most Viewed</p>
          <p className="hover:text-blue-500 cursor-pointer transition">Readers’ Choice</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-800 font-semibold mb-2">Community</h3>
          <p className="hover:text-blue-500 cursor-pointer transition">Forum</p>
          <p className="hover:text-blue-500 cursor-pointer transition">Support</p>
          <p className="hover:text-blue-500 cursor-pointer transition">Recent Posts</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-800 font-semibold mb-2">About</h3>
          <p className="hover:text-blue-500 cursor-pointer transition">Privacy Policy</p>
          <p className="hover:text-blue-500 cursor-pointer transition">About Us</p>
          <p className="hover:text-blue-500 cursor-pointer transition">Terms & Conditions</p>
          <p className="hover:text-blue-500 cursor-pointer transition">Terms of Service</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="py-4 text-center text-gray-500 bg-white text-sm border-t border-gray-200">
        © 2025 Tourist Blogs. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
