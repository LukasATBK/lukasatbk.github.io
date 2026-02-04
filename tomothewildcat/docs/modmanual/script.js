
const navbarHTML = `
<nav class="sidebar">
    <img class="logo" src="img/ModLogo.png">
    <a href="index.html">Home</a>
    <a href="requirements.html">Requirements</a>
    <a href="startingscreen.html">Starting Screen Guide</a>
    <a href="creatinganewmod.html">Creating or opening mod</a>
    <a href="modcreatorscreen.html">Mod Creator Screen Guide</a>
    <a href="makingamod.html">Making a mod</a>
    <ul><a href="makingamod.html#start">Start</a></ul>
    <ul><a href="makingamod.html#files">Your mod's files</a></ul>
    <ul><a href="makingamod.html#aseprite">Setting up Aseprite</a></ul>
    <ul><a href="makingamod.html#sprites">Editing Sprites</a></ul>
    <ul><a href="makingamod.html#export">Exporting Sprites</a></ul>
    <ul><a href="makingamod.html#saving">Saving and testing</a></ul>
    <a href="tipsntricks.html">Tips and tricks</a>
</nav>
`;
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".sidebar a");
    let currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});