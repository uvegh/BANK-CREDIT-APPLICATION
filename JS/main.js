let annualIncomeTxt = document.getElementById("annualIncomeTxt"),
    currentAmountTxt = document.getElementById("currentAmountTxt"),
    creditHistoryTxt = document.getElementById("creditHistoryTxt"),
    lastDepositDateTxt = document.getElementById("lastDepositDateTxt"),
    lastLoanCollectionDateTxt = document.getElementById("lastLoanCollectionDateTxt"),
    loanRepaymentPeriodTxt = document.getElementById("loanRepaymentPeriodTxt"),
    AccountTypeTxt = document.getElementById("AccountTypeTxt"),
    loanAmountTxt = document.getElementById("loanAmountTxt"),

    genderTxt = document.getElementById("genderTxt"),
    martialStsTxt = document.getElementById("martialStsTxt"),

    firstNametxt = document.getElementById("firstNametxt"),
    lastNametxt = document.getElementById("lastNametxt"),
    addressTxt = document.getElementById("addressTxt"),
    dobTxt = document.getElementById("dobTxt"),
    emailTxt = document.getElementById("emailTxt"),
    phoneTxt = document.getElementById("phoneTxt"),
    //validaatess
    validateAnnualIncome = document.getElementById("validateAnnualIncome"),
    validateloanAmount = document.getElementById("validateloanAmount"),
    validateCurrentAmount = document.getElementById("validateCurrentAmount"),
    validateCreditHistory = document.getElementById("validateCreditHistory"),
    validateLDD = document.getElementById("validateLDD"),
    validateLLCD = document.getElementById("validateLLCD"),
    validateLoanRepymentPeriod = document.getElementById("validateLoanRepymentPeriod"),
    validateAcctType = document.getElementById("validateAcctType"),
    results = document.getElementById("results"),
    exampleFormControlTextarea1 =document.getElementById("exampleFormControlTextarea1"),
    submitBtn = document.getElementById("submitBtn");

let annualIncome,
    loanAmount,
    currentAmount,
    creditHistory,
    lastLoanCollectionDate,
    loanRepaymentPeriod,
    lastDepositDate,
    accountType;
let points = 0;
let limit;
let dateNow;
let lastDD;
let lastLCD;
let lastDDdiff;
let lastLCDdiff;
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


submitBtn.addEventListener("click", function () {

    ValidateForms();



});

// function loader() {
//     let spinner = document.getElementById("spinner");
//     show = function () {
//         setTimeout(() => {
//             spinner.style.display = "block";
//         }, 5000);
//     }
//     hide = function () {
//         spinner.style.display = "none"
//         show()
//     }
//     ValidateForms();
// }




function ValidateForms() {

    if (loanAmountTxt.value == "" || loanAmountTxt.value == null) {
        // validateloanAmount.innerHTML="*invalid";
        console.log("invalid");
    } else {
        // validateloanAmount.innerHTML="";
        console.log(loanAmountTxt.value);
    }

    if (annualIncomeTxt.value == "" || annualIncomeTxt.value == null) {
        // validateAnnualIncome.innerHTML="*invalid";
        console.log("invalid");
    } else {
        // validateAnnualIncome.innerHTML="";
        console.log(annualIncomeTxt.value);
    }

    if (currentAmountTxt.value == "" || currentAmountTxt.value == null) {
        // validateCurrentAmount.innerHTML="*invalid";
        console.log("invalid");
    } else {
        // validateCurrentAmount.innerHTML="";
        console.log(annualIncomeTxt.value);
    }


    if (creditHistoryTxt.value == "" || creditHistoryTxt.value == null) {
        // validateCreditHistory.innerHTML="*invalid";
        console.log("invalid");
    } else {
        // validateCreditHistory.innerHTML="";
        console.log(annualIncomeTxt.value);
    }


    if (lastDepositDateTxt.value == "" || lastDepositDateTxt.value == null) {
        // validateLDD.innerHTML="*invalid";
        console.log("invalid");
    } else {
        // validateLDD.innerHTML="";
        console.log(annualIncomeTxt.value);
    }


    if (lastLoanCollectionDateTxt.value == "" || lastLoanCollectionDateTxt.value == null) {
        // validateLLCD.innerHTML="*invalid";
        console.log("invalid");
    } else {
        // validateLLCD.innerHTML="";
        console.log(lastLoanCollectionDateTxt.value);
    }




    if (loanRepaymentPeriodTxt.value == "" || loanRepaymentPeriodTxt.value == null) {
        // validateLoanRepymentPeriod.innerHTML="*invalid";
        console.log("invalid");
    } else {
        // validateLoanRepymentPeriod.innerHTML="";
        console.log(loanRepaymentPeriodTxt.value);
    }

    if (AccountTypeTxt.value == "" || AccountTypeTxt.value == null) {
        // validateAcctType.innerHTML="*invalid";
        console.log("invalid");
    } else {
        // validateAcctType.innerHTML="";

    }

    if (annualIncomeTxt.value != "" && currentAmountTxt.value != "" && creditHistoryTxt.value != "" && lastDepositDateTxt.value != "" && lastLoanCollectionDateTxt.value != "" && loanRepaymentPeriodTxt.value != "" && AccountTypeTxt.value != "" && loanAmountTxt.value != "") {
        AssignValues()
        console.log(annualIncomeTxt.value, currentAmountTxt.value, creditHistoryTxt.value,
            lastDepositDateTxt.value, lastLoanCollectionDateTxt.value, loanRepaymentPeriodTxt.value,
            AccountTypeTxt.value
        );
    }


}

