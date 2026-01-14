const btn = document.getElementById("btn");
const loader = document.getElementById("loader");
const success = document.getElementById("success");

const SUCCESS_DURATION = 1600;

btn.addEventListener("click", () => {
    
    btn.classList.add("hidden");
    loader.classList.remove("hidden");

    
    setTimeout(() => {
        loader.classList.add("hidden");
        success.classList.remove("hidden");

        
        setTimeout(() => {
            success.classList.add("hidden");
            btn.classList.remove("hidden");
        }, SUCCESS_DURATION);
    }, 3500); 
});

