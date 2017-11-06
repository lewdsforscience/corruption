affection = 0;
highest_affection = 0;
expenses = 800;
money = 0;
chatted = false;
income = 1;
sister = false;
shop = false;
unlocked_gift_25 = 'false';
unlocked_gift_50 = 'false';
unlocked_gift_100 = 'false';
unlocked_gift_250 = 'false';
unlocked_gift_500 = 'false';
unlocked_gift_1000 = 'false';
unlocked_gift_2500 = 'false';
gift_25 = 0;
gift_50 = 0;
gift_100 = 0;
gift_250 = 0;
gift_500 = 0;
gift_1000 = 0;
gift_2500 = 0;
gift_price = 0;
gift_25_chance = 25;
gift_50_chance = 25;
gift_100_chance = 25;
gift_250_chance = 25;
gift_500_chance = 100;
gift_1000_chance = 100;
gift_2500_chance = 100;
upgrade_price = 500;
images = 0;
nude = 'false';
handjob = 'false';
blowjob = 'false';
sex = 'false';
anal = 'false';
day = 1;
timer = 10;
toggleWork = false;
auto = false;

imgs = {
    'nude': 'https://i.imgur.com/lwXc4Ru.jpg',
    'handjob': 'https://i.imgur.com/GH1YstY.jpg',
    'blowjob': 'https://i.imgur.com/9jKBMAb.jpg',
    'sex': 'https://i.imgur.com/K0t1jfd.jpg',
    'anal': 'https://i.imgur.com/qPXADy4.jpg'
}

