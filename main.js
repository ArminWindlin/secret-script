let farmer;
let interval = 610000;

// AUTOMATION //
setTimeout(() => {
    let hour = new Date().getHours();
    if (hour >= 6 && hour < 22)
        multiFarmer();
}, (5 * 1000));

setInterval(() => {
    let hour = new Date().getHours();
    if (hour >= 6 && hour < 22)
        multiFarmer();
}, (11 * 60 * 1000 + Math.floor((Math.random() * 30000) + 1000)));

setInterval(() => {
    let hour = new Date().getHours();
    if (hour >= 6 && hour < 22)
        recruiter();
}, (67 * 60 * 1000 + Math.floor((Math.random() * 30000) + 1000)));

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

    let wind = ['barracks', 'docks', 'docks', 'barracks', 'docks', 'docks', 'docks', 'docks', 'docks'];
    let unit = ['chariot', 'trireme', 'trireme', 'chariot', 'bireme', 'bireme', 'bireme', 'bireme', 'bireme'];

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

////////////// KEYS
$("body").keydown(function (e) {
    let timeCounter = 1;
    let slower = 1;

//-------------------------------------------------------//
    if ((e.keyCode || e.which) == 51) { //key: 3 -- testing
        /*
        if ($('.activity.attack_indicator.active')[0])
            console.log("true");
        $('#toolbar_activity_commands').trigger('mouseenter');
        setTimeout(() => {
            $('.icon.attack_type32x32.attack.returning')[0].click();
        }, 1000);*/
        recruiter();
    }

//-------------------------------------------------------//
    if ((e.keyCode || e.which) == 49) { //key: 1
        multiFarmer();
        farmer = setInterval(() => {
            multiFarmer();
        }, (600000 + Math.floor((Math.random() * 60000) + 1000)));
    }

//-------------------------------------------------------//
    if ((e.keyCode || e.which) == 52) { //key: 4
        clearInterval(farmer);
        console.log("stoppedFarmer");
    }

//-------------------------------------------------------//
    if ((e.keyCode || e.which) == 50) { //key: 2
        singleFarmer();
        farmer = setInterval(() => {
            singleFarmer();
        }, (interval + Math.floor((Math.random() * 60000) + 1000)));
    }
});