//Temporary solution until I figure out a custom system on the the mostly undocumented pure JS HTTP request API

const WelMSG = [
    "░█████╗░███████╗██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░",
    "██╔══██╗██╔════╝██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗",
    "███████║█████╗░░██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╦╝",
    "██╔══██║██╔══╝░░██╔══██╗██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗",
    "██║░░██║███████╗██║░░██║╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██████╦╝",
    "╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░",
    "══════════════════════════════════════════════════════════════",
    "You can find the credits to all code/media artists in the HTML page source.",
    "-Adding a bunch of HTTP requests functions for dyanmic data along with proper coloring settings.",
    "-Working on neco-arc fighter HTML5 game.",
    "==-----------------------------------------------------------------------------------------------------------------------------==",
    "+Added Keybinds and Cookies",
    "+Added multiple public google docs, API controls coming soon",
    "+Added Proxy (miniProxy)",
    "+Added Cloth Sim (@abro_oks)",
    "+Added Cookie Clicker 2.031 (Latest version)"]
const universes = [
    ["Cloth Sim","cloth.html"],["Encrypted Web Proxy","https://aerophp.000webhostapp.com"],
    ["Cookie Clicker 2.031","CC2031.html"],
    ["Console Emulator","CESTE.html"],
    ["Flex Background","FLPBE.html"]]
const database = [
    ["Public DOC.1","https://docs.google.com/document/d/1_qpvRk_4rMYjyb9gz8h2HkStVHwUBYWUdFRi_FO-vC8/edit?usp=sharing","Document"],
    ["Public DOC.2","https://docs.google.com/document/d/1gO_NaXDcCk9OZRklirPDxB5kVp1NdOV7quAHqXSVnaE/edit?usp=sharing","Document"],
    ["Public DOC.3","https://docs.google.com/document/d/1WHgwzGz4EVP2nYBiky0ikJohPukdAVOUQYvLOe6A5-E/edit?usp=sharing","Document"],
    ["PAC Module","Python","https://github.com/BartenderWinery/PAC/releases/download/module/pac.py"],
    ["Youtubmp4","Python","https://github.com/BartenderWinery/Youtubmp4/releases/download/release/Youtubmp4.exe"],
    ["Algorithms","Example Package",""]]
const shelf = [
    [["Operating Sub-system: [Unfinished]",""]],
    [["Cookie Clicker 2.031: [Orteil.dashnet]","onclick=resize(1);exec('link',['multiverse/CC2031.html'])"],
    ["Neco-Arc Arcade: [Unfinshed]"],
    ["Encrypted Proxy: [MiniProxy]","onclick=exec('resize',1);exec('link',['https://aerophp.000webhostapp.com'])"],
    ["Ported Website: [Developer Branch]","onclick=exec('resize',2);exec('link',['https://aerophp.000webhostapp.com/substage/index.html'])"]]]
    
    let rgb = "red"; let size = 0; let index=0; var rank = "75 69 100 91"
    const objs = ["p","iframe","code"]

    function find(element){ return document.getElementById(element)}
    var overlay = find("overlay")
    var universal = find("universal")
    var list = find("list")
    var con = find("con")
    var inspect = find("inspect")
    var overlay = find("overlay")
    var multiverse = find("multiverse")
    var toolkit = find("toolkit")
    var cc = find("cc")
    var c = find("c")
    var ccc = find("ccc")
    var folder = find("folder")
    var folders = find("folders")
    var clock = find("clock")
    var analog = find("analog")
    var score = find("score")
    var scoreInner = find("scoreInner")
    var rcon = find("rcon")
    var execute = find("execute")