
//reserved function names start--------------------------------------------------------------------------------------------------
//scrollFunction
//openNav
//closeNav
//openCategory
//openInfo
//closeInfo
//increaseq
//decreaseq
//testFunc(1-10)
//retrive(1-10)
//store
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

//this is to open or close category names overlay--------------------------------------------------------------------------
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
//upper functions end--------------------------------------------------------------------------------------------

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


    document.getElementById(number).style.display = "block";
    category.currentTarget.className += " active";


}
//upper function ends------------------------------------------------------------------------------------------
//cart tab---------------------------------------------------------------------------------------------
function closeCart() {


    document.getElementById("tabcontentcart").style.display = "none";

}
function openCart(dishname, price) {
    var qu = document.getElementById("confirm");
    qu.style.display = "block";
    qu.style.transition = "1s";
    setTimeout(function () { qu.style.display = "none" }, 1000);
    var tableno = document.getElementById("abc").value;


    if (tableno == 1) {
        var total1 = document.getElementById("subtotal1").innerHTML;
        var t1 = parseInt(total1);
        t1 += parseInt(price);
        document.getElementById("subtotal1").innerHTML = t1;
        document.getElementById("box1").style.backgroundColor = "red";
        document.getElementById("table1").style.display = "table";
        document.getElementById("table1").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,1)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,1)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";


        var x1 = document.getElementById("table1").rows.length;

        for (var i = 1; i < x1 - 1; i++) {

            var d1 = document.getElementById("table1").rows[i].cells[0].innerHTML;
            for (var j = i + 1; j < x1 - 1; j++) {
                var d2 = document.getElementById("table1").rows[j].cells[0].innerHTML;
                if (d1 == d2) {
                    //alert(x1);
                    document.getElementById("table1").deleteRow(x1 - 2);
                    var t11 = document.getElementById("table1").querySelectorAll("span");
                    var t12 = parseInt(t11[i].innerHTML);
                    t12 += 1;
                    t11[i].innerHTML = t12;
                }
            }
        }

        x1 = document.getElementById("table1").rows.length;
        testFunc1(x1);
    }

    else if (tableno == 2) {
        var total2 = document.getElementById("subtotal2").innerHTML;
        var t2 = parseInt(total2);
        t2 += parseInt(price);
        document.getElementById("subtotal2").innerHTML = t2;
        document.getElementById("box2").style.backgroundColor = "red";
        document.getElementById("table2").style.display = "table";
        document.getElementById("table2").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,2)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,2)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";

        var x2 = document.getElementById("table2").rows.length;
        for (var i = 1; i < x2 - 1; i++) {
            var d1 = document.getElementById("table2").rows[i].cells[0].innerHTML;
            for (var j = i + 1; j < x2 - 1; j++) {
                var d2 = document.getElementById("table2").rows[j].cells[0].innerHTML;
                if (d1 == d2) {
                    document.getElementById("table2").deleteRow(x2 - 2);

                    var t11 = document.getElementById("table2").querySelectorAll("span");
                    t12 = parseInt(t11[i].innerHTML);
                    t12 += 1;
                    t11[i].innerHTML = t12;

                }

            }
        }
        x2 = document.getElementById("table2").rows.length;
        testFunc2(x2);
    }
    else if (tableno == 3) {
        var total3 = document.getElementById("subtotal3").innerHTML;
        var t3 = parseInt(total3);
        t3 += parseInt(price);
        document.getElementById("subtotal3").innerHTML = t3;
        document.getElementById("box3").style.backgroundColor = "red";
        document.getElementById("table3").style.display = "table";
        document.getElementById("table3").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,3)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,3)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";

        x3 = document.getElementById("table3").rows.length;
        for (var i = 1; i < x3 - 1; i++) {
            var d1 = document.getElementById("table3").rows[i].cells[0].innerHTML;
            for (var j = i + 1; j < x3 - 1; j++) {
                var d2 = document.getElementById("table3").rows[j].cells[0].innerHTML;
                if (d1 == d2) {
                    document.getElementById("table3").deleteRow(x3 - 2);

                    var t11 = document.getElementById("table3").querySelectorAll("span");
                    t12 = parseInt(t11[i].innerHTML);
                    t12 += 1;
                    t11[i].innerHTML = t12;

                }

            }
        }
        x3 = document.getElementById("table3").rows.length;
        testFunc3(x3);
    }
    else if (tableno == 4) {
        var total4 = document.getElementById("subtotal4").innerHTML;
        var t4 = parseInt(total4);
        t4 += parseInt(price);
        document.getElementById("subtotal4").innerHTML = t4;
        document.getElementById("box4").style.backgroundColor = "red";
        document.getElementById("table4").style.display = "table";
        document.getElementById("table4").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,4)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,4)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";

        var x4 = document.getElementById("table4").rows.length;
        for (var i = 1; i < x4 - 1; i++) {
            var d1 = document.getElementById("table4").rows[i].cells[0].innerHTML;
            for (var j = i + 1; j < x4 - 1; j++) {
                var d2 = document.getElementById("table4").rows[j].cells[0].innerHTML;
                if (d1 == d2) {
                    document.getElementById("table4").deleteRow(x4 - 2);

                    var t11 = document.getElementById("table4").querySelectorAll("span");
                    t12 = parseInt(t11[i].innerHTML);
                    t12 += 1;
                    t11[i].innerHTML = t12;

                }

            }
        }
        x4 = document.getElementById("table4").rows.length;
        testFunc4(x4);
    }
    else if (tableno == 5) {
        var total5 = document.getElementById("subtotal5").innerHTML;
        var t5 = parseInt(total5);
        t5 += parseInt(price);
        document.getElementById("subtotal5").innerHTML = t5;
        document.getElementById("box5").style.backgroundColor = "red";
        document.getElementById("table5").style.display = "table";
        document.getElementById("table5").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,5)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,5)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";

        var x5 = document.getElementById("table5").rows.length;
        for (var i = 1; i < x5 - 1; i++) {
            var d1 = document.getElementById("table5").rows[i].cells[0].innerHTML;
            for (var j = i + 1; j < x5 - 1; j++) {
                var d2 = document.getElementById("table5").rows[j].cells[0].innerHTML;
                if (d1 == d2) {
                    document.getElementById("table5").deleteRow(x5 - 2);

                    var t11 = document.getElementById("table5").querySelectorAll("span");
                    t12 = parseInt(t11[i].innerHTML);
                    t12 += 1;
                    t11[i].innerHTML = t12;

                }

            }
        }
        x5 = document.getElementById("table5").rows.length;
        testFunc5(x5);
    }
    else if (tableno == 6) {
        var total6 = document.getElementById("subtotal6").innerHTML;
        var t6 = parseInt(total6);
        t6 += parseInt(price);
        document.getElementById("subtotal6").innerHTML = t6;
        document.getElementById("box6").style.backgroundColor = "red";
        document.getElementById("table6").style.display = "table";
        document.getElementById("table6").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,6)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,6)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
        var x6 = document.getElementById("table6").rows.length;
        for (var i = 1; i < x6 - 1; i++) {
            var d1 = document.getElementById("table6").rows[i].cells[0].innerHTML;
            for (var j = i + 1; j < x6 - 1; j++) {
                var d2 = document.getElementById("table6").rows[j].cells[0].innerHTML;
                if (d1 == d2) {
                    document.getElementById("table6").deleteRow(x6 - 2);

                    var t11 = document.getElementById("table6").querySelectorAll("span");
                    t12 = parseInt(t11[i].innerHTML);
                    t12 += 1;
                    t11[i].innerHTML = t12;

                }

            }
        }
        x6 = document.getElementById("table6").rows.length;
        testFunc6(x6);
    }
    else if (tableno == 7) {
        var total7 = document.getElementById("subtotal7").innerHTML;
        var t7 = parseInt(total7);
        t7 += parseInt(price);
        document.getElementById("subtotal7").innerHTML = t7;
        document.getElementById("box7").style.backgroundColor = "red";
        document.getElementById("table7").style.display = "table";
        document.getElementById("table7").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,7)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,7)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";

        var x7 = document.getElementById("table7").rows.length;
        for (var i = 1; i < x7 - 1; i++) {
            var d1 = document.getElementById("table7").rows[i].cells[0].innerHTML;
            for (var j = i + 1; j < x7 - 1; j++) {
                var d2 = document.getElementById("table7").rows[j].cells[0].innerHTML;
                if (d1 == d2) {
                    document.getElementById("table7").deleteRow(x7 - 2);

                    var t11 = document.getElementById("table7").querySelectorAll("span");
                    t12 = parseInt(t11[i].innerHTML);
                    t12 += 1;
                    t11[i].innerHTML = t12;

                }

            }
        }
        x7 = document.getElementById("table7").rows.length;
        testFunc7(x7);
    }
    else if (tableno == 8) {
        var total8 = document.getElementById("subtotal8").innerHTML;
        var t8 = parseInt(total8);
        t8 += parseInt(price);
        document.getElementById("subtotal8").innerHTML = t8;
        document.getElementById("box8").style.backgroundColor = "red";
        document.getElementById("table8").style.display = "table";
        document.getElementById("table8").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,8)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,8)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";

        var x8 = document.getElementById("table8").rows.length;
        for (var i = 1; i < x8 - 1; i++) {
            var d1 = document.getElementById("table8").rows[i].cells[0].innerHTML;
            for (var j = i + 1; j < x8 - 1; j++) {
                var d2 = document.getElementById("table8").rows[j].cells[0].innerHTML;
                if (d1 == d2) {
                    document.getElementById("table8").deleteRow(x8 - 2);

                    var t11 = document.getElementById("table8").querySelectorAll("span");
                    t12 = parseInt(t11[i].innerHTML);
                    t12 += 1;
                    t11[i].innerHTML = t12;

                }

            }
        }
        x8 = document.getElementById("table8").rows.length;
        testFunc8(x8);
    }
    else if (tableno == 9) {
        var total9 = document.getElementById("subtotal9").innerHTML;
        var t9 = parseInt(total9);
        t9 += parseInt(price);
        document.getElementById("subtotal9").innerHTML = t9;
        document.getElementById("box9").style.backgroundColor = "red";
        document.getElementById("table9").style.display = "table";
        document.getElementById("table9").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,9)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,9)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";

        var x9 = document.getElementById("table9").rows.length;
        for (var i = 1; i < x9 - 1; i++) {
            var d1 = document.getElementById("table9").rows[i].cells[0].innerHTML;
            for (var j = i + 1; j < x9 - 1; j++) {
                var d2 = document.getElementById("table9").rows[j].cells[0].innerHTML;
                if (d1 == d2) {
                    document.getElementById("table9").deleteRow(x9 - 2);

                    var t11 = document.getElementById("table9").querySelectorAll("span");
                    t12 = parseInt(t11[i].innerHTML);
                    t12 += 1;
                    t11[i].innerHTML = t12;

                }

            }
        }
        x9 = document.getElementById("table9").rows.length;
        testFunc9(x9);
    }
    else if (tableno == 10) {
        var total10 = document.getElementById("subtotal10").innerHTML;
        var t10 = parseInt(total10);
        t10 += parseInt(price);
        document.getElementById("subtotal10").innerHTML = t10;
        document.getElementById("box10").style.backgroundColor = "red";
        document.getElementById("table10").style.display = "table";
        document.getElementById("table10").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,10)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,10)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
        var x10 = document.getElementById("table10").rows.length;

        for (var i = 1; i < x10 - 1; i++) {
            var d1 = document.getElementById("table10").rows[i].cells[0].innerHTML;
            for (var j = i + 1; j < x10 - 1; j++) {
                var d2 = document.getElementById("table10").rows[j].cells[0].innerHTML;
                if (d1 == d2) {
                    document.getElementById("table10").deleteRow(x10 - 2);

                    var t11 = document.getElementById("table10").querySelectorAll("span");
                    t12 = parseInt(t11[i].innerHTML);
                    t12 += 1;
                    t11[i].innerHTML = t12;

                }

            }
        }
        x10 = document.getElementById("table10").rows.length;
        testFunc10(x10);
    }





}
//upper function ends---------------------------------------------------------------------------------------------
//this is for cart button in top nav just opens the cart and do nothing other operations------------------------
function openCartMenu() {
    document.getElementById("tabcontentcart").style.display = "block";
    document.getElementById("tableselect").style.height = "0%";
}
//upper function ends---------------------------------------------------------------------------------------

