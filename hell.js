var MoeSpider = navigator.userAgent.toLowerCase();
var Spiders = new Array('Baiduspider','Googlebot','360Spider','HaoSouSpider','Bingbot','BingPreview','Bytespider','MSNBot','Sogou Spider','Sogou web spider','Sogou inst spider');

var now = new Date();
var hr = now.getHours();
var mi = now.getMinutes();

window.onload = function(){ }

if (getChromeVersion())
{
    if (getChromeVersion() >= 66)
    {
        document.getElementById('animate').muted = true;

        document.addEventListener("click",function(){
            document.getElementById('animate').muted = false;
        });
    
        document.addEventListener("touchend",function(){
            document.getElementById('animate').muted = false;
        });
    }
}

if (hr<8 || hr>=18)
{
    if (navigator.userAgent.match(/(MSIE 5.0|MSIE 6.0|MSIE 7.0|MSIE 8.0)/i))
    {
        document.getElementById('start').style.display = 'block';
    }
    else
    {
        setTimeout(function(){
            document.getElementById('fire').style.display = 'block';
            document.getElementById('animate').play();
        }, 800);
    }
}
else
{
    for (var i=0; i<Spiders.length; i++)
    {
        if (MoeSpider.indexOf(Spiders[i].toLowerCase()) > -1)
        {
            document.getElementById('fire').style.display = 'block';
            document.getElementById('animate').play();
            break;
        }
        else
        {
            document.getElementById('clock').style.display = 'block';
        }
    }
}

function FireEnd()
{
    document.getElementById('fire').style.display = 'none';
    document.getElementById('start').style.display = 'block';
}

function CheckInput()
{
    if (hell.nickname.value == '')
    {
        alert('请输入你最怨恨之人的名字！');
        hell.nickname.focus();
        return false;
    }
    else
    {
        document.getElementById('start').style.display = 'none';
        document.getElementById('end').style.display = 'block';
        document.body.style.backgroundColor = '#cc0000';
        window.setTimeout("Go()", 1600);
        return false;
    }
}

function Go()
{
    location.replace("http://www.kiishu.wiki/404.html");
}

function getChromeVersion()
{
    var arr = navigator.userAgent.split(' ');
    var version = '';

    for (var i=0; i<arr.length; i++)
    {
        if (/Chrome/i.test(arr[i]))
        {
            version = arr[i];
            break;
        }
    }
    if (version)
    {
        return Number(version.split('/')[1].split('.')[0]);
    }
    else
    {
        return false;
    }
}
// JavaScript Document