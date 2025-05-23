$(document).ready(function(){
    $.getJSON("assets/JS/naheel.json", function(data){
        var container = $("#article_container");
        data.forEach(function(article) {
            var articleData = `
  <div class="content">
    <p><strong>By DNBC</strong> |${article.date}</p>
            <h1 class="ms-4 p-3">${article.heading}</h1>
            <div class="save-share-wrapper">
  <button class="icon-btn" title="Save Article">
    <i class="fa-regular fa-bookmark"></i> Save
  </button>

  <div class="dropdown">
    <button class="icon-btn" title="Share Article">
      <i class="fa-solid fa-share-nodes"></i> Share
    </button>
    <div class="dropdown-menu">
      <a href="https://wa.me/?text=Check%20this%20news!" target="_blank">
        <i class="fab fa-whatsapp"></i> WhatsApp
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <i class="fab fa-instagram"></i> Instagram
      </a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=https://example.com" target="_blank">
        <i class="fab fa-facebook"></i> Facebook
      </a>
    </div>
  </div>
</div>



    <img src="assets/images/${article.img1}" alt="Event Image" />

    <p>${article.des1}</p>

    <img src="assets/images/${article.img2}" alt="img" />

    <p>${article.des2}
    </p>


    <div class="map-section">
      <h2>Event Location</h2>
      <iframe 
        src="${article.map}" 
        allowfullscreen=""
        loading="lazy">
      </iframe>
        `;
       ('#article_container').append(articleData);
            
        });
    }).fail(function() {
         $
    ('#article_container').html('<p>Error loading article data.<p>');
    });
   
});