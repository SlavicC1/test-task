(function(){
    var video = document.getElementById("video");
    
    video.onclick = function(){
        if(!video.classList.supports("hide")){
            video.firstChild.classList.remove("hide");
            video.lastChild.classList.add("hide");
        }
    };
    })();