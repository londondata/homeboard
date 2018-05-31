$(document).ready(() =>{
	console.log("insanity check")

//set homeboard name
var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

//modals:
$('#householdModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('add household user')
});

$('#choresModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('add chores')
});

//date:
$('#date').val(today);
    $("#addHome").on("click", (e)=>{
        e.preventDefault();
        e.stopImmediatePropagation();
        console.log("sanity check")
        $('#addHomeForm').css("display","inline-block");
    });

//add messages to wall:

$('#addMessage').on('click', function(e) {
    e.preventDefault();
     // e.stopImmediatePropagation();
    console.log('be i working?')
    var newMessage = $('.form-control').val();
   $('.theWall').append(`<p class="chatter">${newMessage}<p>`);
   // TODO: remove text after submitted ALSO allow text to submit with the enter press

});




});
//end of function & document