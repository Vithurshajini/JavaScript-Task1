const textBoxValues = [];
let sortedValues = [];
const word = ["Hello"];

const fd={
storeAndDisplay:()=> {
    const textInput = document.getElementById("textInput");
    const newText = textInput.value.trim();

    if (newText) {
        word.push(newText);
        fd.displayOutput();
    }
},
displayOutput:()=> {
    let output = "Array: ";
    for (let x of word) {
        output += x + " ";
    }
    output += "<br>Concatenated: " + word.join(" ");
    
    document.getElementById("output").innerHTML = output;
},
displayTextBoxValues:()=> {
    fd.sortTextBoxValues();
    var displayDiv = document.getElementById("storedData"); 
    displayDiv.textContent = "Stored Array: " + JSON.stringify(textBoxValues);
},
displaySortedValues:()=> {
    var sortedDiv = document.getElementById("sortedData");
    sortedDiv.textContent = "Sorted Array: " + JSON.stringify(sortedValues);
},
addToTextBoxValues:()=> {
    var textBox = document.getElementById("textBox");
    var textBoxValue = textBox.value.trim();

    if (textBoxValue) {
        textBoxValues.push(textBoxValue);
        sortedValues.push(textBoxValue); 
        console.log("Added value: ", textBoxValue);
        textBox.value = ""; 
        fd.displayTextBoxValues(); 
        fd.displaySortedValues(); 
    }
},
    sortTextBoxValues:()=> {
    sortedValues = textBoxValues.slice().sort(function(a, b) {
        return a.localeCompare(b);
    });
},
    filterArrayByLetters: () => {
        var filterTextBox = document.getElementById("filterTextBox").value.trim().toLowerCase();
    
        var filteredArray = textBoxValues.filter(function(value) {
            return value.toLowerCase().includes(filterTextBox);
        });
    
        fd.displayFilteredArray(filteredArray); 
    },    
    displayFilteredArray(filteredArray) {
    var filteredDiv = document.getElementById("filteredResults");
    filteredDiv.textContent = "Filtered Array: " + JSON.stringify(filteredArray);
},
    validateInputFormat: () => {
        var formatTextBox = document.getElementById("formatTextBox");
        var formatText = formatTextBox.value.trim();

        console.log("Input Text:", formatText);

        let pattern = /[a-z][A-Z][a-z][0-9][0-9][0-9][0-9]@#[0-9][0-9][0-9]/;

        if (pattern.test(formatText)) {
            fg.displayFormattedText("Valid Format: " + formatText);
        } else {
            fg.displayFormattedText("Invalid Format. Please enter the correct format.");
        }
    },
    displayFormattedText: (text) => {
        var validationResult = document.getElementById("validationResult");
        validationResult.textContent = text;
    },
formatDate:(date)=> {
    if (!isNaN(date.getTime())) { 
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    } else {
        return ""; 
    }
},
formatDates:(date)=> {
    if (!isNaN(date.getTime())) { 
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}.${month}.${day}`;
    } else {
        return ""; 
    }
},
handleDateSelection:()=> {
    const dateInput = document.getElementById('dateInput');
    const selectedDate = new Date(dateInput.value);

    const formattedDate1 = fj.formatDate(selectedDate);
    const formattedDate2 = fj.formatDates(selectedDate);

    document.getElementById('format1').textContent = formattedDate1;
    document.getElementById('format2').textContent = formattedDate2;
}
,
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dateInput').addEventListener('change', fd.handleDateSelection);
    fd.handleDateSelection();
}),
calculateGrade:()=> {
    const marks = parseFloat(document.getElementById("marks").value);
    let grade = '';

    if (marks) {
        if (marks >= 80) {
            grade = 'A';
        } else if (marks >= 70) {
            grade = 'B';
        } else if (marks >= 60) {
            grade = 'C';
        } else if (marks >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        document.getElementById("Grade").innerHTML =`
            <p>Marks: ${marks}</p>
            <p>Grade: ${grade}</p>`;
    } 
    else { 
        alert('Please enter valid marks.');
    }
}

};
