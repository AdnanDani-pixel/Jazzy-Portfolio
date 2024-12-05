function calculateAge(){
    var dob = new Date(document.getElementById("dob").value);
    var now = new Date()

    var ageInYears = now.getFullYear() - dob.getFullYear();
    var ageInMonths = (now.getMonth()- dob.getMonth() + 12) %12;
    var ageInWeeks = Math.floor((now - dob) / (1000 * 60 * 60 * 24 * 7));
    var ageInDays = Math.floor((now - dob) / (1000 * 60 * 60 * 24));
    var ageInHours = Math.floor((now - dob) / (1000 * 60 * 60));
    var ageInMinutes = Math.floor((now - dob) / (1000 * 60));
    var ageInSeconds = Math.floor((now - dob) / (1000));
    
    var results = document.querySelector(".results");
    results.innerHTML = `
            <p>Age in Years : ${ageInYears} </p>
            <p>Age in Months : ${ageInMonths} </p>
            <p>Age in Weeks : ${ageInWeeks} </p>
            <p>Age in Days : ${ageInDays} </p>
            <p>Age in Hours : ${ageInHours} </p>
            <p>Age in Minutes : ${ageInMinutes} </p>
            <p>Age in Seconds : ${ageInSeconds} </p>
    `
 }


// function calculateAge() {
//     var dob = new Date(document.getElementById('dob').value);
//     var now = new Date();

//     var ageInYears = now.getFullYear() - dob.getFullYear();
//     var ageInMonths = (now.getMonth() - dob.getMonth() + 12) % 12;
//     var ageInWeeks = Math.floor((now - dob) / (1000 * 60 * 60 * 24 * 7));
//     var ageInDays = Math.floor((now - dob) / (1000 * 60 * 60 * 24));
//     var ageInHours = Math.floor((now - dob) / (1000 * 60 * 60));
//     var ageInMinutes = Math.floor((now - dob) / (1000 * 60));
//     var ageInSeconds = Math.floor((now - dob) / 1000);

//     var results = document.getElementById('results');
//     results.innerHTML = `
//         <p>Age in Years: ${ageInYears}</p>
//         <p>Age in Months: ${ageInMonths}</p>
//         <p>Age in Weeks: ${ageInWeeks}</p>
//         <p>Age in Days: ${ageInDays}</p>
//         <p>Age in Hours: ${ageInHours}</p>
//         <p>Age in Minutes: ${ageInMinutes}</p>
//         <p>Age in Seconds: ${ageInSeconds}</p>
//     `;
// }
