
function carregar() {
    var msn = document.getElementById("msn")
    var img = document.getElementById("img")
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var res = document.getElementById("saudacao")
 
    
    if(hora >= 0 && hora < 5){
        //BOA MADRUGADA
        document.body.style.backgroundImage = "url(madrugada.jpg)"
        saudacao.innerHTML = `<h1>BOA MADRUGADA&#128564;</h1>`
        msn.innerHTML = `Agora são ${hora}:${min} horas.`
    }
    else if(hora >= 5 && hora < 12){
        //BOM DIA!
        document.body.style.backgroundImage = "url(manha.jpg)"
        saudacao.innerHTML = `<h1>BOM DIA!!!&#127773;</h1>`
        msn.innerHTML = `Agora são ${hora}:${min} horas.`
        
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        document.body.style.backgroundImage = "url(tarde.jpg)"
        saudacao.innerHTML = `<h1>BOA TARDE!&#127774;</h1>`
        msn.innerHTML = `Agora são ${hora}:${min} horas.`
        
    }else if(hora >= 18 && hora < 24){
        //BOA NOITE!
        document.body.style.backgroundImage = "url(noite.jpg)"
        saudacao.innerHTML = `<h1>BOA NOITE&#127770;</h1>`
        msn.innerHTML = `Agora são ${hora}:${min} horas.`
        
    }else{
        res.innerHTML = `<h1>[ERROR] Não exite ${hora} horas.</h1>` 
    }
}
function alterar() {
    var msn = document.getElementById("msn")
    var img = document.getElementById("img")
    var agora = new Date()
    var hora = document.getElementById("txthr").value
    var min = agora.getMinutes()
    var res = document.getElementById("saudacao")
 
    
    if(hora >= 0 && hora < 5){
        //BOA MADRUGADA
        document.body.style.backgroundImage = "url(madrugada.jpg)"
        saudacao.innerHTML = `<h1>BOA MADRUGADA&#128564;</h1>`
        msn.innerHTML = `Agora são ${hora}:${min} horas.`
    }
    else if(hora >= 5 && hora < 12){
        //BOM DIA!
        document.body.style.backgroundImage = "url(manha.jpg)"
        saudacao.innerHTML = `<h1>BOM DIA!!!&#127773;</h1>`
        msn.innerHTML = `Agora são ${hora}:${min} horas.`
        
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        document.body.style.backgroundImage = "url(tarde.jpg)"
        saudacao.innerHTML = `<h1>BOA TARDE!&#127774;</h1>`
        msn.innerHTML = `Agora são ${hora}:${min} horas.`
        
    }else if(hora >= 18 && hora < 24){
        //BOA NOITE!
        document.body.style.backgroundImage = "url(noite.jpg)"
        saudacao.innerHTML = `<h1>BOA NOITE&#127770;</h1>`
        msn.innerHTML = `Agora são ${hora}:${min} horas.`
        
    }else{
        res.innerHTML = `<h1>[ERROR] </h1>` 
        msn.innerHTML = `Não exite ${hora} horas.`
        document.body.style.background = "white"
    }
}
function test() {
    var botao = document.getElementById("test")
    var number = document.getElementById("txthr").value
    if (number !== "" ){
        botao.removeAttribute("disabled")
    }else {
        botao.setAttribute("disabled", "disabled")
    }
}
document.addEventListener("keypress", function(e) {

    if(e.key === "Enter"){
        var res = document.getElementById("saudacao")
        var msn = document.getElementById("msn")
        var number = document.getElementById("txthr").value
        var btn = document.getElementById("test")
        btn.click()
        if(number == ""){
            res.innerHTML = `<h1>[ERROR] </h1>` 
            msn.innerHTML = "Digite uma hora."
        }
    }

})
