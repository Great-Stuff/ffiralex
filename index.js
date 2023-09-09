const email = document.getElementById("email");

const copyEmail = function(){
    try{
        navigator.clipboard.writeText("apj205@nyu.edu");
        email.textContent = "apj205[at]nyu.edu | Copied"
    }
    catch(err){
        console.error("Failed to copy", err);
    }
}