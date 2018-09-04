// MULTI FARMER //
function multiFarmer() {
    let islands = [29318, 28402, 28491, 28034, 27286, 25938, 20610, 16700, 23079];
    let timeCounter = 2;
    let slower = 2;

    window.FarmTownOverviewWindowFactory.openFarmTownOverview();

    for (let i = 0; i < islands.length; i++) {
        setTimeout(() => {
            $('.clearfix.town' + islands[i])[0].click();
        }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;
        setTimeout(() => {
            $('#fto_claim_button').click();
        }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;
    }
    setTimeout(() => {
        $('.ui-dialog-titlebar-close.ui-corner-all')[0].click();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));

    console.log("mf-check");
}