function loading(){
    let msg = document.getElementById("msg")
    let img = document.getElementById("img")
    
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    if(min >= 0 && min <=9){

        min = "0" + min
    }
    msg.innerHTML = "Agora são " + hora + ":" + min  
    if(hora >= 5 && hora < 12) {
        // bom dia
        img.src = "images/fotomanha.png"
        document.getElementById("container-principal").style.backgroundColor = "#e2cd9f"
    }
    else if (hora >= 12 && hora < 18){
        // boa tarde
        img.src = "images/fototarde.png"   
        document.getElementById("container-principal").style.backgroundColor = "#b9846f"
    }
    else {
        // boa noite
        img.src = "images/fotonoite.png"
        document.getElementById("container-principal").style.backgroundColor = "#515154"
    }
    console.log(min);
}




