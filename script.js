// ===== Glam Doll Prompt Builder (FULL COPY/PASTE JS) =====

let isApplyingPreset = false;

const SECTIONS = [
  {id:"preset", label:"Viral Presets", multi:false, custom:false, options:[
    "Select a preset...",
    "Random Viral Build",
    "Luxury Editorial Build",
    "Pinterest Aesthetic Build",
    "Sticker Pack Ready Build",
    "Yacht Weekend Build",
    "Fantasy Queen Build",
    "Baby Doll Build"
  ]},

  {id:"age", label:"Age", multi:false, custom:true, options:[
    "Baby","Toddler","Kid","Teen","Young Adult","Adult","Mature Adult","Elder","Ageless","Doll-like"
  ]},

  {id:"ethnicity", label:"Ethnicity / Identity", multi:true, custom:true, options:[
    "African American","Black + Mixed","Afro-Latina","Caribbean","West African","East African",
    "Ethiopian/Eritrean","Sudanese","Haitian","Albino"
  ]},

  {id:"skin", label:"Skin Tone", multi:false, custom:true, options:[
    "Deep Ebony","Cocoa Satin","Mocha Rich","Chestnut","Caramel Bronze","Golden Honey",
    "Toffee Tan","Pecan Warm","Espresso","Porcelain Albino"
  ]},

  {id:"artStyle", label:"Art Style", multi:false, custom:true, options:[
    "Bratz-Inspired Fashion Doll",
    "Ultra Polished 3D",
    "3D Cartoon / CGI Doll Render",
    "Toy Packaging Render Style",
    "High-Fashion Editorial Illustration",
    "Semi-Realistic Glam Doll",
    "Sticker Pack / Clipart Style",
    "Glossy Cartoon Illustration",
    "Exaggerated Chibi"
  ]},

  {id:"imageMode", label:"Image Mode", multi:false, custom:true, options:[
    "Full Color (vibrant glossy finish)",
    "Toy Packaging / Retail Doll Box (candy gloss finish)",
    "Studio Portrait (soft lighting)",
    "Full Body (print-ready)",
    "Transparent Background (sticker-ready)",
    "White Background Only",
    "Luxury Campaign Poster",
    "Close-up Beauty Shot",
    "3/4 Body Shot",
    "Pinterest-Worthy Print",
    "Coloring Page (clean line art)",
    "Black & White Line Art (no shading)"
  ]},

  {id:"camera", label:"Camera Angle / Shot", multi:true, custom:true, options:[
    "Front-facing eye level","3/4 angle beauty shot","Side profile angle","Over-the-shoulder",
    "Close-up face shot","Extreme close-up (lips/eyes detail)","Bust-up portrait","Waist-up shot",
    "3/4 body framing","Full body head-to-toe","Low angle (power shot)","High angle (cute shot)",
    "Top-down flat lay style","Dutch angle (editorial tilt)","Wide shot with environment","Cinematic crop (poster-style)"
  ]},

  {id:"pose", label:"Pose", multi:true, custom:true, options:[
    "Hand on hip","Peace sign","Finger snap pose","Blowing a kiss","Sassy shoulder pop",
    "Crossed arms (boss stance)","One leg popped","Runway walk stance","Over-the-shoulder pose",
    "Sitting cute (legs crossed)","Kneeling pose","Leaning forward pose","Stretch pose (fashion editorial)",
    "Jump pose (mid-air)","Twirl pose (dress movement)","Crouched streetwear pose",
    "Hands framing face (beauty pose)","Arms up celebration pose"
  ]},

  {id:"action", label:"Action / Movement", multi:true, custom:true, options:[
    "Walking with attitude","Hair flip motion","Waving hello","Laughing mid-moment","Taking a selfie",
    "Holding shopping bags","Pulling a suitcase","Applying lip gloss","Adjusting sunglasses","Pointing to the side",
    "Blowing bubble gum","Dancing pose","Pouring champagne (no branding)","Holding a coffee cup (no logo)",
    "Opening a gift box (no logos)","Holding a mic (performance)","Vlogging with camera","Reading a journal/book"
  ]},

  {id:"expression", label:"Expression", multi:true, custom:true, options:[
    "Unbothered","Confident smirk","Cute pout","Wink","Playful tongue out","Side-eye","Soft smile",
    "Flirty grin","Boss glare","Calm & classy","Big laugh smile","Surprised wow face","Sassy raised eyebrow"
  ]},

  {id:"brows", label:"Eyebrows", multi:true, custom:true, options:[
    "Sharp Precision Brows","Feathered Brows","Laminated Brows","High-Arch Glam",
    "Soft Natural Brows","Bold Straight Brows","Ombre Brows","Thin 90s Brows",
    "Sculpted Brows","Snatched Clean Brows"
  ]},

  {id:"lashes", label:"Lashes", multi:true, custom:true, options:[
    "Dramatic Volume Lashes","Mega Volume Lashes","Wispy Cat-Eye Lashes","Doll Anime Lashes",
    "Fluffy Mink Lashes","Spiky Editorial Lashes","Bottom Lash Detail","Natural Flutter Lashes",
    "Double-Stacked Lashes","Bold Strip Lashes"
  ]},

  {id:"makeup", label:"Makeup", multi:true, custom:true, options:[
    "Full Glam Beat","Soft Glam","Glitter Cut-Crease","Smoky Eye","Graphic Liner","Glossy Nude Lip",
    "Ombre Lips","Candy Gloss Lips","Freckles + Blush","Highlighter Glow",
    "Pink shimmer eyeshadow","Purple shimmer eyeshadow","Gold glitter highlight"
  ]},

  {id:"nails", label:"Nails", multi:true, custom:true, options:[
    "XXL Coffin Nails","Square Short Nails","Chrome Nails","Ombré Nails","3D Nail Charms",
    "Pink Candy Gloss Nails","French Tip Glam","Rhinestone Accent Nails","Stiletto Nails","Jelly Gloss Nails"
  ]},

  {id:"hairStyle", label:"Hair Style", multi:true, custom:true, options:[
    "Sleek Middle Part Bone Straight","Deep Wave Glam","Body Wave","Blunt Bob","High Ponytail",
    "Half-Up Half-Down","Space Buns","Knotless Braids","Locs (bob)","Pixie Cut","Curly Fro Puff","Glam Wig Install (laid)"
  ]},

  {id:"hairColor", label:"Hair Color", multi:true, custom:true, options:[
    "Jet Black","Honey Blonde","Caramel Highlights","Chocolate Brown","Copper Auburn","Burgundy",
    "Platinum Blonde","Ash Brown","Black with Blonde Money Piece","Rose Gold Tint",
    "Vibrant Pink","Vibrant Purple","Black + Purple Peekaboo"
  ]},

  {id:"edges", label:"Edges / Baby Hairs", multi:true, custom:true, options:[
    "Laid & Sleek Edges","Dramatic Swirl Edges","Soft Swoop Edges","Double Swirl Edges",
    "Heart-Shaped Baby Hairs","Sideburn Swoops","Natural Baby Hairs","Ultra Snatched Edges","Micro Edges","No Edges"
  ]},

  {id:"theme", label:"Character Theme / Cosplay", multi:true, custom:true, options:[
    "Luxury CEO / Boss babe","Pink Barbiecore glam (no trademarks)","Yacht weekend glam","Pop star concert fit",
    "Runway model editorial","Beauty influencer / content creator","Cowgirl glam","Biker babe streetwear",
    "Cheer captain vibe","Gamer girl aesthetic","Anime-inspired cosplay (no trademark names)",
    "Superhero-inspired suit (no trademark names)","Princess-inspired royal look","Mermaid-inspired glam",
    "Fairy-inspired couture","Futuristic cyber glam","Witchy glam (high-fashion)"
  ]},

  {id:"fantasy", label:"Fantasy Elements", multi:true, custom:true, options:[
    "None","Glowing aura","Floating sparkles","Glitter smoke haze","Butterflies swirling","Floating hearts",
    "Magical runes around character","Angel wings (soft)","Feather wings (dramatic)","Fairy wings (iridescent)",
    "Crystal crown","Halo light ring","Glowing freckles","Gold glitter dust trail"
  ]},

  {id:"tops", label:"Top", multi:true, custom:true, options:[
    "Baby Tee","Cropped Zip Hoodie","Corset Top","Bodysuit","Off-Shoulder Sweater","Tank Top","Graphic Tee (no brand)",
    "Satin Blouse","Mesh Top","Sequin Top","Pink satin corset","Purple velvet top"
  ]},

  {id:"bottoms", label:"Bottom", multi:true, custom:true, options:[
    "Skinny Jeans","Ripped Jeans","Wide-Leg Jeans","Cargo Pants","Metallic Pants","Leggings","Mini Skirt",
    "Denim Shorts","Flared Pants","Leather Pants","Pink pleated skirt","Purple metallic mini skirt"
  ]},

  {id:"outerwear", label:"Outerwear", multi:true, custom:true, options:[
    "Oversized Denim Jacket","Puffer Jacket","Trench Coat","Leather Jacket","Varsity Jacket","Blazer",
    "Statement Coat","Cardigan","Bomber Jacket","Faux Fur Jacket","Pink faux fur shrug","Purple satin bomber"
  ]},

  {id:"shoes", label:"Shoes", multi:true, custom:true, options:[
    "Luxury Sneakers (no logos)","Chunky Fashion Sneakers","High-Top Sneakers (no logos)","Platform Sneakers",
    "Retro Sneakers (no logos)","Sock Sneakers (no logos)","Platform slides (no logos)","Sparkly platform heels",
    "Clear Heels","Strappy Heels","Block Heels","Kitten Heels","Pointed-Toe Pumps","Stiletto Pumps",
    "Platform Heel Sandals (open toe)","Wedge Sandals","Gladiator Sandals","Combat Boots","Ankle Boots",
    "Chelsea Boots","Thigh-High Boots","Over-the-knee boots","Mary Jane Platforms","Ballet Flats","Mules",
    "Slides (no logos)","Fluffy Slippers","Pink platform sneakers","Purple glitter heels","Gold strappy heels"
  ]},

  { id:"hats", label:"Luxury Hats / Headwear", multi:true, custom:true, options:[
    "None",
    "Structured Couture Fedora (no logos)",
    "Wide-Brim Wool Hat (luxury finish)",
    "Oversized Glam Fedora",
    "Satin-Lined Beret",
    "Crystal-Embellished Beret",
    "High-Fashion Bucket Hat (no logos)",
    "Rhinestone Baseball Cap (no logos)",
    "Monochrome Luxe Cap (no logos)",
    "Velvet Turban Wrap",
    "Silk Headwrap (editorial style)",
    "Crystal Crown Headband",
    "Gold Crown Headpiece",
    "Feather Fascinator (runway)",
    "Diamond-Trim Headband (no logos)",
    "Metallic Headpiece Halo",
    "Structured Wide-Brim Statement Hat",
    "Pearl-Embellished Headband",
    "Luxury Visor (no logos)"
  ]},

  { id:"belts", label:"Luxury Belts", multi:true, custom:true, options:[
    "None",
    "Gold Chain Waist Belt (no logos)",
    "Silver Chain Waist Belt (no logos)",
    "Statement Buckle Belt (no logos)",
    "Crystal Buckle Belt (no logos)",
    "Wide Corset Belt (cinched waist)",
    "Metallic Cinch Belt",
    "Rhinestone Waist Belt",
    "Pearl Waist Belt",
    "Leather Luxe Belt (no logos)",
    "Double Buckle Fashion Belt (no logos)",
    "Runway Harness Belt (no logos)",
    "Gold Waist Chain (layered)",
    "Silver Waist Chain (layered)",
    "Obi Wrap Belt (structured)",
    "High-Fashion Sculpted Belt",
    "Luxury Monochrome Belt (no logos)"
  ]},

  { id:"gloves", label:"Luxury Gloves", multi:true, custom:true, options:[
    "None",
    "Opera-Length Satin Gloves",
    "Sheer Mesh Gloves",
    "Rhinestone Fishnet Gloves",
    "Leather Gloves (no logos)",
    "Fingerless Leather Gloves",
    "Crystal-Embellished Gloves",
    "Velvet Evening Gloves",
    "Latex High-Gloss Gloves",
    "Metallic Statement Gloves",
    "Gold Cuff Gloves",
    "Sheer Glitter Gloves",
    "Luxury Knit Gloves",
    "Fur Trim Gloves",
    "Diamond-Cuff Gloves"
  ]},

  { id:"sunglasses", label:"Luxury Sunglasses", multi:true, custom:true, options:[
    "None",
    "Oversized Square Sunglasses (no logos)",
    "Shield Sunglasses (editorial)",
    "Gold Frame Aviators (no logos)",
    "Black Gradient Glam Sunglasses",
    "Crystal-Trim Sunglasses (no logos)",
    "Cat-Eye Sunglasses (luxury finish)",
    "Mirrored Lens Sunglasses",
    "White Frame Statement Sunglasses",
    "Futuristic Wrap Sunglasses",
    "Tinted Pink Lens Sunglasses",
    "Tinted Purple Lens Sunglasses",
    "Diamond-Edge Sunglasses",
    "Metallic Frame Sunglasses (no logos)",
    "Runway Oversized Frames"
  ]},

  {id:"props", label:"Props / Held Items", multi:true, custom:true, options:[
    "None","Phone (selfie)","Shopping bags (no logos)","Luxury gift box (no logos)","Coffee cup (no logo)",
    "Ring light / vlog setup","Microphone (performance)","Makeup palette","Lip gloss tube",
    "Passport + boarding pass (no logos)","Suitcase / carry-on","Bouquet of roses","Champagne flute (no branding)",
    "Laptop (no logo)","Camera (content creator)","Book / journal","Magic wand (fantasy)","Crystal staff (fantasy)"
  ]},

  {id:"bags", label:"Bags", multi:true, custom:true, options:[
    "None","Crossbody Bag (no logos)","Top Handle Bag (no logos)","Clutch Bag (no logos)","Mini Shoulder Bag (no logos)",
    "Quilted Bag (no logos)","Tote Bag (no logos)","Backpack Purse (no logos)","Pink mini purse (no logos)",
    "Purple clutch (no logos)","Gold chain bag (no logos)"
  ]},

  {id:"accessories", label:"Accessories", multi:true, custom:true, options:[
    "Oversized Hoop Earrings","Layered Gold Necklaces","Charm Bracelet","Stacked Rings","Luxury Watch (no logos)",
    "Statement Earrings","Nose Chain","Headphones","Choker Necklace","Bangle Stack","Diamond Studs",
    "Silk scarf","Waist chain","Hair clips","Gold crown headband","Pink rhinestone earrings","Purple gemstone necklace"
  ]},

  {id:"babyAcc", label:"Baby Accessories", multi:true, custom:true, options:[
    "None","Pacifier","Baby bottle","Teething toy","Stuffed teddy bear","Baby headband bow","Knit beanie hat",
    "Baby blanket wrap","Baby bib","Tiny gold bracelet (no logos)","Baby sunglasses","Little rattle toy",
    "Diaper bag (no logos)","Stroller handle visible (partial)","Baby anklet"
  ]},

  {id:"tattoos", label:"Tattoos", multi:true, custom:true, options:[
    "None","Forearm Script Tattoo","Hand Tattoo","Neck Tattoo","Small Wrist Tattoo","Collarbone Script",
    "Thigh Tattoo","Shoulder Tattoo","Tiny Finger Tattoo","Sleeve Tattoo"
  ]},

  {id:"bodyJewelry", label:"Body Jewelry / Piercings", multi:true, custom:true, options:[
    "None","Nose Hoop","Nose Stud","Lip Piercing","Cute Nose Chain","Septum Ring",
    "Multiple Ear Piercings","Belly Ring","Dermal Piercing","Eyebrow Piercing"
  ]},

  {id:"palette", label:"Color Palette (Pink • Purple • Gold)", multi:true, custom:true, options:[
    "Blush Pink + Gold Foil","Hot Pink + Gold","Bubblegum Pink + Champagne Gold","Rose Pink + Antique Gold",
    "Fuchsia + Soft Gold Glow","Pink Lemonade + Gold Sparkle","Ballet Pink + Gold Accents","Magenta + Gold Luxe",
    "Lavender + Gold","Lilac + Rose Gold","Amethyst + Gold","Deep Purple + Gold","Purple Haze + Gold Glitter",
    "Violet + Champagne Gold","Royal Purple + Gold Foil","Orchid Purple + Gold Shine",
    "Cotton Candy Pink + Lavender","Hot Pink + Purple Pop","Fuchsia + Violet Fade","Pink + Lilac Ombre",
    "Barbie Pink + Purple Chrome","Neon Pink + Electric Purple",
    "Rose Gold Glam (pink metallic)","Rose Gold + Blush Pink","Rose Gold + Lavender","Rose Gold + Hot Pink",
    "Hot Pink + Neon Purple + Gold","Fuchsia + Lavender + Gold","Pink + Purple + Champagne Gold","Magenta + Orchid + Gold Foil",
    "Blush Pink + Cream + Gold","Soft Lilac + Pearl + Gold","Pink Nude + Rose Gold","Lavender Mist + Champagne Gold",
    "Valentine Pink + Gold","Birthday Pink + Purple + Gold","Princess Pink + Royal Purple + Gold",
    "White + Blush + Gold","Ivory + Rose Gold","Cream + Gold Luxe"
  ]},

  {id:"background", label:"Background", multi:false, custom:true, options:[
    "None (no background)","White Background Only","Soft Studio Gradient","Luxury Penthouse Lounge","Yacht Weekend",
    "Tropical Island","Purple Halftone Pop-Art","Pink Glam Gradient","Leopard Splash Editorial","Toy Box Backdrop",
    "Pink glitter bokeh","Purple aurora glow","Gold sparkle haze"
  ]}
];

