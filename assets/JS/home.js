  document.addEventListener("DOMContentLoaded", function(){
      fetch("assets/JS/news.json")
    .then(response => response.json())
    .then(News => News.filter(a => a.category == ""))
    .then(Data => {
      var container = $("#news_container");
      var articleData = ""
      Data.forEach(function(news) {
          articleData += `
  <div class="container my-5">
    <div class="row justify-content-center">
   <!-- News 1 -->
  <div class="card mb-4 shadow-sm">
    <div class="row g-0 h-100">
      
      <!-- Image Column -->
      <div class="col-md-6">
        <img src="assets/images/${news.img1}" style="width: 100%;" class="img-fluid h-100 rounded" alt="Youm-e-Tashakur">
      </div>
      
      <!-- Text Column -->
      <div class="col-md-6">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title mb-3">${news.heading}</h5>
            <p class="card-text short-text">${news.des1}</p>
          </div>
          <div class="text-end mt-3">
            <a href="article.html?id=${news.id}" class="btn btn-danger">Fade Into More</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
      `;
      
    });
    container.append(articleData);
    })
   
    });