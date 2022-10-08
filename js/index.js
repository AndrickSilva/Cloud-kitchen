// function myFunction() {
//     var ll = document.getElementsByClassName('ll');
//     var btn = document.getElementById('#myBtn');

//     if (ll.style.display === "none") {
//         btnText.innerHTML = "Read more";
//     } else {
//         ll.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
