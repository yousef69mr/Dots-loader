const loader = document.querySelector('.container');

loader.setAttribute("style", `height:${window.innerHeight}px`);

window.addEventListener('resize', () => {
    loader.setAttribute("style", `height:${window.innerHeight}px`);
});