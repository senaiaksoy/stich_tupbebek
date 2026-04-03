function r(){document.querySelectorAll(".video-container").forEach(e=>{const t=e.querySelector(".play-button");t&&t.addEventListener("click",()=>{const o=e.dataset.videoId;e.innerHTML=`
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/${o}?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameborder="0"
            allowfullscreen>
          </iframe>
        `})})}r();document.addEventListener("astro:after-swap",r);
