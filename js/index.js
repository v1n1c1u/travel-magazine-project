document.addEventListener("DOMContentLoaded",()=>{
    const toggleMenuButton = document.getElementById("toggle-button");
    const searchButton = document.getElementById("searchBtn");
    const menu = document.getElementById("menu");
    const newsletterForm = document.getElementById("subscribe-form");
    const subscribeEmailInput = document.getElementById("subscription-email");
    const subscribeButton = document.getElementById("submitBtn");
    const footerInputMessage = document.getElementById("message");
    const submitMessageButton = document.getElementById("submitMessageBtn");

    toggleMenuButton.addEventListener("click", toggleMenu);
    
    if(submitMessageButton){
        submitMessageButton.addEventListener("click",(e)=>{
            e.preventDefault();
            window.location = "./500.html";
        })
    }
    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        if(window.location.href.endsWith("/index.html")){
            window.location = "./pages/500.html";

        }else{
            window.location = "./500.html";
        }
    });
    function toggleMenu(){
        menu.classList.toggle("show-menu");
    }
    //email validation based on: https://www.edureka.co/blog/javascript-email-validation/
    newsletterForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(subscribeEmailInput.value.match(mailRegex)){
            subscribeEmailInput.classList.remove("invalid-input");
            footerInputMessage.innerText = "Subscription successful!";
            footerInputMessage.classList.add("success");
            subscribeEmailInput.disabled = true;
            subscribeEmailInput.style.color = "lightgray";
            if(!footerInputMessage.classList.contains("visible")){
                footerInputMessage.classList.add("visible");
            }
            subscribeButton.disabled = true;
            subscribeButton.innerHTML = `Subscribed <i class="fa-solid fa-check"></i>`;
            subscribeButton.classList.add("subscribed");
        }else{
            footerInputMessage.innerText = "Please inform a valid e-mail!";
            footerInputMessage.classList.add("visible");
            footerInputMessage.classList.add("error");
            footerInputMessage.setAttribute("aria-hidden", "false");
            subscribeEmailInput.classList.add("invalid-input");    //The pop up alert for an invalid email address
            subscribeEmailInput.focus();   //The pop up alert for an invalid email address
        }
    });
})
