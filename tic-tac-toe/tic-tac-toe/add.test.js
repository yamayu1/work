import {add} from "./add"

test("check", () => {
  console.log("OK");
});

test("add", ()=>{
  expect(add(1, 2)).toBe(3);
});