// function some() {
//   console.log("...");
// }

// setInterval(some, 3000);

    let hour = document.querySelector(".hours");
    let minute = document.querySelector(".minutes");
    let second = document.querySelector(".seconds");
    let btn = document.querySelector(".btn");
    let sps = document.querySelector(".spisok");


function update() {
    let data = new Date();

    hour.textContent = data.getHours();
    minute.textContent = data.getMinutes();
    second.textContent = data.getSeconds();
}
setInterval(update, 1000);

function inHistory() {
    let newOl = document.createElement("li");

    newOl.textContent = new Date();
    sps.append(newOl);
}

btn.addEventListener("click", inHistory);