export const fetchData = (callback: string) => {
  console.log("I am fetching");
  return Promise.resolve(callback);
};

export default fetchData;
