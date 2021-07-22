
function getPara1()
{
    var inputs = [];

    for(var i= 1; i <=6; i++)
    {
        inputs.push(document.getElementById("para1_inputbox_" + i).value);
    }
    inputs.join(".");
    document.getElementById("ShowPara1").innerHTML = inputs.join(".");
}

function getPara2()
{
    var inputs2 = [];

    for(var i= 1; i <=6; i++)
    {
        inputs2.push(document.getElementById("para2_inputbox_" + i).value);
    }
    inputs2.join(".");
    document.getElementById("ShowPara2").innerHTML = inputs2.join(".");
}