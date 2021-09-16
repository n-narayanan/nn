const photograph_list = document.getElementById("photograph-list");

fetch('https://9sneha-n.github.io/nnarayanan/content/photography/photography.json')
    .then( (response) => {
        console.log("Fetched artcles from server, parsing json" + response);
        return response.json();
    })
    .then((data) => {
        data.forEach(photograph => {

            let photograph_div = document.createElement("div");
            photograph_div.className = "photo-div";


            let phtograph_img = document.createElement("img");
            phtograph_img.className = "photo-img";
            phtograph_img.src = photograph.image;
            photograph_div.appendChild(phtograph_img);

            photograph_list.appendChild(photograph_div);
        });
    })
    .catch(err => console.log("Error Thrown fetching photographs from server" + err));


