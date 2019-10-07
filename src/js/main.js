var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
	modal.classList.add('modal_active');
	// console.log('');
});
button.addEventListener('click', function() {
	setTimeout(second_passed, 5000);
});	
close.addEventListener('click', function() {
	modal.classList.remove('modal_active');
});
function second_passed() {
	modal.classList.remove('modal_active');
};
