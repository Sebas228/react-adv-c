import { Suspense } from 'react';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import { routes, Route as CustomRoute } from './routes';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />

            <ul>
              {routes.map(({ to, path, name }: CustomRoute) => (
                <li key={path}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }: CustomRoute) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
