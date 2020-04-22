let toggle = false
let descriptions = document.getElementsByClassName("description")
let btn = document.getElementById("toggle-info")
let toggleInfo = function (el) {
    if (!toggle) {
        toggle = true;
        btn.classList.add("active")
        for (const d of descriptions) {
            d.style.zIndex = "9";
            let ps = d.getElementsByTagName("p")
            for (const p of ps) {
                p.style.visibility = "visible"
            }
        }
    } else {
        toggle = false;
        btn.classList.remove("active")
        for (const d of descriptions) {
            d.style.zIndex = "0"
            let ps = d.getElementsByTagName("p")
            for (const p of ps) {
                p.style.visibility = "hidden"
            }
        }
    }
};
