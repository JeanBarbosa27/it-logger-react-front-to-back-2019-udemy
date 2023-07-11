// Considers only the last sent
export const debounce = (callback: Function, wait = 500) => {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: Array<any>) {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, args), wait);
  }
}

// TODO: Debounce that considers only the first one to avoid multiple clicks, for example

// TODO: Throttle to save changes on large fields such as description, e.g., to save each Xms as user types in it
