// Hide an element with name "reader-scrubber" by clicking the button.

document.getElementById('hide-button').addEventListener('click', function () {
    document.querySelector('reader-scrubber').style.display = 'none';
});