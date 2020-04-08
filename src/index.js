export const assign = (target, source) => {
  Object.keys(source).forEach((key, i) => {
    let prop = key;
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
};