function AssignValues() {
    loanAmount = parseInt(loanAmountTxt.value)
    annualIncome = parseInt(annualIncomeTxt.value)
    currentAmount = parseInt(currentAmountTxt.value)
    creditHistory = creditHistoryTxt.value
    lastLoanCollectionDate = parseInt(lastLoanCollectionDateTxt.value)
    loanRepaymentPeriod = loanRepaymentPeriodTxt.value
    lastDepositDate = parseInt(lastDepositDateTxt.value)
    accountType = AccountTypeTxt.value
    limit = 0.45 * annualIncome
    console.log(limit);



    dateNow = new Date;
    lastDD = new Date(lastDepositDateTxt.value);
    lastLCD = new Date(lastLoanCollectionDateTxt.value)
    lastDDdiff = dateNow.getDate() - lastDD.getDate();
    lastLCDdiff = dateNow.getMonth() - lastLCD.getMonth()
    console.log(lastDDdiff, lastLCDdiff);


    CreditVerification()

}

function CreditVerification() {

    if (currentAmount > loanAmount) {
        points += 10
        console.log(points);
    } else {
        points -= 10
        console.log(points);
    }




    switch (creditHistory) {
        case "1": points += 0
            console.log(points);
            break;
        case "2": points += 0
            console.log(points);
            break;
        case "3": points += 0
            console.log(points);
            break;
        case "4": points += 0
            console.log(points);
            break;
        case "5": points += 0
            console.log(points);
            break;
        case "5": points += 0
            console.log(points);
            break;
        case "6": points += 10
            console.log(points);
            break;

        default:
            break;
    }

    if (lastDDdiff <= 0) {

        points += 5
        console.log(points);
    } else {
        points += 0
        console.log(points);
    }

    if (lastLCDdiff > 6) {

        points += 10
        console.log(points);
    } else {
        points += 0
        console.log(points);
    }








    switch (loanRepaymentPeriod) {
        case "1": points += 10
            console.log(points);
            break;
        case "2": points += 0
            console.log(points)
            break;
        default:

    }


    switch (accountType) {
        case "1": points += 10
            console.log(points);
            break;
        case "2": points += 5
            console.log(points);
            break;
        default:

    }

    OutPut()
  

}

function clearForm() {
    console.log("empty");
    annualIncomeTxt.value = ""
    loanAmountTxt.value = ""
    currentAmountTxt.value = ""
    creditHistoryTxt.value = ""
    lastLoanCollectionDateTxt.value = ""
    loanRepaymentPeriodTxt.value = ""
    lastDepositDateTxt.value = ""
    AccountTypeTxt.value = ""
    genderTxt.value = ""
    martialStsTxt.value = ""
firstNametxt.value=""
    lastNametxt.value = ""
    addressTxt.value = ""
    dobTxt.value = ""
    emailTxt.value = ""
    phoneTxt.value = ""
    exampleFormControlTextarea1=""



}


function OutPut() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 

    modal.style.display = "block";
    if (points >= 30 && loanAmount > limit) {
        popupItem.innerHTML = `
        <p style="color:blue; text-align: center;">  Dear ${firstNametxt.value} you have been awarded ₦${limit} with a credit score of ${points} 
        Due to our loan policy,customers can only get
        45% of their annual income
      Thank you for banking with us.
      CENTE BANK <i class="fa fa-bank" aria-hidden="true"></i>
      </p>
      <br> <br>
      <button class="btn btn-primary" id="closeBtn">OKAY</button>
        `
        console.log(`
         You have been awarded ₦${limit} with a credit point of ${points}
        Due to our credit policy,customer can only get
        45% of their annual income
        Thank you for banking with
        
        `)

    } else if (points >= 30 && loanAmount < limit) {
        popupItem.innerHTML = `
         <p style="color:blue"> Dear ${firstNametxt.value} you have been awarded ₦${loanAmount} with a credit score of ${points} <br>

         Thank you for banking with us. <br>
         CENTE BANK <i class="fa fa-bank" aria-hidden="true"></i>
         </p>
         <br> <br>
         <button class="btn btn-primary fw-bold" id="closeBtn">OKAY</button>
        `
        console.log(`
        You have been awarded ₦${loanAmount} with a credit point of ${points}
        
        
        `)
    }
    else if (points < 30) {
        popupItem.innerHTML = `
       <p style="color:red"> Dear ${firstNametxt.value} we are sorry to inform you that your request has been denied <br>due to low credit score of ${points}
       
        
       Thank you for banking with us.
       CENTE BANK <i class="fa fa-bank" aria-hidden="true"></i>
       </p>
       <br> <br>
       <button class="btn btn-primary" id="closeBtn">OKAY</button>

        `
        console.log(`
        We are sorry to inform you that your request has been denied with a credit point of ${points}
        `);
    }


    document.getElementById("closeBtn").onclick = function () {
        modal.style.display = "none";
        clearForm()
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        clearForm()
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            clearForm()
        }
    }
    points = 0;
}

