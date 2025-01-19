const mortgageAmount = document.getElementById('mortgage-amount');
const mortgageTerm = document.getElementById('mortgage-term');
const interestRate = document.getElementById('interest-rate');
const repayment = document.getElementById('repayment');
const interest = document.getElementById('interest-only');
const calculate = document.querySelector('.calculate');
const clear = document.querySelector('.clear-all');
const check = document.querySelector('.check')


const fieldRequired = function (input) {
  const span = input.closest("div").querySelector(".color");
  const required = input.closest("div").querySelector(".required");

  if (span) {
    span.style.backgroundColor = "red";
    span.style.color = "white";
    span.style.top = "1px";
  }

  if (required) {
    // required.textContent = errorMessage;
    required.style.color = "red";
    required.style.visibility = 'visible';
  }
  input.setAttribute("data-invalid", "true");
};

const resetStyle = function (input) {
  const span = input.closest("div").querySelector(".color");
  const required = input.closest("div").querySelector(".required");

  if (span) {
    span.style.color = "";
    span.style.top = "";
    span.style.backgroundColor = "";
  }

  if (required) {
    // required.textContent = "";
    required.style.color = "";
    required.style.visibility = 'hidden';
  }
  
  input.removeAttribute("data-invalid");
  input.style.border = "";
  // input.style.outline = ""; 
};


[mortgageAmount, mortgageTerm, interestRate].forEach((input) => {
  input.addEventListener("focus", () => {
    // If the input is in an invalid state, maintain the error styles
    if (input.getAttribute("data-invalid") === "true") {
      input.style.border = "1px solid hsl(4, 69%, 50%)"; 
    } else {
      input.style.border = "1.2px solid #d5ea13"; 
    }

    // Change background color of the span when input is focused
    const span = input.closest("div").querySelector(".color");
    if (span) {
      if (input.getAttribute("data-invalid") === "true") {
        span.style.backgroundColor = "hsl(4, 69%, 50%)"; 
        span.style.color = "white"; 
      } else {
        span.style.backgroundColor = "#d5ea13"; 
        span.style.color = "rgb(55,65,81)";
      }
    }
  });

  input.addEventListener("blur", () => {
    // If the input is invalid, retain the red border and styles
    if (input.getAttribute("data-invalid") === "true") {
      input.style.border = "1px solid hsl(4, 69%, 50%)"; 
    } else {
      input.style.border = "1px solid #d1d5db"; 
    }

    // Reset the span styles on blur, but keep them in error state if invalid
    const span = input.closest("div").querySelector(".color");
    if (span) {
      if (input.getAttribute("data-invalid") === "true") {
        span.style.backgroundColor = "hsl(4, 69%, 50%)"; 
        span.style.color = "white"; 
      } else {
        span.style.backgroundColor = ""; 
        span.style.color = ""; 
      }
    }
  });
});



const border = function (input) {
  input.style.border = "1.3px solid hsl(4, 69%, 50%)";
};

const interestFunction = function (p, r, t) {
  interest_only = p * (r / 100) * t;
  return interest_only;
};

