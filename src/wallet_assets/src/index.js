import { wallet } from "../../declarations/wallet";

window.addEventListener("load", async function() {
  try {
    const currentAmount = await wallet.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
  } catch (error) {
    console.error("Error checking balance:", error);
  }
});

document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault();
  
  const button = event.target.querySelector("#submit-btn");
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  try {
    if (!isNaN(inputAmount) && inputAmount > 0) {
      await wallet.topUp(inputAmount);
    }

    if (!isNaN(outputAmount) && outputAmount > 0) {
      await wallet.withdraw(outputAmount);
    }

    // Uncomment the following line if the 'compound' method exists in your Motoko code
    // await wallet.compound();

    const currentAmount = await wallet.checkBalance();
    document.getElementById("value").innerText = (Math.round(currentAmount * 100) / 100).toFixed(2);

    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";
  } catch (error) {
    console.error("Error processing transaction:", error);
  } finally {
    button.removeAttribute("disabled");
  }
});

async function update() {
  try {
    const currentAmount = await wallet.checkBalance();
    document.getElementById("value").innerText = (Math.round(currentAmount * 100) / 100).toFixed(2);
  } catch (error) {
    console.error("Error updating balance:", error);
  }
}
