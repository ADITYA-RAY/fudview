//reserved function names start--------------------------------------------------------------------------------------------------
//scrollFunction
//openNav
//closeNav
//openCategory
//openInfo
//closeInfo
//reserved function names ends---------------------------------------------------------------------------------------------------



//navbar scroll function starts---------------------------------------------------------------------------------------------------
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        document.getElementById("topnav").style.backgroundColor = " rgb(43, 41, 41)";
    } else {
        document.getElementById("topnav").style.backgroundColor = " rgba(0, 0, 0, 0.7)";
    }
}
//navbar scroll function ends-------------------------------------------------------------------------------------------------------

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

//category function tab-------------------------------------------------------------------------------------------------
function openCategory(category, number) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById("myNav").style.height = "0%";

    if (number == '1') {
        document.getElementById("name").innerHTML = "Veg Starter";
    } else if (number == '2') {
        document.getElementById("name").innerHTML = "Non-veg starter";
    } else if (number == '3') {
        document.getElementById("name").innerHTML = "sandwich";
    } else if (number == '4') {
        document.getElementById("name").innerHTML = "salad";
    } else if (number == '5') {
        document.getElementById("name").innerHTML = "soup";
    } else if (number == '6') {
        document.getElementById("name").innerHTML = "chineese starter";
    } else if (number == '7') {
        document.getElementById("name").innerHTML = "Tandoori Veg";
    } else if (number == '8') {
        document.getElementById("name").innerHTML = "Pizza's";
    } else if (number == '9') {
        document.getElementById("name").innerHTML = "main course non-veg";
    } else if (number == '10') {
        document.getElementById("name").innerHTML = "Tandoori Non-veg";
    } else if (number == '11') {
        document.getElementById("name").innerHTML = "Chineese rice and noodles";
    } else if (number == '12') {
        document.getElementById("name").innerHTML = "main course veg";
    } else if (number == '13') {
        document.getElementById("name").innerHTML = "Beverage";
    } else if (number == '14') {
        document.getElementById("name").innerHTML = "chineese main course veg & non-veg";
    } else if (number == '15') {
        document.getElementById("name").innerHTML = "Roti/Indian Breads";
    } else if (number == '16') {
        document.getElementById("name").innerHTML = "Indian Rice's & Biryani";
    } else if (number == '17') {
        document.getElementById("name").innerHTML = "Desert's";
    }
    document.getElementById("defaultOpen").style.display = "none";
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(number).style.display = "block";
    category.currentTarget.className += " active";


}



