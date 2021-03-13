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
getInputForUser2=()=>{
    let valueForUsername2 = document.getElementById("userName");
    let valueForFassworde2 = document.getElementById("passWorde");
}
function getchiek(){
    if (getInputForUser()==getInputForUser2()){
        alert("a")
    }
    else{
        alert("b")
    }
}

onclickC=()=> {
    let nameUser = document.getElementById("name");
    let phoneU = document.getElementById("phone");
    let mailU = document.getElementById("mail");
    let text = document.getElementById("text");
    if (name > 0 && phone==10 && mail == 10 && text > 0) {
        alert("הפנייה נשלה ב הצלחה לבית העסק!");
    } else
    {
            alert("אנא בדקו את אחד מנתונים שלכם!");
    }
}