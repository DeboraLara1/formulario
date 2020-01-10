function validatePassword() {
    var psw = register.psw.value;
    var repeatPsw = register.repeatPsw.value;

    if (psw != repeatPsw) {
        window.alert('Senhas diferentes, por favor, tente novamente!');
        register.psw.focus();
        return false;
    }
}