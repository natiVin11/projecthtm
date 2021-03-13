onclickinput=()=>{
    getchiek();
}

    function process() {
        today = new Date()
        if (today.getMinutes() < 10) {
            pad = "0"
        } else
            pad = "";
        document.write("השעה:  ", today.getHours(), ":", pad, today.getMinutes())
    }

