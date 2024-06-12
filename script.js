const characters =[
  {
    "id": 1,
    "name": "Luke Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 2,
    "name": "C-3PO",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    "homeworld": "tatooine"
  },
  {
    "id": 3,
    "name": "R2-D2",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    "homeworld": "naboo"
  },
  {
    "id": 4,
    "name": "Darth Vader",
    "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 5,
    "name": "Leia Organa",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    "homeworld": "alderaan"
  },
  {
    "id": 6,
    "name": "Owen Lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 7,
    "name": "Beru Whitesun lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 8,
    "name": "R5-D4",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    "homeworld": "tatooine"
  },
  {
    "id": 9,
    "name": "Biggs Darklighter",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    "homeworld": "tatooine"
  },
  {
    "id": 10,
    "name": "Obi-Wan Kenobi",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    "homeworld": "stewjon"
  },
  {
    "id": 11,
    "name": "Anakin Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    "homeworld": "tatooine"
  },
  {
    "id": 12,
    "name": "Wilhuff Tarkin",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    "homeworld": "eriadu"
  },
  {
    "id": 13,
    "name": "Chewbacca",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    "homeworld": "kashyyyk"
  },
  {
    "id": 14,
    "name": "Han Solo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    "homeworld": "corellia"
  },
  {
    "id": 15,
    "name": "Greedo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    "homeworld": "Rodia"
  },
  {
    "id": 16,
    "name": "Jabba Desilijic Tiure",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    "homeworld": "tatooine"
  },
  {
    "id": 18,
    "name": "Wedge Antilles",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    "homeworld": "corellia"
  },
  {
    "id": 19,
    "name": "Jek Tono Porkins",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    "homeworld": "bestine"
  },
  {
    "id": 20,
    "name": "Yoda",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
  },
  {
    "id": 21,
    "name": "Palpatine",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    "homeworld": "naboo"
  }
    ]

    const homeworldsRaw=characters.map(function(character)  {
    if(typeof character.homeworld === 'string'){
      return character.homeworld
    }
    else{
      return character.homeworld="other"
    }
  })
console.log(homeworldsRaw);//kontrol ettim doğru

const homeworldsUnique = [... new Set(homeworldsRaw)]
console.log(homeworldsUnique);//kontrol ettim doğru


const homeworldsLowercase = homeworldsUnique.map(function(char) {
  return char.toLowerCase();
});
console.log(homeworldsLowercase);//kontrol ettim doğru

const homeworlds = homeworldsLowercase;


function radiocharacters() {
  const radioMainDiv = document.getElementById('homeworlds-filter-container'); 
  for (let i = 0; i < homeworlds.length; i++) {   
    const homeworldChar = homeworlds[i];
    const radioString = `         
      <div class="form-check">
        <input class="form-check-input" type="radio" name="homeworld" id="homeworld-${homeworldChar}" value="${homeworldChar}">
        <label class="form-check-label" for="homeworld-${homeworldChar}">${homeworldChar}</label>
      </div>
    `;
    const newRadioDiv = document.createElement('div');
    newRadioDiv.classList.add('radiorow');
    newRadioDiv.innerHTML = radioString;
    radioMainDiv.appendChild(newRadioDiv);
  }

  document.querySelectorAll('input[name="homeworld"]').forEach((radio) => {
    radio.addEventListener('change', function() {
      const selectedHomeworld = this.value;
      filterCharacters(selectedHomeworld);
    });
  });
}

function filterCharacters(homeworld) {
  const filteredCharacters = characters.filter(function(character) {
    return character.homeworld === homeworld;
  });
  displayCharacters(filteredCharacters);
}

function displayCharacters(characters) {
  const container = document.getElementById('filtered-characters-container');
  container.innerHTML = ''; 

  if (characters.length === 0) {
    container.innerHTML = 'Homeworld u yoktur.</p>';
  } else {
    characters.forEach(character => {
      const htmlString = `
        <div class="card">
          <img src="${character.pic}" alt="Card Image">
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">${character.homeworld}</p>
          </div>
        </div>
      `;
      const newDiv = document.createElement('div');
      newDiv.classList.add('row');
      newDiv.innerHTML = htmlString;
      container.appendChild(newDiv);
    });
  }
}

radiocharacters();

  //   function renderCharacters(button) {
  //     button.innerHTML = "Karakterleri Gizle";
  //     button.classList.add('red');
  //     const mainDiv = document.getElementById('mainDiv'); 
  //     for (let i = 0; i < characters.length; i++) {
  //         const char = characters[i];
  //         const htmlString = `
  //             <div class="card">
  //                 <img src="${char.pic}" alt="Card Image">
  //                 <div class="card-body">
  //                     <h1 class="card-title">${char.name}</h1>
  //                     <h2 class="card-text">${char.homeworld}</h2>
  //                 </div>
  //             </div>
  //         `;
  //         const newDiv = document.createElement('div');
  //         newDiv.classList.add('row');
  //         newDiv.innerHTML = htmlString;
  //         mainDiv.appendChild(newDiv);
  //     }
  //     button.onclick = function() {
  //         mainDiv.innerHTML = ''; 
  //         button.innerHTML = "Karakterleri Göster";
  //         button.classList.remove('red');
  //         button.onclick = function() { renderCharacters(button); }; 
  //     };
  // }