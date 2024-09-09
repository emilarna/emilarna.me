function downloadResume() {
    // Detect the language from the <html> lang attribute
    const language = document.documentElement.lang || 'is'; // Default to English if not specified

    // Reference the resume container
    const resume = document.querySelector('.resume-container');

    // Clone the resume content
    const clone = resume.cloneNode(true);

    // Remove elements with the .no-print class in the cloned content
    const noPrintElements = clone.querySelectorAll('.no-print');
    noPrintElements.forEach(el => el.remove());

    // Generate the PDF with the detected language in the filename
    html2pdf().from(clone).set({
        margin: 0.5,
        filename: `Emil_Arnason_CV_${language}.pdf`, // Dynamic filename with language
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).save();
}

// Add an event listener to the download button
document.getElementById('download-btn').addEventListener('click', downloadResume);
