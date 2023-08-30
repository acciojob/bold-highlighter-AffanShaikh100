let words = document.getElementsByTagName("strong");
    console.log (words);
function highlight() {
    //Write your code here
    for(let i =0; i<words.length; i++)
    {
        words[i].style.color="green";
    }
}

function return_normal() {
  
    for(let i =0; i<words.length; i++)
    {
        words[i].style.color="black";
    }
}
