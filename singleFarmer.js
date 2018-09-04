// SINGLE FARMER //
function singleFarmer() {
    let island1 = [2425, 2426, 2427, 2428, 2429, 2430];
    let island2 = [3691, 3692, 3693, 3694, 3695, 3696];
    let island3 = [3949, 3950, 3951, 3952, 3953, 3954];
    let island4 = [3493, 3494, 3495, 3496, 3497, 3498];
    let island5 = [4237, 4238, 4239, 4240, 4241, 4242];
    let island6 = [3997, 3998, 3999, 4000, 4001, 4002];
    let island7 = [4519, 4520, 4521, 4522, 4523, 4524];
    let island8 = [4195, 4196, 4197, 4198, 4199, 4200];

    let islands = [island1, island2, island3, island4, island5, island6, island7, island8];

    let timeCounter = 1;

    //if ($('.indicator.wood.limit_reached')[0] && $('.indicator.stone.limit_reached')[0] && $('.indicator.iron.limit_reached')[0])

    // Select first city
    $('.caption.js-viewport')[0].click();
    setTimeout(() => {
        $('.item.town_group_town.even')[0].click();
    }, timeCounter * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;
    setTimeout(() => {
        $('.btn_jump_to_town.circle_button')[0].click();
    }, timeCounter * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;

    for (let i = 0; i < islands.length; i++) {
        // Farm island
        for (let j = 0; j < island1.length; j++) {
            setTimeout(() => {
                window.FarmTownWindowFactory.openWindow(islands[i][j]);
            }, timeCounter * 1000 + Math.floor(Math.random() * 500));
            timeCounter++;
            setTimeout(() => {
                $('.btn_claim_resources')[0].click();
            }, timeCounter * 1000 + Math.floor(Math.random() * 500));
            timeCounter++;
            setTimeout(() => {
                $('.btn_wnd.close')[0].click();
            }, timeCounter * 1000 + Math.floor(Math.random() * 500));
            timeCounter++;
        }
        // Switch city
        setTimeout(() => {
            $('.btn_next_town.button_arrow.right')[0].click();
        }, timeCounter * 1000 + Math.floor(Math.random() * 300));
        timeCounter++;
        setTimeout(() => {
            $('.btn_jump_to_town.circle_button')[0].click();
        }, timeCounter * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;
        timeCounter++;
    }

    console.log("sf-check");
}