//cart tab---------------------------------------------------------------------------------------------
function closeCart() {
    window.onscroll = function () { };
    document.getElementById("tabcontentcart").style.display = "none";
}
function openCart(dishname, price) {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
    var tableno = document.getElementById("abc").value;

    if (tableno == 1) {
        var total1 = document.getElementById("subtotal1").innerHTML;
        var t1 = parseInt(total1);
        t1 += parseInt(price);
        document.getElementById("subtotal1").innerHTML = t1;
        document.getElementById("box1").style.backgroundColor = "red";
        document.getElementById("table1").style.display = "table";
        document.getElementById("table1").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='increase' onclick='increaseq(this,1)'>+</button><button id='decrease' onclick='decreaseq()'>-</button>" + "</td>" + "<td>" + "&#8377 " + price + "</td>" + "</tr>";
    }
    else if (tableno == 2) {
        var total2 = document.getElementById("subtotal2").innerHTML;
        var t2 = parseInt(total2);
        t2 += parseInt(price);
        document.getElementById("subtotal2").innerHTML = t2;
        document.getElementById("box2").style.backgroundColor = "red";
        document.getElementById("table2").style.display = "table";
        document.getElementById("table2").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='increase' onclick='increaseq(this,1)'>+</button><button id='decrease' onclick='decreaseq()'>-</button>" + "</td>" + "<td>" + "&#8377 " + price + "</td>" + "</tr>";

    }
    else if (tableno == 3) {
        var total3 = document.getElementById("subtotal3").innerHTML;
        var t3 = parseInt(total3);
        t3 += parseInt(price);
        document.getElementById("subtotal3").innerHTML = t3;
        document.getElementById("box3").style.backgroundColor = "red";
        document.getElementById("table3").style.display = "table";
        document.getElementById("table3").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='increase' onclick='increaseq(this,1)'>+</button><button id='decrease' onclick='decreaseq()'>-</button>" + "</td>" + "<td>" + "&#8377 " + price + "</td>" + "</tr>";

    }
    else if (tableno == 4) {
        var total4 = document.getElementById("subtotal4").innerHTML;
        var t4 = parseInt(total4);
        t4 += parseInt(price);
        document.getElementById("subtotal4").innerHTML = t4;
        document.getElementById("box4").style.backgroundColor = "red";
        document.getElementById("table4").style.display = "table";
        document.getElementById("table4").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='increase' onclick='increaseq(this,1)'>+</button><button id='decrease' onclick='decreaseq()'>-</button>" + "</td>" + "<td>" + "&#8377 " + price + "</td>" + "</tr>";

    }
    else if (tableno == 5) {
        var total5 = document.getElementById("subtotal5").innerHTML;
        var t5 = parseInt(total5);
        t5 += parseInt(price);
        document.getElementById("subtotal5").innerHTML = t5;
        document.getElementById("box5").style.backgroundColor = "red";
        document.getElementById("table5").style.display = "table";
        document.getElementById("table5").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='increase' onclick='increaseq(this,1)'>+</button><button id='decrease' onclick='decreaseq()'>-</button>" + "</td>" + "<td>" + "&#8377 " + price + "</td>" + "</tr>";

    }
    else if (tableno == 6) {
        var total6 = document.getElementById("subtotal6").innerHTML;
        var t6 = parseInt(total6);
        t6 += parseInt(price);
        document.getElementById("subtotal6").innerHTML = t6;
        document.getElementById("box6").style.backgroundColor = "red";
        document.getElementById("table6").style.display = "table";
        document.getElementById("table6").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='increase' onclick='increaseq(this,1)'>+</button><button id='decrease' onclick='decreaseq()'>-</button>" + "</td>" + "<td>" + "&#8377 " + price + "</td>" + "</tr>";

    }
    else if (tableno == 7) {
        var total7 = document.getElementById("subtotal7").innerHTML;
        var t7 = parseInt(total7);
        t7 += parseInt(price);
        document.getElementById("subtotal7").innerHTML = t7;
        document.getElementById("box7").style.backgroundColor = "red";
        document.getElementById("table7").style.display = "table";
        document.getElementById("table7").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='increase' onclick='increaseq(this,1)'>+</button><button id='decrease' onclick='decreaseq()'>-</button>" + "</td>" + "<td>" + "&#8377 " + price + "</td>" + "</tr>";

    }
    else if (tableno == 8) {
        var total8 = document.getElementById("subtotal8").innerHTML;
        var t8 = parseInt(total8);
        t8 += parseInt(price);
        document.getElementById("subtotal8").innerHTML = t8;
        document.getElementById("box8").style.backgroundColor = "red";
        document.getElementById("table8").style.display = "table";
        document.getElementById("table8").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='increase' onclick='increaseq(this,1)'>+</button><button id='decrease' onclick='decreaseq()'>-</button>" + "</td>" + "<td>" + "&#8377 " + price + "</td>" + "</tr>";

    }
    else if (tableno == 9) {
        var total9 = document.getElementById("subtotal9").innerHTML;
        var t9 = parseInt(total9);
        t9 += parseInt(price);
        document.getElementById("subtotal9").innerHTML = t9;
        document.getElementById("box9").style.backgroundColor = "red";
        document.getElementById("table9").style.display = "table";
        document.getElementById("table9").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='increase' onclick='increaseq(this,1)'>+</button><button id='decrease' onclick='decreaseq()'>-</button>" + "</td>" + "<td>" + "&#8377 " + price + "</td>" + "</tr>";

    }
    else if (tableno == 10) {
        var total10 = document.getElementById("subtotal10").innerHTML;
        var t10 = parseInt(total10);
        t10 += parseInt(price);
        document.getElementById("subtotal10").innerHTML = t10;
        document.getElementById("box10").style.backgroundColor = "red";
        document.getElementById("table10").style.display = "table";
        document.getElementById("table10").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='increase' onclick='increaseq(this,1)'>+</button><button id='decrease' onclick='decreaseq()'>-</button>" + "</td>" + "<td>" + "&#8377 " + price + "</td>" + "</tr>";
    }

    document.getElementById("tabcontentcart").style.display = "block";
    document.getElementById("tableselect").style.height = "0%";



}

