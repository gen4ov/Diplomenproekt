document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        const formData = new FormData(form);

        
        fetch("submit_contacts.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                if (data.includes("Съобщението е изпратено успешно!")) {
                    alert("Съобщението е изпратено успешно!");
                    form.reset(); 
                } else {
                    alert("Съобщението не е изпратено. Моля, опитайте отново.");
                }
            })
            .catch((error) => {
                alert("An error occurred: " + error.message);
            })
            .finally(() => {
                
                form.reset();
            });
    });
});