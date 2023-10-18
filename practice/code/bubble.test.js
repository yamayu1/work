
import { bubble } from "./test_2_2.js";

  test("add", ()=>{
    const valu = bubble([2,3,1,4]);
    expect(valu.join(",")).toBe([1,2,3,4].join(","));
  });

  test("同じ数字の場合", ()=>{
    const valu = bubble([1,1,1,1]);
    expect(valu.join(",")).toBe([1,1,1,1].join(","));
  });

  test("マイナスがある場合", ()=>{
    const valu = bubble([-1,0,2,-3]);
    expect(valu.join(",")).toBe([-3,-1,0,2].join(","));
  });

  test("cc", ()=>{
    const valu = bubble([3,2,1]);
    expect(valu.join(",")).toBe([1,2,3].join(","));
  });
  
 
  
  