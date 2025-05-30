document.addEventListener('DOMContentLoaded', function () {
  const ervaringen30 = JSON.parse(localStorage.getItem('ervaringen30')) || [];
  const emotieTekstElement30 = document.querySelector('#emotietekstp30');
  const emotieTekstElementtekst30 = document.querySelector('.emotietekst30');
  const ervaringTekstElementtekst30 = document.querySelector('.ervaringtekst30');
  const storedEmotie30 = localStorage.getItem('emotie30');
  const storedErvaring30 = localStorage.getItem('ervaring30');

  
  if (storedEmotie30 && emotieTekstElement30) {
    emotieTekstElement30.textContent = storedEmotie30;
    emotieTekstElementtekst30.style.display = 'block';
  }

  if (storedErvaring30 && ervaringTekstElementtekst30) {
    ervaringTekstElementtekst30.textContent = storedErvaring30;
    ervaringTekstElementtekst30.style.display = 'block';
  }


  ervaringen30.forEach(item => {
    voegErvaringToeAanPagina(item.emotie30, item.ervaring30);
  });

  const reactielijstContainer30 = document.querySelector('#reactieLijst30');
  const reacties30 = JSON.parse(localStorage.getItem('reacties30')) || [];

  reacties30.forEach(item => {
    voegReactieToeAanPagina(item.naam30, item.reactie30);
  });
});


const emotieDiv = document.querySelector('.emotie30'); 
const ervaringDiv = document.querySelector('.ervaring30');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam30');
const reactieDiv = document.querySelector('.reactie30');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst30 = document.querySelector('.ervaringtekst30');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput30 = document.querySelector('#emotieinput30');
  const ervaringInput30 = document.querySelector('#ervaringinput30');
  const emotieTekstElement30 = document.querySelector('#emotietekstp30');
  const emotieTekstElementtekst30 = document.querySelector('.emotietekst30');
  const ervaringTekstElement30 = document.querySelector('#ervaringtekstp30'); 

  if (emotieInput30.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput30.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie30 = emotieInput30.value.trim();
  const ervaring30 = ervaringInput30.value.trim();

  
  
 
  if (emotieTekstElement30) {
    emotieTekstElement30.textContent = emotie30;
    emotieTekstElementtekst30.style.display = 'block'; 
  }


  if (ervaringTekstElement30) {
    ervaringTekstElement30.textContent = ervaring30;
    ervaringTekstElement30.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie30', emotie30);


  localStorage.setItem('ervaring30', ervaring30);

  const ervaringen30 = JSON.parse(localStorage.getItem('ervaringen30')) || [];
  ervaringen30.push({ emotie30, ervaring30 });
  localStorage.setItem('ervaringen30', JSON.stringify(ervaringen30));

  voegErvaringToeAanPagina(emotie30, ervaring30);

  emotieInput30.value = '';
  ervaringInput30.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput30 = document.querySelector('#naaminput30');
  const reactieInput30 = document.querySelector('#reactieinput30');

  if (naamInput30.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput30.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam30 = naamInput30.value.trim();
  const reactie30 = reactieInput30.value.trim();

  const reacties30 = JSON.parse(localStorage.getItem('reacties30')) || [];
  reacties30.push({ naam30, reactie30 });
  localStorage.setItem('reacties30', JSON.stringify(reacties30));

  voegReactieToeAanPagina(naam30, reactie30);

  naamInput30.value = '';
  reactieInput30.value = '';
});


function voegErvaringToeAanPagina(emotie30, ervaring30) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst30.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer30 = document.querySelector('#reactieLijst30');

  const container = document.createElement('div');
  container.classList.add('reactietekst30');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer30.appendChild(container);
  reactielijstContainer30.style.display = 'flex';
}

