export interface ITab {
  active?: boolean;
  to?: string;
  onClick?: () => void;
  icon?: string;
  label?: string;
  name?: string;
  iconRight?: string;
}

export interface ITabProps extends React.PropsWithChildren<{}>, ITab {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Tab = ({
  active,
  to,
  onClick,
  icon,
  label,
  iconRight,
  children,
}: ITabProps) => {
  return (
    <>
      {to ? (
        <NavLink
          to={to}
          className={({ isActive }) =>
            classNames(
              isActive
                ? "border-primary-500 text-primary-400"
                : "border-transparent text-gray-600 dark:text-gray-200 hover:text-primary-500 hover:border-primary-400",
              "cursor-pointer group inline-flex items-center px-1 pt-1 border-b-2 font-medium font-display h-full"
            )
          }
        >
          {icon && <i className={classNames(icon, "mr-4 h-5 w-5")}></i>}

          {label && <span>{label}</span>}
          {children}

          {iconRight && (
            <i className={classNames(iconRight, "ml-4 h-5 w-5")}></i>
          )}
        </NavLink>
      ) : (
        <div
          onClick={onClick}
          className={classNames(
            active
              ? "bg-primary-500 text-primary-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
            "cursor-pointer group inline-flex items-center px-1 pt-1 border-b-2 font-medium h-full"
          )}
        >
          {icon && <i className={classNames(icon, "mr-4 h-5 w-5")}></i>}

          {label && <span>{label}</span>}
          {children}

          {iconRight && (
            <i className={classNames(iconRight, "ml-4 h-5 w-5")}></i>
          )}
        </div>
      )}
    </>
  );
};

export default Tab;
