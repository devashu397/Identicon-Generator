function generateIdenticon() {
  const input = document.getElementById("input").value;
  const url = `https://avatars.dicebear.com/api/identicon/${encodeURIComponent(
    input
  )}.svg`;
  const img = document.getElementById("img");
  const link = document.getElementById("link");
  const linkhref = document.getElementById("linkhref");
  img.src = url;
  img.height = 200;
  img.width = 200;
  link.innerHTML = "Click Here to get the download link";
  linkhref.href = url;
}
