let display = document.getElementById("display");

function element(input) {
    display.value += input;
}

let allClear = document.getElementById("allClear")
allClear.addEventListener(
    "click",
    function () {
        display.value = "";
    },
    false
)

let equal = document.getElementById("equal")
equal.addEventListener(
    "click",
    function () {
        try {
            if (display.value != "") {
                display.value = eval(display.value)
            } else {
                display.value = ""
            }
            // display.value = eval(display.value)
        } catch (error) {
            display.value = "ERROR !"
        }
    },
    false
)

let del = document.getElementById("del")
del.addEventListener(
    "click",
    function () {
        display.value = String(display.value).slice(0, -1)
    },
    false
)

var icon = document.getElementById("icon");

icon.addEventListener(
    "click",
    function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            icon.src = "sun.png";
        } else {
            icon.src = "moon.png";
        }
    }
)