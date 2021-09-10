const article_list = document.getElementById("published-list");

if ( window.location.href.includes('#photography') || 
    window.location.href.includes('#matters-that-matter') || 
    window.location.href.includes('#published-articles') ) {
        const root_container = document.getElementById('root-container');
        root_container.style.opacity = 1;
        root_container.style.animation = 'none';
        const loading_animation = document.getElementById('loading_animation');
        loading_animation.style.zIndex = -1;
        loading_animation.style.animation = 'none';
        document.getElementById('animation-line-1').style.animation = 'none';
        document.getElementById('animation-line-2').style.animation = 'none';
    } 

fetch('https://9sneha-n.github.io/nnarayanan/content/published_articles/published_articles.json')
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

            let article_headline = document.createElement("p");
            article_headline.className = "article-headline";
            article_headline.textContent = article.title;

            let article_subtitle = document.createElement("p");
            article_subtitle.className = "article-subtitle";
            article_subtitle.textContent = article.subtitle;

            let article_read_more = document.createElement("p");
            article_read_more.className = "article-read-more";
            article_read_more.textContent = "Click to read full story";

            article_content.appendChild(article_headline);
            article_content.appendChild(article_subtitle);
            article_content.appendChild(article_read_more);

            article_div.appendChild(article_image);
            article_div.appendChild(article_content);

            article_div.onclick = (e, data) => {
                window.open(article.link);
            }

            article_list.appendChild(article_div);
        });
    })
    .catch(err => console.log("Error Thrown fetching articles from server" + err));


