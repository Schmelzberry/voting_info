window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();


        let underAged = document.getElementById("underage");
        underAged.setAttribute("class", "hidden");
        let superAged = document.getElementById("ofage");
        superAged.setAttribute("class", "hidden");

        const age = parseInt(document.querySelector("input#age").value);

        if (age < 17) {
            underAged.removeAttribute("class"); 
        } else {
            superAged.removeAttribute("class");
        }
    };
};