// ---- DOM ----
const controls = document.getElementById("controls");
const promptOut = document.getElementById("promptOut");
const toast = document.getElementById("toast");

// 3 options DOM
const promptA = document.getElementById("promptA");
const promptB = document.getElementById("promptB");
const promptC = document.getElementById("promptC");

// store last 3 options so "Use This" works
let lastThree = []; // [{presetName, state, prompt}]

// dot colors for badges
const PRESET_DOT = {
  "Luxury Editorial Build":"var(--gold)",
  "Pinterest Aesthetic Build":"var(--pink)",
  "Sticker Pack Ready Build":"var(--ice)",
  "Yacht Weekend Build":"var(--ice)",
  "Fantasy Queen Build":"var(--pink)",
  "Random Viral Build":"var(--gold)",
  "Baby Doll Build":"var(--pink)"
};

// ---- helpers ----
const el = (tag, attrs={}, children=[])=>{
  const n = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{
    if(k==="class") n.className=v;
    else if(k==="html") n.innerHTML=v;
    else n.setAttribute(k,v);
  });
  children.forEach(c=>n.appendChild(c));
  return n;
};

function pingToast(msg){
  toast.textContent = msg;
  setTimeout(()=>toast.textContent="",1200);
}

function pickN(arr, n){
  const pool = [...arr];
  const out = [];
  while(pool.length && out.length < n){
    const idx = Math.floor(Math.random()*pool.length);
    out.push(pool.splice(idx,1)[0]);
  }
  return out;
}

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function getSectionOptions(id){
  const sec = SECTIONS.find(s=>s.id===id);
  return sec ? sec.options.filter(o=>o && o !== "Select a preset...") : [];
}

