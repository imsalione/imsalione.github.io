document.getElementById('englishBtn').addEventListener('click', function() {
    document.getElementById('englishText').style.display = 'block';
    document.getElementById('farsiText').style.display = 'none';
    document.body.style.direction = 'ltr';
});

document.getElementById('farsiBtn').addEventListener('click', function() {
    document.getElementById('englishText').style.display = 'none';
    document.getElementById('farsiText').style.display = 'block';
    document.body.style.direction = 'rtl';
});

document.getElementById('englishBtn').addEventListener('click', function() {
    document.getElementById('englishTitle').style.display = 'block';
    document.getElementById('farsiTitle').style.display = 'none';
    document.body.style.direction = 'ltr';
});

document.getElementById('farsiBtn').addEventListener('click', function() {
    document.getElementById('englishTitle').style.display = 'none';
    document.getElementById('farsiTitle').style.display = 'block';
    document.body.style.direction = 'rtl';
});
