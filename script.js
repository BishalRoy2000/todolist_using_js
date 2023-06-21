//Dom Area.........................................................................................................................................................
let todoname = document.getElementById("todoname");
let todoitem = document.getElementById("todoitem");
let save = document.getElementById("btn2");
let update = document.getElementById("btn3");
let deletee = document.getElementById("btn4");
let deleteall = document.getElementById("btn5");
let show = document.getElementById("show");
let search = document.getElementById("search");
let searchbtn = document.getElementById("btn1");

// Save Data.......................................................................................................................................................
const savetodo = () => {
  let tdn = todoname.value;
  let tdi = todoitem.value;
  localStorage.setItem(tdn, tdi);
  todoname.value = "";
  todoitem.value = "";
  let a = document.getElementById("alert");
  a.innerHTML = `<br/><div class="alert alert-success" role="alert">
    Todo Save on Local Storage............
    </div>`
  show.innerHTML = show.innerHTML + `<b>${tdn}</b> : ${tdi}<br/>`;
  setTimeout(() => {
    a.innerHTML = "";
  }, 3000)
}
save.addEventListener("click", savetodo);

// Update Data.....................................................................................................................................................
const updatetodo = () => {
  let tdn = todoname.value;
  let tdi = todoitem.value;
  let a = document.getElementById("alert");
  localStorage.setItem(tdn, tdi);
  todoname.value = "";
  todoitem.value = "";
  a.innerHTML = `<br/><div class="alert alert-success" role="alert">
     Todo is Udated............
     </div>`
  show.innerHTML = show.innerHTML + `<b>${tdn}</b> : ${tdi} <b><-- UPDATED TODO --></b><br/>`
  setTimeout(() => {
    a.innerHTML = "";
  }, 3000)
}
update.addEventListener("click", updatetodo);

// Delete Data.....................................................................................................................................................
const deletetodo = () => {
  let tdn = todoname.value;
  let tdi = todoitem.value;
  let a = document.getElementById("alert");
  show.innerHTML = show.innerHTML + `<b>${tdn}</b> : ${localStorage.getItem(tdn)} <b><-- DELETED TODO --></b><br/>`
  localStorage.removeItem(tdn);
  todoname.value = "";
  todoitem.value = "";
  a.innerHTML = `<br/><div class="alert alert-danger" role="alert">
     Todo is Deleted............
     </div>`
  setTimeout(() => {
    a.innerHTML = "";
  }, 3000)
}
deletee.addEventListener("click", deletetodo);

// Delete All Data.................................................................................................................................................
const deletealltodo = () => {
  let a = document.getElementById("alert");
  localStorage.clear();
  todoname.value = "";
  todoitem.value = "";
  a.innerHTML = `<br/><div class="alert alert-danger" role="alert">
     All Todo is Deleted from local storage............
     </div>`
  show.innerHTML = ` <div class="h">
    <h6>Todo List</h6>
    </div>`
  setTimeout(() => {
    a.innerHTML = "";
  }, 3000)
}
deleteall.addEventListener("click", deletealltodo);

// Search Data.....................................................................................................................................................
searchbtn.addEventListener("click", function searchtodo(e) {
  e.preventDefault();
  let tdn = search.value;
  let tdi = localStorage.getItem(tdn);
  todoname.value = tdn;
  todoitem.value = tdi;
  search.value = "";
});

// This Code is Written By Bishal Roy..............................................................................................................................