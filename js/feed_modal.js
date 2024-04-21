

{
    let $open = document.querySelector(".feed_writer");
    let $modal = document.querySelector(".modal");
    let $close = document.querySelector(".modal_sheet");
    
    console.log($open);
    console.log($modal);
    
    $open.addEventListener("click", function(){
        $modal.style.display = "flex";
    });

    $close.addEventListener("click", function(){
        $modal.style.display = "none";
    });
}