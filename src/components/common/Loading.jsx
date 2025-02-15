import PropTypes from "prop-types";

export function Loading({ size, color, text }) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  const colors = {
    primary: "text-blue-600",
    white: "text-white",
    gray: "text-gray-600",
  };

  return (
    <div className="flex items-center justify-center">
      <svg
        className={`animate-spin ${sizes[size]} ${colors[color]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      {text && <span className="ml-2">{text}</span>}
    </div>
  );
}

Loading.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["primary", "white", "gray"]),
  text: PropTypes.string,
};

Loading.defaultProps = {
  size: "md",
  color: "primary",
};
