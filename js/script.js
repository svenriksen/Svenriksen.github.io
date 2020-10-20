var loader = function(e) 
{
    var file = e.target.files;

    var show = "<span>Selected files : </span>" + file[0].name;

    var output = document.getElementById("selector");
    
    output.innerHTML = show;

    output.classList.add("active");

};

/*add event listener*/
let fileinput = document.getElementById("file");
fileinput.addEventListener("change", loader);


