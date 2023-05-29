const slider = document.querySelector("#recommended");
firstImg = slider.querySelectorAll("#recommended ul li")[0];
arrowIcon = document.querySelectorAll("#recommended a i")

arrowIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log(icon);
    })
});


const dragging = (e) => {
    slider.scrollLeft = e.pageX;
    // console.log(e.pageX);
}

slider.addEventListener("mousemove", dragging);