# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](Screenshot%202025-01-19%20at%2019-04-50%20Frontend%20Mentor%20Mortgage%20repayment%20calculator.png)



### Links

- Solution URL: [https://github.com/DevByVee/mortgage-calculator](https://your-solution-url.com)
- Live Site URL: [https://mortgagecalculator-js.netlify.app/)](https://mortgagecalculator-js.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Tailwind CSS for utility-first styling
- Mobile-first workflow
- Vanilla JavaScript



### What I learned

This project gave me the opportunity to strengthen my skills in creating accessible forms and implementing validation logic with JavaScript. I also learned how to:

Integrate Tailwind CSS for responsive layouts quickly and efficiently.
Enhance user experience with focus and hover states.
Dynamically calculate repayment amounts based on user input.
Here’s an example of the JavaScript logic I implemented:

javascript
Copy
Edit
function calculateRepayment(principal, interestRate, term) {
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = term * 12;
  const monthlyRepayment =
    (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));

  return {
    monthly: monthlyRepayment.toFixed(2),
    total: (monthlyRepayment * totalPayments).toFixed(2),
  };
}

### Continued development

In the future, I’d like to:

- Integrate a currency API to allow users to switch between different currencies (e.g., GBP, USD, EUR).
- Add additional features, such as advanced repayment options and interest rate comparison charts.
- Improve accessibility with better ARIA labels and keyboard navigation support.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=arftp8kFBBg&t=207s) - This helped me set up my Tailwind CSS workflow and provided useful tips for responsive design.
- [Example resource 2](https://nerdcave.com/tailwind-cheat-sheet) - A great reference for using Tailwind CSS effectively.


## Author

- LinkedIn - [victoria-orisanmi](https://www.linkedin.com/in/victoria-orisanmi/)
- Frontend Mentor - [@DevByVee](https://www.frontendmentor.io/profile/DevByVee)
- Twitter - [@OlukeyeVictoria](https://x.com/OlukeyeVictoria)


