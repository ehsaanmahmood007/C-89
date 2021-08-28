score=0;
function updatescore(){
score=score+1;
document.getElementById("score").innerHTML="Score: "+score; 
}
function SaveScore(){
localStorage.setItem("score",score);
}
 function nextpage(){
window.location="activity_2.html";
 }