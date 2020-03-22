setInterval(
    function(){
        var curDate = new Date();
        var hours = curDate.getHours();
        var minutes = curDate.getMinutes();
        var seconds = curDate.getSeconds();
        var session = 'AM';
        if(hours >= 12){
            session = 'PM';
        }
        if(hours > 12){
            hours = hours-12;
        }
        if(seconds<10){
            seconds = "0" + seconds;
        }
        if(minutes <10){
            minutes = "0"+ minutes;
        }

        var time = hours + ":" + minutes + ":" + seconds + " " + session;

        var clock = document.getElementById('clock');
        clock.innerHTML = time;

    }, 1000
) 