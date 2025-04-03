<!doctype html> 
<html>
  <head>
    <label for="Rant">What is your rant?:</label>
    <input type="text" id="ranter" name="ranter">
    <button type="button" id="ranter_sender" name="rant">Rant!</button>
    <script>
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
	</script>
	<button type="button" id="check" name="check">Check other peoples rants</button>
	<script>
	const button = document.getElementById('check');
	button.addEventListener('click', async () => {
		try {
			const response = await fetch('https://cs-api.pltw.org/rant', {
			  method: "GET",
			  mode: "no-cors",
			  headers: {
				"Content-Type": "application/json",
			  },
			})
	});
	</script>
  </body>
</html>
