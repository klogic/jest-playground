const initializeCityDatabase = (fnName: string) => {
  console.log(fnName + ": initializeCityDatabase init");
  return Promise.resolve(fnName + ": initializeCityDatabase init");
};
const clearCityDatabase = (fnName: string) => {
  console.log(fnName + ": clearCityDatabase" + fnName);
  return Promise.resolve(fnName + ": clearCityDatabase");
};
const isCity = (data: string) => {
  // this for demo purpose, normally this should get from database;
  return data;
};
export { initializeCityDatabase, clearCityDatabase, isCity };
export default initializeCityDatabase;
