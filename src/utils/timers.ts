export const debounce = (callback: Function, wait = 500) => {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: Array<any>) {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, args), wait);
  }
}
