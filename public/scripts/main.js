$(document).ready(() =>{
    console.log("sanity check")

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
        let id = e.currentTarget.id
        console.log(id)
        
        $.ajax({
            method: 'GET',
            url: `/${id}`,
            success: (res) => {
                window.location.href= `/${id}`
            },
            error: (a, b, c) => {
              console.log(a, b, c)
            }
          })
    });
        // console.log(`home with id ${e.currentTarget.id} clicked`)

    $("#thishome").find('button').on('click', (e)=>{
        e.preventDefault();
        let id = e.currentTarget.id
     console.log(`home id ${e.currentTarget.id} will be destroyed`)
      $.ajax({
            method: 'POST',
            url: `/${id}`,
            success: (res) => {
                window.location.href = `/`
            },
            error: (a, b, c) => {
              console.log(a, b, c)
            }
          })
    });

})