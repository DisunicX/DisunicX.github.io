
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=b52980c6fb1741799d2327e9e39da794`, true);
xhr.open('GET', `https://disunicx.github.io/newssss.json`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let neware = "";
        articles.forEach(function(element) {
            // console.log(element, index)
            let news = `<div class="main">
                        <a href="${element["url"]}">
                            <img src="${element["urlToImage"]}" alt="The server is unable to capture this image"></img>
                            <p>${element["title"]}</p>
                        </a>
                        </div>
                        `;
            neware += news;
        });

        newsAccordion.innerHTML = neware;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()
