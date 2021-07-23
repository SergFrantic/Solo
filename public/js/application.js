const picture = document.getElementById("picture")
const img = document.getElementById("imgId")
const artist = document.getElementById("artist")
const category = document.getElementById("category")
const infoText = document.getElementById("infoText")




const linkOne = "https://api.artic.edu/api/v1/artworks/"


const linkAll = "https://api.artic.edu/api/v1/artworks"
// const count = 0;


// async function y() {
// }


async function x(count) {
  let responseId = await fetch(linkAll);
  const all = await responseId.json();
  const arrId = all.data.map((e) => e.id);
  const responseOne = await fetch(`${linkOne}${arrId[count]}`);
  const after = await responseOne.json();
  img.src = `${after.config.iiif_url}/${after.data.image_id}/full/843,/0/default.jpg`
  console.log(after.data.artist_display);
  console.log(after.data.title);
  console.log(after.data.category_titles[0]);
  console.log(after.data.medium_display)
  picture.innerText = after.data.title
  category.innerText = after.data.category_titles
  artist.innerText = after.data.artist_display
  infoText.innerText = after.data.medium_display
}
x(4)




// https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number
