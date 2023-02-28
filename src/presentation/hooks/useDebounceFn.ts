type Timer = ReturnType<typeof setTimeout>;

export default function <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: Timer | null;

  return function debouncedFunction(this: any, ...args: any[]) {
    const context = this;

    clearTimeout(timeout!);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}