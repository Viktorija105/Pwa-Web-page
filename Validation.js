function validacijaCreate() {
    var title = document.forms["createform"]["title"].value;
    var category = document.forms["createform"]["categorypick"].value;
    var summary = document.forms["createform"]["summary"].value;
    var content = document.forms["createform"]["content"].value;
    var check = 1;
    if(title.length < 5 || title.length > 30) {
        document.getElementById("noticeTitle").innerHTML = "Naslov mora bit izmedu 5 i 30 znakova.";
        check = 0;
    }
    if(summary.length < 10 || summary.length > 100) {
        document.getElementById("noticeSummary").innerHTML = "Sazetak mora biti izmedu 10 i 100 znakova.";
        check = 0;
    }
    if(content.length == "") {
        document.getElementById("noticeContent").innerHTML = "Sadrzaj mora biti pun";
        check = 0;
    }
    if(category.length == 0) {
        document.getElementById("noticeCategory").innerHTML = "Molim vas odaberite kategoriju.";
        check = 0;
    }
    if(!document.getElementById("imageInput").value) {
        document.getElementById("noticeFile").innerHTML = "Morate odabrati sliku.";
        check = 0;
    }
    if(check == 0) {
        return false;
    }
    else {
        return true;
    }
}
function validacijaEdit() {
    var title = document.forms["editform"]["title"].value;
    var category = document.forms["editform"]["categorypick"].value;
    var summary = document.forms["editform"]["summary"].value;
    var content = document.forms["editform"]["content"].value;
    var check = 1;
    if(title.length < 5 || title.length > 30) {
        document.getElementById("noticeTitle").innerHTML = "Naslov mora bit izmedu 5 i 30 znakova.";
        check = 0;
    }
    if(summary.length < 10 || summary.length > 100) {
        document.getElementById("noticeSummary").innerHTML = "Sazetak mora biti izmedu 10 i 100 znakova.";
        check = 0;
    }
    if(content.length == "") {
        document.getElementById("noticeContent").innerHTML = "Sadrzaj mora biti pun";
        check = 0;
    }
    if(category.length == 0) {
        document.getElementById("noticeCategory").innerHTML = "Molim vas odaberite kategoriju.";
        check = 0;
    }
    if(!document.getElementById("imageInput").value) {
        document.getElementById("noticeFile").innerHTML = "Morate odabrati sliku.";
        check = 0;
    }
    if(check == 0) {
        return false;
    }
    else {
        return true;
    }
}
function validacijaLogin() {
    var user = document.forms["loginform"]["username"].value;
    var pass = document.forms["loginform"]["password"].value;
    if (user == "" && pass == "") {
        document.getElementById("notice").innerHTML = "Popunite polja.";
        return false;
    }
    else if(user == "") {
        document.getElementById("notice").innerHTML = "Popunite korisnicko ime..";
        return false;
    }
    else if(pass =="") {
        document.getElementById("notice").innerHTML = "Popunite lozinku.";
        return false;
    }
    else {
        return true;
    }
}
function validacijaRegister() {
    var user = document.forms["registerform"]["username"].value;
    var pass = document.forms["registerform"]["password"].value;
    var repeat = document.forms["registerform"]["passwordRepeat"].value

    if (user == "" && pass == "") {
        document.getElementById("notice").innerHTML = "Popunite polja.";
        return false;
    }
    else if(user == "") {
        document.getElementById("notice").innerHTML = "Popunite korisnicko ime..";
        return false;
    }
    else if(pass =="") {
        document.getElementById("notice").innerHTML = "Popunite lozinku.";
        return false;
    }
    else if(repeat == "" && repeat != pass) {
        document.getElementById("notice").innerHTML = "Ponovljena lozinka mora biti puna i ista.";
        return false;
    }
    else {
        return true;
    }
}
