document.addEventListener("DOMContentLoaded", () => {




    const modal = document.getElementById("loginModal");

    function openModal(){
      modal.style.display = "flex";
    }

    function closeModal(){
      modal.style.display = "none";
    }

    // Close when clicking outside
    window.onclick = function(event){
      if(event.target == modal){
        modal.style.display = "none";
      }
    }
  
});
