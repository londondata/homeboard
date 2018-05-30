$(document).ready(() =>{
	console.log("insanity check")

//set homeboard name
var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

$('#date').val(today);
    $("#addHome").on("click", (e)=>{
        e.preventDefault();
        e.stopImmediatePropagation();
        console.log("sanity check")
        $('#addHomeForm').css("display","inline-block");
    });



});
//end of function & document