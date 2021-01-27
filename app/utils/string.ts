export const initials = (name, props) => {
  if (!name) {
    return name;
  }
  const arr = name.split(' ').map(e => e.slice(0,1).toUpperCase());
  return arr.length > 1 ? `${arr[0]}${arr[arr.length - 1]}` : arr[0];
};