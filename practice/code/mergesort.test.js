import { mergeSort} from "./test_2_7.js";

test("add", ()=>{
    const valu = mergeSort([2,3,1,4,8]);
    expect(valu.join(",")).toBe([1,2,3,4,8].join(","));
  });

  test("add", ()=>{
    const valu = mergeSort([8,4,2,3,1,]);
    expect(valu.join(",")).toBe([1,2,3,4,8].join(","));
  });