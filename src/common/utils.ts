/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified delay has elapsed since the last time it was invoked.
 *
 * @param fn The function to debounce
 * @param delay The delay in milliseconds
 * @param options Additional options for the debounce behavior
 * @returns A debounced version of the provided function
 */
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
  options: { leading?: boolean } = {}
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;

    // If leading is true and there's no active timeout, execute immediately
    if (options.leading && !timeout) {
      fn.apply(context, args);
    }

    // Clear any existing timeout
    if (timeout) {
      clearTimeout(timeout);
    }

    // Set new timeout
    timeout = setTimeout(() => {
      // Only execute if not in leading mode or if in leading mode and there was a delay
      if (!options.leading || (options.leading && timeout)) {
        fn.apply(context, args);
      }
      timeout = null;
    }, delay);
  };
};

export const formatPrice = (price: number) => {
  return price.toLocaleString('de-DE');
};
