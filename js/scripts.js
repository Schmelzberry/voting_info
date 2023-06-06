window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();


        let underAged = document.getElementById("unders");
        underAged.setAttribute("class", "hidden");
        let superAged = document.getElementById("totsage");
        superAged.setAttribute("class", "hidden");

        const age = parseInt(document.querySelector("input#age").value);

        if (age >= 18) {
            underAged.removeAttribute("class");
        }
    };
};