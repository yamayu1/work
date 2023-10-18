
import { dfs } from "./test_2_5.js";
 const tree =[[1],
              [0, 2, 4],
              [1, 3],
              [2],
              [1, 6],
              [6, 8],
              [4, 5, 7],
              [6, 9],
              [5],
              [7]];

test("add", ()=>{
    const start = 0;
    const searched = new Array(tree.length).fill(false);
    searched[start] = true;
    const stack = [0];
    const target = 3;
    const valu = dfs(stack,searched,target,tree);
    expect(valu).toBe(true);
  });

  test("add", ()=>{
    const start = 0;
    const searched = new Array(tree.length).fill(false);
    searched[start] = true;
    const stack = [0];
    const target = 78;
    const valu = dfs(stack,searched,target,tree);
    expect(valu).toBe(false);
  });

  test("add", ()=>{
    const start = 0;
    const searched = new Array(tree.length).fill(false);
    searched[start] = true;
    const stack = [0];
    const target = 4;
    const valu = dfs(stack,searched,target,tree);
    expect(valu).toBe(true);
  });

  test("add", ()=>{
    const start = 0;
    const searched = new Array(tree.length).fill(false);
    searched[start] = true;
    const stack = [0];
    const target = 9;
    const valu = dfs(stack,searched,target,tree);
    expect(valu).toBe(true);
  });