


$(document).ready(() =>{
    console.log("sanity check")

    // set current date
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    $('#date').val(today);

    //ADD HOME WHEN BTN CLICKED
    $("#addHome").on("click", (e)=>{
        e.preventDefault();
        e.stopImmediatePropagation();
        console.log("sanity check")
        $('#addHomeForm').css("display","inline-block");
    });

    //GO TO SELECTED HOME
    // when a specific  home is selected pass the id and get the respective home data
    //also render new page with the requested home
    $(".Home").on("click", $('#homes'), (e)=>{
        // e.preventDefault();
        // e.stopImmediatePropagation();

        console.log(e.currentTarget)
        let id = e.currentTarget.id
        // 
        console.log(e.currentTarget.id)
                
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
            
        });
    });

    // console.log(`home with id ${e.currentTarget.id} clicked`)
    //DELETE THE HOME WHEN THE BUTTON IS CLICKED
    $(".dltThisHome").on('click', (e)=>{
        e.preventDefault();
        e.stopImmediatePropagation();
        let id = e.currentTarget.id
         console.log(`home id ${e.currentTarget.id} will be destroyed`)
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
        });
    });

    //CREATE USER WHEN BTN-ADD-USER IS CLICKED
    $('.addUser').on("click", (e)=> {
        e.preventDefault();
        e.stopImmediatePropagation();
        let id = e.currentTarget.id
        console.log("id of button", id)
        $.ajax({
            method: 'post',
            url: `/newuser`,
            data: {
                name:"biniam", 
                work:{where: "GA", workhours: "m-f 9-5"},
                chors: null,
                isHome: true,
                homeid: {type: id, ref: 'home'}
            },
            success: (res) => {
                 console.log("just made user", res)
                 window.location = `/`
            },
            error: (a, b, c) => {
                console.log(a, b, c)
            }
        });
    });

});