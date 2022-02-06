let cookieBtn = document.getElementById('close');

function btnClose() {
    document.getElementById('cookie-banner').style.display="none";
}

cookieBtn.addEventListener("click", btnClose());