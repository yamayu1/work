
import { bucketsort } from "./test_2_3.js";


test("add", ()=>{
    const valu = bucketsort([2,3,1,4]);
    expect(valu.join(",")).toBe([1,2,3,4].join(","));
  });

  test("数が多い場合", ()=>{
    const valu = bucketsort([1,0,2,3,5,5,2,4,3]);
    expect(valu.join(",")).toBe([0,1,2,2,3,3,4,5,5].join(","));
  });


