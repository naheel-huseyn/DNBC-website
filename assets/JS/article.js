
document.addEventListener("DOMContentLoaded", function() {
  
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));

    // JSON se data fetch karo
    fetch("assets/JS/news.json")
        .then(response => response.json())
        .then(articles => {
           
            const article = articles.find(a => a.id === articleId);
            if (article) {
                renderArticle(article); 
            }
        });
});

function renderArticle(article) {
   
    document.querySelector(".content h1").textContent = article.city;
    document.querySelector(".content p strong").textContent = "By DNBC";
    document.querySelector(".content p").innerHTML = `By <strong>DNBC</strong> | ${article.date}`;
    
 
    document.querySelector(".content img:nth-of-type(1)").src = `assets/images/${article.img1}`;
    document.querySelector(".content img:nth-of-type(2)").src = `assets/images/${article.img2}`;
    document.querySelector(".content p:nth-of-type(2)").textContent = article.des1;
    document.querySelector(".content p:nth-of-type(3)").textContent = article.des2;
    document.querySelector(".map-section iframe").src = article.map;
}