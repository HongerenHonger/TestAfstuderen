//blijmanaziaatbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBlijmanAziaatBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'blijmanaziaatbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/blijmanaziaatbruinhaar.png';
      img.alt = 'blijmanaziaatbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBlijmanAziaatBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

const selectedImages = JSON.parse(localStorage.getItem('selectedImages')) || [];
selectedImages.forEach(imgName => {
  // Create and append image elements to your page
});




//blijmanblankbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBlijmanBlankBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'blijmanblankbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/blijmanblankbruinhaar.png';
      img.alt = 'blijmanblankbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBlijmanBlankBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

const selectedImages2 = JSON.parse(localStorage.getItem('selectedImages2')) || [];
selectedImages2.forEach(imgName => {
  // Create and append image elements to your page
});





//blijmanblankkaal
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBlijmanBlankKaal') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'blijmanblankkaal.html';

      const img = document.createElement('img');
      img.src = 'Images/blijmanblankkaal.png';
      img.alt = 'blijmanblankkaal';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBlijmanBlankKaal');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

const selectedImages3 = JSON.parse(localStorage.getItem('selectedImages3')) || [];
selectedImages3.forEach(imgName => {
  // Create and append image elements to your page
});




//blijmanzwartbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBlijmanZwartBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'blijmanzwartbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/blijmanzwartbruinhaar.png';
      img.alt = 'blijmanzwartbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBlijmanZwartBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

const selectedImages4 = JSON.parse(localStorage.getItem('selectedImages4')) || [];
selectedImages4.forEach(imgName => {
  // Create and append image elements to your page
});





//blijvrouwaziaatbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBlijvrouwAziaatBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'blijvrouwaziaatbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/blijvrouwaziaatbruinhaar.png';
      img.alt = 'blijvrouwaziaatbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBlijvrouwAziaatBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

const selectedImages5 = JSON.parse(localStorage.getItem('selectedImages4')) || [];
selectedImages5.forEach(imgName => {
  // Create and append image elements to your page
});





//blijvrouwblankblondhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBlijvrouwBlankBlondHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'blijvrouwblankblondhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/blijvrouwblankblondhaar.png';
      img.alt = 'blijvrouwblankblondhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBlijvrouwBlankBlondHaar');
  }
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

//blijvrouwblankbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBlijvrouwBlankBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'blijvrouwblankbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/blijvrouwblankbruinhaar.png';
      img.alt = 'blijvrouwblankbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBlijvrouwBlankBruinHaar');
  }
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

//blijvrouwzwartbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBlijvrouwZwartBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'blijvrouwzwartbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/blijvrouwzwartbruinhaar.png';
      img.alt = 'blijvrouwzwartbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBlijvrouwZwartBruinHaar');
  }
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});


//boosmanaziaatbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBoosmanAziaatBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'boosmanaziaatbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/boosmanaziaatbruinhaar.png';
      img.alt = 'boosmanaziaatbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBoosmanAziaatBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

//boosmanblankbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBoosmanBlankBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'boosmanblankbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/boosmanblankbruinhaar.png';
      img.alt = 'boosmanblankbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBoosmanBlankBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

//boosmanblankkaal
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBoosmanBlankKaal') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'boosmanblankkaal.html';

      const img = document.createElement('img');
      img.src = 'Images/boosmanblankkaal.png';
      img.alt = 'boosmanblankkaal';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBoosmanBlankKaal');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

//boosmanzwartbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBoosmanZwartBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'boosmanzwartbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/boosmanzwartbruinhaar.png';
      img.alt = 'boosmanzwartbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBoosmanZwartBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

//boosvrouwaziaatbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBoosvrouwAziaatBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'boosvrouwaziaatbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/boosvrouwaziaatbruinhaar.png';
      img.alt = 'boosvrouwaziaatbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBoosvrouwAziaatBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

//boosvrouwblankblondhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBoosvrouwBlankBlondHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'boosvrouwblankblondhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/boosvrouwblankblondhaar.png';
      img.alt = 'boosvrouwblankblondhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBoosvrouwBlankBlondHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});


//boosvrouwblankbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBoosvrouwBlankBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'boosvrouwblankbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/boosvrouwblankbruinhaar.png';
      img.alt = 'boosvrouwblankbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBoosvrouwBlankBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});


//boosvrouwzwartbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addBoosvrouwZwartBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'boosvrouwzwartbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/boosvrouwzwartbruinhaar.png';
      img.alt = 'boosvrouwzwartbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addBoosvrouwZwartBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});


//schaammanaziaatbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addSchaammanAziaatBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'schaammanaziaatbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/schaammanaziaatbruinhaar.png';
      img.alt = 'schaammanaziaatbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addSchaammanAziaatBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});


//schaammanblankbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addSchaammanBlankBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'schaammanblankbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/schaammanblankbruinhaar.png';
      img.alt = 'schaammanblankbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addSchaammanBlankBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});

//schaammanblankkaal
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addSchaammanBlankKaal') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'schaammanblankkaal.html';

      const img = document.createElement('img');
      img.src = 'Images/schaammanblankkaal.png';
      img.alt = 'schaammanblankkaal';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addSchaammanBlankKaal');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});


//schaammanzwartbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addSchaammanZwartBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'schaammanzwartbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/schaammanzwartbruinhaar.png';
      img.alt = 'schaammanzwartbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addSchaammanZwartBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//schaamvrouwaziaatbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addSchaamvrouwAziaatBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'schaamvrouwaziaatbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/schaamvrouwaziaatbruinhaar.png';
      img.alt = 'schaamvrouwaziaatbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addSchaamvrouwAziaatBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});


//schaamvrouwblankblondhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addSchaamvrouwBlankBlondHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'schaamvrouwblankblondhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/schaamvrouwblankblondhaar.png';
      img.alt = 'schaamvrouwblankblondhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addSchaamvrouwBlankBlondHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});


//schaamvrouwblankbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addSchaamvrouwBlankBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'schaamvrouwblankbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/schaamvrouwblankbruinhaar.png';
      img.alt = 'schaamvrouwblankbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addSchaamvrouwBlankBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//schaamvrouwzwartbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addSchaamvrouwZwartBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'schaamvrouwzwartbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/schaamvrouwzwartbruinhaar.png';
      img.alt = 'schaamvrouwzwartbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addSchaamvrouwZwartBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//stressmanaziaatbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addStressmanAziaatBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'stressmanaziaatbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/stressmanaziaatbruinhaar.png';
      img.alt = 'stressmanaziaatbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addStressmanAziaatBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//stressmanblankbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addStressmanBlankBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'stressmanblankbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/stressmanblankbruinhaar.png';
      img.alt = 'stressmanblankbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addStressmanBlankBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//stressmanblankkaal
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addStressmanBlankKaal') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'stressmanblankkaal.html';

      const img = document.createElement('img');
      img.src = 'Images/stressmanblankkaal.png';
      img.alt = 'stressmanblankkaal';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addStressmanBlankKaal');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//stressmanzwartbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addStressmanZwartBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'stressmanzwartbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/stressmanzwartbruinhaar.png';
      img.alt = 'stressmanzwartbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addStressmanZwartBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//stressvrouwaziaatbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addStressvrouwAziaatBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'stressvrouwaziaatbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/stressvrouwaziaatbruinhaar.png';
      img.alt = 'stressvrouwaziaatbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addStressvrouwAziaatBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//stressvrouwblankblondhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addStressvrouwBlankBlondHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'stressvrouwblankblondhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/stressvrouwblankblondhaar.png';
      img.alt = 'stressvrouwblankblondhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addStressvrouwBlankBlondHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//stressvrouwblankbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addStressvrouwBlankBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'stressvrouwblankbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/stressvrouwblankbruinhaar.png';
      img.alt = 'stressvrouwblankbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addStressvrouwBlankBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//stressvrouwzwartbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addStressvrouwZwartBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'stressvrouwzwartbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/stressvrouwzwartbruinhaar.png';
      img.alt = 'stressvrouwzwartbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addStressvrouwZwartBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//verdrietmanaziaatbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addVerdrietmanAziaatBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'verdrietmanaziaatbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/verdrietmanaziaatbruinhaar.png';
      img.alt = 'verdrietmanaziaatbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addVerdrietmanAziaatBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//verdrietmanblankbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addVerdrietmanBlankBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'verdrietmanblankbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/verdrietmanblankbruinhaar.png';
      img.alt = 'verdrietmanblankbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addVerdrietmanBlankBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//verdrietmanblankkaal
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addVerdrietmanBlankKaal') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'verdrietmanblankkaal.html';

      const img = document.createElement('img');
      img.src = 'Images/verdrietmanblankkaal.png';
      img.alt = 'verdrietmanblankkaal';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addVerdrietmanBlankKaal');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//verdrietmanzwartbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addVerdrietmanZwartBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'verdrietmanzwartbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/verdrietmanzwartbruinhaar.png';
      img.alt = 'verdrietmanzwartbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addVerdrietmanZwartBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//verdrietvrouwaziaatbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addVerdrietvrouwAziaatBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'verdrietvrouwaziaatbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/verdrietvrouwaziaatbruinhaar.png';
      img.alt = 'verdrietvrouwaziaatbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addVerdrietvrouwAziaatBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//verdrietvrouwblankblondhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addVerdrietvrouwBlankBlondHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'verdrietvrouwblankblondhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/verdrietvrouwblankblondhaar.png';
      img.alt = 'verdrietvrouwblankblondhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addVerdrietvrouwBlankBlondHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//verdrietvrouwblankbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addVerdrietvrouwBlankBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'verdrietvrouwblankbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/verdrietvrouwblankbruinhaar.png';
      img.alt = 'verdrietvrouwblankbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addVerdrietvrouwBlankBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});



//verdrietvrouwzwartbruinhaar
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('addVerdrietvrouwZwartBruinHaar') === 'true') {
    const arrayDiv = document.querySelector('.array');
    if (arrayDiv) {
      const a = document.createElement('a');
      a.href = 'verdrietvrouwzwartbruinhaar.html';

      const img = document.createElement('img');
      img.src = 'Images/verdrietvrouwzwartbruinhaar.png';
      img.alt = 'verdrietvrouwzwartbruinhaar';

      a.appendChild(img);
      arrayDiv.appendChild(a);

      // Save the HTML string in localStorage
      let savedArray = localStorage.getItem('arrayHtml') || '';
      savedArray += a.outerHTML;
      localStorage.setItem('arrayHtml', savedArray);
    }
    localStorage.removeItem('addVerdrietvrouwZwartBruinHaar');
  }

  // On every load, restore the saved .array content
  const arrayDiv = document.querySelector('.array');
  const savedArray = localStorage.getItem('arrayHtml');
  if (arrayDiv && savedArray) {
    arrayDiv.innerHTML = savedArray;
  }
});


// Show subbar on navbar title hover
document.addEventListener('DOMContentLoaded', function() {
  const navTitle = document.querySelector('.nav-title-index');
  const subbar = document.querySelector('.subbar');
  if (navTitle && subbar) {
    navTitle.addEventListener('mouseenter', () => {
      subbar.style.display = 'block';
    });
    navTitle.addEventListener('mouseleave', () => {
      subbar.style.display = 'none';
    });
    // Hide by default
    subbar.style.display = 'none';
  }
});

