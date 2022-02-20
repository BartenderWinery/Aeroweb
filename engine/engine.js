let color = "red"; let size = 0
const WelMSG = [
    "░█████╗░███████╗██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░",
    "██╔══██╗██╔════╝██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗",
    "███████║█████╗░░██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╦╝",
    "██╔══██║██╔══╝░░██╔══██╗██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗",
    "██║░░██║███████╗██║░░██║╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██████╦╝",
    "╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░",
    "══════════════════════════════════════════════════════════════",
    "Main website is currently unable to save settings, this doesn't apply to the multiverse.",
    "==-----------------------------------------------------------------------------------------------------------------------------==",
    "+Added multiple public google docs, API controls coming soon",
    "+Added Proxy (miniProxy)",
    "+Added Cloth Sim (@abro_oks)",
    "+Added Cookie Clicker 2.031 (Latest version)"]
const universes = [["Cloth Sim","cloth.html"],["Encrypted Web Proxy","https://aerophp.000webhostapp.com"],["Cookie Clicker 2.031","CC2031.html"],["Console Emulator","CESTE.html"],["Flex Background","FLPBE.html"]]
const database = [["Public DOC.1","https://docs.google.com/document/d/1_qpvRk_4rMYjyb9gz8h2HkStVHwUBYWUdFRi_FO-vC8/edit?usp=sharing","WEB"],["Public DOC.2","https://docs.google.com/document/d/1gO_NaXDcCk9OZRklirPDxB5kVp1NdOV7quAHqXSVnaE/edit?usp=sharing","WEB"],["Public DOC.3","https://docs.google.com/document/d/1WHgwzGz4EVP2nYBiky0ikJohPukdAVOUQYvLOe6A5-E/edit?usp=sharing","WEB"]]

var clock=document.getElementById("clock")
var win = document.getElementById("universal");
var con = document.getElementById("con");
var inspect = document.getElementById("inspect");
var c = document.getElementById("c");
var cc = document.getElementById("cc");
var rcon = document.getElementById("rcon");
var execute = document.getElementById("execute");
var toolkit = document.getElementById("toolkit");

var mv=document.getElementById("multiverse");
var fr=document.getElementById("folder");
var ls=document.getElementById("list");
var exec = function(ex,array){
    switch(ex){
        case "color":
            document.querySelectorAll('*').forEach(function(node) {
                color=array
                node.style.color = color; node.style.borderColor = color;
                if(node.className=="button"){
                    node.style.backgroundColor = color
                }
            });
            break;
        case "log":
            array.forEach(element => con.insertAdjacentHTML("beforeend","<p style='position: sticky; z-index: 2; color: "+color+"'>"+element+"</p>"))
            break;
        case "inspect":
            array.forEach(element => inspect.insertAdjacentHTML("beforeend","<p style='position: sticky; right: 0; z-index: 3; color: "+color+"'>"+element+"</p>"))
            break;
        case "resize":
            switch(array){
                case 0:
                    con.style = "height: 66%; width: 73%; position: absolute; margin: 0.5%";
                    c.style = "visibility: visible"; c.setAttribute("onclick","exec('resize', 1)");
                    cc.style = "visibility: visible"; cc.setAttribute("onclick","exec('resize', 2)");
                    toolkit.style = "position: absolute"
                    mv.style = "visibility: visible";
                    fr.style = "visibility: visible";
                    ls.style = "visibility: visible";
                    win.style.height = "80%"
                    win.style.width = "90%"
                    win.style.borderStyle = "groove";

                    size=0
                    break;
                case 1:
                    con.style = "height: 100%; width: 100%; position: initial; margin: 0";
                    c.style = "visibility: visible; position: fixed; top: 0";  c.setAttribute("onclick","exec('resize', 0)");
                    cc.style = "visibility: hidden";
                    toolkit.style = "position: fixed; top:0; right: 0"
                    mv.style = "visibility: hidden";
                    fr.style = "visibility: hidden";
                    ls.style = "visibility: hidden";
                    win.style.height = "80%"
                    win.style.width = "90%"
                    win.style.borderStyle = "groove";

                    size=1
                    break;
                case 2: 
                    con.style = "height: 100%; width: 100%; position: initial; margin: 0";
                    c.style = "visibility: hidden";
                    cc.style = "visibility: visible";  cc.setAttribute("onclick","exec('resize', 0)");
                    toolkit.style = "position: fixed; top:0; right: 0"
                    mv.style = "visibility: hidden";
                    fr.style = "visibility: hidden";
                    ls.style = "visibility: hidden";

                    win.style.height = "100%"
                    win.style.width = "100%"
                    win.style.borderStyle = "none";

                    size=2
                    break;
            }
            if(op!=0){con.style.opacity = "100%";}
            break;
        case "clear":
            var p = document.getElementsByTagName('p');
            var frame = document.getElementsByTagName('iframe');
            while(p[0]) { p[0].parentNode.removeChild(p[0]); }
            while(frame[0]) { frame[0].parentNode.removeChild(frame[0]); }
            con.style.opacity = "60%";
            break;
    }
}
var clear = function(){
    var p = document.getElementsByTagName('p');
    while(p[0]) { p[0].parentNode.removeChild(p[0]); }
}
var link = function(link){
    try{
        exec("clear")
        con.insertAdjacentHTML("afterBegin","<iframe id='worker' src=./multiverse/"+universes[link][1]+"></iframe>");
    }catch{
        exec("clear")
        con.insertAdjacentHTML("afterBegin","<iframe id='worker' src="+link+"></iframe>");
    }
    con.style.opacity = "100%"; op=1
}
function loop(){
    execute.setAttribute("onclick","exec('inspect',['"+rcon.value+" :<<']); try{"+rcon.value+"}catch(err){exec('inspect',[err]); book(err)}"); rcon.setAttribute("onchange","exec('inspect',['"+rcon.value+" :<<']); try{"+rcon.value+"}catch(err){exec('inspect',[err]); book(err)}")
    clock.innerHTML= Date.now(); //Add localtime and other events such as the time that a golden cookie is going to occure.
    if(size!=0){con.scrollTop = con.scrollHeight; inspect.scrollTop = inspect.scrollHeight}
}
var init = function(){
    setInterval(loop,100);
    for (let step = 0; step < universes.length; step++) {
        if(universes[step][1].split(":")[0]=="https"){
            mv.insertAdjacentHTML("beforeend",'<div onclick=link('+"'"+universes[step][1]+"'"+') class=verse desktop>'+universes[step][0]+'</div>')
        }else{
            mv.insertAdjacentHTML("beforeend",'<div onclick=link('+step+') class=verse desktop>'+universes[step][0]+'</div>')
        }
        exec("inspect",[universes[step][0]+" : Verse <<"]);
    }
    for (let step = 0; step < database.length; step++) {
        if(database[step][1].split(":")[0]=="https"){
            ls.insertAdjacentHTML("beforeend",'<div onclick=link('+"'"+database[step][1]+"'"+') class=database desktop>'+database[step][0]+'<label style="color: grey; margin-left: 5px">'+database[step][2]+'</label></div>')
        }//else{
        //    ls.insertAdjacentHTML("beforeend",'<div onclick=link('+step+') class=database desktop>'+database[step][0]+'</div>')
        //}
        //ls.insertAdjacentHTML("beforeend",'<div href='+"'"+database[step][1]+"'"+' class=database desktop>'+database[step][0]+'</div>')
        exec("inspect",[database[step][0]+" : List <<"]);
    }
    exec("log",WelMSG);
}
var op=0
init();