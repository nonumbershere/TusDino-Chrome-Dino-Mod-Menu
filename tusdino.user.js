// ==UserScript==
// @name         {BETA} ＴｕｓＤｉｎｏ || BEST CHROME DINO T-REX CHEAT (0.00.1)
// @namespace    https://github.com/nonumbershere/TusDino
// @homepage     https://discord.gg/6eaDrx5J9s
// @version      0.00.1
// @description  THE BEST CHROME DINO CHEAT: SET SPEED, KILL PLAYER, ESP, NO-CLIP, TRACERS +MORE
// @author       Lapide
// @license      MIT
// @match        *://chromedino.com/*
// @match        *://dino-chrome.com/*
// @match        *://tuckercraig.com/dino/*
// @match        *://elgoog.im/t-rex/*
// @match        *://www.dinogame.net/*
// @match        *://elgoog.im/t-rex/v2/*
// @match        *://nointernetgame.com/*
// @match        *://chromedino.io/
// @match        *://trex-runner.com/*
// @match        *://24glo.com/game/dino-play.html
// @match        *://fivesjs.skipser.com/trex-game/
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// @require      https://cdn.jsdelivr.net/npm/toastify-js
// @icon         https://github.com/nonumbershere/TusDino/blob/main/assets/Logo.png?raw=true
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==
(function() {
    // Loading

    // Cheat
    function cont() {
        var oldKeyDown = Runner.instance_.onKeyDown;
        var oldstartJump = Runner.instance_.tRex.startJump;
        // Addons
        unsafeWindow.tusdino = {
            cheats: {
                autoplayer: false,
                fly: false,
                walk:false,
                allowFlyMode: false,
                esp: false,
                tracer: false,
                notifier: false,
                stormcloud: false,
                watermark: true
            },
            onclick: function(id, func) {
                document.getElementById(id).addEventListener('click', function(e) {
                    func(e);
                });
                document.getElementById(id).addEventListener('focus', function() {
                    this.blur();
                })
            },
            saved: {
                oldclearcanvas: Runner.instance_.clearCanvas,
                gameOver: Runner.instance_.gameOver
            },
            msg: function(text) {
                Toastify({
                    text: text,
                    duration: 2000,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "#343434",
                    },
                    onClick: function(){} // Callback after click
                }).showToast();
            },
            setclick: function(id, func) {
                document.getElementById(id, function(e) {
                    func(e);
                })
            },
            config: {
                hotkeys: {
                    togglemenu: "j"
                }
            },
            logs: {
                sent: [],
                default: function(text) {
                    console.log('%c['+'%cTusDino'+'%c] '+'%c'+text, 'color: #2b6eba','color: #2ba5ba','color: #2b6eba', 'color: white');
                    sent.push({type: 'default', text: text});
                },
                success: function(text) {
                    console.log('%c['+'%cTusDinoSuccess'+'%c] '+'%c'+text, 'color: #58ba2b','color: #2bba62','color: #58ba2b', 'color: white');
                    sent.push({type: 'success', text: text});
                },
                error: function(text) {
                    console.log('%c['+'%cTusDinoError'+'%c] '+'%c'+text, 'color: #ba2b2b','color: #ba402b','color: #ba2b2b', 'color: white');
                    sent.push({type: 'error', text: text});
                }
            },
            info: {
                version: '0.00.1',
                description: "The best cheat for chrome://dino, soon moving to other websites.",
                name: "TusDino",
            }
        };
        var d = document.createElement('link');
        d.href = "https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css";
        d.rel = 'stylesheet';
        document.body.append(d);
        var window = unsafeWindow;
        var Update = 2;
        var jum = true;
        var duc = true
        var xSpeed = 1;
        var ySpeed = 1;
        var goflydown = false;
        var goflyup = false;
        var goright = false;
        var goleft = false;
        var tt = true;
        var y = Runner.instance_.tRex.yPos;
        var x = Runner.instance_.tRex.xPos;
        setInterval(function() {
            if (tusdino.cheats.stormcloud) {
                Runner.instance_.horizon.addCloud()
            }
            if (tusdino.cheats.walk) {
                if (goright) {
                    x += xSpeed;
                }
                if (goleft) {
                    x -= xSpeed;
                }
                Runner.instance_.tRex.xPos = x;
            }
            if (tusdino.cheats.fly) {
                if (tt) {
                    if (Runner.instance_.tRex.yPos < 30) {
                        if (Runner.instance_.tRex.yPos != 30) {
                            y += 1
                        } else {
                            tt = false
                        }
                    } else {
                        if (Runner.instance_.tRex.yPos != 30) {
                            y -= 1;
                        } else {
                            tt = false
                        }
                    }
                } else {
                    tusdino.cheats.allowFlyMode = true;
                }
                if (goflyup) {
                    y += ySpeed;
                }
                if (goflydown) {
                    y -= ySpeed;
                }
                Runner.instance_.tRex.yPos = y;
            }
            if (tusdino.cheats.autoplayer) {
                var tRex = Runner.instance_.tRex;
                var obstacles = Runner.instance_.horizon.obstacles;
                if (Runner.instance_.horizon.obstacles[0] && Runner.instance_.horizon.obstacles[0].typeConfig.type == 'PTERODACTYL' && Runner.instance_.horizon.obstacles[0].yPos < 75) {
                    if (!tRex.jumping && (obstacles.length > 0) && (obstacles[0].xPos + obstacles[0].width) <= ((parseInt(Runner.instance_.currentSpeed - 0.1) - 5) * 34 + 160) && (obstacles[0].xPos + obstacles[0].width) > 20) {
                        if (duc) Runner.instance_.tRex.setDuck(true); duc = false;
                        setTimeout(()=>{Runner.instance_.tRex.setDuck(false); duc = true}, 1500);
                    }
                } else {
                    if (obstacles[0] && !tRex.jumping && (obstacles.length > 0) && (obstacles[0].xPos + obstacles[0].width) <= ((parseInt(Runner.instance_.currentSpeed - 0.1) - 5) * 34 + 160) && (obstacles[0].xPos + obstacles[0].width) > 20) {
                        if (jum) {
                            if (duc) duc = false; Runner.instance_.tRex.setDuck(false); duc = true;
                            Runner.instance_.playSound(Runner.instance_.soundFx.BUTTON_PRESS);
                            tRex.startJump(0.5);
                        }
                    }
                }
            }
        }, Update);

        // Style and UI
        var StylePanel = document.createElement('style');
        StylePanel.innerHTML = `
        .tradingshow button {
    background: none;
    border: solid 1px #a7a7ff;
    color: #a7a7ff;
    padding: 7px;
    transition: 0.5s;
    cursor: pointer;
    height: 30px;
    float: initial;
    border-radius: 20px;
    padding-left: 18px;
    padding-right: 18px;
        }
#tradingmenuheader {
    line-height: 1.13;
}
        .tradingshow .tradingcheckbox {
            background: none;
    border: solid 1px #1212a5;
    color: #0101ab;
    margin-bottom:5px;
    padding: 7px;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 90px;
    padding-left: 18px;
    padding-right: 18px;
        }
        .tradingshow .tradingcheckbox:hover {
    background: none;
    border: solid 1px #1313b9;
    color: #0404cb;
    padding: 7px;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 90px;
    padding-left: 18px;
    padding-right: 18px;
        }
        .swal2-container {
        z-index: 100000000000000000000;
        }
        .tradingshow button:hover {
    border: solid 1px #7d7dff;
    transition: 0.5s;
    color: #8080ff;
        }
        .tradingshow input::placeholder {
           color: #8272bf;
           opacity:0.8;
           transition:1s;
        }
        .tradingshow input:focus::placeholder {
    color: #86c7ff;
           transition:1s;
        }
        .tradingshow input:focus {
    border-color: #86c7ff;
    transition: 1s;
}
        .tradingshow input {
          padding: 7px;
    transition: 1s;
    outline: none;
    margin-bottom:5px;
          border-radius: 20px;
       border: solid 1px #a7a7ff;
       color: #a7a7ff;
    background: transparent;
    }
        .tradingtab {
    font-weight: 700;
    padding: 0px;
    border-radius: 0px;
    height: -webkit-fill-available;
    width: 100px;
    line-height: 2;
    font-family: system-ui;
                margin:0;
    background: transparent;
    font-size: 15px;
    cursor: pointer;
    border: none;
    border-left: solid 1px #9191ff;
    border-right: solid 1px #9191ff;
    color: #855dff;
}
.tradingpage {
    z-index: -1;
    display: none;
}
.tradingshow {
    z-index: 1;
    padding: 10px;
    font-weight: 400;
    display: block;
}
.tradinginputset {
   display: inline;
}
.tradinginputset button {
    margin-bottom:5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
#tradingborder {
    background: linear-gradient(45deg, #a9b8ff, #4b10ff);
    height: 2px;
   animation: an 30s ease infinite;
   background-size: 1000% 1000%;
}


.tradingactive {
 filter: brightness(1.2);
 font-weight: 400;
}
            #tradingmenu {
            color: white;
            font-weight: 400;
            font-size: initial;
            font-family: sans-serif;
            }
            #tradingmenu a {
                color: white;
    text-decoration: underline;
            }
            #tradingmenu *:not(button, input, .tradingtab) {
                cursor:default;
                margin:0;
    box-sizing: revert;
            }
.tradingshow input {
        margin:0;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    font-size: 13px;
    box-sizing: revert;
    line-height: 14px;
    cursor: text;
    margin-bottom:5px;
}
        .tradingshow button {
        margin:0;
    font-size: 13px;
    line-height: 14px;
    box-sizing: revert;
        cursor: pointer;
           margin-bottom:5px;
        }`;
        var Panel = document.createElement('div');
        Panel.innerHTML = `<div style="transform: scale(0.8); top: 98px; position: fixed; left: 309px; z-index: 2147483647;" id="tradingmenu">
  <div style="
    height: 353px;
    font-weight: bolder;
    width: 599px;
    background: #1a1a1a;
">
    <div style="">
      <div style="
    font-size: 20px;
    font-family: revert;
    padding-top: 6px;
    padding-left: 6px;
    padding-bottom: 4px;
" id="tradingmenuheader">${tusdino.info.name} - <i style="
    font-size: 16px;
">${tusdino.info.version} [By Lapide]</i><a href="https://discord.gg/6eaDrx5J9s" style="
    font-size: 17px;
    color: lightblue;
    float: right;
    margin-right: 11px;
">Discord</a><a href="https://github.com/nonumbershere/TusDino/" style="
    font-size: 17px;
    color: lightblue;
    float: right;
    margin-right: 10px;
">Github</a><a href="https://www.youtube.com/channel/UCRA3KXViuDmsmfuP0RF45_w?sub_confirmation=1" style="
    font-size: 17px;
    color: lightblue;
    float: right;
    margin-right: 10px;
">YouTube</a>
      </div>
      <div id="tradingborder" style="
"></div>
      <div id="trading_contents" style="">
        <div style="
    height: 44px;
    outline: none;
    display: flex;
    overflow-x: auto;
    background: #16161a;
    border-bottom: solid 2px #6e6dc7;
">
          <button tab="main" title="Cheats that effect the player" class="tradingtab tradingactive">Player</button>
          <button tab="game" title="Cheats that effect the whole game" class="tradingtab">Game</button>
          <button tab="movement" title="Cheats that effect the movement" class="tradingtab">Movement</button>
          <button tab="visual" title="Cheats that effect the visuals of the game" class="tradingtab">Visuals</button>
          <button tab="other" title="Cheats that are unkown or are experimental and random, basically just stuff I made for fun. [WORK IN PROGRESS]" class="tradingtab">Other</button>
          <button tab="settings" title="Change the settings of cheats or the UI. Or TusDino in general [COMING SOON]" class="tradingtab">Settings</button>
        </div>
        <div style="
    background: #161616;
    height: 265px;
    overflow-y: auto;
" id="tradingtabs">

          <div class="tradingshow" id="tradingpagemain" style="">
 <button id="killplayer" title="Instantly kills your T-Rex player">Kill Player</button>
 <button id="autoplayer" class="tradingcheckbox" title="Make a bot play for you">Autoplayer - OFF</button>
  <div class="tradinginputset"><button id="setgravity" title="Change the gravity of the tRex to whatever you want">Set Gravity</button><input id="setgravitycheatinput" style="
    width: 78px;" value = "0.6" placeholder="0.6"></div>


          </div>

          <div class="tradingpage" id="tradingpageother" style="">
 <button id="rainbowbackground" class="tradingcheckbox" title="Make the background become rainbow.">Rainbow Background - OFF</button>
 <button id="stormcloud" class="tradingcheckbox" title="Continuously spam clouds in the sky">Storm Cloud - OFF</button>
          <p>
          </div>
          <div class="tradingpage" id="tradingpagesettings" style="">
          <p>Coming Soon</p><br><a href="https://github.com/nonumbershere/TusDino/issues">Report an issue</a> • <a href="https://github.com/nonumbershere/TusDino/discussions/new?category=suggestions">Suggest something</a>
          </div>
          <div class="tradingpage" id="tradingpagemovement" style="">
<div class="tradinginputset"><button id="setspeed" title="Sets your players speed, if you put too much it can bug out">Set Speed</button><input id="setspeedcheatinput" style="
    width: 78px;" value = "6.5" placeholder="6.5"></div>
 <button id="fly" class="tradingcheckbox" title="You now have the ability to fly! You can use 'W' to go higher and 'S' to go lower">Fly - OFF</button>
 <button id="highjump" class="tradingcheckbox" title="Makes you jump higher">High Jump - OFF</button>
 <button id="fastfall" class="tradingcheckbox" title="You can fall more faster">Fast Fall - OFF</button>
 <button id="walk" class="tradingcheckbox" title="You now have the ability to get out of the window and walk use 'A' to go left and 'D' to go right">Walk - OFF</button>
<div class="tradinginputset"><button id="setwalkspeed" title="Set the walk cheats speed">Set Walk Speed (Walk Cheat)</button><input id="setwalkspeedcheatinput" style="
    width: 78px;" value = "1" placeholder="1"></div>

<div class="tradinginputset"><button id="setflyspeed" title="Set the fly cheats speed">Set Fly Speed (Fly Cheat)</button><input id="setflyspeedcheatinput" style="
    width: 78px;" value = "1" placeholder="1"></div>
 <button id="blockyjump" class="tradingcheckbox" title="You can have a robotic jump">Blocky Jump - OFF</button>
 <button id="airjump" class="tradingcheckbox" title="You can jump forever non-stop">Airjump - OFF</button>
          </div>
          <div class="tradingpage" id="tradingpagevisual" style="">
 <button id="esp" class="tradingcheckbox" title="This cheat shows a box around you">ESP - OFF</button>
 <button id="tracers" class="tradingcheckbox" title="Lines go from you to all the obstacles">Tracers - OFF</button>
 <button id="jumpnotifier" class="tradingcheckbox" title="Small lines on the screen tell you where to jump">Jump Notifier - OFF</button>
 <button id="watermark" class="tradingcheckbox" title="A watermark to show you're using TusDino">Watermark - ON</button>
               <button id="addcloud" title="Forces a cloud into the game">Add Cloud</button>
               <button id="removecloud" title="Removes the newest cloud">Remove Cloud</button>
               <button id="removeallcloud" title="Removes all clouds">Remove All Clouds</button>
               <button id="removeallobstacle" title="Removes all near-by obstacles">Remove Near Obstacles</button>
               <button id="removeobstacle" title="Removes the nearest obstacle">Remove Obstacle</button>
               <button id="addobstacle" title="Creates a new obstacle">Add Obstacle</button>
          </div>
          <div class="tradingpage" id="tradingpagegame" style="">
                <div style="margin-bottom:50px;"class="tradinginputset"><button id="setscore" title="Sets your players score" style="margin-bottom:7px;">Set Score</button><input id="setscorecheatinput" style="
    width: 78px;" value = "999999" placeholder="999999"></div>
 <button id="noclip" class="tradingcheckbox" title="You can phase thru any object and enemy">No Clip - OFF</button>
 <div class="tradinginputset"><button id="setscorespeed" title="This will change how fast your score adds up">Set Score Speed</button><input id="setscorespeedcheatinput" style="
    width: 78px;" value = "1" placeholder="1"></div>
<div class="tradinginputset"><button id="setgroundy" title="Change the Y position of the ground">Set Ground Y</button><input id="setgroundycheatinput" style="
    width: 78px;" value = "93" placeholder="93"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div style="
    height: 359px;
    width: 603px;
    top: -3px;
    left: -2px;
    z-index: -1;
    position: inherit;
    background: linear-gradient(45deg, #a9b8ff, #4b10ff);
"></div>
</div>`;
        document.body.prepend(Panel);
        document.body.prepend(StylePanel);

        function dragElement(elmnt) {
            var pos1 = 0,
                pos2 = 0,
                pos3 = 0,
                pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
        Runner.instance_.clearCanvas=function(){
            tusdino.saved.oldclearcanvas.call(this);

            if (tusdino.cheats.watermark) {
                var ctx = Runner.instance_.canvasCtx;
                function ff() {
                    ctx.beginPath();
                    ctx.globalAlpha=0.6
                    ctx.fillStyle = '#212121';
                    ctx.fillRect(4,4,70,30);
                    ctx.globalAlpha=1;
                    ctx.closePath();
                }
                function dd() {
                    ctx.beginPath();
                    ctx.globalAlpha=0.6
                    ctx.strokeStyle = "#425AF5";
                    ctx.strokeRect(3,3,72,32);
                    ctx.globalAlpha=1
                    ctx.closePath();
                }
                function hh() {
                    ctx.beginPath();
                    ctx.globalAlpha=1
                    ctx.fillStyle = "#FFFFFF";
                    ctx.font = 'bolder 15px sans-serif'
                    ctx.fillText('TusDino',10, 24, 25252);
                    ctx.globalAlpha=1
                    ctx.closePath();
                }
                dd();
                ff();
                hh()
            }
            if (Runner.instance_.horizon.obstacles[0] && tusdino.cheats.tracer) {
                for (var i in Runner.instance_.horizon.obstacles) {
                    Runner.instance_.canvasCtx.beginPath();
                    Runner.instance_.canvasCtx.moveTo(Runner.instance_.tRex.xPos+23,Runner.instance_.tRex.yPos+10);
                    Runner.instance_.canvasCtx.lineTo(Runner.instance_.horizon.obstacles[i].xPos+10,Runner.instance_.horizon.obstacles[i].yPos+10);
                    Runner.instance_.canvasCtx.strokeStyle = 'Red';
                    Runner.instance_.canvasCtx.stroke();
                }
            }
            if (Runner.instance_.horizon.obstacles[0] && tusdino.cheats.notifier) {
                for (var i in Runner.instance_.horizon.obstacles) {
                    Runner.instance_.canvasCtx.beginPath();
                    Runner.instance_.canvasCtx.moveTo(Runner.instance_.horizon.obstacles[i].xPos-70,130);
                    Runner.instance_.canvasCtx.lineTo(Runner.instance_.horizon.obstacles[i].xPos-40,130);
                    Runner.instance_.canvasCtx.strokeStyle = 'Blue';
                    Runner.instance_.canvasCtx.stroke();
                }
            }
            if (tusdino.cheats.esp) {
                    Runner.instance_.canvasCtx.beginPath();
                Runner.instance_.canvasCtx.strokeStyle = 'Red';
                Runner.instance_.canvasCtx.rect(Runner.instance_.tRex.xPos, Runner.instance_.tRex.ducking ? Runner.instance_.tRex.yPos+15 : Runner.instance_.tRex.yPos, Runner.instance_.tRex.ducking ? Runner.instance_.tRex.config.WIDTH_DUCK+2 : Runner.instance_.tRex.config.WIDTH+2, Runner.instance_.tRex.ducking ? Runner.instance_.tRex.config.HEIGHT_DUCK+2 : Runner.instance_.tRex.config.HEIGHT+2);
                Runner.instance_.canvasCtx.stroke();
            }
        };
        for (var i = 0; i < document.getElementsByClassName('tradingtab').length; ++i) {
            document.getElementsByClassName('tradingtab')[i].addEventListener('click', function() {
                for (var gg = 0; gg < document.getElementsByClassName('tradingshow').length; ++gg) {
                    document.getElementsByClassName('tradingshow')[gg].className = ('tradingpage');
                }
                for (var bb = 0; bb < document.getElementsByClassName('tradingactive').length; ++bb) {
                    document.getElementsByClassName('tradingactive')[bb].className = ('tradingtab');
                }
                // console.log(this);
                this.classList.add('tradingactive')
                document.getElementById('tradingpage' + this.getAttribute('tab')).className = ('tradingshow');
            })
        }
        dragElement(Panel.children[0]);
        var show = false;
        document.addEventListener('keydown', function(e) {
            //console.log(e);
            if (e.key == tusdino.config.hotkeys.togglemenu && e.path[0].tagName != "INPUT") {
                show = !show;
                Panel.style.display = show ? 'block' : 'none';
            }
            if (tusdino.cheats.allowFlyMode) {
                if (e.key == 'w' && e.path[0].tagName != "INPUT") {
                    goflydown = true;
                }
                if (e.key == 's' && e.path[0].tagName != "INPUT") {
                    goflyup = true;
                }
            }
            if (tusdino.cheats.walk) {
                if (e.key == 'd' && e.path[0].tagName != "INPUT") {
                    goright = true;
                }
                if (e.key == 'a' && e.path[0].tagName != "INPUT") {
                    goleft = true;
                }
            }
        })
        document.addEventListener('keyup', function(e) {
            if (tusdino.cheats.allowFlyMode) {
                if (e.key == 'w' && e.path[0].tagName != "INPUT") {
                    goflydown = false;
                }
                if (e.key == 's' && e.path[0].tagName != "INPUT") {
                    goflyup = false;
                }
            }
            if (tusdino.cheats.walk) {
                if (e.key == 'd' && e.path[0].tagName != "INPUT") {
                    goright = false;
                }
                if (e.key == 'a' && e.path[0].tagName != "INPUT") {
                    goleft = false;
                }
            }
        })

        // Listeners / Clicks
        tusdino.onclick('killplayer', function() {
            var n = Runner.instance_.gameOver;
            Runner.instance_.gameOver = tusdino.saved.gameOver;
            if (Runner.instance_.gameOver.toString() !== 'function() {}') {
                Runner.instance_.gameOver();
                tusdino.msg("Killed player");
            } else {
                swal.fire({
                    icon: 'error',
                    title: 'Can\'t kill player',
                    text: 'Unable to kill player, can be due to a cheat preventing this being enabled.'
                })
                tusdino.logs.error("Unable to kill dino (killplayer)");
            }
            Runner.instance_.gameOver = n;
        });
        tusdino.onclick('setspeed', function() {
            var inp = parseFloat(document.getElementById('setspeedcheatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.setSpeed(inp);
                tusdino.msg("Set speed to "+inp);
            }
        });
        tusdino.onclick('setscore', function() {
            var inp = parseFloat(document.getElementById('setscorecheatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.distanceRan = inp / Runner.instance_.distanceMeter.config.COEFFICIENT;
                tusdino.msg("Set score to "+inp);
            }
        });
        tusdino.onclick('setgroundy', function() {
            var inp = parseFloat(document.getElementById('setgroundycheatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.tRex.groundYPos = inp;
                Runner.instance_.tRex.startJump(0.5);
                tusdino.msg("Set ground Y to "+inp);
            }
        });
        tusdino.onclick('setscorespeed', function() {
            var inp = parseFloat(document.getElementById('setscorespeedcheatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.msPerFrame=inp/2;
                tusdino.msg("Set score speed to "+inp);
            }
        });
        tusdino.onclick('setgravity', function() {
            var inp = parseFloat(document.getElementById('setgravitycheatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.tRex.config.GRAVITY=inp
                tusdino.msg("Set gravity to "+inp);
            }
        });
        tusdino.onclick('setwalkspeed', function() {
            var inp = parseFloat(document.getElementById('setwalkspeedcheatinput').value);
            if (!isNaN(inp)) {
                xSpeed=inp
                tusdino.msg("Set walk speed to "+inp);
            }
        });
        tusdino.onclick('setflyspeed', function() {
            var inp = parseFloat(document.getElementById('setflyspeedcheatinput').value);
            if (!isNaN(inp)) {
                ySpeed=inp
                tusdino.msg("Set fly speed to "+inp);
            }
        });
        var noclip = false;
        tusdino.onclick('noclip', function() {
            noclip = !noclip;
            if (noclip) {
                Runner.instance_.gameOver = function() {}
                document.getElementById('noclip').innerText = "No Clip - ON";
                tusdino.msg("Enabled No-Clip");
            } else {
                Runner.instance_.gameOver = tusdino.saved.gameOver;
                document.getElementById('noclip').innerText = "No Clip - OFF";
                tusdino.msg("Disabled No-Clip");
            }
        });
        var blockyjump = false;
        tusdino.onclick('blockyjump', function() {
            blockyjump = !blockyjump;
            if (blockyjump) {
                Runner.instance_.tRex.config.DROP_VELOCITY = 2;
                document.getElementById('blockyjump').innerText = "Blocky Jump - ON";
                tusdino.msg("Enabled Blocky Jump");
            } else {
                Runner.instance_.tRex.config.DROP_VELOCITY = -5;
                document.getElementById('blockyjump').innerText = "Blocky Jump - OFF";
                tusdino.msg("Disabled Blocky Jump");
            }
        });
        var highjump = false;
        tusdino.onclick('highjump', function() {
            highjump = !highjump;
            if (highjump) {
                Runner.instance_.tRex.setJumpVelocity(14)
                document.getElementById('highjump').innerText = "High Jump - ON";
                tusdino.msg("Enabled High Jump");
            } else {
                Runner.instance_.tRex.setJumpVelocity(10);
                document.getElementById('highjump').innerText = "High Jump - OFF";
                tusdino.msg("Disabled High Jump");
            }
        });
        var rainbowbackground = false;

        var oldtrans = document.body.transition;
               var oldbg = document.body.background;
      function flash() {
            if (rainbowbackground) {
        document.body.style.transition = '2s ease 0s';
        document.body.style.background = 'red';
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'red';
            }
        }, 1000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'orange';
            }
        }, 2000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'yellow';
            }
        }, 3000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'white';
            }
        }, 4000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'green';
            }
        }, 5000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'blue';
            }
        }, 6000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'darkblue';
            }
        }, 7000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'black';
            }
        }, 8000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'red';
            }
        }, 9000);
        setTimeout(function () {
            if (rainbowbackground) {
          flash();
            }
        }, 9000);
        }
      }
        tusdino.onclick('rainbowbackground', function() {
            rainbowbackground = !rainbowbackground;
            if (rainbowbackground) {
                flash();
                document.getElementById('rainbowbackground').innerText = "Rainbow Background - ON";
                tusdino.msg("Enabled Rainbow Background");
            } else {
                window.oldbg = oldbg;
                document.body.style.background = oldbg;
                document.body.style.transition = oldtrans;
                document.getElementById('rainbowbackground').innerText = "Rainbow Background - OFF";
                tusdino.msg("Disabled Rainbow Background");
            }
        });
        var fastfall = false;
        tusdino.onclick('fastfall', function() {
            fastfall = !fastfall;
            if (fastfall) {
                Runner.instance_.tRex.config.DROP_VELOCITY = 12;
                document.getElementById('fastfall').innerText = "Fast Fall - ON";
                tusdino.msg("Enabled Fast Fall");
            } else {
                Runner.instance_.tRex.config.DROP_VELOCITY = -5;
                document.getElementById('fastfall').innerText = "Fast Fall - OFF";
                tusdino.msg("Disabled Fast Fall");
            }
        });
        var airjump = false;
        tusdino.onclick('airjump', function() {
            airjump = !airjump;
            if (airjump) {
                var IS_HIDPI = window.devicePixelRatio > 1;

                /** @const */
                var IS_IOS = window.navigator.userAgent.indexOf('CriOS') > -1 ||
                    window.navigator.userAgent == 'UIWebViewForStaticFileContent';

                /** @const */
                var IS_MOBILE = window.navigator.userAgent.indexOf('Mobi') > -1 || IS_IOS;

                /** @const */
                var IS_TOUCH_ENABLED = 'ontouchstart' in window;
                Runner.instance_.onKeyDown = function(e) {
                    // Prevent native page scrolling whilst tapping on mobile.
                    if (IS_MOBILE) {
                        e.preventDefault();
                    }

                    // if (e.target != this.detailsButton) {
                    if (!this.crashed && (Runner.keycodes.JUMP[e.keyCode] ||
                                          e.type == Runner.events.TOUCHSTART || e.type == Runner.events.GAMEPADCONNECTED)) {
                        if (!this.activated) {
                            this.loadSounds();
                            this.activated = true;
                            // errorPageController.trackEasterEgg();
                        }

                        if (!this.tRex.ducking) {
                            this.playSound(this.soundFx.BUTTON_PRESS);
                            this.tRex.startJump(this.currentSpeed);
                        }
                    }

                    if (this.crashed && e.type == Runner.events.TOUCHSTART &&
                        e.currentTarget == this.containerEl) {
                        this.restart();
                    }
                    // }

                    if (this.activated && !this.crashed && Runner.keycodes.DUCK[e.keyCode]) {
                        e.preventDefault();
                        if (this.tRex.jumping) {
                            // Speed drop, activated only when jump key is not pressed.
                            this.tRex.setSpeedDrop();
                        } else if (!this.tRex.ducking) {
                            // Duck.
                            this.tRex.setDuck(true);
                        }
                    }
                }
                Runner.instance_.tRex.startJump = function(speed) {
                    this.jumping = false;
                    if (!this.jumping) {
                        this.update(0, 'JUMPING');
                        // Tweak the jump velocity based on the speed.
                        this.jumpVelocity = this.config.INIITAL_JUMP_VELOCITY - (speed / 10);
                        this.jumping = true;
                        this.reachedMinHeight = false;
                        this.speedDrop = false;
                    }
                }
                document.getElementById('airjump').innerText = "Airjump - ON";
                tusdino.msg("Enabled Airjump");
            } else {
                Runner.instance_.tRex.startJump = oldstartJump;
                Runner.instance_.onKeyDown = oldKeyDown;
                document.getElementById('airjump').innerText = "Airjump - OFF";
                tusdino.msg("Disabled Airjump");
            }
        });
        tusdino.onclick('autoplayer', function() {
            tusdino.cheats.autoplayer = !tusdino.cheats.autoplayer;
            if (tusdino.cheats.autoplayer) {
                document.getElementById('autoplayer').innerText = "Autoplayer - ON";
                tusdino.msg("Enabled Autoplayer");
            } else {
                document.getElementById('autoplayer').innerText = "Autoplayer - OFF";
                tusdino.msg("Disabled Autoplayer");
            }
        });
        tusdino.onclick('jumpnotifier', function() {
            tusdino.cheats.notifier = !tusdino.cheats.notifier;
            if (tusdino.cheats.notifier) {
                document.getElementById('jumpnotifier').innerText = "Jump Notifier - ON";
                tusdino.msg("Enabled Jump Notifier");
            } else {
                document.getElementById('jumpnotifier').innerText = "Jump Notifier - OFF";
                tusdino.msg("Disabled Jump Notifier");
            }
        });
        tusdino.onclick('walk', function() {
            tusdino.cheats.walk = !tusdino.cheats.walk;
            if (tusdino.cheats.walk) {
                document.getElementById('walk').innerText = "Walk - ON";
                tusdino.msg("Enabled Walk");
            } else {
                document.getElementById('walk').innerText = "Walk - OFF";
                tusdino.msg("Disabled Walk");
            }
        });
        tusdino.onclick('tracers', function() {
            tusdino.cheats.tracer = !tusdino.cheats.tracer;
            if (tusdino.cheats.tracer) {
                document.getElementById('tracers').innerText = "Tracers - ON";
                tusdino.msg("Enabled Tracers");
            } else {
                document.getElementById('tracers').innerText = "Tracers - OFF";
                tusdino.msg("Disabled Tracers");
            }
        });
        tusdino.onclick('esp', function() {
            tusdino.cheats.esp = !tusdino.cheats.esp;
            if (tusdino.cheats.esp) {
                document.getElementById('esp').innerText = "ESP - ON";
                tusdino.msg("Enabled ESP");
            } else {
                document.getElementById('esp').innerText = "ESP - OFF";
                tusdino.msg("Disabled ESP");
            }
        });
        tusdino.onclick('fly', function() {
            tusdino.cheats.fly = !tusdino.cheats.fly;
            if (tusdino.cheats.fly) {
                y = Runner.instance_.tRex.yPos;
                x = Runner.instance_.tRex.xPos;
                document.getElementById('fly').innerText = "Fly - ON";
                tusdino.msg("Enabled Fly");
            } else {
                tt = true;
                Runner.instance_.tRex.startJump(0.5);
                y = 96;
                document.getElementById('fly').innerText = "Fly - OFF";
                tusdino.msg("Disabled Fly");
            }
        });
        tusdino.onclick('stormcloud', function() {
            tusdino.cheats.stormcloud = !tusdino.cheats.stormcloud;
            if (tusdino.cheats.stormcloud) {
                document.getElementById('fly').innerText = "Storm Cloud - ON";
                tusdino.msg("Enabled Storm Cloud");
            } else {
                document.getElementById('fly').innerText = "Storm Cloud - OFF";
                tusdino.msg("Disabled Storm Cloud");
            }
        });
        tusdino.onclick('watermark', function() {
            tusdino.cheats.watermark = !tusdino.cheats.watermark;
            if (tusdino.cheats.watermark) {
                document.getElementById('watermark').innerText = "Watermark - ON";
                tusdino.msg("Enabled Watermark");
            } else {
                document.getElementById('watermark').innerText = "Watermark - OFF";
                tusdino.msg("Disabled Watermark");
            }
        });
        tusdino.onclick('removeallcloud', function() {
            Runner.instance_.horizon.clouds=[];
            tusdino.msg("Removed all clouds");
        });
        tusdino.onclick('addcloud', function() {
            Runner.instance_.horizon.addCloud();
            tusdino.msg("Added one cloud");
        });
        tusdino.onclick('removecloud', function() {
            Runner.instance_.horizon.clouds.length > 0 ? Runner.instance_.horizon.clouds = Runner.instance_.horizon.clouds.slice(0,Runner.instance_.horizon.clouds.length-1) : "";
            tusdino.msg("Removed one cloud");
        });
        tusdino.onclick('removeallobstacle', function() {
            Runner.instance_.horizon.obstacles=[]
            tusdino.msg("Removed all obstacles");
        });
        tusdino.onclick('addobstacle', function() {
            Runner.instance_.horizon.addNewObstacle(Runner.instance_.currentSpeed);
            tusdino.msg("Added one obstacle");
        });
        tusdino.onclick('removeobstacle', function() {
            Runner.instance_.horizon.obstacles.length > 0 ? Runner.instance_.horizon.obstacles = Runner.instance_.horizon.obstacles.slice(1,Runner.instance_.horizon.obstacles.length) : "";
            tusdino.msg("Removed one obstacle");
        });
    }

    // Detects if Runner exists when the script has loaded. If not, it will wait for the page to load.
    if (typeof Runner != typeof undefined) {
        cont();
    } else {
        window.addEventListener('load', function() {
             cont();
        });
    }

    // Code to run when page loaded
    window.addEventListener('load', function() {
    });
})();
