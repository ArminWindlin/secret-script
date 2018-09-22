(function () {
    let script = document.createElement('script');
    script.type = "tex/javascript";
    script.async = true;
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
})();

// CONFIG //
let flag = false;
let till = 23;
let slower = 2;
let farmer_switch = true;
let recruiter_switch = false;
let culture_switch = true;
// CONFIG FARMER
let islands = [24300, 23886, 32698, 31434, 25566, 30528, 21637, 29490, 28589, 24148, 22357, 25296, 27144, 31551, 24300];
// CONFIG CULTURE
let cul = [true, true, true, true, true,
    true, true, true, true, true,
    true, true, true, true];
// CONFIG RECRUITER
// trireme, bireme, attack_ship, chariot, hoplite
let wind = ['barracks', 'docks', 'docks', 'barracks', 'barracks',
    'barracks', 'docks', 'barracks', 'docks', 'barracks'];
let unit = ['', '', 'attack_ship', 'hoplite', '',
    'hoplite', 'attack_ship', '', 'attack_ship', 'hoplite'];

// AUTOMATION //

setInterval(() => {
    let hour = new Date().getHours();
    if (hour >= 6 && hour < till)
        multiFarmer();
}, (11 * 60 * 1000 + Math.floor((Math.random() * 30000) + 1000)));

setInterval(() => {
    let hour = new Date().getHours();
    if (hour >= 6 && hour < till)
        recruiter();
}, (67 * 60 * 1000 + Math.floor((Math.random() * 30000) + 1000)));

setInterval(() => {
    let hour = new Date().getHours();
    if (hour >= 6 && hour < till)
        culture()
}, (30 * 60 * 1000 + Math.floor((Math.random() * 30000) + 1000)));

// MULTI FARMER //
function multiFarmer() {
    if (!farmer_switch)
        return;
    if (!flag) {
        flag = true;
    } else {
        setTimeout(() => {
            multiFarmer();
        }, (20 * 1000));
        return;
    }

    let timeCounter = 2;
    let slower = 1;

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
    timeCounter++;

    setTimeout(() => {
        flag = false
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
}

// RECRUITER
function recruiter() {
    if (!recruiter_switch)
        return;
    if (!flag) {
        flag = true;
    } else {
        setTimeout(() => {
            recruiter();
        }, (20 * 1000));
        return;
    }

    let timeCounter = 1;

    timeCounter = selectFirstCity(timeCounter);

    for (let i = 0; i < wind.length; i++) {

        if (unit[i] === '') {
            timeCounter = switchCity(timeCounter);
            continue;
        }

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

        timeCounter = switchCity(timeCounter);
    }
    setTimeout(() => {
        flag = false;
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
}

function culture() {
    if (!culture_switch)
        return;
    if (!flag) {
        flag = true;
    } else {
        setTimeout(() => {
            culture();
        }, (20 * 1000));
        return;
    }

    let timeCounter = 1;

    timeCounter = selectFirstCity(timeCounter);

    for (let i = 0; i < cul.length; i++) {
        if (!cul[i]) {
            timeCounter = switchCity(timeCounter);
            continue;
        }
        setTimeout(() => {
            window.PlaceWindowFactory.openPlaceWindow();
        }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;
        setTimeout(() => {
            $('.btn_city_festival.button_new')[0].click();
        }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;
        if (i === 0) {
            setTimeout(() => {
                $('.btn_victory_procession.button_new')[0].click();
            }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
            timeCounter++;
        }
        timeCounter = switchCity(timeCounter);
    }

    setTimeout(() => {
        $('.btn_wnd.close')[0].click();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;
    setTimeout(() => {
        flag = false;
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
}

// USEFUL
function selectFirstCity(timeCounter) {
    setTimeout(() => {
        $('.caption.js-viewport')[0].click();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;
    setTimeout(() => {
        $('.item.town_group_town.even')[0].click();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;
    setTimeout(() => {
        $('.btn_jump_to_town.circle_button')[0].click();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;

    return timeCounter;
}

function switchCity(timeCounter) {
    setTimeout(() => {
        $('.btn_next_town.button_arrow.right')[0].click();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;

    return timeCounter;
}

// KEYS
$("body").keydown(function (e) {
//-------------------------------------------------------//
    if ((e.keyCode || e.which) == 106) { //key: *
        culture();
    }
});