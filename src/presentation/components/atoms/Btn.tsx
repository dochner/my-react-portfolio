import { LinkProps } from "react-router-dom";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const defaultClassNames =
  "inline-flex items-center justify-center border border-transparent text-base font-semibold h-max";

export interface IBtnProps
  extends React.PropsWithChildren<{}>,
    Omit<LinkProps, "to"> {
  variant?: "primary" | "secondary" | "white" | "text" | "accent";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  icon?: string;
  iconRight?: string;
  label?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  round?: boolean;
  to?: string;
  fab?: boolean;
}

const Btn = ({
  children,
  variant = "primary",
  size,
  className,
  label,
  icon,
  iconRight,
  disabled,
  type,
  round,
  to,
  fab,
  onClick,
}: IBtnProps) => {
  const [btnClassNames, setBtnClassNames] = useState(defaultClassNames);

  useEffect(() => {
    setBtnClassNames(
      classNames(
        className,
        defaultClassNames,
        variant === "primary"
          ? "text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          : "",
        variant === "secondary"
          ? "text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          : "",
        variant === "white"
          ? "text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          : "",
        variant === "text"
          ? "text-primary-600 hover:text-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          : "",
        variant === "accent"
          ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
          : "",
        "px-4 py-2",
        size === "xs" ? "px-2.5 py-1.5 text-xs" : "",
        size === "sm" ? "px-3 py-2 text-sm" : "",
        size === "md" ? "px-4 py-2 text-sm" : "",
        size === "lg" ? "px-4 py-2 text-base" : "",
        size === "xl" ? "px-6 py-3 text-base" : "",
        fab ? "!rounded-full !p-4" : "",
        round ? "rounded-full" : "rounded-md"
      )
    );
  }, [variant, size, className, round]);

  return (
    <>
      {to ? (
        <Link to={to} className={btnClassNames}>
          {icon && (
            <i
              className={classNames(icon, !fab ? "-ml-1 mr-3" : "", "h-5 w-5")}
            ></i>
          )}
          {label && <span>{label}</span>}
          {children}
          {iconRight && (
            <i
              className={classNames(
                iconRight,
                !fab ? "ml-3 -mr-1" : "",
                "h-5 w-5"
              )}
            ></i>
          )}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={btnClassNames}
          type={type}
          disabled={disabled}
        >
          {icon && (
            <i
              className={classNames(icon, !fab ? "-ml-1 mr-3" : "", "h-5 w-5")}
            ></i>
          )}
          {label && <span>{label}</span>}

          {iconRight && (
            <i
              className={classNames(
                iconRight,
                !fab ? "ml-3 -mr-1" : "",
                "h-5 w-5"
              )}
            ></i>
          )}
        </button>
      )}
    </>
  );
};

export default Btn;