function randomFrom(id){
  const opts = getSectionOptions(id);
  if(!opts.length) return "";
  // background special: treat "None..." as empty in UI
  return opts[Math.floor(Math.random()*opts.length)];
}

function randomMultiFrom(id, min=1, max=2, avoidValue=null){
  const opts = getSectionOptions(id).filter(o => o !== avoidValue);
  if(!opts.length) return [];
  const count = Math.max(min, Math.floor(Math.random()*(max-min+1))+min);
  return pickN(opts, Math.min(count, opts.length));
}

function cleanNone(arr){
  if(!arr || !arr.length) return [];
  if(arr.length === 1) return arr;
  return arr.filter(x => x !== "None");
}

function setBadge(badgeId, presetName){
  const badge = document.getElementById(badgeId);
  if(!badge) return;
  const dot = badge.querySelector(".dot");
  const txt = badge.querySelector(".badgeText");
  if(dot){
    dot.style.background = PRESET_DOT[presetName] || "var(--pink)";
    dot.style.boxShadow = "0 0 0 4px rgba(255,255,255,0.10)";
  }
  if(txt) txt.textContent = presetName || "—";
}

async function copyText(text){
  if(!text.trim()){
    pingToast("Nothing to copy");
    return;
  }
  try{
    if(navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(text);
      pingToast("Copied ✅");
      return;
    }
  }catch(e){}
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  pingToast("Copied ✅");
}

