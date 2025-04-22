function search(){
    var from = document.getElementById("from").value ;
    var to = document.getElementById("to").value ;
    var date = document.getElementById("date").value ;


    

    if (from === to){
        document.getElementById("eror").innerText = "Please Chosse Different Terminal";
    }

    else if (date===""){
        document.getElementById("eror").innerText ="Please Pick Your Journey Date"
    }

    else{
        document.getElementById("eror").innerText = "";
    }

    
}