function openCartMenu() {
    document.getElementById("tabcontentcart").style.display = "block";
    document.getElementById("tableselect").style.height = "0%";
}

function increaseq(r, tableno) {
    var i = r.parentNode.parentNode.rowIndex;

    if (tableno == 1) {
        var x = document.getElementById('table1').rows[i].cells[1].innerHTML;
        x = "<button id='increase' onclick='increaseq(this,1)'>+</button>"
        x += y
        var y = parseInt(x);
        document.querySelector("#table1 #quantity").value = y + 1;

    }
    else if (tableno == 2) {
        document.getElementById("table2").deleteRow(i);
        document.getElementById("table2").deleteRow(i - 1);
    }
    else if (tableno == 3) {
        document.getElementById("table3").deleteRow(i);
        document.getElementById("table3").deleteRow(i - 1);
    }
    else if (tableno == 4) {
        document.getElementById("table4").deleteRow(i);
        document.getElementById("table4").deleteRow(i - 1);
    }
    else if (tableno == 5) {
        document.getElementById("table5").deleteRow(i);
        document.getElementById("table5").deleteRow(i - 1);
    }
    else if (tableno == 6) {
        document.getElementById("table6").deleteRow(i);
        document.getElementById("table6").deleteRow(i - 1);
    }
    else if (tableno == 7) {
        document.getElementById("table7").deleteRow(i);
        document.getElementById("table7").deleteRow(i - 1);
    }
    else if (tableno == 8) {
        document.getElementById("table8").deleteRow(i);
        document.getElementById("table8").deleteRow(i - 1);
    }
    else if (tableno == 9) {
        document.getElementById("table9").deleteRow(i);
        document.getElementById("table9").deleteRow(i - 1);
    }
    else if (tableno == 10) {
        document.getElementById("table10").deleteRow(i);
        document.getElementById("table10").deleteRow(i - 1);
    }
}
function deleteOrder(r, tableno) {

    var i = r.parentNode.parentNode.rowIndex;
    if (tableno == 1) {
        document.getElementById("table1").deleteRow(i);
        document.getElementById("table1").deleteRow(i - 1);
    }
    else if (tableno == 2) {
        document.getElementById("table2").deleteRow(i);
        document.getElementById("table2").deleteRow(i - 1);
    }
    else if (tableno == 3) {
        document.getElementById("table3").deleteRow(i);
        document.getElementById("table3").deleteRow(i - 1);
    }
    else if (tableno == 4) {
        document.getElementById("table4").deleteRow(i);
        document.getElementById("table4").deleteRow(i - 1);
    }
    else if (tableno == 5) {
        document.getElementById("table5").deleteRow(i);
        document.getElementById("table5").deleteRow(i - 1);
    }
    else if (tableno == 6) {
        document.getElementById("table6").deleteRow(i);
        document.getElementById("table6").deleteRow(i - 1);
    }
    else if (tableno == 7) {
        document.getElementById("table7").deleteRow(i);
        document.getElementById("table7").deleteRow(i - 1);
    }
    else if (tableno == 8) {
        document.getElementById("table8").deleteRow(i);
        document.getElementById("table8").deleteRow(i - 1);
    }
    else if (tableno == 9) {
        document.getElementById("table9").deleteRow(i);
        document.getElementById("table9").deleteRow(i - 1);
    }
    else if (tableno == 10) {
        document.getElementById("table10").deleteRow(i);
        document.getElementById("table10").deleteRow(i - 1);
    }
}

function openInfo(infoid) {

    document.getElementById("infotab").style.height = "100%";
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("infotabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        document.getElementById(infoid).style.display = "block";

    }

}

function closeInfo() {
    document.getElementById("infotab").style.height = "0%";
    document.getElementById(number).style.display = "block";
}

