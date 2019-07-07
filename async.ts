export const fetchData = (callback: string, error: boolean = false) => {
  return new Promise((resolve, reject) => {
    if (error) reject("error");
    resolve(callback);
  });
};

export default fetchData;