function load() {
    if(typeof localStorage['storage'] === 'undefined')
        return;

    affection = parseInt(localStorage['affection']);
    highest_affection = parseInt(localStorage['highest_affection']);
    expenses = parseInt(localStorage['expenses']);
    money = parseFloat(localStorage['money']);
    income = parseFloat(localStorage['income']);
    gift_25 = parseInt(localStorage['gift_25']);
    gift_50 = parseInt(localStorage['gift_50']);
    gift_100 = parseInt(localStorage['gift_100']);
    gift_250 = parseInt(localStorage['gift_250']);
    gift_500 = parseInt(localStorage['gift_500']);
    gift_1000 = parseInt(localStorage['gift_1000']);
    gift_2500 = parseInt(localStorage['gift_2500']);
    gift_25_chance = parseFloat(localStorage['gift_25_chance']);
    gift_50_chance = parseFloat(localStorage['gift_50_chance']);
    gift_100_chance = parseFloat(localStorage['gift_100_chance']);
    gift_250_chance = parseFloat(localStorage['gift_250_chance']);
    gift_500_chance = parseFloat(localStorage['gift_500_chance']);
    gift_1000_chance = parseFloat(localStorage['gift_1000_chance']);
    gift_2500_chance = parseFloat(localStorage['gift_2500_chance']);
    gift_price = parseInt(localStorage['gift_price']);
    upgrade_price = parseInt(localStorage['upgrade_price']);
    nude = localStorage['nude'];
    handjob = localStorage['handjob'];
    blowjob = localStorage['blowjob'];
    sex = localStorage['sex'];
    anal = localStorage['anal'];
    day = parseInt(localStorage['day']);

    document.getElementById('day').innerHTML = day;
    document.getElementById('money').innerHTML = money;
    document.getElementById('affection').innerHTML = affection;
    document.getElementById('slot1').innerHTML = '$25 Gift: ' + gift_25;
    document.getElementById('slot2').innerHTML = '$50 Gift: ' + gift_50;
    document.getElementById('slot3').innerHTML = '$100 Gift: ' + gift_100;
    document.getElementById('slot4').innerHTML = '$250 Gift: ' + gift_250;
    document.getElementById('slot5').innerHTML = '$500 Gift: ' + gift_500;
    document.getElementById('slot6').innerHTML = '$1000 Gift: ' + gift_1000;
    document.getElementById('slot7').innerHTML = '$2500 Gift: ' + gift_2500;

    if(localStorage['nude'] == 'true')
    {
        button = document.getElementById('image1');
        button.innerHTML = "Unlocked!";
        button.setAttribute('onclick','displayNude()');
    }
    if(localStorage['handjob'] == 'true')
    {
        button = document.getElementById('image2');
        button.innerHTML = "Unlocked!";
        button.setAttribute('onclick',"displayImage('handjob','Your sister unexpectedly starts giving you a handjob!')");
    }
    if(localStorage['blowjob'] == 'true')
    {
        button = document.getElementById('image3');
        button.innerHTML = "Unlocked!";
        button.setAttribute('onclick',"displayImage('blowjob','Your sister gives you a blowjob, and your cum on her face!')");
    }
    if(localStorage['sex'] == 'true')
    {
        button = document.getElementById('image4');
        button.innerHTML = "Unlocked!";
        button.setAttribute('onclick',"displayImage('sex','You've successfully had sex with your sister!')");
    }
    if(localStorage['anal'] == 'true')
    {
        button = document.getElementById('image5');
        button.innerHTML = "Unlocked!";
        button.setAttribute('onclick','displayAnal()');
    }
    if(localStorage['unlocked_gift_25'] == 'true')
    {
        unlocked_gift_25 = 'true';
        button = document.createElement('button');
        button.setAttribute('onclick','buyGift(\'25\')');
        text = document.createTextNode('$25');
        button.appendChild(text);
        document.getElementById('shop').appendChild(button);
    }
    if(localStorage['unlocked_gift_50'] == 'true')
    {
        unlocked_gift_50 = 'true';
        button = document.createElement('button');
        button.setAttribute('onclick','buyGift(\'50\')');
        text = document.createTextNode('$50');
        button.appendChild(text);
        document.getElementById('shop').appendChild(button);
    }
    if(localStorage['unlocked_gift_100'] == 'true')
    {
        unlocked_gift_100 = 'true';
        button = document.createElement('button');
        button.setAttribute('onclick','buyGift(\'100\')');
        text = document.createTextNode('$100');
        button.appendChild(text);
        document.getElementById('shop').appendChild(button);
    }
    if(localStorage['unlocked_gift_250'] == 'true')
    {
        unlocked_gift_250 = 'true';
        button = document.createElement('button');
        button.setAttribute('onclick','buyGift(\'250\')');
        text = document.createTextNode('$250');
        button.appendChild(text);
        document.getElementById('shop').appendChild(button);
    }
    if(localStorage['unlocked_gift_500'] == 'true')
    {
        unlocked_gift_500 = 'true';
        button = document.createElement('button');
        button.setAttribute('onclick','buyGift(\'500\')');
        text = document.createTextNode('$500');
        button.appendChild(text);
        document.getElementById('shop').appendChild(button);
    }
    if(localStorage['unlocked_gift_1000'] == 'true')
    {
        unlocked_gift_1000 = 'true';
        button = document.createElement('button');
        button.setAttribute('onclick','buyGift(\'1000\')');
        text = document.createTextNode('$1000');
        button.appendChild(text);
        document.getElementById('shop').appendChild(button);
    }
    if(localStorage['unlocked_gift_2500'] == 'true')
    {
        unlocked_gift_2500 = 'true';
        button = document.createElement('button');
        button.setAttribute('onclick','buyGift(\'2500\')');
        text = document.createTextNode('$2500');
        button.appendChild(text);
        document.getElementById('shop').appendChild(button);
    }
    if(typeof localStorage['auto'] != 'undefined')
    {
        if(localStorage['auto'] == 'true')
        {
            auto = true;
            btn = document.createElement('button');
            btn.setAttribute('onclick','toggleAutoWork()');
            t = document.createTextNode('auto');
            btn.appendChild(t);
            document.getElementById('auto-cell').appendChild(btn);
        }
    }
}

