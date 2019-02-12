var endDate = new Date("2019/4/12");
var distance;
var day = document.querySelector('.timer-day');
var hour = document.querySelector('.timer-hour');
var minute = document.querySelector('.timer-minute');
var second = document.querySelector('.timer-second');
setInterval(function(){
    var nowdate = new Date();
    //console.log(nowdate.toDateString())
    distance = endDate - nowdate;
    if(distance>=0){
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds<10){
       second.innerHTML = '0'+seconds;}
    else{
        second.innerHTML = seconds;
    }
    if(minutes<10){
       minute.innerHTML = '0'+minutes;}
    else{
        minute.innerHTML = minutes;
    }
    if(hours<10){
        hour.innerHTML = '0'+hours;}
     else{
         hour.innerHTML = hours;
     }
     if(days<10){
        day.innerHTML = '0'+days;}
     else{
         day.innerHTML = days;
     } 
} else{
    second.innerHTML = '00';
    minute.innerHTML = '00';
    day.innerHTML = '00';
    hour.innerHTML = '00';
}

},1000)