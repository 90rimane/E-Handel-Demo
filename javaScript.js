/*----------------navbar----------------*/

function navFunction() {
    var x = document.getElementById("navTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


/*-----------------read more/less----------------*/


function hideText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("buttonHide");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

/*----------------total amount-----------------*/

function calculateAmount(val) {
    var tot_price = val * 656;
    var divobj = document.getElementById('tot_amount');
    divobj.value = tot_price + ',00kr';
}
