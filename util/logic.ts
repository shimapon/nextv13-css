//  Proxy：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// バリデーションを簡単に実現
const validator = {
  set(obj: { [x: string]: number }, prop: string, value: number) {
    if (prop === "age") {
      if (value > 200) {
        throw new TypeError("The age seems invalid");
      }
    }

    obj[prop] = value;
    return true;
  },
};

const person = new Proxy({}, validator);
person.age = 100;
// person.age = 300;

// Promise.allSettled()：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
// - Promiseたちがお互い独立的で、一部のPromiseが失敗してもすべてのPromiseを実行してほしい場合
// - 各プロミスの結果を常に知りたい場合
// Promise.all
// - Promiseたちがお互いに依存してる場合
// - 一つのPromiseでも失敗したらさっさとエラー処理に移って欲しい場合

// ??:null合体演算子
console.log(null ?? "nullです");
console.log("hoge" ?? "nullです");

// replaceAllはすべての一致を置換する。
console.log("abcdabcd".replaceAll("b", "B")); // aBcdaBcd
console.log("abcdabcd".replace("b", "B")); // aBcdabcd

export default "";