function save() {
    localStorage['storage'] = true;
    localStorage['auto'] = auto;
    localStorage['affection'] = affection;
    localStorage['highest_affection'] = highest_affection;
    localStorage['money'] = money;
    localStorage['income'] = income;
    localStorage['gift_price'] = gift_price;
    localStorage['gift_25'] = gift_25;
    localStorage['gift_50'] = gift_50;
    localStorage['gift_100'] = gift_100;
    localStorage['gift_250'] = gift_250;
    localStorage['gift_500'] = gift_500;
    localStorage['gift_1000'] = gift_1000;
    localStorage['gift_2500'] = gift_2500;
    localStorage['gift_25_chance'] = gift_25_chance;
    localStorage['gift_50_chance'] = gift_50_chance;
    localStorage['gift_100_chance'] = gift_100_chance;
    localStorage['gift_250_chance'] = gift_250_chance;
    localStorage['gift_500_chance'] = gift_500_chance;
    localStorage['gift_1000_chance'] = gift_1000_chance;
    localStorage['gift_2500_chance'] = gift_2500_chance;
    localStorage['unlocked_gift_25'] = unlocked_gift_25;
    localStorage['unlocked_gift_50'] = unlocked_gift_50;
    localStorage['unlocked_gift_100'] = unlocked_gift_100;
    localStorage['unlocked_gift_250'] = unlocked_gift_250;
    localStorage['unlocked_gift_500'] = unlocked_gift_500;
    localStorage['unlocked_gift_1000'] = unlocked_gift_1000;
    localStorage['unlocked_gift_2500'] = unlocked_gift_2500;
    localStorage['upgrade_price'] = upgrade_price;
    localStorage['nude'] = nude;
    localStorage['handjob'] = handjob;
    localStorage['blowjob'] = blowjob;
    localStorage['sex'] = sex;
    localStorage['anal'] = anal;
    localStorage['day'] = day;
    localStorage['expenses'] = expenses;
}

load();
countdown();

function time() {
    day++;
    if(affection > highest_affection)
        highest_affection = affection;
    save();
    if(chatted === false)
    {
        if((Math.floor(Math.random() * 100) + 1) < 11)
        {
            if(sex == 'false')
                affection--;
            document.getElementById('affection').innerHTML = affection;
        }
    }
    else
    {
        chatted = false;
    }

    if(Math.round(day % 30) == 1)
    {
        money = money - expenses;
        if(money > 0)
            if((Math.floor(Math.random() * 100) + 1) < 51)
            {
                if(affection < highest_affection)
                    highest_affection++;
                affection++;
            }

        document.getElementById('money').innerHTML = money;
    }
    document.getElementById('day').innerHTML = day;
}

function countdown() {
    timer--;
    if(timer === -1)
    {
        timer = 9;
        time();
    }
    document.getElementById('time').innerHTML = timer;
    setTimeout(countdown,1000)
}

function toggleAutoWork() {
    toggleWork = !toggleWork;

    if(toggleWork === true)
    {
        document.getElementById('work-button').style.display = 'none';
        setTimeout(autoWork,1000)
    }
    else
    {
        document.getElementById('work-button').style.display = 'initial';
    }
}

function autoWork() {
    if(toggleWork === false)
        return;
    money = money + Math.round((parseFloat((income * 0.75).toFixed(2)) * 5));

    document.getElementById('money').innerHTML = money;
    setTimeout(autoWork,1200)
}

function work() {
    document.getElementById('game-box').innerHTML = '';
    money = money + income;
    document.getElementById('money').innerHTML = money;
}

function toggleSister() {
    sister = !sister;
    div = document.getElementById('sister').style;
    if(sister)
        div.visibility = "visible";
    else
        div.visibility = "hidden";
}

function toggleShop() {
    shop =! shop;
    if(shop)
        document.getElementById('shop').style.visibility = "visible";
    else
        document.getElementById('shop').style.visibility = "hidden";
}
function buyGift(price) {
    if(money < price)
        return;

    money = money - price;
    switch(price)
    {
        case '25':
            gift_25++;
            document.getElementById('slot1').innerHTML = "$25 Gift: " + gift_25;
            break;
        case '50':
            gift_50++;
            document.getElementById('slot2').innerHTML = "$50 Gift: " + gift_50;
            break;
        case '100':
            gift_100++;
            document.getElementById('slot3').innerHTML = "$100 Gift: " + gift_100;
            break;
        case '250':
            gift_250++;
            document.getElementById('slot4').innerHTML = "$250 Gift: " + gift_250;
            break;
        case '500':
            gift_500++;
            document.getElementById('slot5').innerHTML = "$500 Gift: " + gift_500;
            break;
        case '1000':
            gift_1000++;
            document.getElementById('slot6').innerHTML = "$1000 Gift: " + gift_1000;
            break;
        case '2500':
            gift_2500++;
            document.getElementById('slot7').innerHTML = "$2500 Gift: " + gift_2500;
            break;
    }
    document.getElementById('money').innerHTML = money;
}

