// RECRUITER
function recruiter() {

    let timeCounter = 1;
    let slower = 3;
    // Select first city
    $('.caption.js-viewport')[0].click();
    setTimeout(() => {
        $('.item.town_group_town.even')[0].click();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;
    setTimeout(() => {
        $('.btn_jump_to_town.circle_button')[0].click();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;

    let wind = ['barracks', 'docks', 'docks', 'docks', 'docks', 'docks', 'docks', 'docks', 'docks'];
    let unit = ['chariot', 'trireme', 'trireme', 'bireme', 'bireme', 'bireme', 'bireme', 'bireme', 'bireme'];

    for (let i = 0; i < wind.length; i++) {
        setTimeout(() => {
            window.BuildingWindowFactory.open(wind[i]);
        }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;
        setTimeout(() => {
            $('#unit_order_tab_' + unit[i]).click();
        }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;
        setTimeout(() => {
            $('#unit_order_confirm').click();
        }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;
        setTimeout(() => {
            $('.btn_wnd.close')[0].click();
        }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;

        // culture
        if (i == 1) {
            culture(timeCounter, slower);
            timeCounter++;
            timeCounter++;
        }

        // cave
        if (unit[i] == 'bireme') {
            setTimeout(() => {
                window.BuildingWindowFactory.open('hide');
            }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
            timeCounter++;
            setTimeout(() => {
                $('.order_confirm.button_new.square')[0].click();
            }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
            timeCounter++;
            setTimeout(() => {
                $('.btn_wnd.close')[0].click();
            }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
            timeCounter++;
        }

        // Switch city
        setTimeout(() => {
            $('.btn_next_town.button_arrow.right')[0].click();
        }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;

        // under siege
        if(i == 3){
            setTimeout(() => {
                $('.btn_next_town.button_arrow.right')[0].click();
            }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
            timeCounter++;
        }
    }

}

function culture(timeCounter, slower) {
    setTimeout(() => {
        window.PlaceWindowFactory.openPlaceWindow();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;
    setTimeout(() => {
        $('.btn_victory_procession.button_new')[0].click();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
}