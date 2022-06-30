export const loadingData = (role) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(role);
    }, 100);
  });
};
