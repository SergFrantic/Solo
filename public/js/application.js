const picture = document.getElementById("picture")
const img = document.getElementById("imgId")
const artist = document.getElementById("artist")
const category = document.getElementById("category")
const infoText = document.getElementById("infoText")
const nextButton = document.getElementById("nextButton")
const backButton = document.getElementById("backButton")




let count = 0;
const linkOne = "https://api.artic.edu/api/v1/artworks/"
const linkAll = "https://api.artic.edu/api/v1/artworks"
const lengthArr = 12



// async function y() {
// }


async function x(count) {
  let responseId = await fetch(linkAll);
  const all = await responseId.json();
  const arrId = all.data.map((e) => e.id);
  const lengthArrId = arrId.length
  // count > lengthArrId - 1 ? count = 0 : count;
  const responseOne = await fetch(`${linkOne}${arrId[count]}`);
  const after = await responseOne.json();
  img.src = `${after.config.iiif_url}/${after.data.image_id}/full/843,/0/default.jpg`
  // console.log(after.data.artist_display);
  // console.log(after.data.title);
  // console.log(after.data.category_titles[0]);
  // console.log(after.data.medium_display)
  // console.log(arrId)
  // console.log(after.data.image_id)
  // console.log(lengthArrId)
  picture.innerText = after.data.title
  category.innerText = after.data.category_titles
  artist.innerText = after.data.artist_display
  infoText.innerText = after.data.medium_display
  return count
}
// x(6)



nextButton.addEventListener("click", () => {
  count++;
  count > lengthArr - 1 ? count = 0 : count
  console.log("next было", count);
  x(count)
  // console.log("next стало", count);
  // count;
})

backButton.addEventListener("click", () => {
  count--;
  count < 0 ? count = lengthArr - 1 : count
  console.log("back было", count)
  x(count)
  // console.log("back стало", count)

})

