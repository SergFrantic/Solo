const slide = document.getElementById("slide")
const picture = document.getElementById("picture")
const img = document.getElementById("imgId")
const artist = document.getElementById("artist")
const category = document.getElementById("category")
const infoText = document.getElementById("infoText")
const nextButton = document.getElementById("nextButton")
const backButton = document.getElementById("backButton")
const startViewButton = document.getElementById("startViewButton")




let count = 0;
const lengthArr = 12
const linkOne = "https://api.artic.edu/api/v1/artworks/"
const linkAll = "https://api.artic.edu/api/v1/artworks"





async function startView(count) {
  let responseId = await fetch(linkAll);
  const all = await responseId.json();
  const arrId = all.data.map((e) => e.id);
  const lengthArrId = arrId.length
  const responseOne = await fetch(`${linkOne}${arrId[count]}`);
  const after = await responseOne.json();
  img.src = `${after.config.iiif_url}/${after.data.image_id}/full/843,/0/default.jpg`
  slide.innerText = `Slide number ${count + 1}`
  picture.innerText = after.data.title
  category.innerText = after.data.category_titles
  artist.innerText = after.data.artist_display
  infoText.innerText = after.data.medium_display
}


startViewButton.addEventListener("click", () => {
  console.log("start", count);
  startView(0)
  count = 0;

})


nextButton.addEventListener("click", () => {
  count++;
  count > lengthArr - 1 ? count = 0 : count
  console.log("next", count);
  startView(count)

})

backButton.addEventListener("click", () => {
  count--;
  count < 0 ? count = lengthArr - 1 : count
  console.log("back", count)
  startView(count)

})



