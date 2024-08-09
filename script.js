function refrain(){
    let words = "";
    words += "We magnify Your name\n";
    words += "Glorify Your name\n";
    words += "Oh God\n";
    return words;
}


function song(){
    let r;
    let Swords = "";

    Swords += ("Glory to Your name\n");
    Swords += ("Glory to Your name\n");
    Swords += ("Glory to Your name\n");
    Swords += ("Forever You are the same\n");
    Swords += ("We worship and adore You\n");
    Swords += ("We bow ourselves before You\n");
    Swords += ("Giving You the glory\n");
    Swords += ("That is due Your name\n");
    Swords += ("Glory to Your name\n");
    Swords += ("Glory to Your name\n");
    Swords += ("Glory to Your name\n");
    Swords += ("Forever You are the same\n");
    Swords += ("We worship and adore You\n");
    Swords += ("We bow ourselves before You\n");
    Swords += ("Giving You the glory\n");
    Swords += ("That is due Your name\n");
    Swords += ("Glory to Your name\n");
    Swords += ("Glory to Your name\n");
    Swords += ("Glory to Your name\n");
    Swords += ("Forever You are the same\n");
    Swords += ("We worship and adore You\n");
    Swords += ("We bow ourselves before You\n");
    Swords += ("Giving You the glory\n");
    Swords += ("That is due Your name\n");
    r = refrain();
    Swords += (r);
    Swords += (r);
    Swords += (r);
    Swords += (r);
    Swords += (r);
    Swords += (r);
    return Swords;
}

song();

let tag = document.getElementById("hisName");

function handleClick() {
    let songLyrics;
    songLyrics = song();
    tag.innerHTML = songLyrics;
}

let button = document.getElementById("showLyrics");
button.addEventListener("click", handleClick);