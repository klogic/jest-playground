import { fetchData } from "./async";

test("the data is peanut butter", done => {
  const data = "peanut butter";
  const callback = (data: string) => {
    expect(data).toBe("peanut butter");
    done();
    return data;
  };
  fetchData(callback(data));
});

test("the data is peanut butter", () => {
  const data = "peanut butter";
  return fetchData(data).then(data => {
    expect(data).toBe("peanut butter");
  });
});

test("the data is peanut butter resolves", () => {
  const data = "peanut butter";
  return expect(fetchData(data)).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", () => {
  const data = "peanut butter";
  const error = true;
  return expect(fetchData(data, error)).rejects.toMatch("error");
});
