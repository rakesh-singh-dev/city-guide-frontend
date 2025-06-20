// import React, { createContext, useContext, useState, useCallback } from 'react';

// type Route = 
//   | '/' 
//   | '/cities' 
//   | `/city/${string}` 
//   | '/compare' 
//   | '/favorites'
//   | '/ask';

// interface NavigationContextType {
//   currentRoute: Route;
//   navigate: (to: Route) => void;
//   params: Record<string, string>;
// }

// const NavigationContext = createContext<NavigationContextType>({
//   currentRoute: '/',
//   navigate: () => {},
//   params: {},
// });

// export const useNavigate = () => {
//   const context = useContext(NavigationContext);
//   return context.navigate;
// };

// export const useRoute = () => {
//   const context = useContext(NavigationContext);
//   return {
//     currentRoute: context.currentRoute,
//     params: context.params,
//   };
// };

// interface NavigationProviderProps {
//   children: React.ReactNode;
// }

// export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
//   const [currentRoute, setCurrentRoute] = useState<Route>('/');
//   const [params, setParams] = useState<Record<string, string>>({});
  
//   const navigate = useCallback((to: Route) => {
//     setCurrentRoute(to);
    
//     // Extract params from route if it's a dynamic route
//     if (to.includes('/city/')) {
//       const cityId = to.split('/city/')[1];
//       setParams({ cityId });
//     } else {
//       setParams({});
//     }
    
//     // Scroll to top on navigation
//     window.scrollTo(0, 0);
//   }, []);
  
//   return (
//     <NavigationContext.Provider value={{ currentRoute, navigate, params }}>
//       {children}
//     </NavigationContext.Provider>
//   );
// };

// export default NavigationProvider;

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";

type Route =
  | "/"
  | "/cities"
  | `/city/${string}`
  | "/compare"
  | "/favorites"
  | "/ask";

interface NavigationContextType {
  currentRoute: Route;
  navigate: (to: Route, options?: { state?: unknown }) => void;
  params: Record<string, string>;
  navigationState: unknown;
}


const NavigationContext = createContext<NavigationContextType>({
  currentRoute: "/",
  navigate: () => {},
  params: {},
  navigationState: null,
});

export const useNavigate = () => {
  const context = useContext(NavigationContext);
  return context.navigate;
};

export const useRoute = () => {
  const context = useContext(NavigationContext);
  return {
    currentRoute: context.currentRoute,
    params: context.params,
  };
};

export const useNavigationState = () => {
  const context = useContext(NavigationContext);
  return context.navigationState;
};

interface NavigationProviderProps {
  children: React.ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [currentRoute, setCurrentRoute] = useState<Route>("/");
  const [params, setParams] = useState<Record<string, string>>({});
  const [navigationState, setNavigationState] = useState<unknown >(null);

  const navigate = useCallback((to: Route, options?: { state?: unknown  }) => {
    setCurrentRoute(to);
    setNavigationState(options?.state || null);

    if (to.includes("/city/")) {
      const cityId = to.split("/city/")[1];
      setParams({ cityId });
    } else {
      setParams({});
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <NavigationContext.Provider
      value={{ currentRoute, navigate, params, navigationState }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
