


$(document).ready(() =>{
    console.log("sanity check")

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

    // when a specific  home is selected pass the id and get the respective home data
    //also render new page with the requested home
    $(".Home").on("click", $('#homes'), (e)=>{
        e.preventDefault();
        e.stopImmediatePropagation();
        let id = e.currentTarget.id
        console.log(id)
        
        $.ajax({
            method: 'GET',
            url: `/${id}`,
            success: (res) => {
                // console.log("this is res:", res)
                window.location.href= `/${id}`;
            },
            error: (a, b, c) => {
              console.log(a, b, c)
            }
          })
    });
        // console.log(`home with id ${e.currentTarget.id} clicked`)

    $(".dltThisHome").on('click', (e)=>{
        e.preventDefault();
        e.stopImmediatePropagation();
        let id = e.currentTarget.id
    //  console.log(`home id ${e.currentTarget.id} will be destroyed`)
      $.ajax({
            method: 'DELETE',
            url: `/${id}`,
            success: (res) => {
                console.log("just deleted home")
                window.location = `/`
            },
            error: (a, b, c) => {
              console.log(a, b, c)
            }
          })
    });


    $('.addUser').on("click", (e)=> {
        e.preventDefault();
        e.stopImmediatePropagation();
        let id = e.currentTarget.id
        $.ajax({
            method: 'put',
            url: `/${id}`,
            data: {name:"biniam", work:{where: "GA", workhours: "m-f 9-5"},
            chors: null,
            isHome: true
                },
            success: (res) => {
                console.log("just update home")
                window.location = `/`
            },
            error: (a, b, c) => {
              console.log(a, b, c)
            }
          })
    })

})