document.addEventListener('DOMContentLoaded', function () {
  const ervaringen15 = JSON.parse(localStorage.getItem('ervaringen15')) || [];
  const emotieTekstElement15 = document.querySelector('#emotietekstp15');
  const emotieTekstElementtekst15 = document.querySelector('.emotietekst15');
  const ervaringTekstElementtekst15 = document.querySelector('.ervaringtekst15');
  const storedEmotie15 = localStorage.getItem('emotie15');
  const storedErvaring15 = localStorage.getItem('ervaring15');

  
  if (storedEmotie15 && emotieTekstElement15) {
    emotieTekstElement15.textContent = storedEmotie15;
    emotieTekstElementtekst15.style.display = 'block';
  }

  if (storedErvaring15 && ervaringTekstElementtekst15) {
    ervaringTekstElementtekst15.textContent = storedErvaring15;
    ervaringTekstElementtekst15.style.display = 'block';
  }


  ervaringen15.forEach(item => {
    voegErvaringToeAanPagina(item.emotie15, item.ervaring15);
  });

  const reactielijstContainer15 = document.querySelector('#reactieLijst15');
  const reacties15 = JSON.parse(localStorage.getItem('reacties15')) || [];

  reacties15.forEach(item => {
    voegReactieToeAanPagina(item.naam15, item.reactie15);
  });
});


const emotieDiv = document.querySelector('.emotie15'); 
const ervaringDiv = document.querySelector('.ervaring15');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam15');
const reactieDiv = document.querySelector('.reactie15');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst15 = document.querySelector('.ervaringtekst15');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput15 = document.querySelector('#emotieinput15');
  const ervaringInput15 = document.querySelector('#ervaringinput15');
  const emotieTekstElement15 = document.querySelector('#emotietekstp15');
  const emotieTekstElementtekst15 = document.querySelector('.emotietekst15');
  const ervaringTekstElement15 = document.querySelector('#ervaringtekstp15'); 

  if (emotieInput15.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput15.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie15 = emotieInput15.value.trim();
  const ervaring15 = ervaringInput15.value.trim();

  
  
 
  if (emotieTekstElement15) {
    emotieTekstElement15.textContent = emotie15;
    emotieTekstElementtekst15.style.display = 'block'; 
  }


  if (ervaringTekstElement15) {
    ervaringTekstElement15.textContent = ervaring15;
    ervaringTekstElement15.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie15', emotie15);


  localStorage.setItem('ervaring15', ervaring15);

  const ervaringen15 = JSON.parse(localStorage.getItem('ervaringen15')) || [];
  ervaringen15.push({ emotie15, ervaring15 });
  localStorage.setItem('ervaringen15', JSON.stringify(ervaringen15));

  voegErvaringToeAanPagina(emotie15, ervaring15);

  emotieInput15.value = '';
  ervaringInput15.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput15 = document.querySelector('#naaminput15');
  const reactieInput15 = document.querySelector('#reactieinput15');

  if (naamInput15.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput15.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam15 = naamInput15.value.trim();
  const reactie15 = reactieInput15.value.trim();

  const reacties15 = JSON.parse(localStorage.getItem('reacties15')) || [];
  reacties15.push({ naam15, reactie15 });
  localStorage.setItem('reacties15', JSON.stringify(reacties15));

  voegReactieToeAanPagina(naam15, reactie15);

  naamInput15.value = '';
  reactieInput15.value = '';
});


function voegErvaringToeAanPagina(emotie15, ervaring15) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst15.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer15 = document.querySelector('#reactieLijst15');

  const container = document.createElement('div');
  container.classList.add('reactietekst15');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer15.appendChild(container);
  reactielijstContainer15.style.display = 'flex';
}

