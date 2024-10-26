function downloadResume() {
    const language = document.documentElement.lang || 'is'; 

    const resume = document.querySelector('.resume-container');

    const clone = resume.cloneNode(true);

    const noPrintElements = clone.querySelectorAll('.no-print');
    noPrintElements.forEach(el => el.remove());

    html2pdf().from(clone).set({
        margin: 0.5,
        filename: `Emil_Arnason_CV_${language}.pdf`, 
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).save();
}

function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }
    return age;
}

document.getElementById('download-btn').addEventListener('click', downloadResume);
document.getElementById('age').textContent = calculateAge('1999-11-22');
