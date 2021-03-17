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

deleteCookie = (name, path) => {
    setCookie(name, '', -1, "=/")
}

getInputForUser=()=>{
    let valueForUsername = document.getElementById("username");
    let valueForFassworde = document.getElementById("pass");
    if (valueForUsername.value.length>4 && valueForFassworde.value.length > 4){
       setCookie(USER_NAME = valueForUsername.value,PASSWORD = valueForFassworde.value,45);
       alert("!נרשמת בהצלחה")
    }
    else {
        alert("אנא בדוק את השם משתש והסיסמא והזן ערך תקין") ;
    }
}
getInputForUse2r=()=>{
    let valueForUsername2 = document.getElementById("username2");
    let valueForFassworde2 = document.getElementById("pass2");
    if (valueForUsername2.value.length>4 && valueForFassworde2.value.length > 4 && valueForUsername2 == valueForUsername  && valueForFassworde2 == valueForFassworde){
        alert("!התחברת בהצלחה")
    }
    else {
        alert("אנא בדוק את השם משתש והסיסמא והזן ערך תקין") ;
    }
}
