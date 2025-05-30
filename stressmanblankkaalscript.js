document.addEventListener('DOMContentLoaded', function () {
  const ervaringen26 = JSON.parse(localStorage.getItem('ervaringen26')) || [];
  const emotieTekstElement26 = document.querySelector('#emotietekstp26');
  const emotieTekstElementtekst26 = document.querySelector('.emotietekst26');
  const ervaringTekstElementtekst26 = document.querySelector('.ervaringtekst26');
  const storedEmotie26 = localStorage.getItem('emotie26');
  const storedErvaring26 = localStorage.getItem('ervaring26');

  
  if (storedEmotie26 && emotieTekstElement26) {
    emotieTekstElement26.textContent = storedEmotie26;
    emotieTekstElementtekst26.style.display = 'block';
  }

  if (storedErvaring26 && ervaringTekstElementtekst26) {
    ervaringTekstElementtekst26.textContent = storedErvaring26;
    ervaringTekstElementtekst26.style.display = 'block';
  }


  ervaringen26.forEach(item => {
    voegErvaringToeAanPagina(item.emotie26, item.ervaring26);
  });

  const reactielijstContainer26 = document.querySelector('#reactieLijst26');
  const reacties26 = JSON.parse(localStorage.getItem('reacties26')) || [];

  reacties26.forEach(item => {
    voegReactieToeAanPagina(item.naam26, item.reactie26);
  });
});


const emotieDiv = document.querySelector('.emotie26'); 
const ervaringDiv = document.querySelector('.ervaring26');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam26');
const reactieDiv = document.querySelector('.reactie26');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst26 = document.querySelector('.ervaringtekst26');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput26 = document.querySelector('#emotieinput26');
  const ervaringInput26 = document.querySelector('#ervaringinput26');
  const emotieTekstElement26 = document.querySelector('#emotietekstp26');
  const emotieTekstElementtekst26 = document.querySelector('.emotietekst26');
  const ervaringTekstElement26 = document.querySelector('#ervaringtekstp26'); 

  if (emotieInput26.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput26.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie26 = emotieInput26.value.trim();
  const ervaring26 = ervaringInput26.value.trim();

  
  
 
  if (emotieTekstElement26) {
    emotieTekstElement26.textContent = emotie26;
    emotieTekstElementtekst26.style.display = 'block'; 
  }


  if (ervaringTekstElement26) {
    ervaringTekstElement26.textContent = ervaring26;
    ervaringTekstElement26.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie26', emotie26);


  localStorage.setItem('ervaring26', ervaring26);

  const ervaringen26 = JSON.parse(localStorage.getItem('ervaringen26')) || [];
  ervaringen26.push({ emotie26, ervaring26 });
  localStorage.setItem('ervaringen26', JSON.stringify(ervaringen26));

  voegErvaringToeAanPagina(emotie26, ervaring26);

  emotieInput26.value = '';
  ervaringInput26.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput26 = document.querySelector('#naaminput26');
  const reactieInput26 = document.querySelector('#reactieinput26');

  if (naamInput26.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput26.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam26 = naamInput26.value.trim();
  const reactie26 = reactieInput26.value.trim();

  const reacties26 = JSON.parse(localStorage.getItem('reacties26')) || [];
  reacties26.push({ naam26, reactie26 });
  localStorage.setItem('reacties26', JSON.stringify(reacties26));

  voegReactieToeAanPagina(naam26, reactie26);

  naamInput26.value = '';
  reactieInput26.value = '';
});


function voegErvaringToeAanPagina(emotie26, ervaring26) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst26.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer26 = document.querySelector('#reactieLijst26');

  const container = document.createElement('div');
  container.classList.add('reactietekst26');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer26.appendChild(container);
  reactielijstContainer26.style.display = 'flex';
}
