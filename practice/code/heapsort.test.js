import { heapSort } from "./test_2_6.js";

test("add", ()=>{
    const valu = heapSort([8,9,2,3,1,4]);
    expect(valu.join(",")).toBe([1,2,3,4,8,9].join(","));
  });