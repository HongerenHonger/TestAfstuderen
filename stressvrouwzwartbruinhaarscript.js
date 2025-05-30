document.addEventListener('DOMContentLoaded', function () {
  const ervaringen31 = JSON.parse(localStorage.getItem('ervaringen31')) || [];
  const emotieTekstElement31 = document.querySelector('#emotietekstp31');
  const emotieTekstElementtekst31 = document.querySelector('.emotietekst31');
  const ervaringTekstElementtekst31 = document.querySelector('.ervaringtekst31');
  const storedEmotie31 = localStorage.getItem('emotie31');
  const storedErvaring31 = localStorage.getItem('ervaring31');

  
  if (storedEmotie31 && emotieTekstElement31) {
    emotieTekstElement31.textContent = storedEmotie31;
    emotieTekstElementtekst31.style.display = 'block';
  }

  if (storedErvaring31 && ervaringTekstElementtekst31) {
    ervaringTekstElementtekst31.textContent = storedErvaring31;
    ervaringTekstElementtekst31.style.display = 'block';
  }


  ervaringen31.forEach(item => {
    voegErvaringToeAanPagina(item.emotie31, item.ervaring31);
  });

  const reactielijstContainer31 = document.querySelector('#reactieLijst31');
  const reacties31 = JSON.parse(localStorage.getItem('reacties31')) || [];

  reacties31.forEach(item => {
    voegReactieToeAanPagina(item.naam31, item.reactie31);
  });
});


const emotieDiv = document.querySelector('.emotie31'); 
const ervaringDiv = document.querySelector('.ervaring31');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam31');
const reactieDiv = document.querySelector('.reactie31');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst31 = document.querySelector('.ervaringtekst31');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput31 = document.querySelector('#emotieinput31');
  const ervaringInput31 = document.querySelector('#ervaringinput31');
  const emotieTekstElement31 = document.querySelector('#emotietekstp31');
  const emotieTekstElementtekst31 = document.querySelector('.emotietekst31');
  const ervaringTekstElement31 = document.querySelector('#ervaringtekstp31'); 

  if (emotieInput31.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput31.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie31 = emotieInput31.value.trim();
  const ervaring31 = ervaringInput31.value.trim();

  
  
 
  if (emotieTekstElement31) {
    emotieTekstElement31.textContent = emotie31;
    emotieTekstElementtekst31.style.display = 'block'; 
  }


  if (ervaringTekstElement31) {
    ervaringTekstElement31.textContent = ervaring31;
    ervaringTekstElement31.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie31', emotie31);


  localStorage.setItem('ervaring31', ervaring31);

  const ervaringen31 = JSON.parse(localStorage.getItem('ervaringen31')) || [];
  ervaringen31.push({ emotie31, ervaring31 });
  localStorage.setItem('ervaringen31', JSON.stringify(ervaringen31));

  voegErvaringToeAanPagina(emotie31, ervaring31);

  emotieInput31.value = '';
  ervaringInput31.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput31 = document.querySelector('#naaminput31');
  const reactieInput31 = document.querySelector('#reactieinput31');

  if (naamInput31.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput31.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam31 = naamInput31.value.trim();
  const reactie31 = reactieInput31.value.trim();

  const reacties31 = JSON.parse(localStorage.getItem('reacties31')) || [];
  reacties31.push({ naam31, reactie31 });
  localStorage.setItem('reacties31', JSON.stringify(reacties31));

  voegReactieToeAanPagina(naam31, reactie31);

  naamInput31.value = '';
  reactieInput31.value = '';
});


function voegErvaringToeAanPagina(emotie31, ervaring31) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst31.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer31 = document.querySelector('#reactieLijst31');

  const container = document.createElement('div');
  container.classList.add('reactietekst31');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer31.appendChild(container);
  reactielijstContainer31.style.display = 'flex';
}

