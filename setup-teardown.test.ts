import {
  clearCityDatabase,
  initializeCityDatabase,
  isCity
} from "./setup-teardown";

beforeAll(() => {
  const fnName = "beforeAll";
  return initializeCityDatabase(fnName);
});

beforeEach(() => {
  const fnName = "beforeEach";
  return initializeCityDatabase(fnName);
});

afterEach(() => {
  const fnName = "afterEach";
  clearCityDatabase(fnName);
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

afterAll(() => {
  const fnName = "afterAll";
  return clearCityDatabase(fnName);
});
