const textbox = document.getElementById('ranter');
const button = document.getElementById('ranter_sender');
button.addEventListener('click', async () => {
  const baseurl = "https://cs-api.pltw.org/rant?text=";
  const url = baseurl + encodeURIComponent(textbox.value);
  const fallback = "https://cs-api.pltw.org/newuser/rant";
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200) {
      const fallresponse = await fetch(fallback, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    console.error("ERROR:", error);
  }
});
