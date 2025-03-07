function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

function loadVisits() {
    const totalVisits = parseInt(getCookie('totalVisits')) || 0;
    const firstVisitDate = getCookie('firstVisitDate');
    const lastVisitDate = getCookie('lastVisitDate');
    const uniqueVisits = parseInt(getCookie('uniqueVisits')) || 0;

    document.getElementById('totalVisits').textContent = totalVisits + 1;
    document.getElementById('firstVisitDate').textContent = firstVisitDate || new Date().toLocaleString();
    document.getElementById('lastVisitDate').textContent = new Date().toLocaleString();
    document.getElementById('uniqueVisits').textContent = totalVisits === 0 ? uniqueVisits + 1 : uniqueVisits;

    setCookie('totalVisits', totalVisits + 1, 365);
    setCookie('firstVisitDate', firstVisitDate || new Date().toLocaleString(), 365);
    setCookie('lastVisitDate', new Date().toLocaleString(), 365);
    if (totalVisits === 0) {
        setCookie('uniqueVisits', uniqueVisits + 1, 365);
    }
}

function resetVisits() {
    deleteCookie('totalVisits');
    deleteCookie('firstVisitDate');
    deleteCookie('lastVisitDate');
    deleteCookie('uniqueVisits');
    location.reload();
}

loadVisits();
