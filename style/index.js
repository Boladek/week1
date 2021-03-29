// creating a button for every clicks

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

const output0 = document.getElementById('output0');

// creating a click event function for every button
btn0.addEventListener('click', function getInfo() { 
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        let all = data.results;
        let result = "";
        let output = document.getElementById('output0');
        result += "<ul><li><strong>Name: " + all[0].name + "</strong></li>";
        result += "<li><strong>Gender: " + all[0].gender + "</strong></li>";
        result += "<li><strong>Height: " + all[0].height + "cm</strong></li></ul>";
        
        // setting a conditional so that buttons can reverse display of info
        if (output.innerHTML == result) {
            btn0.textContent = "show details";
            return output.innerHTML = "";
        } else {
            btn0.textContent = "Hide details";
            return output.innerHTML = result;
        }
    });
})

btn1.addEventListener('click', function getInfo() { 
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        let all = data.results;
        let result = "";
        let output = document.getElementById('output1');
        result += "<ul><li><strong>Name: " + all[1].name + "</strong></li>";
        result += "<li><strong>Gender: " + all[1].gender + "</strong></li>";
        result += "<li><strong>Height: " + all[1].height + "cm</strong></li></ul>";
        
        // setting a conditional so that buttons can reverse display of info
        if (output.innerHTML == result) {
            btn1.textContent = "show details";
            return output.innerHTML = "";
        } else {
            btn1.textContent = "Hide details";
            return output.innerHTML = result;
        }
    });
})

btn2.addEventListener('click', function getInfo() { 
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        let all = data.results;
        let result = "";
        let output = document.getElementById('output2');
        result += "<ul><li><strong>Name: " + all[2].name + "</strong></li>";
        result += "<li><strong>Gender: " + all[2].gender + "</strong></li>";
        result += "<li><strong>Height: " + all[2].height + "cm</strong></li></ul>";
        
        // setting a conditional so that buttons can reverse display of info
        if (output.innerHTML == result) {
            btn2.textContent = "show details";
            return output.innerHTML = "";
        } else {
            btn2.textContent = "Hide details";
            return output.innerHTML = result;
        }
    });
})

btn3.addEventListener('click', function getInfo() { 
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        let all = data.results;
        let result = "";
        let output = document.getElementById('output3');
        result += "<ul><li><strong>Name: " + all[3].name + "</strong></li>";
        result += "<li><strong>Gender: " + all[3].gender + "</strong></li>";
        result += "<li><strong>Height: " + all[3].height + "cm</strong></li></ul>";
        
        // setting a conditional so that buttons can reverse display of info
        if (output.innerHTML == result) {
            btn3.textContent = "show details";
            return output.innerHTML = "";
        } else {
            btn3.textContent = "Hide details";
            return output.innerHTML = result;
        }
    });
})

btn4.addEventListener('click', function getInfo() { 
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        let all = data.results;
        let result = "";
        let output = document.getElementById('output4');
        result += "<ul><li><strong>Name: " + all[4].name + "</strong></li>";
        result += "<li><strong>Gender: " + all[4].gender + "</strong></li>";
        result += "<li><strong>Height: " + all[4].height + "cm</strong></li></ul>";
        
        // setting a conditional so that buttons can reverse display of info
        if (output.innerHTML == result) {
            btn4.textContent = "show details";
            return output.innerHTML = "";
        } else {
            btn4.textContent = "Hide details";
            return output.innerHTML = result;
        }
    });
})

btn5.addEventListener('click', function getInfo() { 
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        let all = data.results;
        let result = "";
        let output = document.getElementById('output5');
        result += "<ul><li><strong>Name: " + all[5].name + "</strong></li>";
        result += "<li><strong>Gender: " + all[5].gender + "</strong></li>";
        result += "<li><strong>Height: " + all[5].height + "cm</strong></li></ul>";
        
        // setting a conditional so that buttons can reverse display of info
        if (output.innerHTML == result) {
            btn5.textContent = "show details";
            return output.innerHTML = "";
        } else {
            btn5.textContent = "Hide details";
            return output.innerHTML = result;
        }
    });
})

btn6.addEventListener('click', function getInfo() { 
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        let all = data.results;
        let result = "";
        let output = document.getElementById('output6');
        result += "<ul><li><strong>Name: " + all[6].name + "</strong></li>";
        result += "<li><strong>Gender: " + all[6].gender + "</strong></li>";
        result += "<li><strong>Height: " + all[6].height + "cm</strong></li></ul>";
        
        // setting a conditional so that buttons can reverse display of info
        if (output.innerHTML == result) {
            btn6.textContent = "show details";
            return output.innerHTML = "";
        } else {
            btn6.textContent = "Hide details";
            return output.innerHTML = result;
        }
    });
})

btn7.addEventListener('click', function getInfo() { 
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        let all = data.results;
        let result = "";
        let output = document.getElementById('output7');
        result += "<ul><li><strong>Name: " + all[7].name + "</strong></li>";
        result += "<li><strong>Gender: " + all[7].gender + "</strong></li>";
        result += "<li><strong>Height: " + all[7].height + "cm</strong></li></ul>";
        
        // setting a conditional so that buttons can reverse display of info
        if (output.innerHTML == result) {
            btn7.textContent = "show details";
            return output.innerHTML = "";
        } else {
            btn7.textContent = "Hide details";
            return output.innerHTML = result;
        }
    });
})

btn8.addEventListener('click', function getInfo() { 
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        let all = data.results;
        let result = "";
        let output = document.getElementById('output8');
        result += "<ul><li><strong>Name: " + all[8].name + "</strong></li>";
        result += "<li><strong>Gender: " + all[8].gender + "</strong></li>";
        result += "<li><strong>Height: " + all[8].height + "cm</strong></li></ul>";
        
        // setting a conditional so that buttons can reverse display of info
        if (output.innerHTML == result) {
            btn8.textContent = "show details";
            return output.innerHTML = "";
        } else {
            btn8.textContent = "Hide details";
            return output.innerHTML = result;
        }
    });
})

btn9.addEventListener('click', function getInfo() { 
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        let all = data.results;
        let result = "";
        let output = document.getElementById('output9');
        result += "<ul><li><strong>Name: " + all[9].name + "</strong></li>";
        result += "<li><strong>Gender: " + all[9].gender + "</strong></li>";
        result += "<li><strong>Height: " + all[9].height + "cm</strong></li></ul>";
        
        // setting a conditional so that buttons can reverse display of info
        if (output.innerHTML == result) {
            btn9.textContent = "show details";
            return output.innerHTML = "";
        } else {
            btn9.textContent = "Hide details";
            return output.innerHTML = result;
        }
    });
})