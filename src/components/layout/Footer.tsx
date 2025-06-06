import React from "react";
import { useNavigate } from "../providers/NavigationProvider";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">CityScope</h3>
            <p className="text-gray-400 max-w-md">
              AI-powered city information to help you make informed decisions
              about where to live, work, or visit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-3">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate("/cities")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cities
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/compare")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Compare
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/favorites")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Favorites
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">About</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://arenema.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Data
                  </a>
                </li>
                <li>
                  <a
                    href="https://arenema.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="https://arenema.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} CityScope. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
