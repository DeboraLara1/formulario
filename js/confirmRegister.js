function confirmRegister() {
    var name = register.name.value;
    var phone = register.phone.value;
    var email = register.email.value;
    var psw = register.psw.value;
    var repeatPsw = register.repeatPsw.value;

    if (psw == repeatPsw) {
        if (name || phone || email || psw || repeatPsw == null) {
            window.alert('Nome: ' + name + ', Phone: ' + phone + ', Email: ' + email + ', Senha: ' + psw);
            register.psw.focus();
            return false;
        }
    }
    else
        window.alert('Ao menos um campo esta divirgente, por favor, confira e tente novamente!');
    return false;
}