async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("hallo guys, welcome back !!");}, 3000);
    });
    console.log(await myPromise)
  }
  
  myDisplay();