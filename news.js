let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://disunicx.github.io/newssss.json`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles)
        let neware = "";
        articles.forEach(function(element) {
            let news = ` <div class="main">
                            <a href="${element["url"]}">  
                                <img src="${element["urlToImage"]}"></img>
                                <p>${element["title"]}</p>
                            </a>
                        </div>
                        `;
            neware += news;
        });
        newsAccordion.innerHTML = neware;
    }
    else {
        console.log("t")
    }
}
xhr.send()