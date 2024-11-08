const textbox = document.getElementById('ranter');
const button = document.getElementById('ranter_sender');
button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  try{
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://cs-api.pltw.org/rant?text=${textbox.value}', {
      method: 'POST',
      headers: 
        { 'Content-Type': 'application/json' }
    }):
  }
  xhr.open("POST", "https://cs-api.pltw.org/rant?text=" +encodeURIComponent(textbox.value));
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = xhr.response;
      console.log(data);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://cs-api.pltw.org/newuser/rant");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = xhr.response;
      console.log(data);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
});
