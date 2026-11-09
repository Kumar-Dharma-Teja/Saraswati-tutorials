var G=[
 {t:'Jr KG and Sr KG',d:'Play-based learning that builds a love for school.',s:['English','Mathematics','EVS and General Awareness','Art and Creative Expression']},
 {t:'Classes 1 to 4',d:'Strong reading, writing and number skills.',s:['English','Marathi','Mathematics','Environmental Studies (from Class 3)','Play, Do, Learn']},
 {t:'Classes 5 to 8',d:'Concepts explained simply, with daily practice.',s:['English','Marathi','Hindi','Mathematics','General Science','History and Civics','Geography','Physical Education','Art Education','Computer Education']},
 {t:'Classes 9 and 10',d:'Board exam preparation with tests and revision.',s:['English','Marathi','Hindi (or Sanskrit, French, Urdu)','Mathematics: Algebra, Geometry and Trigonometry','Science and Technology','Social Sciences: History, Political Science, Geography, Economics','ICT','Health and Physical Education','Defence Studies or Self Development']}
];
var tabs=document.getElementById('tabs'),panel=document.getElementById('panel'),sel=document.getElementById('c');
function show(i){
  [].forEach.call(tabs.children,function(b,j){b.setAttribute('aria-selected',j===i)});
  var g=G[i];
  panel.innerHTML='<h3>'+g.t+'</h3><p>'+g.d+'</p><div class="chips">'+g.s.map(function(x){return '<span>'+x+'</span>'}).join('')+'</div>';
}
G.forEach(function(g,i){
  var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.setAttribute('aria-selected','false');b.textContent=g.t;
  b.onclick=function(){show(i)};tabs.appendChild(b);
  var o=document.createElement('option');o.textContent=g.t;sel.appendChild(o);
});
show(0);
document.getElementById('send').onclick=function(){
  var n=document.getElementById('n').value.trim()||'(name)';
  var m='Hello Saraswati Tutorials, I want to ask about admission. Child: '+n+'. Class: '+sel.value+'.';
  window.open('https://wa.me/918286412848?text='+encodeURIComponent(m),'_blank','noopener');
};
