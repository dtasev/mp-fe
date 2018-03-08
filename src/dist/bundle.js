!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=11)}([function(t,e,s){"use strict";s.d(e,"b",function(){return i});var i,n=s(1);e.a=class{constructor(){this.mouse=new n.a,this.last=new n.a}static dot(t,e,s,i,n=!1,a=null){t.fillStyle=i,t.lineWidth=s,t.beginPath(),t.arc(e.x,e.y,s,0,2*Math.PI,!0),t.closePath(),t.fill(),n&&(t.strokeStyle=a||i,t.stroke())}static circle(t,e,s,i,n){t.strokeStyle=n,t.lineWidth=i,t.beginPath(),t.arc(e.x,e.y,s,0,2*Math.PI,!0),t.closePath(),t.stroke()}mouseLine(t,e,s,i=!0){-1==this.last.x&&(this.last.x=this.mouse.x,this.last.y=this.mouse.y),t.strokeStyle=s,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.moveTo(this.last.x,this.last.y),t.lineTo(this.mouse.x,this.mouse.y),t.lineWidth=e,t.stroke(),t.closePath(),i&&(this.last.x=this.mouse.x,this.last.y=this.mouse.y)}static line(t,e,s,i,n){t.strokeStyle=n,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(s.x,s.y),t.lineWidth=i,t.stroke(),t.closePath()}updateMousePosition(t){t||(t=event),t.offsetX&&(this.mouse.x=t.offsetX,this.mouse.y=t.offsetY)}updateTouchPosition(t){if(t||(t=event),t.touches&&1==t.touches.length){const e=t.touches[0];this.mouse.x=e.pageX-e.target.offsetLeft,this.mouse.y=e.pageY-e.target.offsetTop}}},function(t){t[t.DRAWING=0]="DRAWING",t[t.STOPPED=1]="STOPPED"}(i||(i={}))},function(t,e,s){"use strict";class i{constructor(t=-1,e=-1){this.x=t,this.y=e}copy(){return new i(this.x,this.y)}toString(){return this.x+","+this.y}}e.a=i},function(t,e,s){"use strict";s.d(e,"b",function(){return i});var i,n=s(15),a=s(20),o=s(21),r=s(24),h=s(25),c=s(26),l=s(27),u=s(0),d=s(7),w=s(29),p=s(1),g=s(30),f=s(10);!function(t){t[t.MENU=0]="MENU",t[t.TANK_PLACEMENT=1]="TANK_PLACEMENT",t[t.TANK_MOVEMENT=2]="TANK_MOVEMENT",t[t.TANK_SELECTION=3]="TANK_SELECTION",t[t.TANK_SHOOTING=4]="TANK_SHOOTING",t[t.GAME_END=5]="GAME_END"}(i||(i={}));e.a=class{constructor(t,e,s,i){this.players=[],this.nextPlayer=!1,this.canvas=t,this.context=e,this.ui=s,this.viewport=i,this.lineCache=new w.a;let n=[new p.a(0,0),new p.a(0,0),new p.a(0,0)];this.currentPlayer=0;for(let t=0;t<f.a;t++)this.players.push(new l.a(t,"Player "+(t+1),d.a.next(),n[t]))}changeGameState(t){this.ui.clear(),this.state=t,this.canvas.onmousedown=null,this.canvas.onmouseup=null,window.onmouseup=null,this.canvas.onmousemove=null;const e=this.gameOver();!e&&this.nextPlayer&&(this.nextActivePlayer(),this.nextPlayer=!1),e&&(this.state=i.GAME_END);const s=e||this.players[this.currentPlayer];switch(console.log("This is",s.name,"playing."),this.ui.setPlayer(s.name),this.state){case i.MENU:console.log("Initialising MENU"),this.action=new c.a(this,this.context);break;case i.TANK_PLACEMENT:console.log("Initialising TANK PLACING"),this.action=new a.a(this,this.context,s);break;case i.TANK_SELECTION:console.log("Initialising TANK SELECTION"),this.action=new r.a(this,this.context,this.ui,s);break;case i.TANK_MOVEMENT:console.log("Initialising TANK MOVEMENT"),this.action=new n.a(this,this.context,this.ui,s);break;case i.TANK_SHOOTING:console.log("Initialising TANK SHOOTING"),this.action=new o.a(this,this.context,this.ui,s);break;case i.GAME_END:console.log("Initialising GAME END"),this.action=new h.a(this,this.context,s);break;default:throw new Error("The game should never be in an unknown state, something has gone terribly wrong!")}this.action.setUpUi(this.ui,this.viewport),this.action.view(this.viewport),this.action.addEventListeners(this.canvas)}gameOver(){if(this.state!==i.MENU&&this.state!==i.TANK_PLACEMENT){let t,e=!1;for(const s of this.players)if(s.activeTanks().length>0){if(e)return!1;e=!0,t=s}return t}}clearCanvas(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}redrawCanvas(){this.clearCanvas();for(const t of this.players)for(const e of t.tanks)e.draw(this.context);const t=d.a.gray(.5).toRGBA();for(const e of this.lineCache.lines())for(let s=1;s<e.points.length;s++)u.a.line(this.context,e.points[s-1],e.points[s],1,t)}collide(t,e=!1){console.log("-------------------- Starting Collision -------------------");const s=t.points.length;if(e)throw new Error("Not implemented");const i=e?this.players:this.players.filter(t=>t.id!==this.currentPlayer);for(const e of i)g.a.collide(t,s,e.tanks)}cacheLine(t){this.lineCache.points.push(t)}nextActivePlayer(){if(this.state===i.TANK_PLACEMENT)this.currentPlayer+=1;else do{this.currentPlayer=this.currentPlayer===f.a-1?0:this.currentPlayer+1}while(0===this.players[this.currentPlayer].activeTanks().length)}}},function(t,e,s){"use strict";s.d(e,"c",function(){return i}),s.d(e,"b",function(){return n});var i,n,a=s(1),o=s(0),r=s(7);!function(t){t[t.SHOT=0]="SHOT",t[t.MOVED=1]="MOVED",t[t.NOT_ACTED=2]="NOT_ACTED"}(i||(i={})),function(t){t[t.ALIVE=0]="ALIVE",t[t.DISABLED=1]="DISABLED",t[t.DEAD=2]="DEAD"}(n||(n={}));class h{constructor(t,e,s,i,n,a){this.active=t,this.activeOutline=e,this.label=s,this.alive=i,this.disabled=n,this.dead=a}}class c{constructor(t,e,s,o){this.LABEL_OPACITY=.7,this.DISABLED_OPACITY=.7,this.id=t,this.player=e,this.position=new a.a(s,o),this.healthState=n.ALIVE,this.actionState=i.NOT_ACTED,this.label="",this.color=new h(r.a.red().toRGBA(),r.a.green().toRGBA(),r.a.black().toRGBA(this.LABEL_OPACITY),this.player.color.toRGBA(),this.player.color.toRGBA(this.DISABLED_OPACITY),r.a.gray().toRGBA())}draw(t){let[e,s]=this.uiElements();o.a.circle(t,this.position,c.WIDTH,c.LINE_WIDTH,s),t.fillStyle=this.color.label,t.font="16px Calibri",t.fillText(e,this.position.x,this.position.y+5)}uiElements(){let t,e=this.label;switch(this.actionState){case i.SHOT:e+="🚀";break;case i.MOVED:e+="⚓"}switch(this.healthState){case n.ALIVE:t=this.color.alive;break;case n.DISABLED:t=this.color.disabled,e+="♿";break;case n.DEAD:t=this.color.dead,e+="💀"}return[e,t]}highlight(t){o.a.dot(t,this.position,c.WIDTH,this.color.active),o.a.circle(t,this.position,c.MOVEMENT_RANGE,c.LINE_WIDTH,this.color.activeOutline)}active(){return this.actionState!==i.SHOT}}e.a=c,c.WIDTH=12,c.DISABLED_ZONE=.5,c.LINE_WIDTH=1,c.MOVEMENT_RANGE=100,c.MOVEMENT_LINE_WIDTH=3,c.MOVEMENT_LINE_COLOR=r.a.black().toRGBA(),c.SHOOTING_RANGE=409,c.SHOOTING_SPEED=30,c.SHOOTING_DEADZONE=c.WIDTH+2},function(t,e,s){"use strict";var i=s(1);class n{}e.a=n,n.point=new class{dist2d(t,e){const s=e.x-t.x,i=e.y-t.y;return Math.sqrt(Math.abs(s*s+i*i))}collideCircle(t,e,s){return!(this.dist2d(t,e)>s)}within(t,e,s){const i=(t,e,s)=>t<=e&&e<=s||s<=e&&e<=t;return e.x!==s.x?i(e.x,t.x,s.x):i(e.y,t.y,s.y)}},n.line=new class{closestPoint(t,e,s){const n=e.y-t.y,a=t.x-e.x,o=n*t.x+a*t.y,r=-a*s.x+n*s.y,h=n*n+a*a,c=new i.a;return 0!=h?(c.x=(n*o-a*r)/h,c.y=(n*r+a*o)/h):(c.x=s.x,c.y=s.y),c}distCircleCenter(t,e,s){const i=this.closestPoint(t,e,s);return n.point.within(i,t,e)?n.point.dist2d(i,s):-1}collideCircle(t,e,s,i){const n=this.distCircleCenter(t,e,s);return!(-1===n||n>i)}}},function(t,e,s){"use strict";class i{static parse(t){const[e,s]=i.getParent(t);for(const t in s)if("children"===t){const t=s.children;if(t instanceof Array)for(const s of t)e.appendChild(i.parse(s));else e.appendChild(i.parse(t))}else"onclick"===t?e.setAttribute("onclick",s[t]):e[t]=s[t];return e}static getParent(t){let e,s;for(const i in t)e=document.createElement(i),s=t[i];return[e,s]}}e.a=i},function(t,e,s){"use strict";var i=s(16);s.d(e,"a",function(){return i.a});var n=s(17);s.d(e,"c",function(){return n.a});var a=s(18);s.d(e,"b",function(){return a.a})},function(t,e,s){"use strict";var i=s(8);class n{constructor(t,e,s,i=1){this.red=t,this.green=e,this.blue=s,this.alpha=i}toRGBA(t){return t=void 0!==t?t:this.alpha,i.a.format("rgba(%s,%s,%s,%s)",this.red,this.green,this.blue,t)}static next(){if(0==n.color)return n.color++,n.red();if(1==n.color)return n.color++,n.blue();if(2==n.color)return n.color++,n.green();if(3==n.color)return n.color++,n.yellow();throw new Error("You've used all the available colours!")}static red(t=1){return new n(255,0,0,t)}static green(t=1){return new n(0,255,0,t)}static blue(t=1){return new n(0,0,255,t)}static black(t=1){return new n(0,0,0,t)}static white(t=1){return new n(255,255,255,t)}static yellow(t=1){return new n(255,255,0,t)}static gray(t=1){return new n(128,128,128,t)}static pink(t=1){return new n(255,102,203,t)}static c(t,e,s,i=1){return new n(t,e,s,i)}}e.a=n,n.color=0},function(t,e,s){"use strict";e.a=class{static format(...t){return t.reduce((t,e)=>t.replace(/%s/,e))}}},function(t,e,s){"use strict";var i=s(1);e.a=class{constructor(t,e){this.canvasWidth=t,this.canvasHeight=e}middle(t=0){this.go(this.canvasWidth/4,t)}go(t,e){console.log("Scrolling to",t,e),window.scroll(t,e)}goTo(t){this.go(t.x,t.y)}static current(){return new i.a(window.pageXOffset,window.pageYOffset)}}},function(t,e,s){"use strict";e.a=3;e.b=2},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(12),n=s(13),a=s(2),o=s(9);window.Controls=i.a;const r="tanks-canvas",h="tanks-ui",c=17;!function(){const t=window.innerWidth-32,e=.9*window.innerHeight,s=window.innerWidth-c,i=new n.a(h,s),l=document.getElementById(r);l.width=t,l.height=e,window.onscroll=(t=>{i.update(t)});const u=new o.a(l.width,l.height);u.middle(),new a.a(l,l.getContext("2d"),i,u).changeGameState(a.b.MENU),l.scrollIntoView()}()},function(t,e,s){"use strict";e.a=class{static toggle_w3_show(t){-1==t.className.indexOf("w3-show")?t.className+=" w3-show":t.className=t.className.replace(" w3-show","")}static w3_open(){document.getElementById("mySidebar").style.display="block",document.getElementById("myOverlay").style.display="block"}static w3_close(){document.getElementById("mySidebar").style.display="none",document.getElementById("myOverlay").style.display="none"}}},function(t,e,s){"use strict";var i=s(5),n=s(14);class a{constructor(t){this.element=t}add(t){"&nbsp;"===this.element.innerHTML&&(this.element.innerHTML=""),this.element.appendChild(t)}clear(){this.element.innerHTML="&nbsp;"}html(){return this.element}innerHTML(t){this.element.innerHTML=t}}class o{constructor(t,e){if(this.container=document.getElementById(t),!this.container)throw new Error("The UI DOM element was not found!");this.setWidth(e);this.left=new a(i.a.parse({div:{className:"w3-col s1 m1 l1"}}));const s={div:{className:"w3-col s5 m5 l5",style:"text-align:center;"}};this.playerTurn=new a(i.a.parse(s)),this.message=new a(i.a.parse(s));this.right=new a(i.a.parse({div:{className:"w3-col s1 m1 l1"}})),this.container.appendChild(this.left.html()),this.container.appendChild(this.playerTurn.html()),this.container.appendChild(this.message.html()),this.container.appendChild(this.right.html())}setWidth(t){this.container.style.width=t+"px"}clear(){this.left.clear(),this.playerTurn.clear(),this.message.clear(),this.right.clear()}setPlayer(t){this.playerTurn.add(i.a.parse({b:{textContent:t+"'s turn.",className:"fa-2x"}}))}update(t){this.container.style.left=window.pageXOffset+"px",this.container.style.top=window.pageYOffset+"px"}warning(t){console.log("Adding warning message",t),this.message.add(i.a.parse({b:{textContent:t,className:"fa-2x"}}))}addHome(t,e){const s=n.a.button_home();s.onclick=(()=>{t.goTo(e.viewportPosition)}),this.left.add(s)}}e.a=o,o.ID_BUTTON_SKIP_TURN="tanks-ui-button-skipturn"},function(t,e,s){"use strict";var i=s(5);e.a=class{static button_home(){return i.a.parse({button:{style:"width:100%",className:"w3-button w3-border",children:{i:{className:"fas fa-home"}}}})}}},function(t,e,s){"use strict";var i=s(0),n=s(6),a=s(2),o=s(1),r=s(3),h=s(9),c=s(19);e.a=class{constructor(t,e,s,c){this.startMovement=(t=>{0==t.button&&(this.draw.last=new o.a(this.active.position.x,this.active.position.y),this.line.in(this.active.position,this.draw.mouse)&&this.active.healthState!==r.b.DISABLED&&(this.draw.state=i.b.DRAWING,this.validMove()))}),this.endMovement=(t=>{if(0==t.button){if(this.line.reset(),this.tankValidPosition){const t=this.player.tanks[this.active.id];t.position=this.draw.mouse.copy(),t.actionState=r.c.MOVED,this.ui.warning(""),this.player.viewportPosition=h.a.current()}this.endTurn()}}),this.goToShooting=(()=>{this.player.tanks[this.active.id].actionState=r.c.MOVED,this.player.activeTank.set(this.player.tanks[this.active.id]),this.draw.state=i.b.STOPPED,this.controller.redrawCanvas(),this.controller.changeGameState(a.b.TANK_SELECTION)}),this.drawMoveLine=(t=>{this.draw.updateMousePosition(t),this.draw.state==i.b.DRAWING&&(this.line.in(this.active.position,this.draw.mouse)?this.validMove():this.tankValidPosition=!1)}),this.controller=t,this.context=e,this.player=c,this.ui=s,this.draw=new i.a,this.line=new n.b(r.a.MOVEMENT_RANGE),this.active=this.player.activeTank.get()}addEventListeners(t){t.onmousedown=this.startMovement,t.onmousemove=this.drawMoveLine,t.onmouseup=this.endMovement}view(t){}setUpUi(t,e){const s=c.a.button_goToShooting();s.onclick=this.goToShooting,t.right.add(s),t.addHome(e,this.player)}validMove(){this.tankValidPosition=!0,this.draw.mouseLine(this.context,r.a.MOVEMENT_LINE_WIDTH,r.a.MOVEMENT_LINE_COLOR)}endTurn(){this.draw.state=i.b.STOPPED,this.controller.redrawCanvas(),this.controller.changeGameState(a.b.TANK_SELECTION)}}},function(t,e,s){"use strict";e.a=class{constructor(t=5){this.limit=t,this.num_actions=0}take(){this.num_actions+=1}end(){this.num_actions=this.limit}over(){return this.num_actions>=this.limit}reset(){this.num_actions=0}}},function(t,e,s){"use strict";var i=s(4);e.a=class{constructor(t=20){this.limit=t}enough(t,e){return i.a.point.dist2d(t,e)>=this.limit}}},function(t,e,s){"use strict";var i=s(4);e.a=class{constructor(t=200){this.limit=t,this.current=0}reset(){this.current=0}add(t,e){return this.current+=i.a.point.dist2d(t,e),console.log("Shot total distance: ",this.current),this.current<=this.limit}in(t,e){return i.a.point.dist2d(t,e)<=this.limit}}},function(t,e,s){"use strict";var i=s(5);e.a=class{static button_goToShooting(){return i.a.parse({button:{style:"width:100%",className:"w3-button w3-border",children:{i:{className:"fas fa-rocket"}}}})}}},function(t,e,s){"use strict";var i=s(2),n=s(3),a=s(0),o=s(10),r=s(6);class h{constructor(t,e,s){this.addTank=(t=>{if(0!=t.button)return;this.draw.updateMousePosition(t);const e=new n.a(this.player.tanks.length,this.player,this.draw.mouse.x,this.draw.mouse.y);this.player.tanks.push(e),e.draw(this.context),this.tanksPlaced.take(),this.tanksPlaced.over()&&(h.playersTankPlacement.take(),this.controller.nextPlayer=!0,h.playersTankPlacement.over()?this.controller.changeGameState(i.b.TANK_SELECTION):this.controller.changeGameState(i.b.TANK_PLACEMENT))}),this.controller=t,this.context=e,this.draw=new a.a,this.tanksPlaced=new r.a(o.b),this.player=s}addEventListeners(t){t.onmousedown=this.addTank}view(t){t.goTo(this.player.viewportPosition)}setUpUi(t,e){t.addHome(e,this.player)}}e.a=h,h.playersTankPlacement=new r.a(o.a)},function(t,e,s){"use strict";var i=s(2),n=s(0),a=s(3),o=s(1),r=s(4),h=s(22),c=s(9),l=s(23),u=s(6);e.a=class{constructor(t,e,s,l){this.successfulShot=!1,this.startShooting=(t=>{if(0!=t.button)return;this.draw.updateMousePosition(t),this.draw.last=new o.a(this.active.position.x,this.active.position.y),this.successfulShot=!1;const e=this.player.tanks[this.active.id];r.a.point.collideCircle(this.draw.mouse,e.position,a.a.WIDTH)?this.tankRoamingLength.in(this.active.position,this.draw.mouse)&&(this.shotPath.points.push(this.active.position.copy()),this.draw.state=n.b.DRAWING,this.validRange()):console.log("Click did not collide with the active tank")}),this.continueShooting=(t=>{this.draw.updateMousePosition(t),this.draw.state==n.b.DRAWING&&(this.tankRoamingLength.in(this.active.position,this.draw.mouse)?(console.log("Roaming in tank space"),this.ui.warning(""),this.validRange()):this.shotSpeed.enough(this.active.position,this.draw.mouse)?(console.log("Shooting!"),this.ui.warning(""),this.validRange(),this.shotPath.points.push(this.draw.mouse.copy()),this.shotLength.add(this.active.position,this.draw.mouse)||(console.log("Successful shot!"),this.successfulShot=!0,this.draw.state=n.b.STOPPED)):(this.ui.warning("Shooting too slow!"),console.log("Shooting too slow!"),this.draw.state=n.b.STOPPED))}),this.stopShooting=(t=>{if(0!=t.button)return;const e=this.player.tanksShot.get();this.successfulShot&&(this.controller.collide(this.shotPath),this.controller.cacheLine(this.shotPath),e.take(),this.active.actionState=a.c.SHOT,this.player.viewportPosition=c.a.current()),e.over()?(this.player.resetTanksActStates(),this.controller.nextPlayer=!0):this.player.tanksShot.set(e),this.draw.state=n.b.STOPPED,this.controller.redrawCanvas(),this.controller.changeGameState(i.b.TANK_SELECTION)}),this.skipTurn=(()=>{this.player.resetTanksActStates(),this.controller.nextPlayer=!0,this.player.viewportPosition=c.a.current(),this.draw.state=n.b.STOPPED,this.controller.redrawCanvas(),this.controller.changeGameState(i.b.TANK_SELECTION)}),this.controller=t,this.context=e,this.player=l,this.ui=s,this.shotPath=new h.a,this.draw=new n.a,this.tankRoamingLength=new u.b(a.a.SHOOTING_DEADZONE),this.shotLength=new u.b(a.a.SHOOTING_RANGE),this.shotSpeed=new u.c(a.a.SHOOTING_SPEED),l.tanksShot.available()||l.tanksShot.set(new u.a(l.activeTanks().length)),this.active=this.player.activeTank.get()}addEventListeners(t){t.onmousedown=this.startShooting,t.onmousemove=this.continueShooting,window.onmouseup=this.stopShooting}view(t){}setUpUi(t,e){t.addHome(e,this.player);const s=l.a.button_skipTurn();s.onmousedown=this.skipTurn,t.right.add(s)}validRange(){this.draw.mouseLine(this.context,a.a.MOVEMENT_LINE_WIDTH,a.a.MOVEMENT_LINE_COLOR)}}},function(t,e,s){"use strict";e.a=class{constructor(){this.points=[]}list(){console.log("Points for the shot: ",this.points.join(", "))}}},function(t,e,s){"use strict";var i=s(5);e.a=class{static button_skipTurn(){return i.a.parse({button:{style:"width:100%",className:"w3-button w3-border",children:{i:{className:"fas fa-fast-forward"}}}})}}},function(t,e,s){"use strict";var i=s(2),n=s(4),a=s(0),o=s(3);e.a=class{constructor(t,e,s,r){this.highlightTank=(t=>{if(0==t.button){this.draw.updateMousePosition(t);for(const t of this.player.tanks)if(t.healthState!==o.b.DEAD&&t.active()&&n.a.point.collideCircle(this.draw.mouse,t.position,o.a.WIDTH)){this.successfulSelection(t);break}}}),this.mouseUp=(()=>{if(this.player.activeTank.available()){let t;switch(this.active.actionState){case o.c.NOT_ACTED:t=i.b.TANK_MOVEMENT;break;case o.c.MOVED:t=i.b.TANK_SHOOTING;break;case o.c.SHOT:t=i.b.TANK_SELECTION}this.controller.changeGameState(t)}}),this.controller=t,this.context=e,this.player=r,this.draw=new a.a,this.ui=s}addEventListeners(t){this.player.activeTank.available()?(this.active=this.player.activeTank.get(),this.successfulSelection(this.active),this.mouseUp()):(t.onmousedown=this.highlightTank,window.onmouseup=this.mouseUp)}view(t){t.goTo(this.player.viewportPosition)}setUpUi(t,e){t.addHome(e,this.player)}successfulSelection(t){t.highlight(this.context,this.draw),this.player.activeTank.set(t),this.active=t}}},function(t,e,s){"use strict";var i=s(0),n=s(8);class a{constructor(t,e){this.final_height=-1,this.start_height=150,this.height_increment=70,this.title=t,this.options=e}draw(t,e){const s=t.canvas.width;t.canvas.height;t.textAlign="center",t.fillStyle="rgb(135,206,250)",t.font="60px Georgia";let i=this.start_height;const n=s/2;t.fillText(this.title,n,i),t.fillStyle="White",t.font="30px Georgia";for(const[e,s]of this.options.entries())i+=this.height_increment,this.selected(e)?(t.fillStyle="Yellow",t.font="40px"):(t.fillStyle="Black",t.font="30px"),t.fillText(s,n,i);this.final_height=i}selected(t){return this.selected_item===t}select(t){if(-1===this.final_height)throw new Error("The menu hasn't been drawn.");const e=this.height_increment/2;let s=this.final_height,i=this.options.length-1;for(;s>this.start_height;){if(t.y>s-e)return void(this.selected_item=i);s-=this.height_increment,i-=1}}}e.a=class{constructor(t,e,s){this.controller=t,this.context=e,this.draw=new i.a;const o=s.activeTanks().length,r=1===o?" tank":" tanks";this.menu=new a("End of Game",[n.a.format("%s Won!",s.name),n.a.format("With %s %s",o,r)]),this.menu.draw(this.context,this.draw)}addEventListeners(t){}view(t){t.middle()}setUpUi(t){}}},function(t,e,s){"use strict";var i=s(2),n=s(0);class a{constructor(t,e){this.final_height=-1,this.start_height=150,this.height_increment=70,this.title=t,this.options=e}draw(t,e){const s=t.canvas.width,i=t.canvas.height;t.fillStyle="Black",t.fillRect(0,0,s,i),t.textAlign="center",t.fillStyle="rgb(135,206,250)",t.font="60px Georgia";let n=this.start_height;const a=s/2;t.fillText(this.title,a,n),t.fillStyle="White",t.font="30px Georgia";for(const[e,s]of this.options.entries())n+=this.height_increment,this.selected(e)?(t.fillStyle="Yellow",t.font="40px Georgia"):(t.fillStyle="White",t.font="30px Georgia"),t.fillText(s,a,n);this.final_height=n}selected(t){return this.selected_item===t}select(t){if(-1===this.final_height)throw new Error("The menu hasn't been drawn.");const e=this.height_increment/2;let s=this.final_height,i=this.options.length-1;for(;s>this.start_height;){if(t.y>s-e)return void(this.selected_item=i);s-=this.height_increment,i-=1}}}e.a=class{constructor(t,e){this.selectMenuitem=(t=>{this.draw.updateMousePosition(t),this.menu.select(this.draw.mouse),this.menu.draw(this.context,this.draw)}),this.activateMenuOption=(t=>{this.menu.selected_item>=0&&(this.controller.clearCanvas(),this.controller.changeGameState(i.b.TANK_PLACEMENT))}),this.controller=t,this.context=e,this.draw=new n.a,this.menu=new a("Tanks",["Start game","Potatoes","Apples","I","Choose","You","Pikachu"]),this.menu.draw(this.context,this.draw)}addEventListeners(t){t.onmousedown=this.activateMenuOption,t.onmousemove=this.selectMenuitem}view(t){t.middle()}setUpUi(t){}}},function(t,e,s){"use strict";var i=s(3),n=s(28);e.a=class{constructor(t,e,s,i){this.id=t,this.name=e,this.tanks=new Array,this.color=s,this.tanksShot=new n.a,this.activeTank=new n.a,this.viewportPosition=i}activeTanks(){return this.tanks.filter(t=>t.healthState!==i.b.DEAD)}resetTanksActStates(){for(const t of this.tanks)t.actionState=i.c.NOT_ACTED}}},function(t,e,s){"use strict";e.a=class{constructor(){this.resource=null,this.accessed=!1}set(t){this.resource=t,this.accessed=!1}available(){return!this.accessed&&null!==this.resource}get(){if(this.available()){const t=this.resource;return this.resource=null,t}throw this.accessed?new Error("This object has already been accessed."):null===this.resource?new Error("The resource object has not been set."):new Error("Unknown error with single access object")}}},function(t,e,s){"use strict";var i=s(7);e.a=class{constructor(){this.color=i.a.gray().toRGBA(),this.size=10,this.points=[]}lines(){const t=this.points.length;return t>this.size?this.points.slice(t-this.size,t):this.points}}},function(t,e,s){"use strict";var i=s(3),n=s(4),a=s(8);e.a=class{static debugShot(t,e,s,i,n){for(const e of t.points)console.log(a.a.format("%s,%s",e.x,-e.y));console.log(a.a.format("Collision versus line:\n%s,%s\n%s,%s",e.x,-e.y,s.x,-s.y)),console.log(a.a.format("Tank ID: %s\nPosition: (%s,%s)",i.id,i.position.x,-i.position.y)),console.log("Distance: ",n)}static collide(t,e,s){for(const a of s)if(a.healthState!==i.b.DEAD)for(let s=1;s<e;s++){const e=t.points[s-1],o=t.points[s],r=n.a.line.distCircleCenter(e,o,a.position);if(this.debugShot(t,e,o,a,r),-1!==r){if(console.log("Shot hit the tank."),i.a.WIDTH-i.a.DISABLED_ZONE<=r&&r<=i.a.WIDTH+i.a.DISABLED_ZONE){a.healthState=i.b.DISABLED,console.log("Tank",a.id,"disabled!");break}if(r<i.a.WIDTH){a.healthState=i.b.DEAD,console.log("Tank",a.id,"dead!");break}}}}}}]);