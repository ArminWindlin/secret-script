(function () {
    let script = document.createElement('script');
    script.type = "tex/javascript";
    script.async = true;
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
})();

// CONFIG //
let flag = false;
let from = 6;
let till = 23;
let slower = 2;
let slower_farmer = 1;
let farmer_switch = true;
let recruiter_switch = false;
let culture_switch = true;
let builder_switch = false;
// CONFIG FARMER
let islands = [2878, 5360, 6683, 6122, 3143, 3055, 5448, 5221, 4875, 1212,
    8599, 8129, 8641, 7427, 6213, 5264, 2600, 2174,
    2878]; // one extra
// CONFIG CULTURE
let cul = [true, true, true, true, true,
    true, true, true, true, true,
    true, true];
let orp = 0;
let triumph = true;
// CONFIG RECRUITER
// trireme, bireme, attack_ship, chariot, hoplite, slinger, archer
// barracks, docks
let rec = [true, true, true, true, true,
    true, true, true, true, true,
    true, true, true, true, true, //11-15
    true, true, true, true, true,
    true, true, true, true, true, //21-25
    true, true, true, true, true,
    true, true, true, true, true, //31-35
    true, true, true, true, true,
    true, true, true, true, true];
let wind = ['barracks', 'barracks', 'barracks', 'barracks', 'docks',
    'docks', 'docks', 'docks', 'docks', 'docks',
    'docks', 'docks', 'docks', 'docks', 'docks',
    'docks', 'docks', 'docks', 'docks', 'docks',
    'docks', 'docks', 'docks', 'docks', 'docks',
    'docks', 'docks', 'docks', 'docks', 'docks',
    'docks', 'docks', 'docks', 'docks', 'docks',
    'docks', 'docks', 'docks', 'docks', 'docks',
    'docks', 'docks', 'docks', 'docks', 'docks'];
let unit = ['harpy', 'griffin', 'manticore', 'slinger', 'trireme',
    'trireme', 'trireme', 'trireme', 'trireme', 'trireme',
    'trireme', 'trireme', 'trireme', 'trireme', 'trireme',
    'trireme', 'trireme', 'trireme', 'trireme', 'trireme',
    'trireme', 'trireme', 'trireme', 'trireme', 'trireme',
    'trireme', 'trireme', 'trireme', 'trireme', 'trireme',
    'trireme', 'trireme', 'trireme', 'trireme', 'trireme',
    'trireme', 'trireme', 'trireme', 'trireme', 'trireme',
    'trireme', 'trireme', 'trireme', 'trireme', 'trireme'];
// CONFIG BUILDER
// main, lumber, ironer, stoner, farm, storage, academy, barracks, docks, temple, market, wall, hide
let build = [false, false, false, false, false,
    false, false, false, false, false,
    true, false, false, false, false, //11-15
    false, false, true, true, true,
    true, false, true, true, true, //21-25
    true, true, true, true, false,
    true, true, true, true, true, //31-35
    true, true, true, true, true,
    true, true, true, true, true, //41-45
    true, true, true, true, true,
    true, true];
let building = ['', '', '', '', '',
    '', '', '', '', '',
    'barracks', '', '', '', '', //11-15
    '', '', 'stoner', 'barracks', 'market',
    'market', '', 'stoner', 'docks', 'ironer', //21-25
    'docks', 'temple', 'market', 'temple', '',
    'temple', 'docks', 'market', 'temple', 'temple', //31-35
    'temple', 'farm', 'farm', 'farm', 'farm',
    'farm', 'farm', 'farm', 'farm', 'farm', //41-45
    'academy', 'farm', 'farm', 'academy', 'storage',
    'storage', 'storage'];

// AUTOMATION //
setInterval(() => {
    let hour = new Date().getHours();
    if (hour >= from && hour < till)
        multiFarmer();
}, (11 * 60 * 1000 + Math.floor((Math.random() * 30000) + 1000)));

setInterval(() => {
    let hour = new Date().getHours();
    if (hour >= from && hour < till)
        recruiter();
}, (67 * 60 * 1000 + Math.floor((Math.random() * 30000) + 1000)));

setInterval(() => {
    let hour = new Date().getHours();
    if (hour >= from && hour < till)
        culture()
}, (30 * 60 * 1000 + Math.floor((Math.random() * 30000) + 1000)));

setInterval(() => {
    let hour = new Date().getHours();
    if (hour >= from && hour < till)
        builder()
}, (88 * 60 * 1000 + Math.floor((Math.random() * 30000) + 1000)));

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

    window.FarmTownOverviewWindowFactory.openFarmTownOverview();

    for (let i = 0; i < islands.length; i++) {
        setTimeout(() => {
            $('.clearfix.town' + islands[i])[0].click();
        }, timeCounter * slower_farmer * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;
        setTimeout(() => {
            $('#fto_claim_button').click();
        }, timeCounter * slower_farmer * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;
    }
    setTimeout(() => {
        $('.ui-dialog-titlebar-close.ui-corner-all')[0].click();
    }, timeCounter * slower_farmer * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;

    setTimeout(() => {
        flag = false
    }, timeCounter * slower_farmer * 1000 + Math.floor(Math.random() * 500));
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

        if (!rec[i]) {
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
            $('.ui-dialog-titlebar-close')[0].click();
        }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;

        timeCounter = switchCity(timeCounter);
    }
    setTimeout(() => {
        $('.ui-dialog-titlebar-close')[0].click();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;
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
        if (i === orp && triumph) {
            setTimeout(() => {
                $('.btn_victory_procession.button_new')[0].click();
            }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
            timeCounter++;
            setTimeout(() => {
                $('.btn_theater_plays')[0].click();
            }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
            timeCounter++;
        }
        timeCounter = switchCity(timeCounter);
    }
    setTimeout(() => {
        $('.ui-dialog-titlebar-close')[0].click();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;
    setTimeout(() => {
        flag = false;
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
}

// BUILDER
function builder() {
    if (!builder_switch)
        return;
    if (!flag) {
        flag = true;
    } else {
        setTimeout(() => {
            builder();
        }, (20 * 1000));
        return;
    }

    let timeCounter = 1;

    timeCounter = selectFirstCity(timeCounter);

    setTimeout(() => {
        window.MainWindowFactory.openMainWindow();
    }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
    timeCounter++;

    for (let i = 0; i < build.length; i++) {
        if (!build[i]) {
            timeCounter = switchCity(timeCounter);
            continue;
        }
        setTimeout(() => {
            window.BuildingMain.buildBuilding(building[i]);
        }, timeCounter * slower * 1000 + Math.floor(Math.random() * 500));
        timeCounter++;

        timeCounter = switchCity(timeCounter);
    }

    setTimeout(() => {
        $('.ui-dialog-titlebar-close')[0].click();
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
        multiFarmer();
    }
});