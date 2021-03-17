
    function process() {
        h2_timeout.innerHTML = today = new Date()
        if (today.getMinutes() < 10) {
            pad = "0"
        } else
            pad = "";
        document.write("השעה:  ", today.getHours(), ":", pad, today.getMinutes())
    }

    function tospet1() {
        h3_pizza1.innerHTML = "מחיר: 70 שח"

    }

    function tospet12() {
        h3_pizza1.innerHTML = "מחיר: 80 שח"
    }

    function tospet2() {
        h3_pizza2.innerHTML = "מחיר: 48 שח"

    }

    function tospet22() {
        h3_pizza2.innerHTML = "מחיר: 56 שח"
    }

    function tospet3() {
        h3_pizza3.innerHTML = "מחיר: 25 שח"

    }

    function tospet32() {
        h3_pizza3.innerHTML = "מחיר: 30 שח"
    }
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
