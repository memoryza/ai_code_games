import{r,u as z,j as l}from"./vendor-react-BnsUgT_O.js";import"./vendor-deps-z3IJcbrk.js";const E=30,h=30,x=20,T=()=>{const[i,S]=r.useState({board:[],player:{x:1,y:1},exit:{x:h-2,y:x-2},gameWon:!1}),[f,w]=r.useState(null),d=r.useRef(null),m=r.useRef(null),j=z(),k=r.useCallback(()=>{if(!m.current)return E;const e=m.current.clientWidth*.9,a=(window.innerHeight-200)*.9,n=Math.floor(e/h),s=Math.floor(a/x);return Math.min(n,s)},[]),[o,v]=r.useState(E),y=r.useCallback(()=>{const t=d.current,e=t==null?void 0:t.getContext("2d");!t||!e||(e.clearRect(0,0,t.width,t.height),i.board.forEach((a,n)=>{a.forEach((s,c)=>{e.fillStyle=s==="wall"?"#333":s==="exit"?"#4CAF50":"#fff",e.fillRect(c*o,n*o,o,o),e.strokeStyle="#666",e.strokeRect(c*o,n*o,o,o)})}),e.fillStyle="#2196F3",e.beginPath(),e.arc(i.player.x*o+o/2,i.player.y*o+o/2,o/3,0,Math.PI*2),e.fill())},[i,o]);r.useEffect(()=>{const t=()=>{const e=k();v(e);const a=d.current;a&&(a.width=h*e,a.height=x*e,y())};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[k,y]);const M=()=>{const t=Array(x).fill(0).map(()=>Array(h).fill("wall")),e=[],a={x:1,y:1};for(t[a.y][a.x]="path",e.push(a);e.length>0;){const n=e[e.length-1],s=[{x:n.x+2,y:n.y,between:{x:n.x+1,y:n.y}},{x:n.x-2,y:n.y,between:{x:n.x-1,y:n.y}},{x:n.x,y:n.y+2,between:{x:n.x,y:n.y+1}},{x:n.x,y:n.y-2,between:{x:n.x,y:n.y-1}}].filter(c=>c.x>0&&c.x<h-1&&c.y>0&&c.y<x-1&&t[c.y][c.x]==="wall");if(s.length>0){const c=s[Math.floor(Math.random()*s.length)];t[c.y][c.x]="path",t[c.between.y][c.between.x]="path",e.push(c)}else e.pop()}return t[x-2][h-2]="exit",t},g=r.useCallback(()=>{const t=M();S({board:t,player:{x:1,y:1},exit:{x:h-2,y:x-2},gameWon:!1})},[]),u=r.useCallback((t,e)=>{S(a=>{const n=a.player.x+t,s=a.player.y+e;if(n<0||n>=h||s<0||s>=x||a.board[s][n]==="wall")return a;const c=n===a.exit.x&&s===a.exit.y;return{...a,player:{x:n,y:s},gameWon:c}})},[]),b=r.useCallback(t=>{if(!i.gameWon)switch(t.key){case"ArrowUp":case"w":case"W":u(0,-1);break;case"ArrowDown":case"s":case"S":u(0,1);break;case"ArrowLeft":case"a":case"A":u(-1,0);break;case"ArrowRight":case"d":case"D":u(1,0);break}},[i.gameWon,u]),W=t=>{if(i.gameWon)return;const e=t.touches[0];w({x:e.clientX,y:e.clientY})},p=t=>{if(!f||i.gameWon)return;const e=t.touches[0],a=e.clientX-f.x,n=e.clientY-f.y,s=30;(Math.abs(a)>s||Math.abs(n)>s)&&(Math.abs(a)>Math.abs(n)?u(a>0?1:-1,0):u(0,n>0?1:-1),w({x:e.clientX,y:e.clientY}))},C=()=>{w(null)};return r.useEffect(()=>{g()},[g]),r.useEffect(()=>(window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)),[b]),r.useEffect(()=>{const t=d.current;t&&(t.width=h*o,t.height=x*o,y())},[y]),l.jsxs("div",{className:"maze-container",ref:m,children:[l.jsx("h1",{children:"小迷宫"}),l.jsxs("div",{className:"game-area",children:[l.jsx("canvas",{ref:d,className:"game-canvas",onTouchStart:W,onTouchMove:p,onTouchEnd:C}),i.gameWon&&l.jsxs("div",{className:"game-won",children:[l.jsx("h2",{children:"恭喜!"}),l.jsx("p",{children:"你找到出口了！"})]})]}),l.jsxs("div",{className:"game-controls",children:[l.jsx("button",{onClick:g,children:"重新开始"}),l.jsx("button",{onClick:()=>j("/"),children:"返回首页"})]}),l.jsx("div",{className:"game-instructions",children:l.jsx("p",{children:"使用方向键、WASD或滑动屏幕来移动"})})]})};export{T as default};
//# sourceMappingURL=maze-game-CcIuCQfA.js.map