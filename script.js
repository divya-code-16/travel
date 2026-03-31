function calculate() {
  let place = document.getElementById("place").value;
  let days = Number(document.getElementById("days").value);
  let budget = Number(document.getElementById("budget").value);

  if (!place || days <= 0 || budget <= 0) {
    alert("Please enter valid details!");
    return;
  }

  let daily = budget / days;

  let stay = budget * 0.4;
  let food = budget * 0.25;
  let travel = budget * 0.2;
  let other = budget * 0.15;

  let suggestion = "";

  // Simple destination suggestions
  if (place.toLowerCase() === "goa") {
    suggestion = "💡 Tip: Rent a scooter and choose budget beach stays!";
  } else if (place.toLowerCase() === "ooty") {
    suggestion = "💡 Tip: Book hotels early and use local transport!";
  } else {
    suggestion = "💡 Tip: Plan your expenses wisely and track spending daily.";
  }

  document.getElementById("result").innerHTML = `
    <h2>Trip to ${place}</h2>
    <p>📅 Days: ${days}</p>
    <p>💰 Total Budget: ₹${budget}</p>
    <p><strong>📊 Daily Budget: ₹${daily.toFixed(2)}</strong></p>

    <h3>Breakdown:</h3>
    <ul>
      <li>🏨 Stay: ₹${stay}</li>
      <li>🍔 Food: ₹${food}</li>
      <li>🚕 Travel: ₹${travel}</li>
      <li>🎯 Other: ₹${other}</li>
    </ul>

    <p class="tip">${suggestion}</p>
  `;
}

// Clear input and result
function clearData() {
  document.getElementById("place").value = "";
  document.getElementById("days").value = "";
  document.getElementById("budget").value = "";
  document.getElementById("result").innerHTML = "";
}
