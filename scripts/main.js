let cookieBtn = document.getElementById('close');

function btnClose() {
    document.getElementById('cookie-banner').style.display="none";

    gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'granted'
      });
}

cookieBtn.addEventListener("click", btnClose);