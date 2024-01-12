document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement){
                const offset = targetElement.offsetTop;
                const windowHeight = window.innerHeight;
                const targetPosition = offset - (windowHeight/2) + (targetElement.offsetHeight/2);

                window.scrollTo({
                    top:targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const downloadButton = document.getElementById('downloadResume');
    
    downloadButton.addEventListener('click', function(){
        const pdfFilePath = 'liam_rogers_resume.pdf'; //file on my pc

        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.download = 'liam_rogers_resume.pdf'; //what the download file name is
        link.target = '_blank' //open in a new tab if i want

        document.body.appendChild(link);
        link.click()
        document.body.removeChild(link);
    });
});
