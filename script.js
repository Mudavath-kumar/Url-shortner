const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');



    shortBtn.addEventListener('click', () => {
    const longurl = document.getElementById('longurl').value; // Corrected 'longUrl' ID to 'longurl'
    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longurl)}`;

    const shortUrlTextarea = document.getElementById('shortUrl'); // ID is correct here
    fetch(apiUrl)
        .then(response => response.text())
        .then(data => shortUrlTextarea.value = data)
        .catch(error => {
            console.error(error);
            shortUrlTextarea.value = "Error: unable to shorten URL";
        });
});

reloadBtn.addEventListener('click', () => location.reload());




