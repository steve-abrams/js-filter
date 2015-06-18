var backgrounds = document.getElementsByClassName('background');
for (var i = 0; i < backgrounds.length; i++){
  backgrounds[i].addEventListener('click', function(){
    document.body.style.backgroundImage = "url('/images/"+this.className.split(' ')[0]+".jpg')";
  });
}

var sortHigh = document.getElementsByClassName('high')[0];
var sortLow = document.getElementsByClassName('low')[0];
sortHigh.addEventListener('click', function(){
  dataRequest(sortMore);
});

sortLow.addEventListener('click', function(){
  dataRequest(sortLess);
});

var checkmark = document.getElementsByClassName('checkmark');
for(var i = 0; i<checkmark.length; i++){
  checkmark[i].addEventListener('change', function(){
    dataRequest();
  });
}
