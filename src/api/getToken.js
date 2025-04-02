async function getSpotifyToken() {
  const client_id = "5f5c240757cd4ffe918578597ec2eb7a";
  const client_secret = "39b475cf091146b9b921637d2e3fc0f7";

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  });

  const data = await res.json();
  console.log(data.access_token); // Esse é o token de acesso
}

getSpotifyToken();
