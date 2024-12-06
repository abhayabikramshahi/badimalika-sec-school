document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const hasSeenPreloader = localStorage.getItem("hasSeenPreloader");

    if (!hasSeenPreloader) {
        document.body.classList.add("loading");
        setTimeout(() => {
            preloader.style.display = "none";
            document.body.classList.remove("loading");
            localStorage.setItem("hasSeenPreloader", "true");
        }, 3000); // Show preloader for 3 seconds
    } else {
        preloader.style.display = "none";
    }
});
