import PropTypes from "prop-types";

export function Card({ title, children, className, footer }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {title && (
        <div className="px-4 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      )}
      <div className="px-4 py-5">{children}</div>
      {footer && (
        <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  footer: PropTypes.node,
};

Card.defaultProps = {
  className: "",
};
