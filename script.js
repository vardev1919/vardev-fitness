document.getElementById("bmiForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
  
    if (weight > 0 && height > 0) {
      const bmi = weight / (height * height);
      localStorage.setItem("bmiValue", bmi.toFixed(2));
      window.location.href = "bmi-result.html";
    } else {
      document.getElementById("result").innerText = "Please enter valid values.";
    }
  });
  
  window.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("bmi-output");
    const bmi = localStorage.getItem("bmiValue");
  
    if (bmi && output) {
      let category = "";
      const bmiVal = parseFloat(bmi);
  
      if (bmiVal < 18.5) category = "Underweight";
      else if (bmiVal < 24.9) category = "Normal";
      else category = "Overweight/Obese";
  
      output.innerText = `Your BMI is ${bmi} (${category})`;
    }
  });
  