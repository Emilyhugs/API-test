
function getRandomCat() {
    fetch("https://cataas.com/cat?json=true")
        .then(response => {
            if (!response.ok) {
                console.log("Response not ok, throwing error");
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(data => {
            console.log("API response:", data); // Log the entire response
            if (data._id) {
                document.getElementById("cat-pic").src = "https://cataas.com/cat/" + data._id;
                document.getElementById("cat-pic").style.display = 'block';
            } else {
                console.error("URL not found in the response");
            }
        })
        .catch(error => {
            console.error("Error fetching cat image:", error);
        });
}