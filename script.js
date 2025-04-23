function search(){
    var from = document.getElementById("from").value ;
    var to = document.getElementById("to").value ;
    var date = document.getElementById("date").value ;


    

    if (from === to){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please choose different terminals.",
        });
        return;
    }

    else if (date===""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Pick your journey date.",
        });
        return;
    }

    else if (from == "Dhaka" && to == "Cox's Bazar"){
        const oldContent = document.getElementById("busList");
            oldContent.textContent = "";

            const greenLine = document.createElement("div");
            greenLine.classList.add("innerStyle");
            greenLine.innerHTML = `<img src="green.jpeg" alt="Green Line Bus">
                                <div>
                                <h2>Green Line</h2>
                                Dhaka -----------------> Cox's Bazar
                                <p>08:00 PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;04:00 AM</p><br>
                                <button onClick="green()" id="btn" >Book Now</button>
                                </div>`;
            oldContent.appendChild(greenLine);

            const srTravel = document.createElement("div")
            srTravel.classList.add("innerStyle");
            srTravel.innerHTML = `<img src="green.jpeg">
                                <br>
                                <div>
                                <h2>SR Travels</h2>
                                Dhaka -----------------> Cox's Bazar
                                <p>10:00 PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;06:00 AM</p><br>
                                <button onClick="sr()" id="btn" >Book Now</button>
                                </div>`;
            oldContent.appendChild(srTravel);
    

    }

    else if (["Cox's Bazar","Khulna","Rajshahi"].includes(from) || ["Rajshahi","Khulna"].includes(to)) {
        Swal.fire({
            icon: "error",
            title: "Sorry!!",
            text: "No bus availabe for this route.",
        });
        return;
    }

    else{
        document.getElementById("eror").innerText = "";
    }
    

    
}