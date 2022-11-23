async function fetchShortUrl() {
    let url = document.getElementById("url").value;

    console.log(url);
    const response = await fetch(`http://3.89.60.199/api/shortUrl`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: `{
            "origUrl": "${url}"
      }`,
    });
    
    response.json().then((data) => {
        if(data.shortUrl) {
            console.log(data.shortUrl);
            document.getElementById('invalid-url').style.display = "none";
            document.getElementById("url-field").value = data.shortUrl;
            document.getElementById("con-url").style.display = "block";
        } else {
            document.getElementById("con-url").style.display = "none";
            document.getElementById('invalid-url').innerText = data;
            document.getElementById('invalid-url').style.display = "block";
            console.log(data);
        }
    });
}


let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
	let input = copyText.querySelector("input.text");
	input.select();
	document.execCommand("copy");
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
});


