    
    document.addEventListener("DOMContentLoaded", function(){
      fetch("assets/JS/news.json")
    .then(response => response.json())
    .then(News => News.filter(a => a.category == "Business"))
    .then(Data => {
      var container = $("#news_container");
      var articleData = ""
      Data.forEach(function(news) {
          articleData += `
<div class="col-md-6 mb-4">
            <div class="card-news text-center">
              <!-- <h2>Golf</h2> -->
              <img src="assets/images/${news.img1}" class="news-image" alt="img">
              <h2>${news.heading}</h2>
              <p class="short-text">${news.des1}</p>
              <a href="" class="btn btn-danger btn-md">Continue Reading</a>
            </div>
          </div>
      `;
      
    });
    container.append(articleData);
    })
   
    })