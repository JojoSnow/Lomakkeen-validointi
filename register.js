let regForm = document.forms['registerForm'];

regForm.addEventListener('submit', formValidation);

function formValidation(event) {
    event.preventDefault();

    //Jostain syystä required atribuutti ei toimi JavaScriptissä
    /*regForm['userId'].required;
    regForm['password'].required;
    regForm['name'].required;
    regForm['address'].required;
    regForm['select'].required;
    regForm['zipCode'].required;
    regForm['email'].required;
    regForm['gender'].required;
    regForm['language'].required;*/

    if(regForm['userId'].value === '') {
        document.getElementById('userIdAlert').innerHTML = 'Käyttäjä ID pitää antaa';
        return false;
    } else {
        document.getElementById('userIdAlert').innerHTML = '';
    }
    if(regForm['userId'].value.length < 6) {
        document.getElementById('userIdAlert').innerHTML = 'Käyttäjä ID ei ole tarpeeksi pitkä';
        return false;
    } else {
        document.getElementById('userIdAlert').innerHTML = '';
    }
    if(regForm['password'].value === '') {
        document.getElementById('passwordAlert').innerHTML = 'Salasana pitää antaa';
        return false;
    } else {
        document.getElementById('passwordAlert').innerHTML = '';
    }
    if(regForm['name'].value === '') {
        document.getElementById('nameAlert').innerHTML = 'Nimi pitää antaa';
        return false;
    } else {
        document.getElementById('nameAlert').innerHTML = '';
    }
    if(regForm['address'].value === '') {
        document.getElementById('addressAlert').innerHTML = 'Osoite pitää antaa';
        return false;
    } else {
        document.getElementById('addressAlert').innerHTML = '';
    }
    if(regForm['select'].value === 'choose') {
        document.getElementById('countryAlert').innerHTML = 'Maa pitää valita';
        return false;
    } else {
        document.getElementById('countryAlert').innerHTML = '';
    }
    if(regForm['zipCode'].value === '') {
        document.getElementById('zipCodeAlert').innerHTML = 'Postinumero pitää antaa';
        return false;
    } else if(!/^[0-9]+$/.test(regForm['zipCode'].value)) {
        document.getElementById('zipCodeAlert').innerHTML = 'Postinumero voi olla vain numeroita';
    } else {
        document.getElementById('zipCodeAlert').innerHTML = '';
    }
    if(regForm['zipCode'].value.length != 5) {
        document.getElementById('zipCodeAlert').innerHTML = 'Postinumeron pitää olla 5 numeroa';
        return false;
    } else {
        document.getElementById('zipCodeAlert').innerHTML = '';
    }
    if(regForm['email'].value === '') {
        document.getElementById('emailAlert').innerHTML = 'Sähköposti pitää antaa';
        return false;
    } else if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(regForm['email'].value) === false) {
        document.getElementById('emailAlert').innerHTML = 'Anna oikea sähköposti'
    } else {
        document.getElementById('emailAlert').innerHTML = '';
    }
    if(regForm['gender'].value === '') {
        document.getElementById('genderAlert').innerHTML = 'Sukupuoli pitää valita';
        return false;
    } else {
        document.getElementById('genderAlert').innerHTML = '';
    }
    let checkboxes = document.getElementsByClassName('language');
    for(let i = 0; checkboxes.length > i; i++) {
        if(checkboxes[i].checked) {
            document.getElementById('languageAlert').innerHTML = '';
            return true;
        }
    }
    document.getElementById('languageAlert').innerHTML = 'Kieli pitää valita';
    return false;    
    
}



