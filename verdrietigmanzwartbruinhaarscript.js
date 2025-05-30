document.addEventListener('DOMContentLoaded', function () {
  const ervaringen35 = JSON.parse(localStorage.getItem('ervaringen35')) || [];
  const emotieTekstElement35 = document.querySelector('#emotietekstp35');
  const emotieTekstElementtekst35 = document.querySelector('.emotietekst35');
  const ervaringTekstElementtekst35 = document.querySelector('.ervaringtekst35');
  const storedEmotie35 = localStorage.getItem('emotie35');
  const storedErvaring35 = localStorage.getItem('ervaring35');

  
  if (storedEmotie35 && emotieTekstElement35) {
    emotieTekstElement35.textContent = storedEmotie35;
    emotieTekstElementtekst35.style.display = 'block';
  }

  if (storedErvaring35 && ervaringTekstElementtekst35) {
    ervaringTekstElementtekst35.textContent = storedErvaring35;
    ervaringTekstElementtekst35.style.display = 'block';
  }


  ervaringen35.forEach(item => {
    voegErvaringToeAanPagina(item.emotie35, item.ervaring35);
  });

  const reactielijstContainer35 = document.querySelector('#reactieLijst35');
  const reacties35 = JSON.parse(localStorage.getItem('reacties35')) || [];

  reacties35.forEach(item => {
    voegReactieToeAanPagina(item.naam35, item.reactie35);
  });
});


const emotieDiv = document.querySelector('.emotie35'); 
const ervaringDiv = document.querySelector('.ervaring35');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam35');
const reactieDiv = document.querySelector('.reactie35');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst35 = document.querySelector('.ervaringtekst35');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput35 = document.querySelector('#emotieinput35');
  const ervaringInput35 = document.querySelector('#ervaringinput35');
  const emotieTekstElement35 = document.querySelector('#emotietekstp35');
  const emotieTekstElementtekst35 = document.querySelector('.emotietekst35');
  const ervaringTekstElement35 = document.querySelector('#ervaringtekstp35'); 

  if (emotieInput35.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput35.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie35 = emotieInput35.value.trim();
  const ervaring35 = ervaringInput35.value.trim();

  
  
 
  if (emotieTekstElement35) {
    emotieTekstElement35.textContent = emotie35;
    emotieTekstElementtekst35.style.display = 'block'; 
  }


  if (ervaringTekstElement35) {
    ervaringTekstElement35.textContent = ervaring35;
    ervaringTekstElement35.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie35', emotie35);


  localStorage.setItem('ervaring35', ervaring35);

  const ervaringen35 = JSON.parse(localStorage.getItem('ervaringen35')) || [];
  ervaringen35.push({ emotie35, ervaring35 });
  localStorage.setItem('ervaringen35', JSON.stringify(ervaringen35));

  voegErvaringToeAanPagina(emotie35, ervaring35);

  emotieInput35.value = '';
  ervaringInput35.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput35 = document.querySelector('#naaminput35');
  const reactieInput35 = document.querySelector('#reactieinput35');

  if (naamInput35.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput35.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam35 = naamInput35.value.trim();
  const reactie35 = reactieInput35.value.trim();

  const reacties35 = JSON.parse(localStorage.getItem('reacties35')) || [];
  reacties35.push({ naam35, reactie35 });
  localStorage.setItem('reacties35', JSON.stringify(reacties35));

  voegReactieToeAanPagina(naam35, reactie35);

  naamInput35.value = '';
  reactieInput35.value = '';
});


function voegErvaringToeAanPagina(emotie35, ervaring35) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst35.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer35 = document.querySelector('#reactieLijst35');

  const container = document.createElement('div');
  container.classList.add('reactietekst35');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer35.appendChild(container);
  reactielijstContainer35.style.display = 'flex';
}

