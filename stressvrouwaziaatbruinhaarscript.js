document.addEventListener('DOMContentLoaded', function () {
  const ervaringen28 = JSON.parse(localStorage.getItem('ervaringen28')) || [];
  const emotieTekstElement28 = document.querySelector('#emotietekstp28');
  const emotieTekstElementtekst28 = document.querySelector('.emotietekst28');
  const ervaringTekstElementtekst28 = document.querySelector('.ervaringtekst28');
  const storedEmotie28 = localStorage.getItem('emotie28');
  const storedErvaring28 = localStorage.getItem('ervaring28');

  
  if (storedEmotie28 && emotieTekstElement28) {
    emotieTekstElement28.textContent = storedEmotie28;
    emotieTekstElementtekst28.style.display = 'block';
  }

  if (storedErvaring28 && ervaringTekstElementtekst28) {
    ervaringTekstElementtekst28.textContent = storedErvaring28;
    ervaringTekstElementtekst28.style.display = 'block';
  }


  ervaringen28.forEach(item => {
    voegErvaringToeAanPagina(item.emotie28, item.ervaring28);
  });

  const reactielijstContainer28 = document.querySelector('#reactieLijst28');
  const reacties28 = JSON.parse(localStorage.getItem('reacties28')) || [];

  reacties28.forEach(item => {
    voegReactieToeAanPagina(item.naam28, item.reactie28);
  });
});


const emotieDiv = document.querySelector('.emotie28'); 
const ervaringDiv = document.querySelector('.ervaring28');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam28');
const reactieDiv = document.querySelector('.reactie28');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst28 = document.querySelector('.ervaringtekst28');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput28 = document.querySelector('#emotieinput28');
  const ervaringInput28 = document.querySelector('#ervaringinput28');
  const emotieTekstElement28 = document.querySelector('#emotietekstp28');
  const emotieTekstElementtekst28 = document.querySelector('.emotietekst28');
  const ervaringTekstElement28 = document.querySelector('#ervaringtekstp28'); 

  if (emotieInput28.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput28.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie28 = emotieInput28.value.trim();
  const ervaring28 = ervaringInput28.value.trim();

  
  
 
  if (emotieTekstElement28) {
    emotieTekstElement28.textContent = emotie28;
    emotieTekstElementtekst28.style.display = 'block'; 
  }


  if (ervaringTekstElement28) {
    ervaringTekstElement28.textContent = ervaring28;
    ervaringTekstElement28.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie28', emotie28);


  localStorage.setItem('ervaring28', ervaring28);

  const ervaringen28 = JSON.parse(localStorage.getItem('ervaringen28')) || [];
  ervaringen28.push({ emotie28, ervaring28 });
  localStorage.setItem('ervaringen28', JSON.stringify(ervaringen28));

  voegErvaringToeAanPagina(emotie28, ervaring28);

  emotieInput28.value = '';
  ervaringInput28.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput28 = document.querySelector('#naaminput28');
  const reactieInput28 = document.querySelector('#reactieinput28');

  if (naamInput28.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput28.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam28 = naamInput28.value.trim();
  const reactie28 = reactieInput28.value.trim();

  const reacties28 = JSON.parse(localStorage.getItem('reacties28')) || [];
  reacties28.push({ naam28, reactie28 });
  localStorage.setItem('reacties28', JSON.stringify(reacties28));

  voegReactieToeAanPagina(naam28, reactie28);

  naamInput28.value = '';
  reactieInput28.value = '';
});


function voegErvaringToeAanPagina(emotie28, ervaring28) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst28.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer28 = document.querySelector('#reactieLijst28');

  const container = document.createElement('div');
  container.classList.add('reactietekst28');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer28.appendChild(container);
  reactielijstContainer28.style.display = 'flex';
}

