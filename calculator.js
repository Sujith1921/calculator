let outputshow=document.getElementById("output-show");

function display(num){
    outputshow.value +=num;
}
function calculate(){
    try
    {
        outputshow.value=eval(outputshow.value);
    }
    catch(err)
    {
        alert("invalid code")
    }
}
function Clear()
{
    outputshow.value = "";
}
function del(){
    outputshow.value=outputshow.value.slice(0,-1);
}