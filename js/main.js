/*--Pre Loading--*/
/*window.onload = function () {
	preLoading()
}
var myVar;
var myVar2;

function preLoading() {
	myVar = setTimeout(showPage, 9000);
	myVar2 = setTimeout(showPage2, 6000);
}

function showPage() {
	document.getElementById("preloader").style.display = "none";

}

function showPage2() {
	document.getElementById("after-preloading").style.display = "block";
}*/
/*--Sticky header--*/
window.onscroll = function () {
	stickyHeader();
	swingHeader();
}

var header = document.getElementById("header");
var headerOffset = header.offsetTop;
var preLoader = document.getElementById("preloader");
var prescrollpos = window.pageYOffset;

function stickyHeader() {
	var curscrollpos = window.pageYOffset;
	if (window.pageYOffset <= 70) {
		header.classList.remove("header-sticky");
	} else {
		header.classList.add("header-sticky");
	}
}

function swingHeader() {
	var curscrollpos = window.pageYOffset;
	if (prescrollpos <= curscrollpos && curscrollpos >= 200) {
		header.style.transform = "perspective(400px) rotateX(-90deg)";
	} else {
		header.style.transform = "perspective(400px) rotateX(0deg)";
	}
	prescrollpos = curscrollpos;
}

/*-Info Menu-*/

var infoMenu = document.getElementById("info-menu");
var infoMenuBtn = document.getElementsByClassName("js-info-menu-btn");
var body = document.getElementById("body");
var infoMenuClose = document.getElementById("info-menu-btn-clse");

for (var i = 0; i < infoMenuBtn.length; i++) {
	infoMenuBtn[i].addEventListener("click", function () {
		infoMenu.classList.add("info-menu-open");
		body.classList.add("overlay-enable");
		infoMenuClose.style.transform = "scale(1)";
	});
}

infoMenuClose.addEventListener("click", function () {
	infoMenu.classList.remove("info-menu-open");
	infoMenuClose.style.transform = "scale(0)";
	body.classList.remove("overlay-enable");
});

/*STRICT CREDIT*/

/*--Lightbox--*/

var close = document.getElementById("lightbox-close");
var lightbox = document.getElementById("lightbox");
var open = document.getElementsByClassName("open-lightbox");

for (var i = 0; i < open.length; i++) {
	open[i].addEventListener("click", function () {
		lightbox.classList.add("lightbox-open-animation");
	});
}
close.addEventListener("click", function () {
	lightbox.classList.remove("lightbox-open-animation");
	resetLightbox();
});
/*Contact form validation*/
var uname = document.forms["contForm"]["uname"];
var email = document.forms["contForm"]["email"];
var phn = document.forms["contForm"]["phn"];

function formValidation() {
	if (uname.value == "") {
		alert("Please enter your name.");
		uname.focus();
		return false;
	}

	else if (email.value == "") {
		alert("Please enter your email address.");
		email.focus();
		return false;
	}

	else if (phn.value == "") {
		alert("Please enter a Phone.");
		phn.focus();
		return false;
	}
	else if (email.value.indexOf("@", 0) < 0) {
		alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}

	else if (phn.value.length != 10) {
		alert("Please enter a valid Phone Number.");
		phn.focus();
		return false;
	} else {
		showMssge();
		return false;
	}

	return false;
}

var lightboxContent = document.getElementById("js-content-open");
var afterMssge = document.getElementsByClassName("after-mssge");
var showName = document.getElementById("amname");
function showMssge() {
	showName.innerHTML = "Hello! " + uname.value + ",";
	afterMssge[0].classList.add("show-after-mssge");
	lightboxContent.style.opacity = "0";
}

function resetLightbox() {
	var form = document.forms["contForm"];
	afterMssge[0].classList.remove("show-after-mssge");
	lightboxContent.style.opacity = "1";
	form.reset();
}
