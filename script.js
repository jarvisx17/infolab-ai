$(document).ready(function(){
    $(".file-btn").on("click", function(e){
        e.stopPropagation();
        $(this).next('.file-input').trigger("click")
    })
})