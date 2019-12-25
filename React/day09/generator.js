// function* test(){
//   console.log(1);
//   yield 1;
//   console.log(2);
//   yield 2;
//   console.log(3);
//   yield 3;
//   console.log(4);
//   return 4;
// }
// let temp = test();
// console.log(temp);
// // temp.next();  //1
// // temp.next();  //2
// // temp.next();  //3
// // temp.next();  //4
// console.log(temp.next());
// console.log(temp.next());
// console.log(temp.next());
// console.log(temp.next());
// console.log(temp.next());

// function* test(){
//   let a = yield 1;
//   console.log(a,'------');
//   let b = yield 2;
//   console.log(b,'======');
// }
// let temp = test();
// // console.log(temp.next(temp.next().value));
// console.log(temp.next(temp.next(temp.next().value).value));
// // console.log(temp.next());
// // console.log(temp.next());

function* test(){
  let a = yield axios.get('',{});
  yield put(actionCreators(a));
}
