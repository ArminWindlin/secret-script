// Builder
function builder() {
    let timeCounter = 1;
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    setTimeout(() => {
        if ((hour == 7 || hour == 8) && min < 40)
            window.BuildingMain.buildBuilding('academy');
    }, timeCounter * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;
    setTimeout(() => {
        if ((hour == 9) && min < 40)
            window.BuildingMain.buildBuilding('main');
    }, timeCounter * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;
}