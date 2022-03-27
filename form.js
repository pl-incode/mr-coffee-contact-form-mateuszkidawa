// Połącz się z buttonem
const btn = window.document.getElementById("submit");
const btn = window.document.forms['przycisk'];

const form = document.querySelector("form");
const input = form.querySelector("input");


// Jeśli event klik na nim, to console.log
form.addEventListener("submit", e => {
    e.preventDefault();

    //jeżeli wszystko ok to wysyłamy
    if (input.value.length >= 3) {
        // e.target.submit();
    } else {
        //jeżeli nie to pokazujemy jakieś błędy
        alert("Kolego wypełniłeś błędnie nasz super formularz");
    }
});

{
    const firstNameElement = document.querySelector(".name");
    const contactFormElement = document.querySelector(".form");

    function GetValues(firstName) {
        this.firstName = firstName;
    };

    const logInConsole = (obj) => {
        console.log(`Twoje imie: ${obj.firstName}`);
    };

    contactFormElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const formValues = new GetValues(
            firstNameElement.value,
        );
    });
}

// Połącz się z buttonem
const btn = window.document.getElementById("submit");

// Jeśli event klik na nim, to console.log
btn.addEventListener("click", () => {
    const payload = {
        type: "BUTTON_CLICK",
        timestamp: Date.now()
    }
    console.log(payload);
})