setCookie2 = (name, phone, mail,text) => {
    let d = new Date();
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + ";" + phone + ";" + mail +";"+ text+ ";path=/";
}

onclickC=()=> {
    let nameUser = document.getElementById("name");
    let phoneU = document.getElementById("phone");
    let mailU = document.getElementById("mail");
    let text = document.getElementById("text");
    if (nameUser.value.length > 0 && phoneU.value.length == 10 )
    {
        setCookie2(name = nameUser.value, phone = phoneU.value,mail = mailU.value,text = text.value);
        alert("הפנייה נשלה בהצלחה לבית העסק!");
    }
    else
    {
        alert("אנא בדקו את אחד מנתונים שלכם!");
    }
}
