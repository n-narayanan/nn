const article_list = document.getElementById("article-list");

fetch('https://9sneha-n.github.io/nnarayanan/content/matters_that_matter/articles.json')
    .then( (response) => {
        console.log("Fetched artcles from server, parsing json" + response);
        return response.json();
    })
    .then((data) => {
        data.forEach(article => {

            let article_div = document.createElement("div");
            article_div.id = article.id;
            article_div.className = "article-div";

            let article_headline = document.createElement("p");
            article_headline.className = "article-headline";
            article_headline.textContent = article.title;
            article_div.appendChild(article_headline);

            let article_date = document.createElement("p");
            article_date.className = "article-subtitle";
            article_date.textContent = article.date;
            article_div.appendChild(article_date);

            let article_subtitle = document.createElement("p");
            article_subtitle.className = "article-subtitle";
            article_subtitle.innerText = article.subtitle;
            article_div.appendChild(article_subtitle);

            let article_read_more = document.createElement("p");
            article_read_more.className = "article-read-more";
            article_read_more.textContent = "Click to copy link to this article";
            article_div.appendChild(article_read_more);

            article_div.onclick = (e, data) => {
                navigator.clipboard.writeText(article.link)
            }
            article_list.appendChild(article_div);
        });
    })
    .catch(err => console.log("Error Thrown fetching articles from server" + err));