function buyUpgrade() {
    if(money < upgrade_price)
        return;

    if(upgrade_price < 16000)
        money = money - upgrade_price;

    if(income === 1)
    {
        income = 1.25;
        upgrade_price = 1000;
        auto = true;
        btn = document.createElement('button');
        btn.setAttribute('onclick','toggleAutoWork()');
        t = document.createTextNode('auto');
        btn.appendChild(t);
        document.getElementById('auto-cell').appendChild(btn);
    }
    else if(income === 1.25)
    {
        if(nude != 'true')
            return;

        income = 2.25;
        upgrade_price = 2000;
    }
    else if(income === 2.25)
    {
        if(handjob != 'true')
            return;

        income = 5.25;
        upgrade_price = 4000;
    }
    else if(income === 5.25)
    {
        if(blowjob != 'true')
            return;

        income = 10.25;
        upgrade_price = 8000;
    }
    else if(income === 10.25)
    {
        if(sex != 'true')
            return;

        income = 25.25;
        upgrade_price = 16000;
    }
    else
        return;
    document.getElementById('money').innerHTML = money;
}

function displayAnal() {
    image = document.createElement('img');
    image.setAttribute('src',imgs['anal']);
    image.setAttribute('width', '480px');
    image.setAttribute('height', '480px');
    document.getElementById('game-box').innerHTML = '';
    document.getElementById('game-box').appendChild(image);
}

function rape() {
    if(affection < 100)
        return;

    if(anal == 'true')
        return;

    affection = 0;

    displayAnal();
    anal = 'true';
    button = document.getElementById('image5');
    button.innerHTML = "Unlocked!";
    button.setAttribute('onclick','displayAnal()');
    document.getElementById('affection').innerHTML = affection;
}

function giftOptions() {
    document.getElementById('game-box').innerHTML = '';
    button1 = document.createElement('button');
    button2 = document.createElement('button');
    button3 = document.createElement('button');
    button4 = document.createElement('button');
    button5 = document.createElement('button');
    button6 = document.createElement('button');
    button7 = document.createElement('button');
    button1.setAttribute('onclick',"giveGift('25')");
    button2.setAttribute('onclick',"giveGift('50')");
    button3.setAttribute('onclick',"giveGift('100')");
    button4.setAttribute('onclick',"giveGift('250')");
    button5.setAttribute('onclick',"giveGift('500')");
    button6.setAttribute('onclick',"giveGift('1000')");
    button7.setAttribute('onclick',"giveGift('2500')");
    text1 = document.createTextNode('$25');
    text2 = document.createTextNode('$50');
    text3 = document.createTextNode('$100');
    text4 = document.createTextNode('$250');
    text5 = document.createTextNode('$500');
    text6 = document.createTextNode('$1000');
    text7 = document.createTextNode('$2500');
    button1.appendChild(text1);
    button2.appendChild(text2);
    button3.appendChild(text3);
    button4.appendChild(text4);
    button5.appendChild(text5);
    button6.appendChild(text6);
    button7.appendChild(text7);
    container = document.createElement('div');
    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);
    container.appendChild(button4);
    container.appendChild(button5);
    container.appendChild(button6);
    container.appendChild(button7);
    document.getElementById('game-box').innerHTML = '';
    document.getElementById('game-box').appendChild(container);
}

