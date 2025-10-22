  const myImageURL = "background_2.gif";
  function toggleBackground(ButtonElement) {
    const body = document.querySelector('body');
    var links = document.querySelectorAll('a');
    var i;
  
    if (ButtonElement.value === 'remove background') {
      body.style.backgroundImage = 'none';
      ButtonElement.value = 'add background';
      for(i=0;i<links.length;i++) {
        links[i].style.color = 'green';
      }
    } else {
      body.style.backgroundImage = `url('${myImageURL}')`;
      ButtonElement.value = 'remove background';
      for(i=0;i<links.length;i++) {
        links[i].style.color = 'red';
      }
    }
  }