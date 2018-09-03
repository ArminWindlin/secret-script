(function () {
    let script = document.createElement('script');
    script.type = "tex/javascript";
    script.async = true;
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
})();


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

    console.log("check-mf");
}

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

    console.log("single farming done");
}

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