function giveGift(price) {
    switch(price)
    {
        case '25':
            if(gift_25 < 1)
                return;
            gift_25--;
            document.getElementById('slot1').innerHTML = '$25 Gift: ' + gift_25;
            if((Math.floor(Math.random() * 100) + 1) <= gift_25_chance)
            {
                if(highest_affection > affection && highest_affection < 101)
                    highest_affection++;
                affection++;
                gift_25_chance = gift_25_chance - 2.5;
                if(gift_25_chance < 2.5)
                    gift_25_chance = 2.5;
            }
            break;

        case '50':
            if(gift_50 < 1)
                return;
            gift_50--;
            document.getElementById('slot2').innerHTML = '$50 Gift: ' + gift_50;
            if((Math.floor(Math.random() * 100) + 1) <= gift_50_chance)
            {
                if(highest_affection > affection && highest_affection < 101)
                    highest_affection++;
                affection++;
                gift_50_chance = gift_50_chance - 2.5;
                if(gift_50_chance < 5)
                    gift_50_chance = 5;
            }
            break;

        case '100':
            if(gift_100 < 1)
                return;
            gift_100--;
            document.getElementById('slot3').innerHTML = '$100 Gift: ' + gift_100;
            if((Math.floor(Math.random() * 100) + 1) <= gift_100_chance)
            {
                if(highest_affection > affection && highest_affection < 101)
                    highest_affection++;
                affection++;
                gift_100_chance = gift_100_chance - 2.5;
                if(gift_100_chance < 7.5)
                    gift_100_chance = 7.5;
            }
            break;

        case '250':
            if(gift_250 < 1)
                return;
            gift_250--;
            document.getElementById('slot4').innerHTML = '$250 Gift: ' + gift_250;
            if((Math.floor(Math.random() * 100) + 1) <= gift_250_chance)
            {
                if(highest_affection > affection && highest_affection < 101)
                    highest_affection++;
                affection++;
                gift_250_chance = gift_250_chance - 2.5;
                if(gift_250_chance < 10)
                    gift_250_chance = 10;
            }
            break;

        case '500':
            if(gift_500 < 1)
                return;
            gift_500--;
            document.getElementById('slot5').innerHTML = '$500 Gift: ' + gift_500;
            if((Math.floor(Math.random() * 100) + 1) <= gift_500_chance)
            {
                if(highest_affection > affection && highest_affection < 101)
                    highest_affection++;
                affection++;
                gift_500_chance = gift_500_chance - 25;
                if(gift_500_chance < 25)
                    gift_500_chance = 25;
            }
            break;

        case '1000':
            if(gift_1000 < 1)
                return;
            gift_1000--;
            document.getElementById('slot6').innerHTML = '$1000 Gift: ' + gift_1000;
            if((Math.floor(Math.random() * 100) + 1) <= gift_1000_chance)
            {
                if(highest_affection > affection && highest_affection < 101)
                    highest_affection++;
                affection++;
                gift_1000_chance = gift_1000_chance - 25;
                if(gift_1000_chance < 50)
                    gift_1000_chance = 50;
            }
            break;

        case '2500':
            if(gift_2500 < 1)
                return;
            gift_2500--;
            document.getElementById('slot7').innerHTML = '$2500 Gift: ' + gift_2500;
            if((Math.floor(Math.random() * 100) + 1) <= gift_2500_chance)
            {
                if(highest_affection > affection && highest_affection < 101)
                    highest_affection++;
                affection++;
            }
            break;
    }
    if((Math.floor(Math.random() * 100) + 1) > 91)
        imageUnlock();

    document.getElementById('affection').innerHTML = affection;
}

