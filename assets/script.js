var clock = $('#clock')

function upDateClock() {
    var now = moment().format('MMM Do, YYYY at hh:mm:ss a')
    console.log(now)
    clock.text(now)

}

setInterval(upDateClock, 1000)

upDateClock()
 