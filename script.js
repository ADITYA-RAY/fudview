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
    window.onscroll=function(){};
    document.getElementById("tabcontentcart").style.display = "none";
}
function openCart(dishname,price) {
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
    var tableno = document.getElementById("abc").value;

    if (tableno == 1) {
        document.getElementById("row1").style.display="block";
        document.getElementById("table1").innerHTML += "<tr>" + "<td>" + dishname + "</td>"+  "<td>" +"&#8377 "+ price + "</td>" +"</tr>" + "<tr>" + "<td>" + "quantity: <input type='number' id='quantity' value='1' step='0.5'>" + "</td>" + "<td>" + "<button onclick='deleteOrder(this,1)'>" +
            "<i class='fa fa-trash'></i>" + "</button>" + "</td>" + "</tr>";
    }
    else if (tableno == 2) {
        document.getElementById("table2").innerHTML += "<tr>" + "<td>" + dishname + "</td>"+  "<td>" +"&#8377 "+ price + "</td>" + "</tr>" + "<tr>" + "<td>" + "quantity: <input type='number' id='quantity' value='1' step='0.5'>" + "</td>" + "<td>" + "<button onclick='deleteOrder(this,2)'>" +
            "<i class='fa fa-trash'></i>" + "</button>" + "</td>" + "</tr>";
    }
    else if (tableno == 3) {
        document.getElementById("table3").innerHTML += "<tr>" + "<td>" + dishname + "</td>"+  "<td>" +"&#8377 "+ price + "</td>" + "</tr>" + "<tr>" + "<td>" + "quantity: <input type='number' id='quantity' value='1' step='0.5'>" + "</td>" + "<td>" + "<button onclick='deleteOrder(this,3)'>" +
            "<i class='fa fa-trash'></i>" + "</button>" + "</td>" + "</tr>";
    }
    else if (tableno == 4) {
        document.getElementById("table4").innerHTML += "<tr>" + "<td>" + dishname + "</td>"+  "<td>" +"&#8377 "+ price + "</td>" + "</tr>" + "<tr>" + "<td>" + "quantity: <input type='number' id='quantity' value='1' step='0.5'>" + "</td>" + "<td>" + "<button onclick='deleteOrder(this,4)'>" +
            "<i class='fa fa-trash'></i>" + "</button>" + "</td>" + "</tr>";
    }
    else if (tableno == 5) {
        document.getElementById("table5").innerHTML += "<tr>" + "<td>" + dishname + "</td>"+  "<td>" +"&#8377 "+ price + "</td>" + "</tr>" + "<tr>" + "<td>" + "quantity: <input type='number' id='quantity' value='1' step='0.5'>" + "</td>" + "<td>" + "<button onclick='deleteOrder(this,5)'>" +
            "<i class='fa fa-trash'></i>" + "</button>" + "</td>" + "</tr>";
    }
    else if (tableno == 6) {
        document.getElementById("table6").innerHTML += "<tr>" + "<td>" + dishname + "</td>"+  "<td>" +"&#8377 "+ price + "</td>" + "</tr>" + "<tr>" + "<td>" + "quantity: <input type='number' id='quantity' value='1' step='0.5'>" + "</td>" + "<td>" + "<button onclick='deleteOrder(this,6)'>" +
            "<i class='fa fa-trash'></i>" + "</button>" + "</td>" + "</tr>";
    }
    else if (tableno == 7) {
        document.getElementById("table7").innerHTML += "<tr>" + "<td>" + dishname + "</td>"+  "<td>" +"&#8377 "+ price + "</td>" + "</tr>" + "<tr>" + "<td>" + "quantity: <input type='number' id='quantity' value='1' step='0.5'>" + "</td>" + "<td>" + "<button onclick='deleteOrder(this,7)'>" +
            "<i class='fa fa-trash'></i>" + "</button>" + "</td>" + "</tr>";
    }
    else if (tableno == 8) {
        document.getElementById("table8").innerHTML += "<tr>" + "<td>" + dishname + "</td>"+  "<td>" +"&#8377 "+ price + "</td>" + "</tr>" + "<tr>" + "<td>" + "quantity: <input type='number' id='quantity' value='1' step='0.5'>" + "</td>" + "<td>" + "<button onclick='deleteOrder(this,8)'>" +
            "<i class='fa fa-trash'></i>" + "</button>" + "</td>" + "</tr>";
    }
    else if (tableno == 9) {
        document.getElementById("table9").innerHTML += "<tr>" + "<td>" + dishname + "</td>"+  "<td>" +"&#8377 "+ price + "</td>" + "</tr>" + "<tr>" + "<td>" + "quantity: <input type='number' id='quantity' value='1' step='0.5'>" + "</td>" + "<td>" + "<button onclick='deleteOrder(this,9)'>" +
            "<i class='fa fa-trash'></i>" + "</button>" + "</td>" + "</tr>";
    }
    else if (tableno == 10) {
        document.getElementById("table10").innerHTML += "<tr>" + "<td>" + dishname + "</td> "+  "<td>" +"&#8377 "+ price + "</td>" + "</tr > " + " < tr > " + " < td > " + "quantity: <input type='number' id='quantity' value='1' step='0.5'>" + "</td>" + " < td > " + " < button onclick = 'deleteOrder(this,10)' > " +
            "<i class='fa fa-trash'></i>" + "</button>" + "</td>" + "</tr>";
    }
    document.getElementById("tabcontentcart").style.display = "block";
    document.getElementById("tableselect").style.height = "0%";
   


}

function openCartMenu() {
    document.getElementById("tabcontentcart").style.display = "block";
    document.getElementById("tableselect").style.height = "0%";


}

function deleteOrder(r,tableno) {
    
    var i = r.parentNode.parentNode.rowIndex;
    if(tableno==1){
    document.getElementById("table1").deleteRow(i);
    document.getElementById("table1").deleteRow(i-1);
    }
    else if(tableno==2){
        document.getElementById("table2").deleteRow(i);
        document.getElementById("table2").deleteRow(i-1);
    }
    else if(tableno==3){
        document.getElementById("table3").deleteRow(i);
        document.getElementById("table3").deleteRow(i-1);
    }
    else if(tableno==4){
        document.getElementById("table4").deleteRow(i);
        document.getElementById("table4").deleteRow(i-1);
    }
    else if(tableno==5){
        document.getElementById("table5").deleteRow(i);
        document.getElementById("table5").deleteRow(i-1);
    }
    else if(tableno==6){
        document.getElementById("table6").deleteRow(i);
        document.getElementById("table6").deleteRow(i-1);
    }
    else if(tableno==7){
        document.getElementById("table7").deleteRow(i);
        document.getElementById("table7").deleteRow(i-1);
    }
    else if(tableno==8){
        document.getElementById("table8").deleteRow(i);
        document.getElementById("table8").deleteRow(i-1);
    }
    else if(tableno==9){
        document.getElementById("table9").deleteRow(i);
        document.getElementById("table9").deleteRow(i-1);
    }
    else if(tableno==10){
        document.getElementById("table10").deleteRow(i);
        document.getElementById("table10").deleteRow(i-1);
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
