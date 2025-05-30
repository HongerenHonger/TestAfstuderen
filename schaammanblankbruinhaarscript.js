document.addEventListener('DOMContentLoaded', function () {
  const ervaringen17 = JSON.parse(localStorage.getItem('ervaringen17')) || [];
  const emotieTekstElement17 = document.querySelector('#emotietekstp17');
  const emotieTekstElementtekst17 = document.querySelector('.emotietekst17');
  const ervaringTekstElementtekst17 = document.querySelector('.ervaringtekst17');
  const storedEmotie17 = localStorage.getItem('emotie17');
  const storedErvaring17 = localStorage.getItem('ervaring17');

  
  if (storedEmotie17 && emotieTekstElement17) {
    emotieTekstElement17.textContent = storedEmotie17;
    emotieTekstElementtekst17.style.display = 'block';
  }

  if (storedErvaring17 && ervaringTekstElementtekst17) {
    ervaringTekstElementtekst17.textContent = storedErvaring17;
    ervaringTekstElementtekst17.style.display = 'block';
  }


  ervaringen17.forEach(item => {
    voegErvaringToeAanPagina(item.emotie17, item.ervaring17);
  });

  const reactielijstContainer17 = document.querySelector('#reactieLijst17');
  const reacties17 = JSON.parse(localStorage.getItem('reacties17')) || [];

  reacties17.forEach(item => {
    voegReactieToeAanPagina(item.naam17, item.reactie17);
  });
});


const emotieDiv = document.querySelector('.emotie17'); 
const ervaringDiv = document.querySelector('.ervaring17');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam17');
const reactieDiv = document.querySelector('.reactie17');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst17 = document.querySelector('.ervaringtekst17');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput17 = document.querySelector('#emotieinput17');
  const ervaringInput17 = document.querySelector('#ervaringinput17');
  const emotieTekstElement17 = document.querySelector('#emotietekstp17');
  const emotieTekstElementtekst17 = document.querySelector('.emotietekst17');
  const ervaringTekstElement17 = document.querySelector('#ervaringtekstp17'); 

  if (emotieInput17.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput17.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie17 = emotieInput17.value.trim();
  const ervaring17 = ervaringInput17.value.trim();

  
  
 
  if (emotieTekstElement17) {
    emotieTekstElement17.textContent = emotie17;
    emotieTekstElementtekst17.style.display = 'block'; 
  }


  if (ervaringTekstElement17) {
    ervaringTekstElement17.textContent = ervaring17;
    ervaringTekstElement17.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie17', emotie17);


  localStorage.setItem('ervaring17', ervaring17);

  const ervaringen17 = JSON.parse(localStorage.getItem('ervaringen17')) || [];
  ervaringen17.push({ emotie17, ervaring17 });
  localStorage.setItem('ervaringen17', JSON.stringify(ervaringen17));

  voegErvaringToeAanPagina(emotie17, ervaring17);

  emotieInput17.value = '';
  ervaringInput17.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput17 = document.querySelector('#naaminput17');
  const reactieInput17 = document.querySelector('#reactieinput17');

  if (naamInput17.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput17.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam17 = naamInput17.value.trim();
  const reactie17 = reactieInput17.value.trim();

  const reacties17 = JSON.parse(localStorage.getItem('reacties17')) || [];
  reacties17.push({ naam17, reactie17 });
  localStorage.setItem('reacties17', JSON.stringify(reacties17));

  voegReactieToeAanPagina(naam17, reactie17);

  naamInput17.value = '';
  reactieInput17.value = '';
});


function voegErvaringToeAanPagina(emotie17, ervaring17) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst17.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer17 = document.querySelector('#reactieLijst17');

  const container = document.createElement('div');
  container.classList.add('reactietekst17');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer17.appendChild(container);
  reactielijstContainer17.style.display = 'flex';
}

