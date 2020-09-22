const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("@4 sec");
    resolve("4 sec process");
  }, 4000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("@2 sec");
    resolve("2 sec process");
  }, 2000);
});

p1.then((result) => {
  //여기서 시작되는 것이 아니다!!!
  //얘네는 왜 동시에 나오지?
  //promise.then은 resole를 수신하는 녀석이다.
  console.log(result);
}).then((result) => {
  //promise는 일종의 상태 머신입니다. promise가 어떤 상태를 가지고 움직이는 가? 컨셉은 간단하지만 로직은 어렵다.
  console.log(result);
});

//promise 자체는 reject 또는 resole 를 대기하고 있을 뿐이다. then / catch 는 이를 받을수 있는 것이고.
//결국 p1과 p2는 병렬작업으로 봐야한다.
//함수로 감싸주면 함수를 호출하는 시점에 상태머신이 시작된다.

Promise.all([p1, p2]);
