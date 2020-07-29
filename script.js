//Find Modal by ID
let modal = document.getElementById('Modal');
let imgJS = document.getElementsByClassName('JS-img-click');
let modalDesc = document.getElementById("modal-desc");



for (let i = 0; i < imgJS.length; i++) {
    imgJS[i].addEventListener("click", function () {
            
        //Using flex as style change to keep image to left and content to right,
        modal.style.display = "flex";
        
        modalDesc.innerHTML = this.nextElementSibling.innerHTML;
 
    });

}

//click function to hide Modal container when pressing on "Modal"
modal.onclick = () => { 
    modal.style.display = "none";
    
}