// ---- UI builders ----
function buildSingleSelect(sec){
  const select = el("select",{id:sec.id});
  if(sec.id !== "preset") select.appendChild(el("option",{value:"", html:"Select..."}));

  sec.options.forEach((opt, idx)=>{
    let value = opt;
    if(sec.id==="background" && opt.startsWith("None")) value = "";
    if(sec.id==="preset" && idx===0) value = "";
    select.appendChild(el("option",{value, html:opt}));
  });

  if(sec.id === "preset"){
    select.addEventListener("change", ()=> {
      if(isApplyingPreset) return;
      applyPreset(select.value);
    });
  }else{
    select.addEventListener("change", updatePrompt);
  }
  return select;
}

function buildMultiCheckboxes(sec){
  const box = el("div",{class:"multiBox", id: sec.id + "_box"});
  sec.options.forEach(opt=>{
    const id = `${sec.id}_${opt.replace(/[^a-z0-9]+/gi,"_").toLowerCase()}`;
    const cb = el("input",{type:"checkbox", id, name:sec.id, value:opt});
    cb.addEventListener("change", updatePrompt);

    const lab = el("label",{for:id, class:"chipLabel"},[
      cb,
      el("span",{class:"chipText", html:opt}),
      el("div",{class:"chipGlow"})
    ]);

    box.appendChild(lab);
  });
  return box;
}

