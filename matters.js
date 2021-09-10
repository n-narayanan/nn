const article_list = document.getElementById("article-list");

fetch('https://9sneha-n.github.io/nnarayanan/content/matters_that_matter/articles.json')
    .then( (response) => {
        console.log("Fetched artcles from server, parsing json" + response);
        return response.json();
    })
    .then((data) => {
        data.forEach(article => {

            let article_div = document.createElement("div");
            article_div.className = "article-div";

            let article_headline = document.createElement("p");
            article_headline.className = "article-headline";
            if (article.title.length) {
                article_headline.textContent = article.title;
                article_div.appendChild(article_headline);
            }

            let article_subtitle = document.createElement("p");
            article_subtitle.className = "article-subtitle";
            article_subtitle.textContent = article.subtitle;
            article_div.appendChild(article_subtitle);

            article_list.appendChild(article_div);
        });
    })
    .catch(err => console.log("Error Thrown fetching articles from server" + err));


