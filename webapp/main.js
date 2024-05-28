let count = 0;
const countElement = document.getElementById('count');
function updateCount() {
    countElement.textContent = count;
}
function increase() {
    count++;
    updateCount();
}
function decrease() {
    if (count > 0) {
        count--;
        updateCount();
    }
}
function reset() {
    count = 0;
    updateCount();
}
updateCount(); 