function buildUI(){
  controls.innerHTML = "";
  SECTIONS.forEach(sec=>{
    const card = el("div",{class:"card"});
    card.dataset.sec = sec.id;

    const head = el("div",{class:"labelRow"},[
      el("div",{class:"label", html:sec.label}),
      el("div",{class:"hint", html: sec.multi ? "multi" : "single"})
    ]);

    card.appendChild(head);
    if(sec.multi) card.appendChild(buildMultiCheckboxes(sec));
    else card.appendChild(buildSingleSelect(sec));

    if(sec.custom){
      const input = el("input",{
        id: sec.id + "_custom",
        type:"text",
        placeholder:"Type a custom option here… (optional)"
      });
      input.addEventListener("input", updatePrompt);
      card.appendChild(input);
    }

    controls.appendChild(card);
  });

  updateBabyVisibility();
}

// ---- value helpers ----
function getSelected(sec){
  if(sec.id === "preset") return [];

  let vals = [];
  if(sec.multi){
    vals = Array.from(document.querySelectorAll(`input[name="${sec.id}"]:checked`))
      .map(i=>i.value)
      .filter(Boolean);
  }else{
    const sel = document.getElementById(sec.id);
    if(sel && sel.value) vals = [sel.value];
  }

  const custom = sec.custom ? (document.getElementById(sec.id+"_custom")?.value || "").trim() : "";
  if(custom) vals.push(custom);

  return vals;
}

function setSingle(id, value){
  const sel = document.getElementById(id);
  if(!sel) return;
  sel.value = value || "";
}

function setMulti(id, values){
  const set = new Set((values || []).filter(Boolean));
  document.querySelectorAll(`input[name="${id}"]`).forEach(i => i.checked = set.has(i.value));
}

function setCustom(id, value){
  const inp = document.getElementById(id + "_custom");
  if(inp) inp.value = value || "";
}

function clearAllSilent(){
  SECTIONS.forEach(sec=>{
    if(sec.multi){
      document.querySelectorAll(`input[name="${sec.id}"]`).forEach(i=> i.checked = false);
    }else{
      const sel = document.getElementById(sec.id);
      if(sel) sel.value = "";
    }
    if(sec.custom) setCustom(sec.id, "");
  });
}

