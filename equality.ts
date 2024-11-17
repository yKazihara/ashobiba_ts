// @ts-ignore
console.log(5 == "5"); // 文字列は数値に変換されtrue
// @ts-ignore
console.log(5 === "5"); // 文字列は数値に変換されfalse

// @ts-ignore
console.log("" == "0"); // 両方とも文字列で明らかに等しくないためfalse
// @ts-ignore
console.log(0 == ""); // 0と空文字列("")はfalsy(falseのように振る舞う)であるため==を使った比較ではtrue

// @ts-ignore
console.log("" === "0"); // ===は厳密なのでfalse
// @ts-ignore
console.log(0 === ""); // ===は厳密なのでfalse

// @ts-ignore
// ==/===は、2つのオブジェクトの構造を比較したい場合は使えない
console.log({a:123} == {a:123}); // false
// @ts-ignore
console.log({a:123} === {a:123}); // false

// IDでチェックして比較できる
type IdDisplay = {
    id: string,
    display: string
}
const list: IdDisplay[] = [
    {
        id: 'foo',
        display: 'Foo Select'
    },
    {
        id: 'bar',
        display: 'Bar Select'
    },
]

const fooIndex = list.map(i => i.id).indexOf('foo');
console.log(fooIndex); // 0
console.log(list[fooIndex].display); // Foo Select