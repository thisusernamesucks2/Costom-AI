const textbox = document.getElementById('ranter');
const button = document.getElementById('ranter_sender');
button.addEventListener('click', async () => {
  const url = "https://cs-api.pltw.org/rant"
  const fallback = "https://cs-api.pltw.org/newuser/rant"
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "text": textbox.value
      },
    });
    if (response.status !== 200) {
      const fallresponse = await fetch(fallback, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
});
