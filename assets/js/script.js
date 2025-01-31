fetch("https://cataas.com/")
.then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
}
    return response.blob();
})

.then(data => console.log(data))
.catch(error => console.error(error));