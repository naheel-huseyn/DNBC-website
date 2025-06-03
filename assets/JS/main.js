
document.addEventListener("DOMContentLoaded", function() {

    const currentCity = window.location.pathname
        .split('/').pop()          
        .replace('.html', '')     
        .toLowerCase();            
   
    fetch("assets/JS/news.json")
        .then(response => response.json())
        .then(allNews => {
        
            const cityNews = allNews.filter(news => 
                news.city.toLowerCase() === currentCity
            );
            
           
            renderCards(cityNews);
        })
        .catch(error => console.error("Error:", error));
});

function renderCards(newsList) {
    const container = document.getElementById("news_container");
    if (!container) return;

    let html = "";
    newsList.forEach(news => {
        html += `
            <div class="col-md-6 mb-4">
                <div class="card shadow-sm">
                    <div class="card-news text-center">
                       <h3 "mt-3">${news.category}</h3>
                        <img src="assets/images/${news.img1}" class="news-image w-100">
                        <h4 class="mt-3">${news.heading}</h4>
                        <p class="short-text">${news.des1?.substring(0, 150) || "No description"}...</p>
                        <a href="article.html?id=${news.id}" class="btn btn-danger">Fade Into More</a>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}