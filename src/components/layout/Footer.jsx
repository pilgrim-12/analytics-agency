import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Footer({
  companyName = "Analytics Agency",
  contacts = {},
  services = [],
}) {
  const defaultContacts = {
    email: "info@analytics-agency.ru",
    phone: "+7 (999) 123-45-67",
    address: "г. Москва, ул. Примерная, д. 123",
  };

  const defaultServices = [
    "Анализ данных",
    "Визуализация данных",
    "Статистические исследования",
    "Консалтинг",
  ];

  const finalContacts = { ...defaultContacts, ...contacts };
  const finalServices = services.length > 0 ? services : defaultServices;

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Информация о компании */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{companyName}</h3>
            <p className="text-gray-300 text-sm">
              Профессиональные решения в области анализа данных для вашего
              бизнеса
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm">
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Портфолио
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {finalServices.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">
                Email: {finalContacts.email}
              </li>
              <li className="text-gray-300 text-sm">
                Телефон: {finalContacts.phone}
              </li>
              <li className="text-gray-300 text-sm">
                Адрес: {finalContacts.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} {companyName}. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  companyName: PropTypes.string,
  contacts: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  }),
  services: PropTypes.arrayOf(PropTypes.string),
};

export default Footer;

// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// function Footer({ companyInfo, links, socialMedia, contactInfo }) {

//   return (
//     <footer className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">{companyInfo.name}</h3>
//             <p className="text-gray-400">{companyInfo.description}</p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Ссылки</h3>
//             <ul className="space-y-2">
//               {links.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.href}
//                     className="text-gray-400 hover:text-white"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Соцсети</h3>
//             <div className="flex space-x-4">
//               {socialMedia.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   className="text-gray-400 hover:text-white"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Контакты</h3>
//             <address className="text-gray-400 not-italic">
//               <p>{contactInfo.address}</p>
//               <p>{contactInfo.phone}</p>
//               <p>{contactInfo.email}</p>
//             </address>
//           </div>
//         </div>

//         <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
//           <p>
//             © {new Date().getFullYear()} {companyInfo.name}. Все права защищены.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// Footer.propTypes = {
//   companyInfo: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
//   links: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       href: PropTypes.string.isRequired,
//     })
//   ),
//   socialMedia: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       href: PropTypes.string.isRequired,
//       icon: PropTypes.node.isRequired,
//     })
//   ),
//   contactInfo: PropTypes.shape({
//     address: PropTypes.string,
//     phone: PropTypes.string,
//     email: PropTypes.string,
//   }),
// };

// Footer.defaultProps = {
//   links: [],
//   socialMedia: [],
//   contactInfo: {},
// };

// export default Footer;
