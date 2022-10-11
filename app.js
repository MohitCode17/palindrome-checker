const inputText = document.querySelector(".bottom input"),
checkPalindrome = document.querySelector(".bottom button"),
infoAlert = document.querySelector(".info-alert");
let filterText;

checkPalindrome.addEventListener("click", () =>{
    // Reverse the text input value
    let reverseValue = filterText.split("").reverse().join("");
    infoAlert.style.display = "block";
    if(filterText != reverseValue){
        return infoAlert.innerHTML = `No, <span>'${inputText.value}'</span> is not a palindrome !`;
    }
    infoAlert.innerHTML = `Yes, <span>'${inputText.value}'</span> is a palindrome !`;
});

inputText.addEventListener("keyup", () =>{
    // Remove all the special character & spaces from the input text value
    filterText = inputText.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    // console.log(filterText);

    // If there is text in input then add active class in button
    if(filterText){
        return checkPalindrome.classList.add("active");
    }
    infoAlert.style.display = "none";
    checkPalindrome.classList.remove("active");
})