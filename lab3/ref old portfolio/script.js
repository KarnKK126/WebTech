window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

        var i = 0;
        var colors = [];
        colors[0] = "white";
        colors[1] = "hsla(0, 0%, 85%, 1)";
        function myFunction() {
            var element = document.getElementById('Dog');
            element.style.backgroundColor = colors[i];
            if (i < colors.length-1) {
                i++;
            } else {
                i = 0;
                }
            }

function clickit(technique) {
        var techniqueType = technique.getAttribute("text-type");
        alert("ใช้ " + technique.innerHTML + " เพื่อ " + techniqueType);
    }
