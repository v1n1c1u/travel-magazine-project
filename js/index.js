document.addEventListener("DOMContentLoaded",()=>{
    const toggleMenuButton = document.getElementById("toggle-button");
    const menu = document.getElementById("menu");
    const newsletterForm = document.getElementById("subscribe-form");
    const subscribeEmailInput = document.getElementById("subscription-email");
    const footerErrorMessage = document.getElementById("error-message");

    toggleMenuButton.addEventListener("click", toggleMenu);

    function toggleMenu(){
        console.log("is working");
        menu.classList.toggle("show-menu");
    }
    //email validation based on: https://www.edureka.co/blog/javascript-email-validation/
    newsletterForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const mailRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        if(subscribeEmailInput.value.match(mailRegex)){
            subscribeEmailInput.classList.remove("invalid-input");
            if(footerErrorMessage.classList.contains("visible")){
                footerErrorMessage.classList.add("invisible");
                footerErrorMessage.setAttribute("aria-hidden", "true");
            }
            
            alert("You have entered a valid email address!");    //The pop up alert for a valid email address
        }else{
            footerErrorMessage.classList.add("visible");
            footerErrorMessage.setAttribute("aria-hidden", "false");
            subscribeEmailInput.classList.add("invalid-input");    //The pop up alert for an invalid email address
            subscribeEmailInput.focus();   //The pop up alert for an invalid email address
            document.wai
            alert("You have entered an invalid email address!");
        }
    })
})
