// Your code here




const getTime = function(){
  const date = new Date();

  let hours = (date.getHours());
  let minutes = (date.getMinutes());
  let seconds = (date.getSeconds());

  let display = `${date.toLocaleDateString()} ${hours}:${minutes}:${seconds}`;
  $('#clock').html(display);
};


$(document).ready(function() {

  setInterval(getTime, 1000);
});
