document.querySelector('button').onclick = function () {
  let imie = document.getElementById('fname');
  console.log(imie.value);
  let p1 = document.getElementById('name');
  p1.innerText = imie.value;
  let nazw = document.getElementById('lname');
  console.log(nazw.value);
  let p2 = document.getElementById('surname');
  p2.innerText = nazw.value;
  let num = document.getElementById('pnumber');
  console.log(num.value);
  let p3 = document.getElementById('phone');
  p3.innerText = num.value;
}