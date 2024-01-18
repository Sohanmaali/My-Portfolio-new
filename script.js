// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// =============Form Validation===============
function checkValidation() {

}
function userName() {
     let userName = document.querySelectorAll("#userName");

     console.log(userName);
}

// ==========Text delete Animation============
const txtFull = "Sohan Maali"; //the text goes here
const txtArr = txtFull.split("");

function writeOut(txtArr, curChar = 0) {
     const randomTime = Math.random() * 0.5;
     setTimeout(
          () => {
               const el = document.getElementById("text");
               let elTxt = el.innerHTML;
               elTxt += txtArr[curChar];
               el.innerHTML = elTxt;
               //check if next iteration is out of range
               if (curChar + 1 == txtArr.length) {
                    return deleteOut(txtArr, txtArr.length);
               }
               return writeOut(txtArr, curChar + 1);
          },

          randomTime * 1000
     );
}
function deleteOut(txtArr, curChar = 0) {
     const randomTime = Math.random() * 0.5;
     setTimeout(
          () => {
               const el = document.getElementById("text");
               let elTxt = el.innerHTML;
               //remove
               const elTxtArr = elTxt.split("");
               const elTxtArrLen = elTxtArr.length;
               console.log(elTxtArr.length - 1);
               const newElTxt = elTxtArr.splice(0, curChar - 1).join("");
               el.innerHTML = newElTxt;
               if (elTxtArrLen == 0) {
                    return writeOut(txtArr, 0);
               }
               return deleteOut(txtArr, elTxtArrLen - 1);
          },

          randomTime * 1000
     );
     return;
}
writeOut(txtArr);


// ==========Text delete Animation End============