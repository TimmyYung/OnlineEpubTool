var book = ePub("../epub/pg100-images-3.epub");
var rendition = book.renderTo("area", {width: 1200, height: 800});

rendition.themes.default({
  body: {
    "background-color": "#2e3440",
    "color": "#eceff4 !important"
  },
  p: {
    "font-size": "large !important"
  }
});

rendition.themes.register("Nord",
{
    "body": { "background-color": "#2e3440", "color": "#eceff4 !important"},
    "p": {"font-size": "large !important"}
});

rendition.themes.register("Light",
{
    "body": { "background-color": "#eceff4", "color": "black !important"},
    "p": {"font-size": "large !important"}
});

rendition.themes.register("Dark",
{
    "body": { "background-color": "#202324" , "color": "white !important"},
    "p": {"font-size": "large !important"}
});

function changeTheme() {
    const themeSelect = document.getElementById('theme');
    const selectedTheme = themeSelect.value;

    if (selectedTheme === 'Nord') {
        document.body.style.backgroundColor = '#2e3440';
        rendition.themes.select("Nord");
    } else if (selectedTheme === 'Light') {
        document.body.style.backgroundColor = '#eceff4';
        rendition.themes.select("Light");
    }
    else if (selectedTheme === 'Dark') {
        document.body.style.backgroundColor = '#202324';
        rendition.themes.select("Dark");
    }
}

var displayed = rendition.display();
book.renderTo("area");


function Next(){
    rendition.next();
}
        
function Prev(){
    rendition.prev();
}

document.addEventListener("keydown", function(event) {
if (event.key === "ArrowLeft" || event.key === "a") {
    Prev();
} else if (event.key === "ArrowRight" || event.key === "d") {
    Next();
}
});