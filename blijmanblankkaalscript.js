document.addEventListener('DOMContentLoaded', function () {
  const ervaringen2 = JSON.parse(localStorage.getItem('ervaringen2')) || [];
  const emotieTekstElement2 = document.querySelector('#emotietekstp2');
  const emotieTekstElementtekst2 = document.querySelector('.emotietekst2');
  const ervaringTekstElementtekst2 = document.querySelector('.ervaringtekst2');
  const storedEmotie2 = localStorage.getItem('emotie2');
  const storedErvaring2 = localStorage.getItem('ervaring2');

  
  if (storedEmotie2 && emotieTekstElement2) {
    emotieTekstElement2.textContent = storedEmotie2;
    emotieTekstElementtekst2.style.display = 'block';
  }

  if (storedErvaring2 && ervaringTekstElementtekst2) {
    ervaringTekstElementtekst2.textContent = storedErvaring2;
    ervaringTekstElementtekst2.style.display = 'block';
  }


  ervaringen2.forEach(item => {
    voegErvaringToeAanPagina(item.emotie2, item.ervaring2);
  });

  const reactielijstContainer2 = document.querySelector('#reactieLijst2');
  const reacties2 = JSON.parse(localStorage.getItem('reacties2')) || [];

  reacties2.forEach(item => {
    voegReactieToeAanPagina(item.naam2, item.reactie2);
  });
});


const emotieDiv = document.querySelector('.emotie2'); 
const ervaringDiv = document.querySelector('.ervaring2');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam2');
const reactieDiv = document.querySelector('.reactie2');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst2 = document.querySelector('.ervaringtekst2');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput2 = document.querySelector('#emotieinput2');
  const ervaringInput2 = document.querySelector('#ervaringinput2');
  const emotieTekstElement2 = document.querySelector('#emotietekstp2');
  const emotieTekstElementtekst2 = document.querySelector('.emotietekst2');
  const ervaringTekstElement2 = document.querySelector('#ervaringtekstp2'); 

  if (emotieInput2.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput2.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie2 = emotieInput2.value.trim();
  const ervaring2 = ervaringInput2.value.trim();

  
  
 
  if (emotieTekstElement2) {
    emotieTekstElement2.textContent = emotie2;
    emotieTekstElementtekst2.style.display = 'block'; 
  }


  if (ervaringTekstElement2) {
    ervaringTekstElement2.textContent = ervaring2;
    ervaringTekstElement2.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie2', emotie2);


  localStorage.setItem('ervaring2', ervaring2);

  const ervaringen2 = JSON.parse(localStorage.getItem('ervaringen2')) || [];
  ervaringen2.push({ emotie2, ervaring2 });
  localStorage.setItem('ervaringen2', JSON.stringify(ervaringen2));

  voegErvaringToeAanPagina(emotie2, ervaring2);

  emotieInput2.value = '';
  ervaringInput2.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput2 = document.querySelector('#naaminput2');
  const reactieInput2 = document.querySelector('#reactieinput2');

  if (naamInput2.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput2.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam2 = naamInput2.value.trim();
  const reactie2 = reactieInput2.value.trim();

  const reacties2 = JSON.parse(localStorage.getItem('reacties')) || [];
  reacties2.push({ naam2, reactie2 });
  localStorage.setItem('reacties', JSON.stringify(reacties2));

  voegReactieToeAanPagina(naam2, reactie2);

  naamInput2.value = '';
  reactieInput2.value = '';
});


function voegErvaringToeAanPagina(emotie2, ervaring2) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst2.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer = document.querySelector('#reactieLijst2');

  const container = document.createElement('div');
  container.classList.add('reactietekst2');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer.appendChild(container);
  reactielijstContainer.style.display = 'flex';
}

