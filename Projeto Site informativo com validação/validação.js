function validacaoForms() {
    var formulariook = true;
    var senha = document.getElementById("password").value;
    var email = document.getElementById("email").value; 
    
    if(!(/^[a-zA-Z0-9._%]+@[a-zA-Z0-9._%]+\.[a-zA-Z]{2,}$/.test(email))){
        formulariook = false;
    }
    
   if(!(senha.length >= 6 && senha.length <= 15)) {
    formulariook = false;
   }
   if(formulariook){
    alert("Informações válidas!");
   }
   else{
    alert("Algum campo está incorreto");
   }
}
