function openModal(){
    const city = document.getElementById("city").value;
    if(!city){
        alert("Pleease select a city first!")
        return;
    }
   
    document.getElementById("myModal").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}
function closeModal(){
    document.getElementById("myModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";

}
function submitForm(eve){
    eve.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const Thoughts =  document.getElementById("Thoughts").value;
    alert(`Thanks, ${name}!\nYour thoughts on the city: ${Thoughts}`);
    closeModal();
    location.reload()

}
