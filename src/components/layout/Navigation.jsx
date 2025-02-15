// components/layout/Navigation.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function Navigation({ items, logo, onLogout, userProfile }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {typeof logo === "string" ? (
                <img className="h-8 w-auto" src={logo} alt="Logo" />
              ) : (
                logo
              )}
            </div>

            {/* Десктопное меню */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActiveLink(item.path)
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Профиль пользователя */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {userProfile && (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  {userProfile.name}
                </span>
                {userProfile.avatar && (
                  <img
                    className="h-8 w-8 rounded-full"
                    src={userProfile.avatar}
                    alt={userProfile.name}
                  />
                )}
                {onLogout && (
                  <button
                    onClick={onLogout}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Выйти
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Мобильное меню кнопка */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Открыть меню</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню (выпадающее) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActiveLink(item.path)
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.title}
                </div>
              </Link>
            ))}
          </div>

          {/* Мобильный профиль */}
          {userProfile && (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                {userProfile.avatar && (
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={userProfile.avatar}
                      alt={userProfile.name}
                    />
                  </div>
                )}
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {userProfile.name}
                  </div>
                  {userProfile.email && (
                    <div className="text-sm font-medium text-gray-500">
                      {userProfile.email}
                    </div>
                  )}
                </div>
              </div>
              {onLogout && (
                <div className="mt-3 space-y-1">
                  <button
                    onClick={() => {
                      onLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Выйти
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ).isRequired,
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onLogout: PropTypes.func,
  userProfile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

Navigation.defaultProps = {
  items: [],
  userProfile: null,
};

export default Navigation;

// Пример использования:
/*
const navigationItems = [
  {
    path: '/',
    title: 'Главная',
    icon: <HomeIcon className="w-5 h-5" />
  },
  {
    path: '/analytics',
    title: 'Аналитика',
    icon: <ChartBarIcon className="w-5 h-5" />
  },
  {
    path: '/reports',
    title: 'Отчеты',
    icon: <DocumentTextIcon className="w-5 h-5" />
  }
];

const userProfile = {
  name: 'Иван Иванов',
  email: 'ivan@example.com',
  avatar: '/path/to/avatar.jpg'
};

<Navigation
  items={navigationItems}
  logo="/path/to/logo.svg"
  userProfile={userProfile}
  onLogout={() => {
    // Обработка выхода
  }}
/>
*/
