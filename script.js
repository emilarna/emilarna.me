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

document.getElementById('download-btn').addEventListener('click', downloadResume);
