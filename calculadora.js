function aniadeNum(num,num2,signo,numAniadir){
    if (signo == ''){
        if (numAniadir == '.' && num.length < 9) num =  aniadePunto(num);
        else if (num.length < 9){ 
            num = num + numAniadir;
            num = Number(num);
        }
        document.getElementById("num").textContent = num;
    } else{
        if (numAniadir == '.' && num2.length < 9) num2 = aniadePunto(num2);
        else if (num2.length < 9){
            num2 = num2 = num2 + numAniadir;
            num2 = Number(num2);
        }
        document.getElementById("num2").textContent = num2;
    }
    document.getElementById("resultado").textContent = num + ' ' + signo + ' ' + num2;
}
function aniadeSigno(signoNuevo,num,num2,signo){
    if (num == '' && signoNuevo == '-'){ 
        document.getElementById("num").textContent = '-';
        num = '-';
    }else if (signo != '' && num2 == '' && signoNuevo == '-'){ 
        document.getElementById("num2").textContent = '-';
        num2 = '-';
    }else{
         if (signo == '' && num != '' && num != '-'){
            document.getElementById("signo").textContent = signoNuevo;
            signo = signoNuevo;
            document.getElementById("signo").textContent = signo;
        } else if (num2 != '' && num2 != '-'){
            hacerOperacion(signo,num,num2);
            num = document.getElementById("num").textContent;
            num2 = document.getElementById("num2").textContent;
            signo = signoNuevo;
            document.getElementById("signo").textContent = signo;
        }
    }
    document.getElementById("resultado").textContent = num + ' ' + signo + ' ' + num2;
}
function hacerOperacion(signo,num,num2){
    if (num == '' || num == '-') num = 0;
    else num = Number(num);
    if (num2 == '' || num2 == '-') num2 = 0;
    else num2 = Number(num2);
    if (signo != ''){
        switch (signo){
        case '+': num = num + num2;
        break;
        case '-': num = num - num2;
        break;
        case '*': num = num * num2;
        break;
        case '/': 
        if (num2 != 0) num = num / num2;
        else num = 0;
        break;
        case '^': num = num ** num2;
        }
    }
    document.getElementById("num2").textContent = "";
    document.getElementById("signo").textContent = "";
    if (num == 0 && signo == '/' || num == Infinity || num == -Infinity) document.getElementById("resultado").textContent = 'Math ERROR';
    else document.getElementById("resultado").textContent = num;
    if (num == Infinity || num == -Infinity) num = 0;
    document.getElementById("num").textContent = num;
    document.getElementById("resultadoAnt").textContent = num;
}
function aniadePunto(num){
    if (cuentaPuntos(num) == 0){
    if (num =='') return '0.';
    return num + '.';
    }
    return num;
}
function cuentaPuntos(num){
    let cont = 0;
    for (const caracter of num) {
        if (caracter == '.') cont++;
    }
    return cont;
}
function resetear(){
    document.getElementById("num").textContent = '';
    document.getElementById("num2").textContent = '';
    document.getElementById("signo").textContent = '';
    document.getElementById("resultado").textContent = '';
}
function aniadeAns(num,num2,signo,ans){
    if (signo == '' && num.length + ans.length < 9 || signo == '' && num.length == 0){
        if (Number(ans) < 0 && num != '') ans = Number(ans) * -1;
        num = num + ans;
        num = Number(num);
        document.getElementById("num").textContent = num;
    } else if (signo != '' && num2.length + ans.length < 9 || signo != '' && num2.length == 0){
        if (Number(ans) < 0 && num2 != '') ans = Number(ans) * -1;
        num2 = num2 + ans;
        num2 = Number(num2);
        document.getElementById("num2").textContent = num2;
    }
    document.getElementById("resultado").textContent = num + ' ' + signo + ' ' + num2;
}
function eliminaCaracter(num,num2,signo){
    if (num2 != '') num2 = num2.substring(0,num2.length - 1);
    else if (signo != '') signo = '';
    else if (num != '') num = num.substring(0,num.length -1);
    document.getElementById("num").textContent = num;
    document.getElementById("signo").textContent = signo;
    document.getElementById("num2").textContent = num2;
    document.getElementById("resultado").textContent = num + ' ' + signo + ' ' + num2;
}
// Mantiene el scroll del display siempre al máximo a la derecha
document.addEventListener('DOMContentLoaded', function () {
    const resultado = document.getElementById('resultado');

    const observer = new MutationObserver(function () {
        resultado.scrollLeft = resultado.scrollWidth;
    });

    observer.observe(resultado, {
        childList: true,
        characterData: true,
        subtree: true
    });
});