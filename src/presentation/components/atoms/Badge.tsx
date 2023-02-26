interface IBadgeProps extends React.PropsWithChildren<{}> {
  variant?:
    | "basic"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
  size?: "normal" | "larger";
  rounded?: boolean;
  dot?: boolean;
  showRemoveButton?: boolean;
  onClick?: () => void;
  onClickRemove?: () => void;
}

const defaultBadgeClasses =
  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium relative";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Badge = ({
  children,
  variant = "basic",
  size = "normal",
  rounded = false,
  dot = false,
  showRemoveButton = false,
  onClick,
  onClickRemove,
}: IBadgeProps) => {
  const [badgeClasses, setBadgeClasses] = useState(defaultBadgeClasses);

  useEffect(() => {
    setBadgeClasses(
      classNames(
        defaultBadgeClasses,
        variant === "basic" ? "bg-gray-100 text-gray-800" : "",
        variant === "primary" ? "bg-primary-100 text-primary-800" : "",
        variant === "secondary" ? "bg-secondary-100 text-secondary-800" : "",
        variant === "success" ? "bg-positive-100 text-positive-800" : "",
        variant === "error" ? "bg-negative-100 text-negative-800" : "",
        variant === "warning" ? "bg-warning-100 text-warning-800" : "",
        variant === "info" ? "bg-info-100 text-info-800" : "",
        size === "larger" ? "text-sm" : "",
        rounded ? "rounded-full" : "",
        dot ? "rounded-full" : "",
        showRemoveButton ? "!pr-1" : "",
        onClick ? "cursor-pointer" : ""
      )
    );
  }, [variant, size, rounded, dot, showRemoveButton]);

  return (
    <div className={badgeClasses} onClick={onClick}>
      {children}
      {!!showRemoveButton && (
        <button
          type="button"
          className="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center"
          onClick={onClickRemove}
        >
          <span className="sr-only">Remove small option</span>
          <svg
            className="h-2 w-2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 8 8"
          >
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M1 1l6 6m0-6L1 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Badge;
