type IInputTextProps = {
  name: string;
  label?: string;
  value?: string;
  prependIcon?: string;
  appendIcon?: string;
  cornerHint?: string;
  addon?: React.ReactNode;
  inlineAddon?: React.ReactNode;
  error?: string;
  hint?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const defaultInputTextClasses =
  "block w-full p-3 border-gray-300 dark:border-dark-100 placeholder-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md bg-white dark:bg-dark-50 dark:text-white ";

const errorClasses =
  "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500";

const InputText = ({
  name,
  label,
  onChange,
  onInput,
  error,
  hint,
  value,
  placeholder,
  prependIcon,
  appendIcon,
  cornerHint,
  inlineAddon,
  addon,
}: IInputTextProps) => {
  return (
    <fieldset>
      <div>
        <label
          htmlFor={name}
          className="block font-medium text-dark-300 dark:text-white"
        >
          {label}
        </label>

        {cornerHint && (
          <span className="text-sm text-gray-500 dark:text-dark-100">
            {cornerHint}
          </span>
        )}
      </div>
      <div className="mt-1 row items-center relative rounded-md shadow-sm">
        {prependIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span
              className={classNames(
                "text-gray-500 dark:text-gray-300 sm:text-sm",
                prependIcon
              )}
            ></span>
          </div>
        )}

        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          className={classNames(
            defaultInputTextClasses,
            error ? errorClasses : "",
            prependIcon ? "pl-10" : "",
            appendIcon ? "pr-10" : ""
          )}
          value={value}
          onChange={onChange}
          onInput={onInput}
        />

        {appendIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span
              className={classNames(
                "text-gray-500 dark:text-gray-300 sm:text-sm",
                appendIcon
              )}
            ></span>
          </div>
        )}
      </div>

      {hint && (
        <p className="mt-2 text-sm text-gray-500 dark:text-dark-100">{hint}</p>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </fieldset>
  );
};

export default InputText;
