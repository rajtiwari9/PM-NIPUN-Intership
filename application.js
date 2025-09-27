// Student Application Form Submit
document.getElementById("applicationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const college = document.getElementById("college").value;
  const tenthMarks = document.getElementById("tenthMarks").value;
  const twelfthMarks = document.getElementById("twelfthMarks").value;
  const cgpa = document.getElementById("cgpa").value;
  const skills = document.getElementById("skills").value;
  const preference = document.getElementById("preference").value;

  // Add row in table
  const table = document.getElementById("resultsTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${gender}</td>
    <td>${college}</td>
    <td>${tenthMarks}%</td>
    <td>${twelfthMarks}%</td>
    <td>${cgpa}</td>
    <td>${skills}</td>
    <td>${preference}</td>
  `;

  // Save data for submitted.html
  const studentData = { name, gender, college, tenthMarks, twelfthMarks, cgpa, skills, preference };
  localStorage.setItem("studentData", JSON.stringify(studentData));

  // Reset form
  document.getElementById("applicationForm").reset();

  // Show Proceed button
  document.getElementById("proceedBtn").style.display = "inline-block";
});

// Clear Results
document.getElementById("clearResultsBtn").addEventListener("click", function() {
  document.querySelector("#resultsTable tbody").innerHTML = "";
  document.getElementById("proceedBtn").style.display = "none";
  localStorage.removeItem("studentData");
});

// Proceed Button → Next Page
document.getElementById("proceedBtn").addEventListener("click", function() {
  window.location.href = "submitted.html";
});
