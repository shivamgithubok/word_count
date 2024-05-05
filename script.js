let textarea = document.getElementById("text");
textarea.addEventListener('input',function(){
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;
    text = text.trim();
   
    let words = text.split(" ");
    let cleanlist = words.filter(function(element){
       return element != "";
    });
    document.getElementById("word").innerHTML = cleanlist.length;

})