$(document).ready(() =>{
    console.log("sanity check")
    $("#addHome").on("click", (e)=>{
        e.preventDefault();
        $('#addHomeForm').css("display","inline-block");
    });
})