// Baby visibility
function updateBabyVisibility(){
  const ageSel = document.getElementById("age");
  const ageVal = ageSel ? ageSel.value : "";
  const showBaby = ageVal === "Baby" || ageVal === "Toddler";

  const babyCard = document.querySelector('.card[data-sec="babyAcc"]');
  if(babyCard) babyCard.style.display = showBaby ? "" : "none";

  if(!showBaby){
    setMulti("babyAcc", []);
    setCustom("babyAcc", "");
  }
}

// ---- prompt builders ----
function buildPromptFromValues(v){
  const hasAny = Object.entries(v).some(([k,arr]) => k !== "preset" && Array.isArray(arr) && arr.length);
  if(!hasAny) return "";

  const parts = [];

  const age = v.age?.[0] || "Adult";
  const eth = v.ethnicity?.length ? v.ethnicity.join(" + ") : "African American";
  const skin = v.skin?.[0] || "Cocoa Satin";

  parts.push(`Create a ${age} ${eth} glam doll character with ${skin} skin tone.`);

  if(v.artStyle?.[0]) parts.push(`Art style: ${v.artStyle[0]}.`);
  if(v.imageMode?.[0]) parts.push(`Image mode: ${v.imageMode[0]}.`);

  if(v.camera?.length) parts.push(`Camera angle/shot: ${v.camera.join(", ")}.`);
  if(v.pose?.length) parts.push(`Pose: ${v.pose.join(", ")}.`);
  if(v.action?.length) parts.push(`Action/movement: ${v.action.join(", ")}.`);

  const faceBits = [];
  if(v.expression?.length) faceBits.push(`expression: ${v.expression.join(", ")}`);
  if(v.brows?.length) faceBits.push(`eyebrows: ${v.brows.join(", ")}`);
  if(v.lashes?.length) faceBits.push(`lashes: ${v.lashes.join(", ")}`);
  if(v.makeup?.length) faceBits.push(`makeup: ${v.makeup.join(", ")}`);
  if(faceBits.length) parts.push(`Face glam: ${faceBits.join(" | ")}.`);

  if(v.nails?.length) parts.push(`Nails: ${v.nails.join(", ")}.`);

  const hairBits = [];
  if(v.hairStyle?.length) hairBits.push(`hair style: ${v.hairStyle.join(", ")}`);
  if(v.hairColor?.length) hairBits.push(`hair color: ${v.hairColor.join(", ")}`);
  if(v.edges?.length) hairBits.push(`edges/baby hairs: ${v.edges.join(", ")}`);
  if(hairBits.length) parts.push(`Hair: ${hairBits.join(" | ")}.`);

  const theme = cleanNone(v.theme);
  if(theme.length) parts.push(`Character theme/cosplay: ${theme.join(", ")}.`);

  const fantasy = cleanNone(v.fantasy);
  if(fantasy.length) parts.push(`Fantasy elements: ${fantasy.join(", ")}.`);

  const outfitBits = [];
  if(v.tops?.length) outfitBits.push(`Top: ${v.tops.join(", ")}`);
  if(v.bottoms?.length) outfitBits.push(`Bottom: ${v.bottoms.join(", ")}`);
  if(v.outerwear?.length) outfitBits.push(`Outerwear: ${v.outerwear.join(", ")}`);
  if(outfitBits.length) parts.push(`Outfit: ${outfitBits.join(" | ")}.`);

  if(v.shoes?.length) parts.push(`Shoes: ${v.shoes.join(", ")}.`);

  const hats = cleanNone(v.hats);
  if(hats.length) parts.push(`Headwear: ${hats.join(", ")}.`);

  const belts = cleanNone(v.belts);
  if(belts.length) parts.push(`Belts: ${belts.join(", ")}.`);

  const gloves = cleanNone(v.gloves);
  if(gloves.length) parts.push(`Gloves: ${gloves.join(", ")}.`);

  const sunglasses = cleanNone(v.sunglasses);
  if(sunglasses.length) parts.push(`Sunglasses: ${sunglasses.join(", ")}.`);

  const props = cleanNone(v.props);
  if(props.length) parts.push(`Props/held items: ${props.join(", ")}.`);

  const bags = cleanNone(v.bags);
  if(bags.length) parts.push(`Bags: ${bags.join(", ")}.`);

  if(v.accessories?.length) parts.push(`Accessories: ${v.accessories.join(", ")}.`);

  const babyAcc = cleanNone(v.babyAcc);
  if(babyAcc.length) parts.push(`Baby accessories: ${babyAcc.join(", ")}.`);

  const tattoos = cleanNone(v.tattoos);
  if(tattoos.length) parts.push(`Tattoos: ${tattoos.join(", ")}.`);

  const piercings = cleanNone(v.bodyJewelry);
  if(piercings.length) parts.push(`Body jewelry/piercings: ${piercings.join(", ")}.`);

  if(v.palette?.length) parts.push(`Color palette: ${v.palette.join(" + ")}.`);

  if(v.background?.[0]) parts.push(`Background: ${v.background[0]}.`);

  parts.push(
    `Rules: no logos, no brand names, no text, no watermarks. High resolution, print-ready. ` +
    `Glossy toy-box depth, soft studio lighting, smooth airbrushed finish, premium campaign polish.`
  );

  return parts.join("\n\n");
}

