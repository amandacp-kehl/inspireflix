const moviesList = [
  {
    summary:
      "A woman's daunting task to launch a national blitz for NASA, recruiting 8,000 of the nation's best and brightest, including the trailblazing astronauts who became the first Black, Asian and Latino men and women to fly in space.",
    url:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/88438d3e1369a19a6fbf3f39f6034a2dad4a66a1fcc2590e03c2d910405e331a._RI_V_TTW_.jpg"
  },
  {
    summary:
      " The movie follows Ellie Arroway, a SETI scientist who discovers a signal from an alien intelligence that provides plans to create a vehicle to make first contact. This movie not only shows a woman working in scientific fields, but also her role in overcoming cultural, and political obstacles in order to make an impact on the world.",
    url:
      "https://c8.alamy.com/comp/MG8RE2/contact-1997-directed-by-robert-zemeckis-and-starring-jodie-foster-matthew-mcconaughey-and-tom-skerritt-an-alien-radio-message-contains-the-plans-for-a-transportation-device-MG8RE2.jpg"
  },
  {
    summary:
      "The film follows the story of an ambitious Black science prodigy, who uses her prowess and capabilities to create time machines to save her brother who has been killed by a racist police officer. As she tries to alter the events of the past, she will eventually face the perilous consequences of time travel.",
    url: "https://br.web.img2.acsta.net/pictures/19/04/23/09/30/5397825.jpg"
  },
  {
    summary:
      " This movie honours three trailblazing women in science: Katherine Johnson, Mary Jackson, and Dorothy Vaughan, all of whom played critical roles in the creation and success of the United States space programme at NASA, despite the numerous challenges they faced. Journeys in Film offers a free full curriculum for educators that may be used to expand on the film's celebration of science.",
    url: "https://images-na.ssl-images-amazon.com/images/I/91HyCGVD9aL.jpg"
  },
  {
    summary:
      "Radioactive is a 2019 British biographical drama film written by Jack Thorne, directed by Marjane Satrapi and starring Rosamund Pike as Marie Curie. The film is based on the 2010 graphic novel Radioactive: Marie & Pierre Curie: A Tale of Love and Fallout by the American artist Lauren Redniss.",

    url:
      "https://1.bp.blogspot.com/-AQtNl1ZuEZM/YHzNFEgBuqI/AAAAAAAALWM/CCaykK3g2Vs25wqQpX60nYF7ZcKgXwnFACLcBGAsYHQ/s1173/radioatividade.jpg"
  },
  {
    summary:
      "We are all aware that technology can be a helpful instrument for problem resolution and supporting good change. This documentary follows girls aged 10 to 18 from across the world as they compete in the Technovation Challenge in Silicon Valley, attempting to solve problems in their communities through the use of technology and the force of cooperation.",
    url: "https://br.web.img2.acsta.net/pictures/15/12/03/12/33/351670.jpg"
  },
  {
    summary:
      "The Mercury 13 were a group of female pilots who passed the first astronaut tests, but weren't allowed to work for NASA because of their gender.",

    url:
      "https://m.media-amazon.com/images/M/MV5BMTA0NzczNTAzNDdeQTJeQWpwZ15BbWU4MDk0NDc1MjUz._V1_.jpg"
  },
  {
    summary:
      "One of the newest films on the list, this documentary highlights the groundswell of women changing the face of science as it celebrates women pioneers in various scientific fields today while also highlighting the continued challenges faced by women in this field",
    url:
      "https://m.media-amazon.com/images/M/MV5BMzY1NDY1YzEtYWYwYy00OTIxLWE0ODgtZTFjZjZiOGZkNzc3XkEyXkFqcGdeQXVyMjI2ODgzMTY@._V1_.jpg"
  },
  {
    summary:
      "Ada Twist, a young scientist who will explore helping people through scientific discovery, collaboration and friendship.",
    url:
      "https://img.rgstatic.com/content/show/8ac7729d-913c-43be-9dc3-c907912ef877/poster-780.jpg"
  },
  {
    summary:
      "This documentary film by Robin Hauser explores the lack of female and minority software engineers, the reasons for this gap and poses the question: What would society gain from having more minorities and women in tech? Not only does the documentary empower more female and ethnic programmers, the film also features efforts to produce a more diverse programming community. It is also one of the best tech movies that show ways how everyone in the tech community can close this gender gap.",
    url:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/66f5e04b87ad666365f7ffd83b37ec0d8e699d74d537020ce33a85c5ced05595._RI_V_TTW_.jpg"
  },
  {
    summary:
      "Ada Lovelace was a most unlikely computer pioneer. In this film, Dr Hannah Fry tells the story of Ada's remarkable life. Born in the early 19th century Ada was a countess of the realm, a scandalous socialite and an 'enchantress of numbers'",
    url: "https://www.themoviedb.org/t/p/w500/9RecfdBsPqugrvLUgtFUueXzUDl.jpg"
  },
  {
    summary:
      "Top women in tech entrepreneurs share their success stories and offer advice to the next generation on taking the plunge, running a business from scratch, and coping with failure.",
    url:
      "https://m.media-amazon.com/images/M/MV5BOGU2ZmJhNTgtODgzMC00MzdkLWEyNjMtZDc0NGQwNTMxY2E5XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_FMjpg_UX1000_.jpg"
  }
];

const movies = document.querySelector(".movie");

const renderElements = () => {
  movies.innerHTML = "";
  moviesList.forEach(({ summary, url }, i) => {
    movies.innerHTML += `
             <div class="banner">
                    <div class="description">
                        <p>${summary}</p>
                    </div>
                    <img class="movieBanner" src="${url}" alt="MovieBanner">
                </div>`;
  });
}; // render elements is responsable for putting the images and text in the screen. Firts it is declared and after we call it to start working

renderElements();

// Add an image through an input and reload the images in the screen:
function Add() {
  var addMovie = document.getElementById("inputAdd").value;
  var repetitionWarning = document.getElementById("repeatitionWarning");
  var newMovie = document.createElement("img");

  /* In these instructions we are asking the code to analyze the movies list and see if any of the elements is equal the added movie. If it is then the movie won't be added and the warning will appear in the scren)*/

  if (moviesList.includes(addMovie)) {
    repetitionWarning.innerHTML =
      "This movie is already on the list. Please choose a new one!";
  } else {
    moviesList.push(addMovie);
    newMovie.src = addMovie;
    document.body.appendChild(newMovie);
    repetitionWarning.innerHTML = "Thanks, your movie was added to the list.";
  }

  renderElements();
}





/* NEXT CHALLENGE: Create function to add and remove movies

Sketch:

Add an image through an input and reload the images in the screen:
function Add() {
  var addMovie = document.getElementById("inputAdd").value;
  var newMovie = document.createElement("img");
  moviesList.push(addMovie);
  newMovie.src = addMovie;
  document.body.appendChild(newMovie);
}
*/
