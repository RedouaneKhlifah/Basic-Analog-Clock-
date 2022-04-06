setInterval (setclock ,1000)

const secondhand = document.querySelector ('[second-hand]')
const menutehand = document.querySelector ('[menute-hand]')
const hourhand = document.querySelector ('[hour-hand]')

function setclock() {
    const currenttime = new Date()
    const SecondTime = currenttime.getSeconds() /60
    const menuteTime = (SecondTime+ currenttime.getMinutes()) /60
    const hourTime = (menuteTime + currenttime.getHours()) /12
    rotationratio (secondhand ,SecondTime)
    rotationratio (menutehand ,menuteTime)
    rotationratio (hourhand ,hourTime)
    
}


function rotationratio(elememt,rotation) {
    elememt.style.setProperty("--rotation" ,rotation *360 )
}