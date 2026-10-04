const menuData={
 vegetarian:[
  ['Ragi Sangiti','Traditional Rayalaseema ragi preparation served with spicy regional accompaniments.',[['',180]],'POPULAR'],
  ['Veg Meals','South Indian vegetarian meal with comforting curries and accompaniments.',[['',220]]],
  ['Gutti Vankaya','Stuffed brinjal cooked in a rich Andhra spice masala.',[['',190]]],
  ['Dal Tadka','Lentils tempered with aromatic spices.',[['',160]]],
  ['Sambar','Tangy lentil and vegetable stew with tamarind.',[['',150]]]
 ],
 chicken:[
  ['Natu Kodi Pulusu','Country chicken cooked in a spicy Andhra-style gravy.',[['',260]],'POPULAR'],
  ['Gongura Chicken','Chicken cooked with tangy gongura leaves and regional spices.',[['',260]]],
  ['Chicken Fry','Crispy, spicy chicken fry with Andhra seasoning.',[['',240]]],
  ['Chicken Curry','Tender chicken in a traditional masala gravy.',[['',240]]]
 ],
 mutton:[
  ['Gongura Mamsam','Tender mutton cooked with tangy gongura leaves and bold spices.',[['',330]],'POPULAR'],
  ['Gongura Mutton','A rich mutton preparation balanced with gongura tang.',[['',330]]],
  ['Mutton Fry','Spiced mutton fry with a deep roasted flavour.',[['',340]]],
  ['Mutton Curry','Slow-cooked mutton in a rich regional gravy.',[['',320]]]
 ],
 seafood:[
  ['Seafood Thali','A generous regional spread for seafood lovers.',[['',450]],'FEATURED'],
  ['Fish Fry','Crispy fish marinated in South Indian spices.',[['',220]]],
  ['Prawns Fry','Spicy prawns tossed with regional masala.',[['',280]]],
  ['Fish Curry','Fish simmered in a tangy, spiced gravy.',[['',220]]]
 ],
 biryanis:[
  ['Chicken Biryani','Fragrant rice layered with tender chicken and aromatic spices.',[['Single',220],['Regular',420]],'POPULAR'],
  ['Mutton Biryani','A rich biryani with tender mutton and fragrant rice.',[['Single',260],['Regular',480]]],
  ['Egg Pulao','Aromatic pulao with egg and regional seasoning.',[['',220]]]
 ]
};
const gallery=[
 ['https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg?auto=compress&cs=tinysrgb&w=1000','Andhra-style Biryani','Biryani'],
 ['https://images.pexels.com/photos/9609846/pexels-photo-9609846.jpeg?auto=compress&cs=tinysrgb&w=1000','Gongura Mamsam','Food'],
 ['https://images.pexels.com/photos/8250276/pexels-photo-8250276.jpeg?auto=compress&cs=tinysrgb&w=1000','Prawns','Food'],
 ['https://images.pexels.com/photos/35532821/pexels-photo-35532821.jpeg?auto=compress&cs=tinysrgb&w=1000','Gongura Chicken','Food'],
 ['https://images.pexels.com/photos/28674556/pexels-photo-28674556.jpeg?auto=compress&cs=tinysrgb&w=1000','Indian Breads','Food'],
 ['https://images.pexels.com/photos/35833817/pexels-photo-35833817.jpeg?auto=compress&cs=tinysrgb&w=1000','Dining Ambience','Ambience'],
 ['https://images.pexels.com/photos/37968303/pexels-photo-37968303.jpeg?auto=compress&cs=tinysrgb&w=1000','Restaurant Setting','Restaurant'],
 ['https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&w=1000','Restaurant Interior','Restaurant'],
 ['https://images.pexels.com/photos/8250738/pexels-photo-8250738.jpeg?auto=compress&cs=tinysrgb&w=1000','Biryani','Biryani']
];
function renderMenu(category='vegetarian'){
 const el=document.querySelector('#menuContent');
 el.innerHTML=menuData[category].map(([name,desc,prices,badge])=>`<article class="menu-item"><div class="menu-item-head"><div><h3>${name}</h3>${badge?`<span class="badge small">${badge}</span>`:''}</div></div><p>${desc}</p><div class="prices">${prices.map(([label,price])=>`<div class="price">${label?`<span>${label}</span>`:''}₹${price}</div>`).join('')}</div></article>`).join('');
}
function renderGallery(filter='All'){
 const el=document.querySelector('#galleryGrid');
 el.innerHTML=gallery.filter(x=>filter==='All'||x[2]===filter).map(x=>`<figure class="gallery-card"><img src="${x[0]}" alt="${x[1]}"><div>${x[1]}</div></figure>`).join('');
}
renderMenu();renderGallery();
document.querySelectorAll('.menu-tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.menu-tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderMenu(btn.dataset.category)}));
document.querySelectorAll('.gallery-tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.gallery-tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderGallery(btn.dataset.filter)}));
const navbar=document.querySelector('#navbar');window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',scrollY>40),{passive:true});
const toggle=document.querySelector('#menuToggle'),mobile=document.querySelector('#mobileMenu');toggle.addEventListener('click',()=>{const open=mobile.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});document.querySelectorAll('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('#reservationForm').addEventListener('submit',e=>{e.preventDefault();const msg=document.querySelector('#formMessage');msg.textContent='Thank you! Your reservation request has been received. The restaurant will need to confirm the booking separately.';e.target.reset()});
document.querySelector('#orderBtn').addEventListener('click',()=>alert("Online ordering is available through the restaurant's ordering platform. Add the live ordering URL to the Order Online button when deploying."));
const dateInput=document.querySelector('input[type="date"]');dateInput.min=new Date().toISOString().split('T')[0];