function getValuesFromDOM(){
  const v = {};
  SECTIONS.forEach(sec=> v[sec.id] = getSelected(sec));
  return v;
}

function updatePrompt(){
  updateBabyVisibility();
  const v = getValuesFromDOM();

  const hasAny = Object.entries(v).some(([k,arr]) => k !== "preset" && Array.isArray(arr) && arr.length);
  if(!hasAny){
    promptOut.value = "";
    return;
  }
  promptOut.value = buildPromptFromValues(v);
}

// ---- presets ----
function applyPresetVariation(presetName){
  setMulti("ethnicity", randomMultiFrom("ethnicity", 1, 2));
  setSingle("skin", randomFrom("skin"));
  setMulti("hairStyle", randomMultiFrom("hairStyle", 1, 1));
  setMulti("hairColor", randomMultiFrom("hairColor", 1, 2));
  setMulti("expression", randomMultiFrom("expression", 1, 2));
  setMulti("nails", randomMultiFrom("nails", 1, 2));
  setMulti("palette", randomMultiFrom("palette", 1, 2));

  if(presetName === "Baby Doll Build"){
    setSingle("age","Baby");
    setMulti("babyAcc", randomMultiFrom("babyAcc", 2, 4, "None"));
  }
}

function applyPreset(presetName){
  if(!presetName){ updatePrompt(); return; }
  isApplyingPreset = true;
  clearAllSilent();
  setSingle("preset", presetName);
  applyPresetVariation(presetName);
  isApplyingPreset = false;
  updateBabyVisibility();
  updatePrompt();
  pingToast("Preset applied ✨");
}

// ---- clear/copy ----
function clearAll(){
  clearAllSilent();
  setSingle("preset", "");
  updateBabyVisibility();
  promptOut.value = "";
  promptA.value = "";
  promptB.value = "";
  promptC.value = "";
  setBadge("badgeA","");
  setBadge("badgeB","");
  setBadge("badgeC","");
  lastThree = [];
  pingToast("Cleared ✔");
}

function fallbackCopy(textarea){
  try{
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    return document.execCommand("copy");
  }catch(e){
    return false;
  }
}

async function copyPrompt(){
  const text = promptOut.value || "";
  if(!text.trim()){
    pingToast("Nothing to copy");
    return;
  }

  try{
    if(navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(text);
      pingToast("Copied ✅");
      return;
    }
  }catch(e){}

  const ok = fallbackCopy(promptOut);
  if(ok){
    pingToast("Copied ✅");
    return;
  }

  promptOut.focus();
  promptOut.select();
  promptOut.setSelectionRange(0, promptOut.value.length);
  pingToast("Press Ctrl+C to copy");
}

// ---- randomize (single) ----
function randomize(){
  setSingle("preset", "");

  SECTIONS.forEach(sec=>{
    if(sec.id === "preset") return;

    if(sec.multi){
      const inputs = Array.from(document.querySelectorAll(`input[name="${sec.id}"]`));
      inputs.forEach(i=> i.checked = false);
      const count = Math.max(1, Math.floor(Math.random()*3)+1);
      pickN(inputs, Math.min(count, inputs.length)).forEach(i => i.checked = true);
    }else{
      const sel = document.getElementById(sec.id);
      if(!sel) return;
      const options = Array.from(sel.options).filter(o => o.value !== "");
      if(sec.id === "background"){
        sel.value = Math.random() < 0.35 ? "" : (options[Math.floor(Math.random()*options.length)]?.value || "");
      }else{
        sel.value = options[Math.floor(Math.random()*options.length)]?.value || "";
      }
    }

    if(sec.custom) setCustom(sec.id, "");
  });

  updatePrompt();
  pingToast("Randomized ✨");
}

// ---- state save/restore (for 3 styles) ----
function getStateFromDOM(){
  const state = {};
  SECTIONS.forEach(sec=>{
    if(sec.multi){
      state[sec.id] = Array.from(document.querySelectorAll(`input[name="${sec.id}"]:checked`)).map(i=>i.value);
    }else{
      state[sec.id] = [ (document.getElementById(sec.id)?.value || "").trim() ].filter(Boolean);
    }
    if(sec.custom){
      state[sec.id + "_custom"] = (document.getElementById(sec.id+"_custom")?.value || "").trim();
    }
  });
  return state;
}

function applyStateToDOM(state){
  isApplyingPreset = true;

  SECTIONS.forEach(sec=>{
    if(sec.multi){
      setMulti(sec.id, state[sec.id] || []);
    }else{
      setSingle(sec.id, (state[sec.id] && state[sec.id][0]) || "");
    }
    if(sec.custom){
      setCustom(sec.id, state[sec.id + "_custom"] || "");
    }
  });

  isApplyingPreset = false;
  updateBabyVisibility();
  updatePrompt();
}

