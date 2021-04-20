function getInfo() {
    //GET request
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK")
        .then(response => response.json()) //This promise returns response in JSON format
        .then((data) => sortInfo(data)); /* sortInfo(data) */
}