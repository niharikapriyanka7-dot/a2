(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});
  function $(i){return document.getElementById(i);}
  // 1. Classic piece explorer: [name, origin, look for, wear, care]
  var PE={trench:['The trench coat','Developed in the early 1900s as practical rainwear, it became famous during the First World War and has been a city staple ever since.','Tightly woven cotton gabardine, storm flap, adjustable cuffs and a belt that sits at your natural waist.','Belted over a knit dress, or open over jeans and a white shirt.','Spot clean and brush; reproof with a water-repellent spray each season.'],
    oxford:['The oxford shirt','Woven in a basket-weave cotton first made in Scotland in the 1800s, the button-down collar was popularised on sports fields and campuses.','Soft but substantial oxford cloth, a collar roll that looks relaxed, not stiff, and secure buttons.','Under a blazer or knit, or sleeves rolled with chinos.','Wash at 40°C, hang to dry and iron while slightly damp.'],
    chinos:['Chinos','Hard-wearing cotton twill trousers adopted from military uniforms in the early twentieth century.','Dense twill, a clean front and a leg that tapers slightly without being skinny.','With loafers and an oxford shirt, or trainers and a T-shirt.','Wash cool inside out; hang to dry to keep the colour.'],
    breton:['The Breton top','Originally a navy uniform for sailors in Brittany, its stripes became a fashion classic in the 1930s.','Heavy cotton jersey that holds its shape and evenly spaced stripes.','With white jeans in summer or under a camel coat in winter.','Wash cool with similar colours; dry flat to prevent stretching.'],
    whitetee:['The white T-shirt','Introduced as an undershirt, it became outerwear and a symbol of cool in the 1950s.','Mid-weight cotton, a neckline that lies flat and side seams that stay straight.','With almost anything: jeans, suits, skirts and leather jackets.','Wash separately from colours; replace when the neckline loses shape.'],
    blazer:['The navy blazer','Rooted in naval and sporting dress of the 1800s, it bridges smart and casual.','Wool or wool-blend cloth, natural shoulders and sleeves that show a little shirt cuff.','Over grey trousers and a shirt, or a T-shirt and jeans.','Brush after wear, steam rather than iron and dry clean sparingly.'],
    cardigan:['The wool cardigan','Named after a nineteenth-century British earl, the cardigan has been a comfortable layer for generations.','Tight, even knitting, reinforced button bands and ribbed cuffs that spring back.','Over a shirt, a dress or a T-shirt; buttoned as a top on its own.','Hand wash cool, dry flat and fold, never hang.'],
    loafers:['Penny loafers','Slip-on moccasin-style shoes that became a campus and office favourite in the mid-twentieth century.','Smooth full-grain leather, a stitched apron toe and a firm heel counter.','With chinos, cropped trousers, skirts or tailored shorts.','Polish regularly, use shoe trees and resole when worn.'],
    lbd:['The little black dress','Popularised in the 1920s, it became the go-to elegant dress for any occasion.','A clean cut, quality fabric that drapes, and a length you feel comfortable in.','With flats by day, heels or boots by night; change the look with accessories.','Wash or dry clean as the label says; store on a padded hanger.'],
    peacoat:['The pea coat','A short, double-breasted wool coat worn by sailors since the 1700s.','Heavy melton wool, a high collar and sturdy anchor or horn buttons.','Over a roll-neck or hoodie with jeans and boots.','Brush often, air between wears and store with cedar.']};
  var pe=$('pe-p');
  function explore(){if(!pe)return;var P=PE[pe.value];$('pe-h').textContent=P[0];
    $('pe-d').innerHTML=[['Origins',P[1]],['Look for',P[2]],['Wear it',P[3]],['Care',P[4]]].map(function(x){return '<dt>'+x[0]+'</dt><dd>'+x[1]+'</dd>';}).join('');}
  if(pe){pe.addEventListener('change',explore);explore();}
  // 2. Decade style finder
  var DC={1920:['Loose, low-waisted silhouettes and the start of relaxed modern dressing.',['Drop-waist dress','Cloche hat','Two-tone shoes','Fair Isle knit','Wide trousers'],'Try a dropped-waist dress or a Fair Isle sweater with modern straight-leg trousers.'],
    1930:['Elegant, fluid lines, bias-cut fabrics and the rise of sportswear.',['Bias-cut slip dress','High-waisted wide trousers','Breton top','Tailored overcoat'],'A satin slip skirt with a chunky knit, or high-waisted wide trousers with a fitted top.'],
    1940:['Practical, tailored clothing shaped by wartime rationing.',['Tea dress','Structured shoulder jacket','Trench coat','Pleated trousers'],'A trench coat or a tea dress with trainers keeps the spirit without looking like a costume.'],
    1950:['A new optimism: full skirts, fitted waists and casual American icons.',['White T-shirt','Straight-leg jeans','Leather jacket','Full midi skirt','Loafers'],'A white tee, straight jeans and loafers is the decade&#8217;s most wearable legacy.'],
    1960:['Clean, graphic shapes and youthful mod style.',['Shift dress','Turtleneck','Slim suit','Chelsea boots','Pea coat'],'A black turtleneck with slim trousers and Chelsea boots feels effortlessly modern.'],
    1970:['Relaxed, earthy and expressive, with flares and natural textures.',['Flared jeans','Suede jacket','Wrap dress','Chunky knit','Corduroy'],'Try one piece, like flared jeans or a suede jacket, with otherwise simple clothes.'],
    1980:['Bold shoulders, power dressing and sportswear in the street.',['Oversized blazer','High-waisted jeans','Polo shirt','Leather loafers'],'An oversized blazer over a plain T-shirt and straight jeans is a modern favourite.'],
    1990:['Minimalism and relaxed casual wear.',['Slip dress','Straight jeans','Plain white tee','Simple trainers','Long camel coat'],'The decade&#8217;s minimalism, a camel coat, slip skirt and clean trainers, still looks current.']};
  var dd=$('dc-d');
  function decade(){if(!dd)return;var D=DC[dd.value];$('dc-h').textContent='The '+dd.value+'s';$('dc-s').innerHTML=D[0];
    $('dc-p').innerHTML=D[1].map(function(x){return '<span>'+x+'</span>';}).join('');$('dc-n').innerHTML='<b>Wear it today:</b> '+D[2];}
  if(dd){dd.addEventListener('change',decade);decade();}
  // 3. Care schedule
  var CS={coat:['Wool coat',['Hang on a wide hanger and brush off dust.','Air outside the wardrobe overnight; spot clean marks.','Professional clean at the end of winter; store in a breathable cover with cedar.'],'Avoid washing wool coats at home unless the label allows it.'],
    shoes:['Leather shoes',['Insert cedar shoe trees and let them rest a day.','Clean and polish; condition the leather.','Check soles and heels; resole or re-heel before wear reaches the welt.'],'Rotating between two pairs doubles the life of both.'],
    knit:['Wool knitwear',['Air and fold; never hang knits.','Hand wash cool with wool detergent when needed; dry flat.','De-pill with a comb and store clean with cedar or lavender.'],'Wool resists odours, so it needs washing far less than you think.'],
    shirt:['Cotton shirt',['Hang straight away; check the collar and cuffs.','Wash at 30–40°C, hang to dry and iron damp.','Check buttons and collar points; turn frayed collars or cuffs if possible.'],'Wash light shirts after one or two wears to stop collar marks setting.'],
    jeans:['Raw or dark jeans',['Hang to air; spot clean small marks.','Wash cold, inside out, only when really needed.','Repair worn crotch and knee areas early with patches or darning.'],'Washing less keeps the deep colour and lets the denim fade naturally.'],
    leather:['Leather jacket',['Hang on a shaped hanger, away from heat.','Wipe with a damp cloth; let it dry naturally.','Clean and condition once or twice a year; store in a breathable cover.'],'Never store leather in plastic; it needs to breathe.']};
  var FQ={daily:['After each wear','Every week','Every 3 months'],weekly:['After each wear','Every few weeks','Once a season'],occasion:['After each wear','After a few wears','Once a year']};
  var cg=$('cs-g'),cf2=$('cs-f');
  function care(){if(!cg)return;var C=CS[cg.value],F=FQ[cf2.value];$('cs-h').textContent=C[0]+' care';
    $('cs-l').innerHTML=C[1].map(function(t,i){return '<li><b>'+F[i]+'</b><span>'+t+'</span></li>';}).join('');$('cs-n').innerHTML='<b>Tip:</b> '+C[2];}
  if(cg){[cg,cf2].forEach(function(x){x.addEventListener('change',care);});care();}
  // contact & cookies
  var cf=$('cform');
  if(cf)cf.addEventListener('submit',function(ev){ev.preventDefault();if(cf.website.value)return;if(!cf.checkValidity()){cf.reportValidity();return;}
    var body='Name: '+cf.name.value+'\nEmail: '+cf.email.value+'\nTopic: '+cf.topic.value+'\n\n'+cf.message.value;
    window.location.href='mailto:'+cf.dataset.to+'?subject='+encodeURIComponent('Website enquiry: '+cf.topic.value)+'&body='+encodeURIComponent(body);
    var s=$('fm');s.hidden=false;s.textContent='Your email app should now open with your message ready to send. If it doesn’t, please email us directly at '+cf.dataset.to+'.';});
  var c=$('cookie'),v=null;try{v=localStorage.getItem('ca_cookie');}catch(e){}
  if(c&&!v)c.classList.add('show');
  document.querySelectorAll('[data-cookie]').forEach(function(x){x.addEventListener('click',function(){try{localStorage.setItem('ca_cookie',x.dataset.cookie);}catch(e){}c.classList.remove('show');});});
  var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
