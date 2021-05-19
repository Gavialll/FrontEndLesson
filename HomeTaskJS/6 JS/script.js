let search = document.querySelector('#search');
let btn = document.querySelector('#button');


btn.addEventListener('click', function () {
    const parent = document.querySelector('.body');
   
    while (parent.firstChild) {
        parent.firstChild.remove();
    }

    let nameFilm = document.getElementById("search").value;;

    const url = `http://www.omdbapi.com/?s="${nameFilm}"&apikey=f3dd7846`;
    
    goToScreen(url);
});



async function getServer(url) {
    let response = await fetch(url);
    let result = await response.json();
    return result;
}

async function goToScreen(url) {
    let film = await getServer(url);
    let arrFilm = film.Search;

    arrFilm.forEach(film => {
        console.log(film.Title);

        let body = document.querySelector('.body');

        let div = document.createElement('div');
        div.style.fontSize = "1em";
        div.style.borderRadius = '4px';
        div.style.width = "200px";
        div.style.height = "max-content";
        div.style.margin = "5px";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.flexDirection = "column";
        div.style.border = "1px solid gray";
        div.classList.add('body_hide');

        setTimeout(function () {
            div.classList.add('body_visible');
        }, 200);


        let title = document.createElement('span');
        title.style.backgroundColor = "rgb(220,220,220)";
        title.style.padding = '10px';
        title.style.height = '40px';
        title.style.display = 'flex';
        title.style.justifyContent = 'space-evenly';
        title.style.alignItems = 'center';

        let year = document.createElement('p');
        year.style.display = 'flex';
        year.style.justifyContent = 'center';
        
        let poster = document.createElement('IMG');
        poster.src = film.Poster;

        let bt = document.createElement('button');
        bt.id = 'btn';
        bt.classList.add('btn');

        title.innerHTML = film.Title;
        year.innerHTML = film.Year;
        bt.innerText = 'More details';

        div.append(poster, title, year, bt);

        body.append(div);

    });
}



