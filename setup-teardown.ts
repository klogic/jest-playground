const initializeCityDatabase = () => {
  console.log("initializeCityDatabase init");
  return "initializeCityDatabase init";
};
const clearCityDatabase = () => {
  console.log("clearCityDatabase");
  return "clearCityDatabase";
};
const isCity = (data: string) => {
  // this for demo purpose, normally this should get from database;
  return data;
};
export { initializeCityDatabase, clearCityDatabase, isCity };
export default initializeCityDatabase;
