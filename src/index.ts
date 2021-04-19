/**
 * Assigns object/array to object/array
 * @param target Object or array to assign to
 * @param source Source object or array
 */
export function assign(target: object | any[], source: object | any[]): void {
  Object.keys(source).forEach((key, i) => {
    let prop: string | number = key;
    if (Array.isArray(target)) {
      prop = i;
    } else if (Array.isArray(source)) {
      prop = Object.keys(target)[key];
    }
    if (source[key] && target[prop] && typeof source[key] === 'object') {
      assign(target[prop], source[key]);
      return;
    }
    if (prop !== undefined) target[prop] = source[key];
  });
}
