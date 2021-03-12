const  DEFINTIONS={
    USER_NAME:'username',
    PASSWORD:'password'
}
changBackgroundColor=()=>{
    setTimeout(()=>{

    },3500)
    setInterval(()=>{

    },5000)
}

setCookie = (name, value, days) => {
    let d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
getCookie = (name) => {
    name += "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

checkIfCookieExist = () => {
    let username = getCookie("username");
    let password = getCookie("password");
    if (username.length > 0 && password.length > 0)
        console.log(true)
    else
        console.log(false)
}

deleteCookie = (name, path) => {
    setCookie(name, '', -1, "=/")
}

getInputForUser=()=>{
    let valueForUsername = document.getElementById("username");
    let valueForFassworde = document.getElementById("pass");
    if (valueForUsername.value.length>4){
       setCookie(USER_NAME = valueForUsername.value,PASSWORD = valueForFassworde.value,45);
    }
    else {
        alert("אנא בדוק את השם משתש והסיסמא והזן ערך תקין") ;
    }
}
getChek=()=>{
    let valueForUsername2 = document.getElementById("username2");
    let valueForFassworde2 = document.getElementById("pass2");
    if ( checkIfCookieExist(valueForUsername2 == useer)  && valueForFassworde2== valueForFassworde){
        alert("המשתמש התחבר בהצחלה!");
    }
    else{
        alert("נא לבדוק את הפרטים!");
    }
}
