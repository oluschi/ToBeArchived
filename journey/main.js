// Initialize Airtable API
var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'YOUR_API_KEY'}).base("appWbuUy6hb3zR5Qj");
var base = new Airtable({apiKey: 'keygEINsXOj57TR6b'}).base('appWbuUy6hb3zR5Qj');

function openPopup() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
}


base("media").select({}).eachPage(gotPageOfOutfits);

let outfits = [];

function gotPageOfOutfits(records, fetchNextPage) {
  console.log("There are "+records.length+" items in records");
  // This takes the list of records and add them to the people array
  outfits.push(...records);
  // request more pages
  fetchNextPage();
    // let test = document.querySelector("#test");
    // test.innerHTML = records[0].fields.tiktokvideo

    for(let i=0; i<records.length; i++){
        console.log[i];
        document.getElementById('title').innerHTML = records[i].fields.title;
        document.getElementById('mood').innerHTML = records[i].fields.mood;
        // document.getElementById('description').innerHTML = records[i].fields.description;

           // Outfit Details//
             document.getElementById('outwear').innerHTML = records[i].fields.outwear;
             document.getElementById('top').innerHTML = records[i].fields.top;
             document.getElementById('bottom').innerHTML = records[i].fields.bottom;
             document.getElementById('shoes').innerHTML = records[i].fields.shoes;
             document.getElementById('bag').innerHTML = records[i].fields.bag;

        // document.getElementById('tiktok').innerHTML = records[i].fields.tiktokvideo;
        // console.log(records[i]);
    }

    let allDivs = document.querySelectorAll("#title");
    for(let i=0; i<allDivs.length; i++){
        allDivs[i].innerHTML = records[i].fields.title;
        allDivs[i].addEventListener("click", ()=>{
            
            document.getElementById('popupTitle').innerHTML = records[i].fields.title;
            document.getElementById('mood').innerHTML = records[i].fields.mood;
            // document.getElementById('description').innerHTML = records[i].fields.description;
            
            // Outfit Details//
             document.getElementById('outwear').innerHTML = records[i].fields.outwear;
             document.getElementById('top').innerHTML = records[i].fields.top;
             document.getElementById('bottom').innerHTML = records[i].fields.bottom;
             document.getElementById('shoes').innerHTML = records[i].fields.shoes;
             document.getElementById('bag').innerHTML = records[i].fields.bag;

            document.getElementById('tiktok').innerHTML = records[i].fields.tiktokvideo;
        });
    }
}







// // Open the popout when a row is clicked
// function openPopup() {
//   document.getElementById("popup").classList.add("active");
//   document.getElementById("myOverlay").classList.add("active");
// }

// // Close the popout when the "Close" button is clicked
// function closePopup() {
//   document.getElementById("popup").classList.remove("active")
//   document.getElementById("myOverlay").classList.remove("active")
// }


// let mediaPop = document.querySelector("#popout");
// var Airtable=require("airtable");

// //key is always the same//
// var base = new Airtable({apiKey: 'YOUR_API_KEY'}).base(
//   "appWbuUy6hb3zR5Qj"

// );

// base("media").select({}).eachPage(gotPageOfMedia, gotAllMedia);

// const media=[];

// function openPopup() {

//   // get the TikTok video embed URL
//   var tiktokURL = "https://www.tiktok.com/embed/v2/7202769346727546158";

//   document.getElementById("popup").classList.add("active");
//     // Overlay blur Effect//
//   document.getElementById("myOverlay").classList.add("active")
//     // set the TikTok video URL as the source of the iframe
//   document.getElementById("tiktok-video").src = tiktokURL;
// }

// function closePopup() {
//   document.getElementById("popup").classList.remove("active");
//    // Overlay blur Effect Off//
//   document.getElementById("myOverlay").classList.remove("active")
//     // stop the TikTok video from playing
//   document.getElementById("tiktok-video").src = "";
// }










