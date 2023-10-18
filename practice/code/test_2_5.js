
export function dfs(stack, searched,target,tree) {
  while (stack.length > 0){
    let node = stack.pop();
    searched[node] = true;
    if(node === target){
      return true;
    }else{
    for(let i = 0; tree[node].length > i; i++){
      if(searched[tree[node][i]] === false){
        stack.push(tree[node][i]);
        }
      }
    }
  }   
  return false;
}
//配列の指定の仕方がわからない//push
//poo,pushメソッド使用
// console.log(stack);//staackの値が入っていない
  //見つかったらturu見つからなかったらfarsを返す
  //配列を引数に入れる
  //行きがけの探索