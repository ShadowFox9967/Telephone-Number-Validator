const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const output = document.querySelector("#output");
const resultsDiv = document.querySelector("#results-div");

const telephoneNumReg = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

const telChecker = ()=>{
  const input = document.querySelector("#user-input").value.trim();
  if(!telephoneNumReg.test(input)){
    resultsDiv.textContent = `Invalid US number: ${input}`;
  }else{
    resultsDiv.textContent = `Valid US number: ${input}`;
  }
}
const resetFunc = ()=>{
  resultsDiv.textContent = "";
  document.querySelector("#user-input").value = "";
}
checkBtn.addEventListener("click",()=>{
    const input = document.querySelector("#user-input").value.trim();
    if(input === "")
    {
      alert("Please provide a phone number");
      return
    } 
  telChecker();
});
clearBtn.addEventListener("click",()=>{
  output.style.display = "none";
  resetFunc();
})