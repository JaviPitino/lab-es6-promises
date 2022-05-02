// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

//Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));

  document.querySelector("#mashedPotatoesImg").hidden= false



// // Iteration 1 - using callbacks


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction(`steak`, 1)
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction(`steak`, 2)
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction(`steak`, 3)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction(`steak`, 4)
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction(`steak`, 5)
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction(`steak`, 6)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction(`steak`, 7)
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steak").innerHTML += `<li>Enjoy the steak</li>`
    // return obtainInstruction(`steak`, 8)
  })

  document.querySelector("#steakImg").hidden= false


//Iteration 3 using async/await
//...

async function makeBroccoli() {
  try {
    let broc1 = await obtainInstruction('broccoli', 0);
    document.querySelector('#broccoli').innerHTML += `<li>${broc1}</li>`

    let broc2 = await obtainInstruction('broccoli',1);
    document.querySelector('#broccoli').innerHTML += `<li>${broc2}</li>`

    let broc3 = await obtainInstruction('broccoli',2);
    document.querySelector('#broccoli').innerHTML += `<li>${broc3}</li>`

    let broc4 = await obtainInstruction('broccoli',3);
    document.querySelector('#broccoli').innerHTML += `<li>${broc4}</li>`

    let broc5 = await obtainInstruction('broccoli',4);
    document.querySelector('#broccoli').innerHTML += `<li>${broc5}</li>`

    let broc6 = await obtainInstruction('broccoli',5);
    document.querySelector('#broccoli').innerHTML += `<li>${broc6}</li>`

    let broc7 = await obtainInstruction('broccoli',6);
    document.querySelector('#broccoli').innerHTML += `<li>${broc7}</li>`
    document.querySelector('#broccoli').innerHTML += `<li>Broccoli is Ready!</li>`
  }
  catch(error) {
    console.log(error)
  }
}
makeBroccoli()

document.querySelector("#broccoliImg").hidden= false

// Bonus 1 - 


document.querySelector("#brusselsSproutsImg").hidden= false

// ...