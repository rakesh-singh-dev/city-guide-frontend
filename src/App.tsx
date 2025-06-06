// import React from 'react';
// import NavigationProvider, { useRoute } from './components/providers/NavigationProvider';
// import Header from './components/layout/Header';
// import HomePage from './pages/HomePage';
// import CitiesPage from './pages/CitiesPage';
// import CityDetailPage from './pages/CityDetailPage';
// import ComparisonPage from './pages/ComparisonPage';
// import FavoritesPage from './pages/FavoritesPage';

// const Router: React.FC = () => {
//   const { currentRoute } = useRoute();
  
//   // Route-based rendering
//   const renderRoute = () => {
//     if (currentRoute === '/') {
//       return <HomePage />;
//     } else if (currentRoute === '/cities') {
//       return <CitiesPage />;
//     } else if (currentRoute.startsWith('/city/')) {
//       return <CityDetailPage />;
//     } else if (currentRoute === '/compare') {
//       return <ComparisonPage />;
//     } else if (currentRoute === '/favorites') {
//       return <FavoritesPage />;
//     }
    
//     // Default route (404)
//     return (
//       <div className="text-center py-16">
//         <h2 className="text-2xl font-bold text-gray-700 mb-4">Page Not Found</h2>
//         <p className="text-gray-600">The page you're looking for doesn't exist.</p>
//       </div>
//     );
//   };
  
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header onSearch={(query) => console.log('Search:', query)} />
//       <main className="container mx-auto px-4 py-8">
//         {renderRoute()}
//       </main>
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between">
//             <div className="mb-6 md:mb-0">
//               <h3 className="text-xl font-semibold mb-2">CityScope</h3>
//               <p className="text-gray-400 max-w-md">
//                 AI-powered city information to help you make informed decisions about where to live, work, or visit.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-8">
//               <div>
//                 <h4 className="font-medium mb-3">Explore</h4>
//                 <ul className="space-y-2">
//                   <li><button className="text-gray-400 hover:text-white transition-colors">Cities</button></li>
//                   <li><button className="text-gray-400 hover:text-white transition-colors">Compare</button></li>
//                   <li><button className="text-gray-400 hover:text-white transition-colors">Favorites</button></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-medium mb-3">About</h4>
//                 <ul className="space-y-2">
//                   <li><button className="text-gray-400 hover:text-white transition-colors">Our Data</button></li>
//                   <li><button className="text-gray-400 hover:text-white transition-colors">Privacy</button></li>
//                   <li><button className="text-gray-400 hover:text-white transition-colors">Terms</button></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
//             © {new Date().getFullYear()} CityScope. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// function App() {
//   return (
//     <NavigationProvider>
//       <Router />
//     </NavigationProvider>
//   );
// }

// export default App;

import React from 'react';
import NavigationProvider, { useRoute, useNavigate} from './components/providers/NavigationProvider';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import CitiesPage from './pages/CitiesPage';
import CityDetailPage from './pages/CityDetailPage';
import ComparisonPage from './pages/ComparisonPage';
import FavoritesPage from './pages/FavoritesPage';
import { API_BASE_URL } from './config/apiConfig';
import Footer from './components/layout/Footer';

// Replace the old footer block with:
<Footer />

const Router: React.FC = () => {
  const { currentRoute } = useRoute();
  const navigate = useNavigate();


  const handleHeaderSearch = async (query: string) => {
    if (!query.trim()) return;

    try {
      const res = await fetch(`${API_BASE_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city: query }),
      });

      const cityData = await res.json();
      navigate('/cities', { state: { newCity: cityData } });
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const renderRoute = () => {
    if (currentRoute === '/') {
      return <HomePage />;
    } else if (currentRoute === '/cities') {
      return <CitiesPage />;
    } else if (currentRoute.startsWith('/city/')) {
      return <CityDetailPage />;
    } else if (currentRoute === '/compare') {
      return <ComparisonPage />;
    } else if (currentRoute === '/favorites') {
      return <FavoritesPage />;
    }

    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600">The page you're looking for doesn't exist.</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleHeaderSearch} />
      <main className="container mx-auto px-4 py-8">
        {renderRoute()}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <NavigationProvider>
      <Router />
    </NavigationProvider>
  );
}

export default App;
