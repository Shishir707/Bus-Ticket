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

    else if (new Date(date) < new Date()){
        Swal.fire({
            icon: "error",
            title: "Invalid!",
            text: "Selected date is in the past!",
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
                                <p id="vat">Fare Tk. BDT. (including VAT)</p>
                                <p id="price">2000</p><br>
                                <button onClick="green()" id="btn" >Book Now</button>
                                </div>`;
            oldContent.appendChild(greenLine);

            const srTravel = document.createElement("div")
            srTravel.classList.add("innerStyle");
            srTravel.innerHTML = `<img src="srtr.jpeg">
                                <br>
                                <div>
                                <h2>SR Travels</h2>
                                Dhaka -----------------> Cox's Bazar
                                <p>10:00 PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;06:00 AM</p><br>
                                <p id="vat">Fare Tk. BDT. (including VAT)</p>
                                <p id="price">2000</p><br>
                                <button onClick="srTravel()" id="btn" >Book Now</button>
                                </div>`;
            oldContent.appendChild(srTravel);

            const shyamoli = document.createElement("div")
            shyamoli.classList.add("innerStyle");
            shyamoli.innerHTML = `<img src="shyamoli.jpeg">
                                <br>
                                <div>
                                <h2>Shyamoli Paribahan</h2>
                                Dhaka -----------------> Cox's Bazar
                                <p>11:00 PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;07:00 AM</p><br>
                                <p id="vat">Fare Tk. BDT. (including VAT)</p>
                                <p id="price">2000</p><br>
                                <button onClick="shyamoli()" id="btn" >Book Now</button>
                                </div>`;
            oldContent.appendChild(shyamoli);
    

    }

    else if (["Cox's Bazar","Khulna","Rajshahi"].includes(from) || ["Rajshahi","Khulna"].includes(to)) {
        Swal.fire({
            icon: "error",
            title: "Sorry!!",
            text: "No bus availabe for this route.",
            footer:"Only Dhaka Cox's Bazar availabe now."
        });
        return;
    }

    else{
        document.getElementById("eror").innerText = "";
    }
}

function green() {
    document.getElementById("paymentInfo").textContent = "";
    document.getElementById("passengerInfo").textContent = "";
    const layout = document.getElementById("seatLayout");
    layout.innerHTML = "";

    let seatHTML = `<h3>Select Your Seat</h3><div class="bus-layout">
                    <h2>Green Line</h2>`;

    
    const rows = ["A","B","C","D","E","F","G","H"];
    for (let r = 0; r < rows.length; r++) {
        for (let c = 1; c <= 4; c++) {
            const seatId = rows[r] + c;
            seatHTML += `<button class="seat" id="${seatId}" onclick="selectSeat('${seatId}')">${seatId}</button>`;
        }
        seatHTML += "<br>";
    }

    seatHTML += `</div><br><button onclick="confirmBooking()" id="btn">Confirm Booking</button>`;
    layout.innerHTML = seatHTML;
}

function srTravel() {
    document.getElementById("paymentInfo").textContent = "";
    document.getElementById("passengerInfo").textContent = "";
    const layout = document.getElementById("seatLayout");
    layout.innerHTML = "";

    let seatHTML = `<h3>Select Your Seat</h3><div class="bus-layout">
                    <h2>SR Travel</h2>`;

    
    const rows = ["A","B","C","D","E","F","G","H"];
    for (let r = 0; r < rows.length; r++) {
        for (let c = 1; c <= 4; c++) {
            const seatId = rows[r] + c;
            seatHTML += `<button class="seat" id="${seatId}" onclick="selectSeat('${seatId}')">${seatId}</button>`;
        }
        seatHTML += "<br>";
    }

    seatHTML += `</div><br><button onclick="confirmBooking()" id="btn">Confirm Booking</button>`;
    layout.innerHTML = seatHTML;
}

function shyamoli() {
    document.getElementById("paymentInfo").textContent = "";
    document.getElementById("passengerInfo").textContent = "";
    const layout = document.getElementById("seatLayout");
    layout.innerHTML = "";

    let seatHTML = `<h3>Select Your Seat</h3><div class="bus-layout">
                    <h2>Shyamoli Paribahan</h2>`;

    
    const rows = ["A","B","C","D","E","F","G","H"];
    for (let r = 0; r < rows.length; r++) {
        for (let c = 1; c <= 4; c++) {
            const seatId = rows[r] + c;
            seatHTML += `<button class="seat" id="${seatId}" onclick="selectSeat('${seatId}')">${seatId}</button>`;
        }
        seatHTML += "<br>";
    }

    seatHTML += `</div><br><button onclick="confirmBooking()" id="btn">Confirm Booking</button>`;
    layout.innerHTML = seatHTML;
}

let selectedSeats = [];

function selectSeat(seatId) {
    const seat = document.getElementById(seatId);
    const index = selectedSeats.indexOf(seatId);

    if (index > -1) {
        seat.classList.remove("selected");
        selectedSeats.splice(index, 1);
    } else {
        if (selectedSeats.length >= 4) {
            Swal.fire({
                icon: "error",
                title: "Sorry!",
                text: "You can only select up to 4 seats.",
            });
            return;
        }
        seat.classList.add("selected");
        selectedSeats.push(seatId);
    }
   
}


function confirmBooking() {
    console.log("Confirm Booking function started");
    const price = document.getElementById("price").innerText ;
    const from = document.getElementById("from").value ;
    const to = document.getElementById("to").value ;
    const date = document.getElementById("date").value 
    if (!selectedSeats) {
        Swal.fire("Please select a seat!");
        return;
    }
    var name = prompt("Enter Your Name:");
    var pass = parseInt(prompt("Enter Passward:"));
    if (name == null || pass == null || name == "" || pass=="" ){
        Swal.fire({
            icon: "error",
            title: "Invalid!",
            text: "Enter Name & Password for book Ticket.",
        });
        return;
    }
    else{
        Swal.fire({
        icon: "success",
        title: "Reserved!",
        html:`<b>Seat ${selectedSeats} booked for ${name} successfully.</b><br><br>Please Confirm Your Payment.`,
        footer: `You have to pay BDT. TK ${selectedSeats.length*price}.`
    });
    }

    const bookingInfo = {
        from: from,
        to: to,
        date: date,
        name: name,
        seats: selectedSeats,
        total: selectedSeats.length * price
    };

    localStorage.setItem("lastBooking", JSON.stringify(bookingInfo));

    selectedSeats.forEach(seatId => {
        const seatElement = document.getElementById(seatId);
        if (seatElement) {
            seatElement.classList.remove("selected");
            seatElement.classList.add("occupied");
        }
    });

    selectedSeat = null;

    const lastBooking = JSON.parse(localStorage.getItem("lastBooking"));

    const oldContent = document.getElementById("passengerInfo");
            oldContent.textContent = "";

            const newDiv = document.createElement("div")
            newDiv.classList.add("innerStyle");
            newDiv.innerHTML=`<h2>Pasenger Information</h2>
                            <h4>From : ${lastBooking.from}</h4>
                            <h4>To : ${lastBooking.to}</h4>
                            <h4>Date : ${lastBooking.date}</h4>
                            <h4>Name : ${lastBooking.name}</h4>
                            <h4>Seats : ${lastBooking.seats.join(",")}</h4>
                            <h4>Total Fare : ${lastBooking.total}</h4>
                            <p>Please Confirm Payment to Booked Your Selected Seat<br><br>
                            <button onClick="payment()" id="btn">PROCEED TO PAYMENT</button><br><br>`;
                            

            oldContent.appendChild(newDiv);
}


function addCart(button){
    let busCard = button.closest(".busDiv");

    let availabilityText = Array.from(busCard.querySelectorAll("#availability"))
    .find(p => p.innerText.startsWith("Availability"))
    .innerText;
    let result = availabilityText.split(":")[1].trim(); 
    
    

    console.log(result);
    if (result == "Yes"){
        const name = prompt("Enter Your Full Name:");
        const phone = prompt("Enter Your Phone Number:");

        const validPrefixes = ["013", "014", "015", "016", "017", "018", "019"];

        console.log(name);
        console.log(phone);

        
        if (!name || !phone || phone.length !== 11 || !validPrefixes.includes(phone.substring(0, 3))) {
    
            Swal.fire({
                icon: "error",
                title: "Invalid!",
                text: "Enter Valid Name & Phone Number for rent Bus.",
            });
            return;
        }

        Swal.fire({
            title: '🚌 Booking Confirmed!',
            html: `<b>Dear ${name}, bus has been reserved.</b><br>We\'ll contact you shortly to confirm in details.`,
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Great!',
            confirmButtonColor: '#28a745'
        });

    } 
    else {
        Swal.fire({
            title: '🚌 Bus Not Available',
            html: 'Unfortunately, the bus you selected is currently unavailable. Please choose another option or check back later.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#f44336'
        });
    }
}
let selectedMethod = ""; 
function payment() {
    const lastBooking = JSON.parse(localStorage.getItem("lastBooking"));
    const oldContent = document.getElementById("paymentInfo");
    oldContent.textContent = "";

    const newDiv = document.createElement("div");
    newDiv.classList.add("innerStyle");
    newDiv.innerHTML = `
        <h2>Amount: ${lastBooking.total}</h2>
        <section class="paymentPartner">
            <div>
                <button class="payBtn" onclick="selectMethod('Bkash')">
                <img src="bkash.png" alt="Bkash">
                </button> 
                
            </div>
            <div>
                <button class="payBtn" onclick="selectMethod('Rocket')">
                <img src="rocket.jpg" alt="Rocket">
                </button> 
                
            </div>
            <div>
                <button class="payBtn" onclick="selectMethod('Nagad')">
                <img src="nagad.png" alt="Nagad">
                </button> 
                
            </div>
            <div>
                <button class="payBtn" onclick="selectMethod('Upay')">
                <img src="upay.png" alt="Upay">
                </button> 
                
            </div><br>
            <p>By Clicking PAY NOW , You are agrreing to Bus Ticket's Terms & Condition & Privacy Policy.</p>
            <div class="proceed">
                <button id="btn" onclick="payNow()">PAY NOW</button>
            </div><br><br>
        </section>
    `;
    oldContent.appendChild(newDiv);
}

function selectMethod(method) {
    selectedMethod = method; 
    Swal.fire(`${method} Selected✔`);
}

function payNow() {
    if (selectedMethod === "") {
        Swal.fire("Please select a payment method first!");
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Payment Successful!',
            html: `Paid Succesful using ${selectedMethod}. Thank you!<br><br>
            <button onclick="downloadTicket()" id="btn">Download Ticket</button>`
        });
        
    }
}

function downloadTicket() {
    const booking = JSON.parse(localStorage.getItem("lastBooking"));
    const ticketContent = `
        -------- Bus Ticket --------
        Name: ${booking.name}
        From: ${booking.from}
        To: ${booking.to}
        Date: ${booking.date}
        Seats: ${booking.seats.join(", ")}
        Total Fare: BDT ${booking.total}
        Payment Method: ${selectedMethod}
        ----------------------------
        Thank you for booking with us!
    `;

    const blob = new Blob([ticketContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Ticket_${booking.name}.txt`;
    link.click();
}






        











