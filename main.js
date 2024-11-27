// Array to store student details
let students = [];

// Function to calculate grade
function calculateGrade(totalScore) {
    if (totalScore >= 70) return "A";
    if (totalScore >= 60) return "B";
    if (totalScore >= 50) return "C";
    if (totalScore >= 45) return "D";
    return "F";
}

// Function to add a student
document.getElementById("addStudent").addEventListener("click", function () {
    if (students.length >= 10) {
        alert("You can only add details for 10 students.");
        return;
    }

    // Get input values
    const matricNo = document.getElementById("matricNo").value.trim();
    const surname = document.getElementById("surname").value.trim().toUpperCase();
    const firstName = document.getElementById("firstName").value.trim().toUpperCase();
    const otherName = document.getElementById("otherName").value.trim().toUpperCase() || "N/A";
    const courses = document.getElementById("courses").value;
    const gender = document.getElementById("gender").value;
    const caScore = parseFloat(document.getElementById("caScore").value);
    const examScore = parseFloat(document.getElementById("examScore").value);

    // Validate scores
    if (caScore < 0 || caScore > 30 || examScore < 0 || examScore > 70) {
        alert("Please enter valid scores within the specified range.");
        return;
    }

    // Calculate total score and grade
    const totalScore = caScore + examScore;
    const grade = calculateGrade(totalScore);

    // Add student to the array
    students.push({
        matricNo,
        surname,
        firstName,
        otherName,
        courses,
        gender,
        caScore,
        examScore,
        totalScore,
        grade,
    });

    // Clear the form for the next entry
    document.getElementById("studentForm").reset();

    alert("Student added successfully!");
});

// Function to display all students' details
document.getElementById("showResults").addEventListener("click", function () {
    if (students.length === 0) {
        alert("No students added yet.");
        return;
    }

    const resultsTableBody = document.getElementById("resultsTableBody");
    resultsTableBody.innerHTML = ""; // Clear previous results

    students.forEach((student) => {
        const row = `
            <tr>
                <td>${student.matricNo}</td>
                <td>${student.surname}</td>
                <td>${student.firstName}</td>
                <td>${student.otherName}</td>
                <td>${student.courses}</td>
                <td>${student.gender}</td>
                <td>${student.caScore}</td>
                <td>${student.examScore}</td>
                <td>${student.totalScore}</td>
                <td>${student.grade}</td>
            </tr>
        `;
        resultsTableBody.innerHTML += row;
    });

    // Show the results section
    document.getElementById("results").classList.remove("hidden");
});