const monthlyRepaymentFunction = function (p, r, t) {
  r = r / 100 / 12;
  t = t * 12;
  let monthly_repayment = p * (r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
  return monthly_repayment;
};

const totalRepayment = function (p, r, t) {
  let monthly_repayment = monthlyRepaymentFunction(p, r, t);
  let total_repayment = monthly_repayment * t * 12 ;
  return total_repayment;
};


calculate.addEventListener("click", function (event) {
  event.preventDefault();

  let principal = parseFloat(mortgageAmount.value);
  let rate = parseFloat(interestRate.value);
  let term = parseFloat(mortgageTerm.value);

  let isValid = true;

  // Form Validation
  if (mortgageAmount.value === "") {
    fieldRequired(mortgageAmount);
    border(mortgageAmount);
    isValid = false;
  } else {
    resetStyle(mortgageAmount);
  }

  if (interestRate.value === "") {
    fieldRequired(interestRate);
    border(interestRate);
    isValid = false;
  } else {
    resetStyle(interestRate);
  }

  if (mortgageTerm.value === "") {
    fieldRequired(mortgageTerm);
    border(mortgageTerm);
    isValid = false;
  } else {
    resetStyle(mortgageTerm);
  }

  if (!repayment.checked && !interest.checked) {
    fieldRequired(check);
    isValid = false;
  } else {
    resetStyle(check);
  }

  if (!isValid) return;

  // Show results
  const result_div = document.querySelector(".result_div");
  result_div.classList.remove("hidden");
  const remove_former = document.querySelector(".none");
  remove_former.classList.add("hidden"); 

  // Calculate results
  if (interest.checked) {
    const result = document.createElement("div");
    result.innerHTML = `
      <h3 style="color:white; font-weight:500; font-size:2rem;padding: 0 0 10px 25px;">Your results</h3>
      <p style="color: rgb(203,213,225); padding: 0 30px; margin-bottom: 5%;">Your results are shown below based on the information you provided. To adjust the result, edit the form and click "calculate repayments" again.</p>
      <div style= "width:85%; margin: 0 7%; padding: 15px;background-color: rgb(23, 29, 40); border:1px solid rgb(23, 29, 40); border-top:4px solid rgb(213, 234, 19); border-radius:15px; border height:100px;">
        <h1 style="color: rgb(203,213,225)">
          Your Total Interest
        </h1>
        <span style="color: rgb(213,234,19); font-size: 2rem;"> £${interestFunction(
          principal,
          rate,
          term
        ).toLocaleString()}</span>
      </div>
    `;
    result_div.innerHTML = ""; 
    result_div.appendChild(result);
  }
  else if (repayment.checked) {
    const result2 = document.createElement("div");
    result2.innerHTML = `
      <h3 style="color:white; font-weight:500; font-size:2rem; padding: 0 0 10px 25px;">Your results</h3>
      <p style="color: rgb(203,213,225); padding: 0 30px; margin-bottom: 5%;">Your results are shown below based on the information you provided. To adjust the result, edit the form and click "calculate repayments" again.</p>
      <div style= "width:85%; margin: 0 7%; padding: 15px;background-color: rgb(23, 29, 40); border:1px solid rgb(23, 29, 40); border-top:4px solid rgb(213, 234, 19); border-radius:15px; border height:100px;">
        <div style="border-bottom: 1px solid rgb(203,213,225); padding-bottom: 10px; margin-bottom: 10px;">
          <h1 style="color: rgb(203,213,225)">
            Your Monthly Repayments
          </h1>
          <span style="color: rgb(213,234,19); font-size: 2rem; padding-bottom: 10px;"> £${monthlyRepaymentFunction(
            principal,
            rate,
            term
          ).toLocaleString()}</span>
        </div>
        <h1 style="color: rgb(203,213,225)">
            Total You'll Repay Over The term
          </h1>
          <span style="color: white; font-size: 1.5rem; padding-bottom: 10px;"> £${totalRepayment(
            principal,
            rate,
            term
          ).toLocaleString()}</span>
      </div>
    `;
    result_div.innerHTML = ""; 
    result_div.appendChild(result2);
  }
});



clear.addEventListener("click", function (event) {
  event.preventDefault();

  mortgageAmount.value = "";
  mortgageTerm.value = "";
  interestRate.value = "";

  repayment.checked = false;
  interest.checked = false;

  
  const result_div = document.querySelector(".result_div");
  result_div.innerHTML = ""; 
  result_div.classList.add("hidden"); 

  const remove_former = document.querySelector(".none");
  remove_former.classList.remove("hidden"); 

  [mortgageAmount, mortgageTerm, interestRate, check].forEach((input) => {
    resetStyle(input); 
  });
});

