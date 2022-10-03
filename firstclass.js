const Nama = ()=>{
    console.log("Irwanto");
}
Nama();

// Argument

function sayHello() {
    return " hello broh, ";
  }
  function greeting(helloMessage, nama) {
    console.log(helloMessage() + nama);
  }
  
  greeting(sayHello, "Irwanto");

// Returning
function Sapa (){
    return ()=> {
        console.log("Halo guys!");
    };
}