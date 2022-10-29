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

function showhideCities() {
  var moreCities = document.getElementsByClassName('more-cities');
  var btn = document.getElementById('myBtn');

  if (btn.innerHTML === 'Read more') {
    for (let i = 0; i < moreCities.length; i++) {
      moreCities[i].style.display = 'flex';
    }
    btn.innerHTML = 'Read less';
  } else {
    for (let i = 0; i < moreCities.length; i++) {
      moreCities[i].style.display = 'none';
    }
    btn.innerHTML = 'Read more';
  }
}