const article_list = document.getElementById("article-list");

fetch('https://9sneha-n.github.io/nnarayanan/articles/articles.json')
    .then( (response) => {
        console.log("Fetched artcles from server, parsing json" + response);
        return response.json();
    })
    .then((data) => {
        data.forEach(article => {
 
            let article_img = document.createElement("img");
            article_img.alt = "article image";
            article_img.className = "article-img";
            article_img.src = article.image;

            let article_image = document.createElement("div");
            article_image.className = "article-image";
            article_image.appendChild(article_img);

            let article_div = document.createElement("div");
            article_div.className = "article-div";
            
            let article_content = document.createElement("div");
            article_content.className = "article-content";

            let article_headline = document.createElement("h1");
            article_headline.className = "article-headline";
            article_headline.textContent = article.title;

            let article_subtitle = document.createElement("p");
            article_subtitle.className = "article-subtitle";
            article_subtitle.textContent = article.subtitle;

            article_content.appendChild(article_headline);
            article_content.appendChild(article_subtitle);

            article_div.appendChild(article_image);
            article_div.appendChild(article_content);

            article_div.onclick = (e, data) => {
                window.open(article.link);
            }

            article_list.appendChild(article_div);
        });
    })
    .catch(err => console.log("Error Thrown fetching articles from server" + err));


