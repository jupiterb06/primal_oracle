document.addEventListener("DOMContentLoaded", () => {
  const lazyVideos = document.querySelectorAll(".lazy-video");

  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // Check if the video is entering the viewport
        if (entry.isIntersecting) {
          const video = entry.target;
          const sources = video.querySelectorAll("source");

          // Move data-src to src for all available formats
          sources.forEach((source) => {
            source.src = source.dataset.src;
          });

          video.load(); // Force the browser to register and trigger the new source
          video.classList.remove("lazy-video");
          videoObserver.unobserve(video); // Stop watching this video once loaded
        }
      });
    });

    lazyVideos.forEach((video) => {
      videoObserver.observe(video);
    });
  }
});