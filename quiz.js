(function(){
const ST=[
{id:"s1",course:"Ağ Temelleri",q:"Hangi OSI katmanı MAC adresi ve switch ile ilgilidir?",options:["Fiziksel","Veri bağı","Ağ","Taşıma"],answer:1,explain:"2. katman olan veri bağı, çerçeveleri ve MAC adreslerini yönetir; switch bu katmanda çalışır."},
{id:"s2",course:"Ağ Temelleri",q:"TCP bağlantısı hangi el sıkışma ile kurulur?",options:["SYN, SYN-ACK, ACK","ACK, SYN, FIN","SYN, ACK, RST","GET, POST, PUT"],answer:0,explain:"TCP üçlü el sıkışması SYN, SYN-ACK ve ACK adımlarından oluşur."},
{id:"s3",course:"Ağ Temelleri",q:"192.168.1.0/26 ağında kaç kullanılabilir host adresi vardır?",options:["30","62","64","126"],answer:1,explain:"/26 ağda 64 adres vardır; ağ ve broadcast adresi çıkınca 62 host kalır."},
{id:"s4",course:"Ağ Temelleri",q:"HTTPS varsayılan olarak hangi portu kullanır?",options:["80","443","53","22"],answer:1,explain:"HTTP 80, HTTPS 443, DNS 53, SSH 22 portunu kullanır."},
{id:"s5",course:"VTYS",q:"INNER JOIN hangi satırları getirir?",options:["Sadece iki tabloda eşleşen satırları","Soldaki tablonun tüm satırlarını","İki tablonun tüm satırlarını","Sadece eşleşmeyen satırları"],answer:0,explain:"INNER JOIN yalnızca her iki tabloda eşleşen satırları döndürür. Soldaki tablonun tamamı için LEFT JOIN kullanılır."},
{id:"s6",course:"VTYS",q:"2NF için 1NF'ye ek olarak hangi koşul gerekir?",options:["Her hücrede tek değer olması","Kısmi bağımlılığın olmaması","Geçişli bağımlılığın olmaması","Tek tablo kullanılması"],answer:1,explain:"2NF'de tüm alanlar birincil anahtarın tamamına bağlı olmalı. Geçişli bağımlılığın kalkması 3NF'dir."},
{id:"s7",course:"Programlama Temelleri",q:"Python'da bir listenin ilk elemanına hangi ifadeyle erişilir?",options:["liste[0]","liste[1]","liste[first]","liste(0)"],answer:0,explain:"İndeks 0'dan başlar, ilk eleman liste[0]'dır."},
{id:"s8",course:"Programlama Temelleri",q:"print(type(20)) ne yazdırır?",options:["<class 'int'>","<class 'str'>","<class 'float'>","<class 'bool'>"],answer:0,explain:"20 bir tam sayıdır, tipi int'tir."},
{id:"s9",course:"Web Tasarımı",q:"Flexbox'ta ana eksendeki hizalamayı hangi özellik belirler?",options:["justify-content","align-items","flex-wrap","z-index"],answer:0,explain:"justify-content ana ekseni, align-items çapraz ekseni hizalar."},
{id:"s10",course:"Bilgisayar Donanımı",q:"Elektrik kesilince içindeki veri silinen bellek hangisidir?",options:["RAM","SSD","HDD","USB bellek"],answer:0,explain:"RAM uçucudur. SSD, HDD ve USB bellek verileri kalıcı saklar."},
{id:"s11",course:"Bilgisayar Donanımı",q:"Bilgisayar açılırken BIOS/UEFI'nin donanımı test etmesine ne denir?",options:["POST","DHCP","NAT","DNS"],answer:0,explain:"POST (Power-On Self-Test), açılışta donanımı kontrol eden testtir."},
{id:"s12",course:"Bilişim Hukuku",q:"TCK madde 243 hangi suçu düzenler?",options:["Bilişim sistemine girme","Banka kartlarının kötüye kullanılması","Sistemi bozma ve verileri yok etme","Kişisel verilerin korunması"],answer:0,explain:"243 bilişim sistemine girme, 244 sistemi bozma/verileri yok etme, 245 banka kartlarının kötüye kullanılmasıdır. Kişisel veriler KVKK ile korunur."}
];
const all=()=>[...ST,...(data.quizzes||[])];
const sh=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const css=document.createElement("style");
css.textContent=`#qdlg{border:1px solid var(--line);border-radius:18px;background:var(--bg);color:var(--ink);width:min(640px,94vw);max-height:90vh;padding:0;overflow:auto}
#qdlg[open]{animation:pop .3s}#qdlg::backdrop{background:rgba(6,12,20,.6);backdrop-filter:blur(4px)}
.qtop{display:flex;justify-content:space-between;color:var(--muted);font-size:.9rem}
.qbar{height:6px;background:var(--soft);border-radius:9px;margin:8px 0 14px;overflow:hidden}.qbar i{display:block;height:100%;background:linear-gradient(90deg,var(--a1),var(--a2));transition:width .4s}
.qopt{display:block;width:100%;text-align:left;margin:8px 0;padding:11px 14px;border:1px solid var(--line);background:var(--panel);color:var(--ink);border-radius:12px;font:inherit;cursor:pointer;transition:transform .15s,border-color .2s,background .2s}
.qopt:hover:not(:disabled){transform:translateX(4px);border-color:var(--a1)}.qopt:disabled{color:var(--ink);opacity:1;cursor:default}
.qopt.sel{border-color:var(--a2);background:var(--soft)}.qopt.ok{border-color:#16a34a;background:rgba(22,163,74,.18)}.qopt.bad{border-color:var(--danger);background:rgba(214,69,69,.18)}
#qe{min-height:24px;margin-top:6px}.qw{padding:10px 0;border-top:1px solid var(--line)}`;
document.head.appendChild(css);
const d=document.createElement("dialog");d.id="qdlg";document.body.appendChild(d);
const btn=document.createElement("button");btn.className="btn ghost small";btn.textContent="🧠 Quiz";btn.onclick=()=>{home();d.showModal()};
const th=document.querySelector('.nav [data-a="theme"]'),g=document.createElement("div");
g.style.cssText="display:flex;gap:8px";th.replaceWith(g);g.append(btn,th);
let tm;

function imp(txt){
  let a;try{a=JSON.parse(txt.replace(/```(?:json)?/g,"").trim())}catch(e){return toast("JSON okunamadı. Sadece yapay zekânın verdiği listeyi yapıştır.")}
  if(!Array.isArray(a))return toast("Köşeli parantezli bir liste bekleniyordu.");
  const ok=a.filter(x=>x&&typeof x.q==="string"&&Array.isArray(x.options)&&x.options.length>=2&&Number.isInteger(x.answer)&&x.answer>=0&&x.answer<x.options.length)
    .map(x=>({id:"q"+Math.random().toString(36).slice(2,8),course:String(x.course||"Genel"),q:x.q,options:x.options.map(String),answer:x.answer,explain:String(x.explain||"")}));
  if(!ok.length)return toast("Geçerli soru bulunamadı.");
  data.quizzes=[...(data.quizzes||[]),...ok];save();home();toast(ok.length+" soru eklendi");
}

function home(){
  clearInterval(tm);
  const qs=all(),courses=[...new Set(qs.map(x=>x.course))];
  d.innerHTML=`<div class="dc"><h2>🧠 Quiz ve sınav</h2><p>${qs.length} soru hazır.</p>
  <label>Ders</label><select id="qc"><option value="">Tüm dersler</option>${courses.map(c=>`<option>${esc(c)}</option>`).join("")}</select>
  <label>Mod</label><select id="qm"><option value="quiz">Quiz: anında geri bildirim</option><option value="exam">Sınav: süreli, sonuç sonda</option></select>
  <label>Soru sayısı</label><select id="qn"><option value="5">5</option><option value="10">10</option><option value="99">Hepsi</option></select>
  <div class="acts"><button class="btn ghost" id="qx">Kapat</button><button class="btn" id="qs">Başla</button></div>
  ${EDIT?`<hr><b>Düzenleme modu: yeni soru ekle</b><p>1) Ders seç, istemi kopyala. 2) Claude'a yapıştır. 3) Çıkan listeyi aşağıya yapıştır.</p>
  <button class="btn ghost small" id="qp">Yapay zekâ için istemi kopyala</button>
  <label>Claude'un verdiği soru listesi</label><textarea id="qj" placeholder="[ { &quot;course&quot;: ... } ]"></textarea>
  <div class="acts"><button class="btn small" id="qi">Soruları ekle</button></div>`:""}</div>`;
  d.onclick=e=>{
    if(e.target===d)return d.close();
    const id=e.target.id,v=s=>d.querySelector(s).value;
    if(id==="qx")d.close();
    if(id==="qs"){const c=v("#qc");const l=all().filter(x=>!c||x.course===c);if(!l.length)return toast("Bu ders için soru yok.");run(sh(l).slice(0,+v("#qn")),v("#qm"))}
    if(id==="qp"){const c=v("#qc"),ns=data.items.filter(i=>i.type==="Not"&&(!c||i.course===c));
      if(!ns.length)return toast("Bu derste not yok.");
      const p=`Aşağıdaki ders notlarından 8 adet çoktan seçmeli soru hazırla. Sadece notlarda yazan bilgilerden sor, 4 şıklı olsun, doğru şık farklı yerlerde olsun. Cevabı sadece şu biçimde bir JSON listesi olarak ver, başka yazı ekleme:\n[{"course":"Ders adı","q":"Soru","options":["A","B","C","D"],"answer":0,"explain":"Kısa açıklama"}]\n"answer", doğru şıkkın 0'dan başlayan sırasıdır.\n\n`+ns.map(n=>`## ${n.course} - ${n.title}\n${n.text}`).join("\n\n");
      navigator.clipboard.writeText(p).then(()=>toast("İstem kopyalandı. Claude'a yapıştır."),()=>toast("Kopyalanamadı."))}
    if(id==="qi")imp(v("#qj"));
  };
}

function run(list,mode){
  const qs=list.map(x=>({...x,opts:sh(x.options.map((t,i)=>({t,ok:i===x.answer})))}));
  let i=0,score=0,sel=null,wrong=[],left=qs.length*60;
  clearInterval(tm);
  const commit=()=>{const q=qs[i];if(sel!==null&&q.opts[sel].ok)score++;else wrong.push(q)};
  const tick=()=>{const t=d.querySelector("#qt");if(t)t.textContent="⏱ "+Math.floor(left/60)+":"+String(left%60).padStart(2,"0")};
  const end=()=>{
    clearInterval(tm);const n=qs.length,p=Math.round(score/n*100);
    d.innerHTML=`<div class="dc"><h2>Sonuç: ${score}/${n} (%${p})</h2><p>${p>=85?"Harika, konulara hâkimsin! 🎉":p>=60?"İyi gidiyorsun. Yanlışları tekrar çöz.":"Notları tekrar oku ve yeniden dene, gelişiyorsun."}</p>${wrong.length?"<h3>Yanlışlar</h3>"+wrong.map(q=>`<div class="qw"><b>${esc(q.q)}</b><br>Doğru cevap: ${esc(q.opts.find(o=>o.ok).t)}<br><small>${esc(q.explain||"")}</small></div>`).join(""):""}<div class="acts"><button class="btn ghost" id="qx">Ana menü</button>${wrong.length?'<button class="btn ghost" id="qw">Yanlışları çöz</button>':""}<button class="btn" id="qr">Tekrar çöz</button></div></div>`;
    d.onclick=e=>{if(e.target===d)return d.close();const id=e.target.id;if(id==="qx")home();if(id==="qr")run(sh(list),mode);if(id==="qw")run(sh(wrong),mode)};
  };
  const show=()=>{
    const q=qs[i];sel=null;
    d.innerHTML=`<div class="dc"><div class="qtop"><span>Soru ${i+1}/${qs.length} · ${esc(q.course)}</span>${mode==="exam"?'<b id="qt"></b>':""}</div><div class="qbar"><i style="width:${i/qs.length*100}%"></i></div><h3>${esc(q.q)}</h3>${q.opts.map((o,k)=>`<button class="qopt" data-k="${k}">${esc(o.t)}</button>`).join("")}<div id="qe"></div><div class="acts"><button class="btn ghost" id="qx">Çık</button><button class="btn" id="qnx" disabled>${i===qs.length-1?"Bitir":"Sonraki"}</button></div></div>`;
    tick();
  };
  d.onclick=e=>{
    if(e.target===d){clearInterval(tm);return d.close()}
    const b=e.target.closest("button");if(!b)return;
    if(b.id==="qx"){clearInterval(tm);return home()}
    if(b.classList.contains("qopt")){
      const k=+b.dataset.k,q=qs[i];
      if(mode==="quiz"){
        if(sel!==null)return;sel=k;
        d.querySelectorAll(".qopt").forEach((x,j)=>{x.disabled=true;if(q.opts[j].ok)x.classList.add("ok");else if(j===k)x.classList.add("bad")});
        d.querySelector("#qe").textContent=(q.opts[k].ok?"✅ Doğru. ":"❌ Yanlış. ")+(q.explain||"");
      }else{sel=k;d.querySelectorAll(".qopt").forEach((x,j)=>x.classList.toggle("sel",j===k))}
      d.querySelector("#qnx").disabled=false;
    }
    if(b.id==="qnx"){commit();i++;i<qs.length?show():end()}
  };
  if(mode==="exam")tm=setInterval(()=>{left--;tick();if(left<=0){commit();wrong.push(...qs.slice(i+1));end()}},1000);
  show();
}
})();