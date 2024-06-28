document.getElementById('englishBtn').addEventListener('click', function() {
    document.getElementById('englishText').style.display = 'block';
    document.getElementById('farsiText').style.display = 'none';
});

document.getElementById('farsiBtn').addEventListener('click', function() {
    document.getElementById('englishText').style.display = 'none';
    document.getElementById('farsiText').style.display = 'block';
});
