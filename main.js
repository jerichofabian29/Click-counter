const add =	document.getElementById("add");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
const countNum = document.getElementById("countNum");

let warning = document.getElementById("warning");

let count = 0;

add.onclick = function() {
	warning.textContent = " ";
    countNum.style.color = "rgb(206, 171, 129)";
	count++;
    countNum.textContent = count;
}

reset.onclick = function() {
	countNum.style.color = "black";
	count = 0;
    countNum.textContent = count;
}

decrease.onclick = function() {
    if(count <= 0){
    	warning.textContent = "Number cannot go below 0.";
        countNum.style.color = "red";
    }
    else{
    	count--;
        countNum.textContent = count;
    }
}

/* for OOP style
const add = document.getElementById("add");
      const reset = document.getElementById("reset");
      const decrease = document.getElementById("decrease");
      const multi = document.getElementById("multiply");

	  let label = document.getElementById("label");
      let count = 0;
      let warning = document.getElementById("warning");
      
      
      
      function AddNumber(){
      		count++;
            label.textContent = count;
            warning.textContent = "";
      }
      
      
      function resetNumber(){
      		count = 0;
            label.textContent = count;
      }
      
       function decreaseNumber(){
       
       if(count <= 0){
       	  warning.textContent = "You cannot go below 0.";
       	 }
       
       else{
       	  count--;
          label.textContent = count;
       	}
      		
      }
      
      add.onclick = AddNumber;
      reset.onclick = resetNumber;  
      decrease.onclick = decreaseNumber;



*/