// ---- 3 styles generator ----
function makeRandomStateForPreset(presetName){
  clearAllSilent();
  setSingle("preset", presetName);

  // Apply your preset core
  applyPresetVariation(presetName);

  // Fill missing singles
  if(!document.getElementById("age")?.value) setSingle("age", randomFrom("age"));
  if(!document.getElementById("artStyle")?.value) setSingle("artStyle", randomFrom("artStyle"));
  if(!document.getElementById("imageMode")?.value) setSingle("imageMode", randomFrom("imageMode"));
  if(!document.getElementById("background")?.value){
    setSingle("background", Math.random() < 0.35 ? "" : randomFrom("background"));
  }

  // Fill multis (tasteful)
  const multiPlan = [
    ["camera", 1, 2],
    ["pose", 1, 2],
    ["action", 0, 2],
    ["brows", 1, 2],
    ["lashes", 1, 2],
    ["makeup", 1, 2],
    ["hairStyle", 1, 1],
    ["hairColor", 1, 2],
    ["edges", 1, 2],
    ["theme", 0, 2],
    ["fantasy", 0, 2],
    ["tops", 1, 2],
    ["bottoms", 1, 2],
    ["outerwear", 0, 1],
    ["shoes", 1, 2],
    ["hats", 0, 1],
    ["belts", 0, 1],
    ["gloves", 0, 1],
    ["sunglasses", 0, 1],
    ["props", 0, 2],
    ["bags", 0, 1],
    ["accessories", 1, 3],
    ["tattoos", 0, 1],
    ["bodyJewelry", 0, 2]
  ];

  multiPlan.forEach(([id, min, max])=>{
    const sec = SECTIONS.find(s=>s.id===id);
    if(!sec) return;

    if(min === 0 && Math.random() > 0.55) return; // optional

    const chosen = randomMultiFrom(id, Math.max(1, min), Math.max(1, max), "None");
    setMulti(id, chosen);
  });

  if(presetName === "Baby Doll Build"){
    setSingle("age","Baby");
    setMulti("babyAcc", randomMultiFrom("babyAcc", 2, 4, "None"));
  }

  updateBabyVisibility();
  return getStateFromDOM();
}

function buildPromptFromState(state){
  const v = {};
  SECTIONS.forEach(sec=>{
    v[sec.id] = (state[sec.id] || []).filter(Boolean);
    if(sec.custom){
      const c = (state[sec.id + "_custom"] || "").trim();
      if(c) v[sec.id] = [...(v[sec.id] || []), c];
    }
  });
  return buildPromptFromValues(v);
}

function randomizeThreeStyles(){
  const current = getStateFromDOM();

  const preferred = [
    "Luxury Editorial Build",
    "Pinterest Aesthetic Build",
    "Sticker Pack Ready Build",
    "Yacht Weekend Build",
    "Fantasy Queen Build",
    "Random Viral Build",
    "Baby Doll Build"
  ];

  const chosen = shuffle(preferred).slice(0,3);

  const options = chosen.map(presetName=>{
    const state = makeRandomStateForPreset(presetName);
    const prompt = buildPromptFromState(state);
    return { presetName, state, prompt };
  });

  // restore user's current selections
  applyStateToDOM(current);

  // render three prompt boxes
  lastThree = options;

  promptA.value = options[0].prompt;
  promptB.value = options[1].prompt;
  promptC.value = options[2].prompt;

  setBadge("badgeA", options[0].presetName);
  setBadge("badgeB", options[1].presetName);
  setBadge("badgeC", options[2].presetName);

  pingToast("3 styles generated ✨");
}

// ---- wire buttons ----
document.getElementById("clearBtn")?.addEventListener("click", clearAll);
document.getElementById("randBtn")?.addEventListener("click", randomize);
document.getElementById("rand3Btn")?.addEventListener("click", randomizeThreeStyles);
document.getElementById("copyBtn")?.addEventListener("click", copyPrompt);
document.getElementById("copyBtn2")?.addEventListener("click", copyPrompt);

// option buttons
document.getElementById("copyA")?.addEventListener("click", ()=> copyText(promptA.value));
document.getElementById("copyB")?.addEventListener("click", ()=> copyText(promptB.value));
document.getElementById("copyC")?.addEventListener("click", ()=> copyText(promptC.value));

document.getElementById("useA")?.addEventListener("click", ()=>{
  if(!lastThree[0]) return;
  applyStateToDOM(lastThree[0].state);
  pingToast("Option A loaded ✅");
});
document.getElementById("useB")?.addEventListener("click", ()=>{
  if(!lastThree[1]) return;
  applyStateToDOM(lastThree[1].state);
  pingToast("Option B loaded ✅");
});
document.getElementById("useC")?.addEventListener("click", ()=>{
  if(!lastThree[2]) return;
  applyStateToDOM(lastThree[2].state);
  pingToast("Option C loaded ✅");
});

// ---- init ----
buildUI();
updatePrompt();