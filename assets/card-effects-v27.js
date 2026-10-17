
(()=>{const card=document.getElementById('card'),stage=document.getElementById('stage'),v=document.getElementById('vertical'),h=document.getElementById('horizontal'),status=document.getElementById('status');let down=false;function update(){const x=+v.value,y=+h.value;card.style.setProperty('--rx',x+'deg');card.style.setProperty('--ry',y+'deg');card.style.setProperty('--angle',(90+y*3.6-x*2.1)+'deg');card.style.setProperty('--holo-angle',(115-y*4+x*2.5)+'deg');card.style.setProperty('--left-y',(50-x*1.65+y*.6)+'%');card.style.setProperty('--right-y',(50+x*1.65-y*.6)+'%');card.style.setProperty('--left-x',(8+y*.34)+'%');card.style.setProperty('--right-x',(92+y*.34)+'%');card.style.setProperty('--glow',String(1));card.style.setProperty('--glint-angle',(115+y*2-x)+'deg');card.style.setProperty('--glint-x',(50+y*2)+'%');status.textContent='Tilt: '+x+'° / '+y+'°'}function move(e){if(!down)return;const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;h.value=Math.round(Math.max(-22,Math.min(22,x*44)));v.value=Math.round(Math.max(-22,Math.min(22,-y*44)));update()}stage.addEventListener('pointerdown',e=>{down=true;stage.setPointerCapture(e.pointerId);move(e)});stage.addEventListener('pointermove',move);for(const type of ['pointerup','pointercancel','lostpointercapture'])stage.addEventListener(type,()=>down=false);v.addEventListener('input',update);h.addEventListener('input',update);document.getElementById('reset').addEventListener('click',()=>{v.value=0;h.value=0;update()});const art=document.getElementById('art'),foil=card.querySelector('.foil');
function buildGoldMask(){
 // Image-derived ornament mask: only warm metallic pixels in the perimeter.
 // Preserve the original PNG unchanged; generate an alpha mask in memory.
 try{
  const canvas=document.createElement('canvas');
  const w=384,h=576;canvas.width=w;canvas.height=h;
  const ctx=canvas.getContext('2d',{willReadFrequently:true});
  ctx.drawImage(art,0,0,w,h);
  const img=ctx.getImageData(0,0,w,h),d=img.data;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
   const i=(y*w+x)*4,r=d[i],g=d[i+1],b=d[i+2];
   const edge=(x<65||x>w-66||y<62||y>h-63);
   const warmth=r-g,blueGap=g-b;
   const metallic=edge&&r>74&&g>43&&warmth>9&&blueGap>9&&r>b*1.35;
   const fineDetail=Math.min(1,Math.max(0,(r-g-9)/42));
   const strength=metallic?Math.min(255,Math.max(110,(r-50)*4.3+fineDetail*28)):0;
   d[i]=255;d[i+1]=255;d[i+2]=255;d[i+3]=strength;
  }
  ctx.putImageData(img,0,0);
  const url='url("'+canvas.toDataURL('image/png')+'")';
  foil.style.webkitMaskImage=url;foil.style.maskImage=url;
  foil.style.webkitMaskComposite='source-over';foil.style.maskComposite='add';
  foil.style.webkitMaskSize='100% 100%';foil.style.maskSize='100% 100%';
 }catch(e){
  // Safari fallback: keep the known-working frame-only shine.
  const edge='linear-gradient(to right,black 0 13%,transparent 13% 87%,black 87% 100%)';
  const ends='linear-gradient(to bottom,black 0 10%,transparent 10% 90%,black 90% 100%)';
  foil.style.webkitMaskImage=edge+','+ends;foil.style.maskImage=edge+','+ends;
  foil.style.webkitMaskComposite='source-over';foil.style.maskComposite='add';
 }
}
function buildOceanMask(){
 const holo=card.querySelector('.holo');
 try{
  const c=document.createElement('canvas');const w=384,h=576;c.width=w;c.height=h;
  const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(art,0,0,w,h);
  const data=ctx.getImageData(0,0,w,h),p=data.data;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
   const i=(y*w+x)*4,r=p[i],g=p[i+1],b=p[i+2];
   // Exclude ornate outer frame, warm gold, gemstones and dark central silhouette.
   const inside=x>60&&x<w-60&&y>64&&y<h-64;
   const cool=b>r*1.12&&g>r*.94;
   const bright=Math.max(r,g,b);
   const darkFigure=bright<72;
   const amount=inside&&cool&&!darkFigure?Math.min(220,Math.max(0,(bright-65)*2.1)):0;
   p[i]=255;p[i+1]=255;p[i+2]=255;p[i+3]=amount;
  }
  ctx.putImageData(data,0,0);
  const mask='url("'+c.toDataURL('image/png')+'")';
  holo.style.webkitMaskImage=mask;holo.style.maskImage=mask;
 }catch(e){holo.style.display='none';console.warn('Ocean hologram mask unavailable',e);}
}
function maskOrbsBehindMermaid(){
 // Use the existing PNG solely to prevent orbs appearing over dark mermaid pixels.
 // No duplicate artwork or new image asset is created.
 try{
  const c=document.createElement('canvas'),w=384,h=576;c.width=w;c.height=h;
  const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(art,0,0,w,h);
  const data=ctx.getImageData(0,0,w,h),p=data.data;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
   const i=(y*w+x)*4,r=p[i],g=p[i+1],b=p[i+2],bright=Math.max(r,g,b);
   const inside=x>63&&x<w-63&&y>67&&y<h-67;
   // Dark figure blocks the particles. Bright blue water remains visible.
   const water=Math.max(0,Math.min(1,(bright-48)/55));
   const cool=Math.max(0,Math.min(1,(b-r+8)/25));
   const alpha=inside?Math.round(255*water*(.45+.55*cool)):0;
   p[i]=255;p[i+1]=255;p[i+2]=255;p[i+3]=alpha;
  }
  ctx.putImageData(data,0,0);
  const orbs=card.querySelector('.ocean-orbs');
  const mask='url("'+c.toDataURL('image/png')+'")';
  orbs.style.webkitMaskImage=mask;orbs.style.maskImage=mask;
  orbs.style.webkitMaskSize='100% 100%';orbs.style.maskSize='100% 100%';
 }catch(e){console.warn('Orb depth mask unavailable; keep v26 particles',e);}
}
function prepareMasks(){buildGoldMask();buildOceanMask();maskOrbsBehindMermaid();const glint=card.querySelector('.gold-glint');glint.style.webkitMaskImage=foil.style.webkitMaskImage;glint.style.maskImage=foil.style.maskImage;}
if(art.complete&&art.naturalWidth)prepareMasks();else art.addEventListener('load',prepareMasks,{once:true});
art.addEventListener('error',()=>{document.getElementById('missing').hidden=false});update()})();