function chat() {
    if(chatted === true)
        return;

    document.getElementById('game-box').innerHTML = '';

    chatted = true;

    if(affection < highest_affection)
        affection++;

    if((Math.floor(Math.random() * 100) + 1) > 99)
        affection++;

    document.getElementById('affection').innerHTML = affection;

    if(highest_affection > 9)
        if((Math.floor(Math.random() * 10)) > (timer + 4))
            displayNude();

    switch(gift_price)
    {
        case 0:
            gift_price = 25;
            unlocked_gift_25 = 'true';
            button = document.createElement('button');
            button.setAttribute('onclick','buyGift(\'25\')');
            text = document.createTextNode('$25');
            button.appendChild(text);
            document.getElementById('shop').appendChild(button);
            break;
        case 25:
            if(affection < 9)
                return;
            gift_price = 50;
            unlocked_gift_50 = 'true';
            button = document.createElement('button');
            button.setAttribute('onclick','buyGift(\'50\')');
            text = document.createTextNode('$50');
            button.appendChild(text);
            document.getElementById('shop').appendChild(button);
            break;
        case 50:
            if(affection < 19)
                return;
            gift_price = 100;
            unlocked_gift_50 = 'true';
            button = document.createElement('button');
            button.setAttribute('onclick','buyGift(\'100\')');
            text = document.createTextNode('$100');
            button.appendChild(text);
            document.getElementById('shop').appendChild(button);
            break;
        case 100:
            if(affection < 29)
                return;
            gift_price = 250;
            unlocked_gift_100 = 'true';
            button = document.createElement('button');
            button.setAttribute('onclick','buyGift(\'250\')');
            text = document.createTextNode('$250');
            button.appendChild(text);
            document.getElementById('shop').appendChild(button);
            break;
        case 250:
            if(affection < 39)
                return;
            gift_price = 500;
            unlocked_gift_500 = 'true';
            button = document.createElement('button');
            button.setAttribute('onclick','buyGift(\'500\')');
            text = document.createTextNode('$500');
            button.appendChild(text);
            document.getElementById('shop').appendChild(button);
            break;
        case 500:
            if(affection < 49)
                return;
            gift_price = 1000;
            unlocked_gift_1000 = 'true';
            button = document.createElement('button');
            button.setAttribute('onclick','buyGift(\'1000\')');
            text = document.createTextNode('$1000');
            button.appendChild(text);
            document.getElementById('shop').appendChild(button);
            break;
        case 1000:
            if(affection < 74)
                return;
            gift_price = 2500;
            unlocked_gift_2500 = 'true';
            button = document.createElement('button');
            button.setAttribute('onclick','buyGift(\'2500\')');
            text = document.createTextNode('$2500');
            button.appendChild(text);
            document.getElementById('shop').appendChild(button);
            break;
    }
}

function displayNude() {
    if(nude == 'true')
        return;

    nude = 'true';
    button = document.getElementById('image1');
    button.setAttribute('onclick','displayNude()');
    button.innerHTML = 'Unlocked!';
    image = document.createElement('img');
    image.setAttribute('src',imgs['nude']);
    image.setAttribute('width', '75%');
    image.setAttribute('height', '75%');
    div = document.createElement('div');
    text = document.createTextNode('You find your sister masturbating!');
    div.appendChild(text);
    document.getElementById('game-box').innerHTML = '';
    document.getElementById('game-box').appendChild(image);
    document.getElementById('game-box').appendChild(div);
}

function displayImage(i,t) {
    image = document.createElement('img');
    image.setAttribute('src',imgs[i]);
    image.setAttribute('width', '75%');
    image.setAttribute('height', '75%');
    div = document.createElement('div');
    text = document.createTextNode(t);
    div.appendChild(text);
    document.getElementById('game-box').innerHTML = '';
    document.getElementById('game-box').appendChild(image);
    document.getElementById('game-box').appendChild(div);
}
function imageUnlock() {
    if(((affection > 24 && affection < 50) || (affection > 25 && handjob === false)))
    {
        if(handjob == 'true')
            return;

        text = "Your sister unexpectedly starts giving you a handjob!";
        displayImage('handjob',text);
        expenses = 600;
        handjob = 'true';
        button = document.getElementById('image2');
        button.innerHTML = "Unlocked!";
        button.setAttribute('onclick',"displayImage('handjob','Your sister unexpectedly starts giving you a handjob!')");
    }
    else if(((affection > 49 && affection < 75) || (affection > 50 && handjob == 'true' && blowjob == 'false')))
    {
        if(blowjob == 'true')
            return;

        text = "Your sister unexpectedly starts giving you a handjob!";
        displayImage('blowjob',text);
        expenses = 300;
        blowjob = 'true';
        button = document.getElementById('image3');
        button.innerHTML = "Unlocked!";
        button.setAttribute('onclick',"displayImage('blowjob','Your sister gives you a blowjob, and your cum on her face!')");
    }
    else if((affection > 74 && blowjob == 'true'))
    {
        if(sex == 'true')
            return;

        text = "You've successfully had sex with your sister!";
        displayImage('sex',text);
        expenses = 0;
        sex = 'true';
        button = document.getElementById('image4');
        button.innerHTML = "Unlocked!";
        button.setAttribute('onclick',"displayImage('sex','You've successfully had sex with your sister!')");
    }
    else
        return;
}