//these is to increase or decrease quantity of dish when + or - button pressed-----------------------------
function increaseq(r, tableno) {
    var i = r.parentNode.parentNode.rowIndex;

    if (tableno == 1) {
        var t11 = document.getElementById("table1").querySelectorAll("span");
        t12 = parseInt(t11[i].innerHTML);
        t12 += 1;
        t11[i].innerHTML = t12;
        var p11 = document.getElementById("table1").querySelectorAll("pri");
        var p12 = p11[i - 1].innerHTML;
        var p13 = parseInt(p12)
        var p14 = document.getElementById("subtotal1").innerHTML;
        var p15 = parseInt(p14);
        localStorage.setItem("subtotal1", p15 + p13);
        document.getElementById("subtotal1").innerHTML = localStorage.getItem("subtotal1");
        var x1 = document.getElementById("table1").rows.length;
        testFunc1(x1);
    }
    else if (tableno == 2) {
        var t21 = document.getElementById("table2").querySelectorAll("span");
        var t22 = parseInt(t21[i].innerHTML);
        t22 += 1;
        t21[i].innerHTML = t22;
        var p21 = document.getElementById("table2").querySelectorAll("pri");
        var p22 = p21[i - 1].innerHTML;
        var p23 = parseInt(p22)
        var p24 = document.getElementById("subtotal2").innerHTML;
        var p25 = parseInt(p24);
        document.getElementById("subtotal2").innerHTML = p25 + p23;
        var x2 = document.getElementById("table2").rows.length;
        testFunc2(x2);
    }
    else if (tableno == 3) {
        var t31 = document.getElementById("table3").querySelectorAll("span");
        var t32 = parseInt(t31[i].innerHTML);
        t32 += 1;
        t31[i].innerHTML = t32;
        var p31 = document.getElementById("table3").querySelectorAll("pri");
        var p32 = p31[i - 1].innerHTML;
        var p33 = parseInt(p32)
        var p34 = document.getElementById("subtotal3").innerHTML;
        var p35 = parseInt(p34);
        document.getElementById("subtotal3").innerHTML = p35 + p33;
        var x3 = document.getElementById("table3").rows.length;
        testFunc3(x3);
    }
    else if (tableno == 4) {
        var t41 = document.getElementById("table4").querySelectorAll("span");
        t42 = parseInt(t41[i].innerHTML);
        t42 += 1;
        t41[i].innerHTML = t42;
        var p41 = document.getElementById("table4").querySelectorAll("pri");
        var p42 = p41[i - 1].innerHTML;
        var p43 = parseInt(p42)
        var p44 = document.getElementById("subtotal4").innerHTML;
        var p45 = parseInt(p44);
        document.getElementById("subtotal4").innerHTML = p45 + p43;
        var x4 = document.getElementById("table4").rows.length;
        testFunc4(x4);
    }
    else if (tableno == 5) {
        var t51 = document.getElementById("table5").querySelectorAll("span");
        var t52 = parseInt(t51[i].innerHTML);
        t52 += 1;
        t51[i].innerHTML = t52;
        var p51 = document.getElementById("table5").querySelectorAll("pri");
        var p52 = p51[i - 1].innerHTML;
        var p53 = parseInt(p52)
        var p54 = document.getElementById("subtotal5").innerHTML;
        var p55 = parseInt(p54);
        document.getElementById("subtotal5").innerHTML = p55 + p53;
        var x5 = document.getElementById("table5").rows.length;
        testFunc5(x5);
    }
    else if (tableno == 6) {
        var t61 = document.getElementById("table6").querySelectorAll("span");
        var t62 = parseInt(t61[i].innerHTML);
        t62 += 1;
        t61[i].innerHTML = t62;
        var p61 = document.getElementById("table6").querySelectorAll("pri");
        var p62 = p61[i - 1].innerHTML;
        var p63 = parseInt(p62)
        var p64 = document.getElementById("subtotal6").innerHTML;
        var p65 = parseInt(p64);
        document.getElementById("subtotal6").innerHTML = p65 + p63;
        var x6 = document.getElementById("table6").rows.length;
        testFunc6(x6);
    }
    else if (tableno == 7) {
        var t71 = document.getElementById("table7").querySelectorAll("span");
        var t72 = parseInt(t71[i].innerHTML);
        t72 += 1;
        t71[i].innerHTML = t72;
        var p71 = document.getElementById("table7").querySelectorAll("pri");
        var p72 = p71[i - 1].innerHTML;
        var p73 = parseInt(p72)
        var p74 = document.getElementById("subtotal7").innerHTML;
        var p75 = parseInt(p74);
        document.getElementById("subtotal7").innerHTML = p75 + p73;
        var x7 = document.getElementById("table7").rows.length;
        testFunc7(x7);
    }
    else if (tableno == 8) {
        var t81 = document.getElementById("table8").querySelectorAll("span");
        var t82 = parseInt(t81[i].innerHTML);
        t82 += 1;
        t81[i].innerHTML = t82;
        var p81 = document.getElementById("table8").querySelectorAll("pri");
        var p82 = p81[i - 1].innerHTML;
        var p83 = parseInt(p82)
        var p84 = document.getElementById("subtotal8").innerHTML;
        var p85 = parseInt(p84);
        document.getElementById("subtotal8").innerHTML = p85 + p83;
        var x8 = document.getElementById("table8").rows.length;
        testFunc8(x8);
    }
    else if (tableno == 9) {
        var t91 = document.getElementById("table9").querySelectorAll("span");
        var t92 = parseInt(t91[i].innerHTML);
        t92 += 1;
        t91[i].innerHTML = t92;
        var p91 = document.getElementById("table9").querySelectorAll("pri");
        var p92 = p91[i - 1].innerHTML;
        var p93 = parseInt(p92)
        var p94 = document.getElementById("subtotal9").innerHTML;
        var p95 = parseInt(p94);
        document.getElementById("subtotal9").innerHTML = p95 + p93;
        var x9 = document.getElementById("table9").rows.length;
        testFunc9(x9);
    }
    else if (tableno == 10) {
        var t101 = document.getElementById("table10").querySelectorAll("span");
        var t102 = parseInt(t101[i].innerHTML);
        t102 += 1;
        t101[i].innerHTML = t102;
        var p101 = document.getElementById("table10").querySelectorAll("pri");
        var p102 = p101[i - 1].innerHTML;
        var p103 = parseInt(p102)
        var p104 = document.getElementById("subtotal10").innerHTML;
        var p105 = parseInt(p104);
        document.getElementById("subtotal10").innerHTML = p105 + p103;
        var x10 = document.getElementById("table10").rows.length;
        testFunc10(x10);
    }
}
function decreaseq(r, tableno) {
    var i = r.parentNode.parentNode.rowIndex;

    if (tableno == 1) {

        var t11 = document.getElementById("table1").querySelectorAll("span");
        t12 = parseInt(t11[i].innerHTML);
        t12 -= 1;
        t11[i].innerHTML = t12;
        var p11 = document.getElementById("table1").querySelectorAll("pri");
        var p12 = p11[i - 1].innerHTML;
        var p13 = parseInt(p12)
        var p14 = document.getElementById("subtotal1").innerHTML;
        var p15 = parseInt(p14);
        document.getElementById("subtotal1").innerHTML = p15 - p13;
        if (t12 == 0) {
            document.getElementById("table1").deleteRow(i);
        }
        var x1 = document.getElementById("table1").rows.length;
        if (x1 == 2) {
            document.getElementById("table1").style.display = "none";
            document.getElementById("box1").style.backgroundColor = "#348025";
        }
        var x1 = document.getElementById("table1").rows.length;
        testFunc1(x1);
    }
    else if (tableno == 2) {
        var t21 = document.getElementById("table2").querySelectorAll("span");
        t22 = parseInt(t21[i].innerHTML);
        t22 -= 1;
        t21[i].innerHTML = t22;
        var p21 = document.getElementById("table2").querySelectorAll("pri");
        var p22 = p21[i - 1].innerHTML;
        var p23 = parseInt(p22)
        var p24 = document.getElementById("subtotal2").innerHTML;
        var p25 = parseInt(p24);
        document.getElementById("subtotal2").innerHTML = p25 - p23;
        if (t22 == 0) {
            document.getElementById("table2").deleteRow(i);
        }
        var x2 = document.getElementById("table2").rows.length;
        if (x2 == 2) {
            document.getElementById("table2").style.display = "none";
            document.getElementById("box2").style.backgroundColor = "#348025";
        }
        var x2 = document.getElementById("table2").rows.length;
        testFunc2(x2);
    }
    else if (tableno == 3) {
        var t31 = document.getElementById("table3").querySelectorAll("span");
        t32 = parseInt(t31[i].innerHTML);
        t32 -= 1;
        t31[i].innerHTML = t32;
        var p31 = document.getElementById("table3").querySelectorAll("pri");
        var p32 = p31[i - 1].innerHTML;
        var p33 = parseInt(p32)
        var p34 = document.getElementById("subtotal3").innerHTML;
        var p35 = parseInt(p34);
        document.getElementById("subtotal3").innerHTML = p35 - p33;
        if (t32 == 0) {
            document.getElementById("table3").deleteRow(i);
        }
        var x3 = document.getElementById("table3").rows.length;
        if (x3 == 2) {
            document.getElementById("table3").style.display = "none";
            document.getElementById("box3").style.backgroundColor = "#348025";
        }
        var x3 = document.getElementById("table3").rows.length;
        testFunc3(x3);
    }
    else if (tableno == 4) {
        var t41 = document.getElementById("table4").querySelectorAll("span");
        t42 = parseInt(t41[i].innerHTML);
        t42 -= 1;
        t41[i].innerHTML = t42;
        var p41 = document.getElementById("table4").querySelectorAll("pri");
        var p42 = p41[i - 1].innerHTML;
        var p43 = parseInt(p42)
        var p44 = document.getElementById("subtotal4").innerHTML;
        var p45 = parseInt(p44);
        document.getElementById("subtotal4").innerHTML = p45 - p43;
        if (t42 == 0) {
            document.getElementById("table4").deleteRow(i);
        }
        var x4 = document.getElementById("table4").rows.length;
        if (x4 == 2) {
            document.getElementById("table4").style.display = "none";
            document.getElementById("box4").style.backgroundColor = "#348025";
        }
        var x4 = document.getElementById("table4").rows.length;
        testFunc4(x4);
    }
    else if (tableno == 5) {
        var t51 = document.getElementById("table5").querySelectorAll("span");
        t52 = parseInt(t51[i].innerHTML);
        t52 -= 1;
        t51[i].innerHTML = t52;
        var p51 = document.getElementById("table5").querySelectorAll("pri");
        var p52 = p51[i - 1].innerHTML;
        var p53 = parseInt(p52)
        var p54 = document.getElementById("subtotal5").innerHTML;
        var p55 = parseInt(p54);
        document.getElementById("subtotal5").innerHTML = p55 - p53;
        if (t52 == 0) {
            document.getElementById("table5").deleteRow(i);
        }
        var x5 = document.getElementById("table5").rows.length;
        if (x5 == 2) {
            document.getElementById("table5").style.display = "none";
            document.getElementById("box5").style.backgroundColor = "#348025";
        }
        var x5 = document.getElementById("table5").rows.length;
        testFunc5(x5);
    }
    else if (tableno == 6) {
        var t61 = document.getElementById("table6").querySelectorAll("span");
        t62 = parseInt(t61[i].innerHTML);
        t62 -= 1;
        t61[i].innerHTML = t62;
        var p61 = document.getElementById("table6").querySelectorAll("pri");
        var p62 = p61[i - 1].innerHTML;
        var p63 = parseInt(p62)
        var p64 = document.getElementById("subtotal6").innerHTML;
        var p65 = parseInt(p64);
        document.getElementById("subtotal6").innerHTML = p65 - p63;
        if (t62 == 0) {
            document.getElementById("table6").deleteRow(i);
        }
        var x6 = document.getElementById("table6").rows.length;
        if (x6 == 2) {
            document.getElementById("table6").style.display = "none";
            document.getElementById("box6").style.backgroundColor = "#348025";
        }
        var x6 = document.getElementById("table6").rows.length;
        testFunc6(x6);
    }
    else if (tableno == 7) {
        var t71 = document.getElementById("table7").querySelectorAll("span");
        t72 = parseInt(t71[i].innerHTML);
        t72 -= 1;
        t71[i].innerHTML = t72;
        var p71 = document.getElementById("table7").querySelectorAll("pri");
        var p72 = p71[i - 1].innerHTML;
        var p73 = parseInt(p72)
        var p74 = document.getElementById("subtotal7").innerHTML;
        var p75 = parseInt(p74);
        document.getElementById("subtotal7").innerHTML = p75 - p73;
        if (t72 == 0) {
            document.getElementById("table7").deleteRow(i);
        }
        var x7 = document.getElementById("table7").rows.length;
        if (x7 == 2) {
            document.getElementById("table7").style.display = "none";
            document.getElementById("box7").style.backgroundColor = "#348025";
        }
        var x7 = document.getElementById("table7").rows.length;
        testFunc7(x7);
    }
    else if (tableno == 8) {
        var t81 = document.getElementById("table8").querySelectorAll("span");
        t82 = parseInt(t81[i].innerHTML);
        t82 -= 1;
        t81[i].innerHTML = t82;
        var p81 = document.getElementById("table8").querySelectorAll("pri");
        var p82 = p81[i - 1].innerHTML;
        var p83 = parseInt(p82)
        var p84 = document.getElementById("subtotal8").innerHTML;
        var p85 = parseInt(p84);
        document.getElementById("subtotal8").innerHTML = p85 - p83;
        if (t82 == 0) {
            document.getElementById("table8").deleteRow(i);
        }
        var x8 = document.getElementById("table8").rows.length;
        if (x8 == 2) {
            document.getElementById("table8").style.display = "none";
            document.getElementById("box8").style.backgroundColor = "#348025";
        }
        var x8 = document.getElementById("table8").rows.length;
        testFunc8(x8);
    }
    else if (tableno == 9) {
        var t91 = document.getElementById("table9").querySelectorAll("span");
        t92 = parseInt(t91[i].innerHTML);
        t92 -= 1;
        t91[i].innerHTML = t92;
        var p91 = document.getElementById("table9").querySelectorAll("pri");
        var p92 = p91[i - 1].innerHTML;
        var p93 = parseInt(p92)
        var p94 = document.getElementById("subtotal9").innerHTML;
        var p95 = parseInt(p94);
        document.getElementById("subtotal9").innerHTML = p95 - p93;
        if (t92 == 0) {
            document.getElementById("table9").deleteRow(i);
        }
        var x9 = document.getElementById("table9").rows.length;
        if (x9 == 2) {
            document.getElementById("table9").style.display = "none";
            document.getElementById("box9").style.backgroundColor = "#348025";
        }
        var x9 = document.getElementById("table9").rows.length;
        testFunc9(x9);
    }
    else if (tableno == 10) {
        var t101 = document.getElementById("table10").querySelectorAll("span");
        t102 = parseInt(t101[i].innerHTML);
        t102 -= 1;
        t101[i].innerHTML = t102;
        var p101 = document.getElementById("table10").querySelectorAll("pri");
        var p102 = p101[i - 1].innerHTML;
        var p103 = parseInt(p102)
        var p104 = document.getElementById("subtotal10").innerHTML;
        var p105 = parseInt(p104);
        document.getElementById("subtotal10").innerHTML = p105 - p103;
        if (t102 == 0) {
            document.getElementById("table10").deleteRow(i);
        }
        var x10 = document.getElementById("table10").rows.length;
        if (x10 == 2) {
            document.getElementById("table10").style.display = "none";
            document.getElementById("box10").style.backgroundColor = "#348025";
        }
        var x10 = document.getElementById("table10").rows.length;
        testFunc10(x10);
    }
}
//upper function ends-------------------------------------------------------------------------------------------

