(function(){
    let screen = document.querySelector(".scr");
    let buttons = document.querySelectorAll("#btn");
    let equals = document.querySelector(".main");
    let clear= document.querySelector(".mai");


buttons.forEach(function(button)
{
    button.addEventListener('click',function(e)
    {
        let value = e.target.dataset.num;
        screen.value = screen.value + value;
    })
});

equals.addEventListener('click',function(e)
{
    if(screen.value==="")
    {
        screen.value="";
    }
    else
    {
        let answer = eval(screen.value);
        screen.value = answer;
    }
})

clear.addEventListener('click',function(e)
{
    screen.value = "";
})

})();