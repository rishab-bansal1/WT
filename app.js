import { pivot1, pivot2, pivot3} from "./pivot.js";


let btn1 = document.getElementById("pivotbtn1");
btn1.addEventListener("click", fun1);

function fun1() {
  const data = document.getElementById("pivotpage");
  data.innerHTML = pivot1();
}
fun1();


let btn2 = document.getElementById("pivotbtn2");
btn2.addEventListener("click", fun2);

function fun2() {
  const data = document.getElementById("pivotpage");
  data.innerHTML = pivot2();
}


let btn3 = document.getElementById("pivotbtn3");
btn3.addEventListener("click", fun3);

function fun3() {
  const data = document.getElementById("pivotpage");
  data.innerHTML = pivot3();
}