//this for more information about dish tab------------------------------------------------------------------------
function openInfo(infoid) {

    document.getElementById("infotab").style.height = "90%";
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
//upper function ends--------------------------------------------------------------------------------------------

//call all function for localstorage print on reload------------------------------------------------------
window.onload = function () { call() };
function call() {
    // localStorage.clear();
    retrive1();
    retrive2();
    retrive3();
    retrive4();
    retrive5();
    retrive6();
    retrive7();
    retrive8();
    retrive9();
    retrive10();
}
//thease function are to print thae data lost on reload of browser for each table there is one function---------------
function retrive1() {

    var dishname;
    var price;
    var x1 = localStorage.getItem("rl1");
    if (x1 > 2) {
        document.getElementById("box1").style.backgroundColor = "red";
        document.getElementById("table1").style.display = "table";
        document.getElementById("subtotal1").innerHTML = localStorage.getItem("subtotal1");
        for (var i = 1; i < x1 - 1; i++) {
            dishname = localStorage.getItem("d1" + i);
            price = localStorage.getItem("p1" + i);
            document.getElementById("table1").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,1)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,1)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
            var t11 = document.getElementById("table1").querySelectorAll("span");
            quantity = localStorage.getItem("q1" + i);
            t11[i].innerHTML = quantity;
        }
    }
}
function retrive2() {

    var dishname;
    var price;
    var x1 = localStorage.getItem("rl2");
    if (x1 > 2) {
        document.getElementById("box2").style.backgroundColor = "red";
        document.getElementById("table2").style.display = "table";
        document.getElementById("subtotal2").innerHTML = localStorage.getItem("subtotal2");
        for (var i = 1; i < x1 - 1; i++) {
            dishname = localStorage.getItem("d2" + i);
            price = localStorage.getItem("p2" + i);
            document.getElementById("table2").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,2)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,2)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
            var t21 = document.getElementById("table2").querySelectorAll("span");
            quantity = localStorage.getItem("q2" + i);
            t21[i].innerHTML = quantity;
        }
    }
}
function retrive3() {

    var dishname;
    var price;
    var x1 = localStorage.getItem("rl3");
    if (x1 > 2) {
        document.getElementById("box3").style.backgroundColor = "red";
        document.getElementById("table3").style.display = "table";
        document.getElementById("subtotal3").innerHTML = localStorage.getItem("subtotal3");
        for (var i = 1; i < x1 - 1; i++) {
            dishname = localStorage.getItem("d3" + i);
            price = localStorage.getItem("p3" + i);
            document.getElementById("table3").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,3)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,3)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
            var t31 = document.getElementById("table3").querySelectorAll("span");
            quantity = localStorage.getItem("q3" + i);
            t31[i].innerHTML = quantity;
        }
    }
}
function retrive4() {

    var dishname;
    var price;
    var x1 = localStorage.getItem("rl4");
    if (x1 > 2) {
        document.getElementById("box4").style.backgroundColor = "red";
        document.getElementById("table4").style.display = "table";
        document.getElementById("subtotal4").innerHTML = localStorage.getItem("subtotal4");
        for (var i = 1; i < x1 - 1; i++) {
            dishname = localStorage.getItem("d4" + i);
            price = localStorage.getItem("p4" + i);
            document.getElementById("table4").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,4)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,4)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
            var t41 = document.getElementById("table4").querySelectorAll("span");
            quantity = localStorage.getItem("q4" + i);
            t41[i].innerHTML = quantity;
        }
    }
}
function retrive5() {

    var dishname;
    var price;
    var x1 = localStorage.getItem("rl5");
    if (x1 > 2) {
        document.getElementById("box5").style.backgroundColor = "red";
        document.getElementById("table5").style.display = "table";
        document.getElementById("subtotal5").innerHTML = localStorage.getItem("subtotal5");
        for (var i = 1; i < x1 - 1; i++) {
            dishname = localStorage.getItem("d5" + i);
            price = localStorage.getItem("p5" + i);
            document.getElementById("table5").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,5)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,5)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
            var t51 = document.getElementById("table5").querySelectorAll("span");
            quantity = localStorage.getItem("q5" + i);
            t51[i].innerHTML = quantity;
        }
    }
}
function retrive6() {

    var dishname;
    var price;
    var x1 = localStorage.getItem("rl6");
    if (x1 > 2) {
        document.getElementById("box6").style.backgroundColor = "red";
        document.getElementById("table6").style.display = "table";
        document.getElementById("subtotal6").innerHTML = localStorage.getItem("subtotal6");
        for (var i = 1; i < x1 - 1; i++) {
            dishname = localStorage.getItem("d6" + i);
            price = localStorage.getItem("p6" + i);
            document.getElementById("table6").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,6)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,6)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
            var t61 = document.getElementById("table6").querySelectorAll("span");
            quantity = localStorage.getItem("q6" + i);
            t61[i].innerHTML = quantity;
        }
    }
}
function retrive7() {

    var dishname;
    var price;
    var x1 = localStorage.getItem("rl7");
    if (x1 > 2) {
        document.getElementById("box7").style.backgroundColor = "red";
        document.getElementById("table7").style.display = "table";
        document.getElementById("subtotal7").innerHTML = localStorage.getItem("subtotal7");
        for (var i = 1; i < x1 - 1; i++) {
            dishname = localStorage.getItem("d7" + i);
            price = localStorage.getItem("p7" + i);
            document.getElementById("table7").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,7)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,7)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
            var t71 = document.getElementById("table7").querySelectorAll("span");
            quantity = localStorage.getItem("q7" + i);
            t71[i].innerHTML = quantity;
        }
    }
}
function retrive8() {

    var dishname;
    var price;
    var x1 = localStorage.getItem("rl8");
    if (x1 > 2) {
        document.getElementById("box8").style.backgroundColor = "red";
        document.getElementById("table8").style.display = "table";
        document.getElementById("subtotal8").innerHTML = localStorage.getItem("subtotal8");
        for (var i = 1; i < x1 - 1; i++) {
            dishname = localStorage.getItem("d8" + i);
            price = localStorage.getItem("p8" + i);
            document.getElementById("table8").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,8)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,8)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
            var t81 = document.getElementById("table8").querySelectorAll("span");
            quantity = localStorage.getItem("q8" + i);
            t81[i].innerHTML = quantity;
        }
    }
}
function retrive9() {

    var dishname;
    var price;
    var x1 = localStorage.getItem("rl9");
    if (x1 > 2) {
        document.getElementById("box9").style.backgroundColor = "red";
        document.getElementById("table9").style.display = "table";
        document.getElementById("subtotal9").innerHTML = localStorage.getItem("subtotal9");
        for (var i = 1; i < x1 - 1; i++) {
            dishname = localStorage.getItem("d9" + i);
            price = localStorage.getItem("p9" + i);
            document.getElementById("table9").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,9)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,9)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
            var t91 = document.getElementById("table9").querySelectorAll("span");
            quantity = localStorage.getItem("q9" + i);
            t91[i].innerHTML = quantity;
        }
    }
}
function retrive10() {

    var dishname;
    var price;
    var x1 = localStorage.getItem("rl10");
    if (x1 > 2) {
        document.getElementById("box10").style.backgroundColor = "red";
        document.getElementById("table10").style.display = "table";
        document.getElementById("subtotal10").innerHTML = localStorage.getItem("subtotal10");
        for (var i = 1; i < x1 - 1; i++) {
            dishname = localStorage.getItem("d10" + i);
            price = localStorage.getItem("p10" + i);
            document.getElementById("table10").innerHTML += "<tr>" + "<td>" + dishname + "</td>" + "<td>" + "<button id='decrease' onclick='decreaseq(this,10)'>-</button><span id='quantity'>1</span><button id='increase' onclick='increaseq(this,10)'>+</button>" + "</td>" + "<td>" + "&#8377 " + "<pri>" + price + "</pri>" + "</td>" + "</tr>";
            var t101 = document.getElementById("table10").querySelectorAll("span");
            quantity = localStorage.getItem("q10" + i);
            t101[i].innerHTML = quantity;
        }
    }
}
//upper functions ends-------------------------------------------------------------------------------------------
//these functions take data backup of cart whenever there is any change detected in cart--------------------------
function testFunc1(x1) {
    for (var i = 0; i <= 200; i++) {
        localStorage.removeItem("d1" + i);
        localStorage.removeItem("p1" + i);
        localStorage.removeItem("q1" + i);
        localStorage.removeItem("subtotal1");
        localStorage.removeItem("rl1");
    }
    var darr = new Array(x1 - 2);
    var parr = new Array(x1 - 2);
    var tarr = new Array(x1 - 2);
    var subtotal1 = 0;

    for (var i = 1; i < x1 - 1; i++) {
        darr[i - 1] = document.getElementById("table1").rows[i].cells[0].innerHTML;
        localStorage.setItem("d1" + i, darr[i - 1]);
        var p11 = document.getElementById("table1").querySelectorAll("pri");
        parr[i - 1] = p11[i - 1].innerHTML;
        localStorage.setItem("p1" + i, parr[i - 1]);
        var t11 = document.getElementById("table1").querySelectorAll("span");
        tarr[i - 1] = t11[i].innerHTML;
        localStorage.setItem("q1" + i, tarr[i - 1]);
        subtotal1 += parseInt(parr[i - 1]) * parseInt(tarr[i - 1]);
    }
    localStorage.setItem("subtotal1", subtotal1);
    localStorage.setItem("rl1", x1);
}
function testFunc2(x1) {
    for (var i = 0; i <= 200; i++) {
        localStorage.removeItem("d2" + i);
        localStorage.removeItem("p2" + i);
        localStorage.removeItem("q2" + i);
        localStorage.removeItem("subtotal2");
        localStorage.removeItem("rl2");

    }

    var darr = new Array(x1 - 2);
    var parr = new Array(x1 - 2);
    var tarr = new Array(x1 - 2);
    var subtotal2 = 0;
    for (var i = 1; i < x1 - 1; i++) {
        darr[i - 1] = document.getElementById("table2").rows[i].cells[0].innerHTML;
        localStorage.setItem("d2" + i, darr[i - 1]);
        var p21 = document.getElementById("table2").querySelectorAll("pri");
        parr[i - 1] = p21[i - 1].innerHTML;
        localStorage.setItem("p2" + i, parr[i - 1]);
        var t21 = document.getElementById("table2").querySelectorAll("span");
        tarr[i - 1] = t21[i].innerHTML;
        localStorage.setItem("q2" + i, tarr[i - 1]);
        subtotal2 += parseInt(parr[i - 1]) * parseInt(tarr[i - 1]);
    }
    localStorage.setItem("subtotal2", subtotal2)
    localStorage.setItem("rl2", x1);

}
function testFunc3(x1) {
    for (var i = 0; i <= 200; i++) {
        localStorage.removeItem("d3" + i);
        localStorage.removeItem("p3" + i);
        localStorage.removeItem("q3" + i);
        localStorage.removeItem("subtotal3");
        localStorage.removeItem("rl3");

    }

    var darr = new Array(x1 - 2);
    var parr = new Array(x1 - 2);
    var tarr = new Array(x1 - 2);
    var subtotal3 = 0;
    for (var i = 1; i < x1 - 1; i++) {
        darr[i - 1] = document.getElementById("table3").rows[i].cells[0].innerHTML;
        localStorage.setItem("d3" + i, darr[i - 1]);
        var p31 = document.getElementById("table3").querySelectorAll("pri");
        parr[i - 1] = p31[i - 1].innerHTML;
        localStorage.setItem("p3" + i, parr[i - 1]);
        var t31 = document.getElementById("table3").querySelectorAll("span");
        tarr[i - 1] = t31[i].innerHTML;
        localStorage.setItem("q3" + i, tarr[i - 1]);
        subtotal3 += parseInt(parr[i - 1]) * parseInt(tarr[i - 1]);
    }
    localStorage.setItem("subtotal3", subtotal3)
    localStorage.setItem("rl3", x1);

}
function testFunc4(x1) {
    for (var i = 0; i <= 200; i++) {
        localStorage.removeItem("d4" + i);
        localStorage.removeItem("p4" + i);
        localStorage.removeItem("q4" + i);
        localStorage.removeItem("subtotal4");
        localStorage.removeItem("rl4");

    }

    var darr = new Array(x1 - 2);
    var parr = new Array(x1 - 2);
    var tarr = new Array(x1 - 2);
    var subtotal4 = 0;
    for (var i = 1; i < x1 - 1; i++) {
        darr[i - 1] = document.getElementById("table4").rows[i].cells[0].innerHTML;
        localStorage.setItem("d4" + i, darr[i - 1]);
        var p21 = document.getElementById("table4").querySelectorAll("pri");
        parr[i - 1] = p21[i - 1].innerHTML;
        localStorage.setItem("p4" + i, parr[i - 1]);
        var t21 = document.getElementById("table4").querySelectorAll("span");
        tarr[i - 1] = t21[i].innerHTML;
        localStorage.setItem("q4" + i, tarr[i - 1]);
        subtotal4 += parseInt(parr[i - 1]) * parseInt(tarr[i - 1]);
    }
    localStorage.setItem("subtotal4", subtotal4)
    localStorage.setItem("rl4", x1);

}
function testFunc5(x1) {
    for (var i = 0; i <= 200; i++) {
        localStorage.removeItem("d5" + i);
        localStorage.removeItem("p5" + i);
        localStorage.removeItem("q5" + i);
        localStorage.removeItem("subtotal5");
        localStorage.removeItem("rl5");

    }

    var darr = new Array(x1 - 2);
    var parr = new Array(x1 - 2);
    var tarr = new Array(x1 - 2);
    var subtotal5 = 0;
    for (var i = 1; i < x1 - 1; i++) {
        darr[i - 1] = document.getElementById("table5").rows[i].cells[0].innerHTML;
        localStorage.setItem("d5" + i, darr[i - 1]);
        var p21 = document.getElementById("table5").querySelectorAll("pri");
        parr[i - 1] = p21[i - 1].innerHTML;
        localStorage.setItem("p5" + i, parr[i - 1]);
        var t21 = document.getElementById("table5").querySelectorAll("span");
        tarr[i - 1] = t21[i].innerHTML;
        localStorage.setItem("q5" + i, tarr[i - 1]);
        subtotal5 += parseInt(parr[i - 1]) * parseInt(tarr[i - 1]);
    }
    localStorage.setItem("subtotal5", subtotal5)
    localStorage.setItem("rl5", x1);

}
function testFunc6(x1) {
    for (var i = 0; i <= 200; i++) {
        localStorage.removeItem("d6" + i);
        localStorage.removeItem("p6" + i);
        localStorage.removeItem("q6" + i);
        localStorage.removeItem("subtotal6");
        localStorage.removeItem("rl6");

    }

    var darr = new Array(x1 - 2);
    var parr = new Array(x1 - 2);
    var tarr = new Array(x1 - 2);
    var subtotal6 = 0;
    for (var i = 1; i < x1 - 1; i++) {
        darr[i - 1] = document.getElementById("table6").rows[i].cells[0].innerHTML;
        localStorage.setItem("d6" + i, darr[i - 1]);
        var p21 = document.getElementById("table6").querySelectorAll("pri");
        parr[i - 1] = p21[i - 1].innerHTML;
        localStorage.setItem("p6" + i, parr[i - 1]);
        var t21 = document.getElementById("table6").querySelectorAll("span");
        tarr[i - 1] = t21[i].innerHTML;
        localStorage.setItem("q6" + i, tarr[i - 1]);
        subtotal6 += parseInt(parr[i - 1]) * parseInt(tarr[i - 1]);
    }
    localStorage.setItem("subtotal6", subtotal6)
    localStorage.setItem("rl6", x1);

}
function testFunc7(x1) {
    for (var i = 0; i <= 200; i++) {
        localStorage.removeItem("d7" + i);
        localStorage.removeItem("p7" + i);
        localStorage.removeItem("q7" + i);
        localStorage.removeItem("subtotal7");
        localStorage.removeItem("rl7");

    }

    var darr = new Array(x1 - 2);
    var parr = new Array(x1 - 2);
    var tarr = new Array(x1 - 2);
    var subtotal7 = 0;
    for (var i = 1; i < x1 - 1; i++) {
        darr[i - 1] = document.getElementById("table7").rows[i].cells[0].innerHTML;
        localStorage.setItem("d7" + i, darr[i - 1]);
        var p21 = document.getElementById("table7").querySelectorAll("pri");
        parr[i - 1] = p21[i - 1].innerHTML;
        localStorage.setItem("p7" + i, parr[i - 1]);
        var t21 = document.getElementById("table7").querySelectorAll("span");
        tarr[i - 1] = t21[i].innerHTML;
        localStorage.setItem("q7" + i, tarr[i - 1]);
        subtotal7 += parseInt(parr[i - 1]) * parseInt(tarr[i - 1]);
    }
    localStorage.setItem("subtotal7", subtotal7)
    localStorage.setItem("rl7", x1);

}
function testFunc8(x1) {
    for (var i = 0; i <= 200; i++) {
        localStorage.removeItem("d8" + i);
        localStorage.removeItem("p8" + i);
        localStorage.removeItem("q8" + i);
        localStorage.removeItem("subtotal8");
        localStorage.removeItem("rl8");

    }

    var darr = new Array(x1 - 2);
    var parr = new Array(x1 - 2);
    var tarr = new Array(x1 - 2);
    var subtotal8 = 0;
    for (var i = 1; i < x1 - 1; i++) {
        darr[i - 1] = document.getElementById("table8").rows[i].cells[0].innerHTML;
        localStorage.setItem("d8" + i, darr[i - 1]);
        var p21 = document.getElementById("table8").querySelectorAll("pri");
        parr[i - 1] = p21[i - 1].innerHTML;
        localStorage.setItem("p8" + i, parr[i - 1]);
        var t21 = document.getElementById("table8").querySelectorAll("span");
        tarr[i - 1] = t21[i].innerHTML;
        localStorage.setItem("q8" + i, tarr[i - 1]);
        subtotal8 += parseInt(parr[i - 1]) * parseInt(tarr[i - 1]);
    }
    localStorage.setItem("subtotal8", subtotal8)
    localStorage.setItem("rl8", x1);

}
function testFunc9(x1) {
    for (var i = 0; i <= 200; i++) {
        localStorage.removeItem("d9" + i);
        localStorage.removeItem("p9" + i);
        localStorage.removeItem("q9" + i);
        localStorage.removeItem("subtotal9");
        localStorage.removeItem("rl9");

    }

    var darr = new Array(x1 - 2);
    var parr = new Array(x1 - 2);
    var tarr = new Array(x1 - 2);
    var subtotal9 = 0;
    for (var i = 1; i < x1 - 1; i++) {
        darr[i - 1] = document.getElementById("table9").rows[i].cells[0].innerHTML;
        localStorage.setItem("d9" + i, darr[i - 1]);
        var p21 = document.getElementById("table9").querySelectorAll("pri");
        parr[i - 1] = p21[i - 1].innerHTML;
        localStorage.setItem("p9" + i, parr[i - 1]);
        var t21 = document.getElementById("table9").querySelectorAll("span");
        tarr[i - 1] = t21[i].innerHTML;
        localStorage.setItem("q9" + i, tarr[i - 1]);
        subtotal9 += parseInt(parr[i - 1]) * parseInt(tarr[i - 1]);
    }
    localStorage.setItem("subtotal9", subtotal9)
    localStorage.setItem("rl9", x1);

}
function testFunc10(x1) {
    for (var i = 0; i <= 200; i++) {
        localStorage.removeItem("d10" + i);
        localStorage.removeItem("p10" + i);
        localStorage.removeItem("q10" + i);
        localStorage.removeItem("subtotal10");
        localStorage.removeItem("rl10");

    }

    var darr = new Array(x1 - 2);
    var parr = new Array(x1 - 2);
    var tarr = new Array(x1 - 2);
    var subtotal10 = 0;
    for (var i = 1; i < x1 - 1; i++) {
        darr[i - 1] = document.getElementById("table10").rows[i].cells[0].innerHTML;
        localStorage.setItem("d10" + i, darr[i - 1]);
        var p21 = document.getElementById("table10").querySelectorAll("pri");
        parr[i - 1] = p21[i - 1].innerHTML;
        localStorage.setItem("p10" + i, parr[i - 1]);
        var t21 = document.getElementById("table10").querySelectorAll("span");
        tarr[i - 1] = t21[i].innerHTML;
        localStorage.setItem("q10" + i, tarr[i - 1]);
        subtotal10 += parseInt(parr[i - 1]) * parseInt(tarr[i - 1]);
    }
    localStorage.setItem("subtotal10", subtotal10)
    localStorage.setItem("rl10", x10);

}
//upper function ends-------------------------------------------------------------------------------------------
