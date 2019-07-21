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

test.only("this will be the only test that runs", () => {
  expect(true).toBe(true);
});

test("this test will not run", () => {
  expect("A").toBe("A");
});

afterAll(() => {
  const fnName = "afterAll";
  return clearCityDatabase(fnName);
});
