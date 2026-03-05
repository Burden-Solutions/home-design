
import { Button } from '@/components/ui/button'
import { 
  ShoppingCart, 
  Apple,
  Download,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  ArrowRight,
  Zap,
  Clock,
  PhoneIcon
} from 'lucide-react'


// ── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  const links = ["Vanities","Tapware","Bathroom","Kitchen & Laundry","Plumbing","Pool Supplies","Brands"];
  return (
    <header className="sticky top-0 z-[200] bg-white border-b-[3px] border-[#CC2200] shadow-[0_2px_16px_rgba(37,55,69,.06)]">
      <div className="bg-[#253745] px-[40px] py-[7px] text-center">
        <span className="text-white/70 font-['Barlow'] text-[12px] tracking-[0.03em]">
          🇦🇺 Australian Owned & Operated · 15 Stores Across Victoria · 60+ Years Trusted by the Trade
        </span>
      </div>
      <div className="max-w-[1280px] mx-auto px-[40px] flex items-center h-16 gap-9">
        <div className="font-['Roboto'] text-[28px] font-black text-[#253745] tracking-[-1.5px] flex-shrink-0 flex items-center gap-1.5">
          burdens
          <span className="inline-block w-6 h-[3px] bg-[#CC2200] mb-0.5"/>
        </div>
        <nav className="flex gap-5.5 flex-1 justify-center">
          {links.map(l=>(
            <a key={l} href="#" className="text-[#6B7177] no-underline font-['Barlow'] text-[13px] font-medium uppercase tracking-[0.04em] transition-colors hover:text-[#0A4679]">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3.5 flex-shrink-0">
          <a href="#" className="font-['Barlow'] text-[13px] text-[#6B7177] no-underline font-medium">Login</a>
          <Button className="bg-[#CC2200] hover:bg-[#CC2200] text-white border-none px-5 py-[9px] font-['Barlow'] text-[13px] font-bold flex items-center gap-1.5">
            <ShoppingCart className="w-4 h-4" />
            Cart (0)
          </Button>
        </div>
      </div>
    </header>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#253745] via-[#0d2233] to-[#0A4679] min-h-[88vh] flex items-center relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px"
      }}/>
      {/* Red accent slash */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#CC2200] to-transparent opacity-60"/>

      <div className="max-w-[1280px] mx-auto px-[40px] grid grid-cols-[1.1fr_0.9fr] gap-20 items-center w-full">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-[14px] py-[6px] mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CC2200]"/>
            <span className="font-['Barlow'] text-[11px] font-semibold text-white/80 tracking-[0.1em] uppercase">50,000+ Orders Delivered</span>
          </div>
          <h1 className="font-['Roboto'] font-black text-[clamp(44px,5.5vw,74px)] text-white leading-none tracking-[-3px] mb-6">
            BATHROOM &<br/>
            <span className="text-[#7EC8E3] font-light tracking-[-2px]">PLUMBING</span><br/>
            DONE RIGHT.
          </h1>
          <p className="font-['Barlow'] text-[17px] text-white/68 leading-[1.75] max-w-[460px] mb-10">
            Premium products for trade professionals and homeowners. 15 showrooms, same-day delivery, and expert advice — since 1957.
          </p>
          <div className="flex gap-3.5 flex-wrap mb-13">
            <Button className="bg-white text-[#253745] hover:bg-[#CC2200] hover:text-white border-none px-9 py-4 font-['Barlow'] text-[15px] font-bold tracking-[0.02em] shadow-[0_4px_24px_rgba(0,0,0,.2)] transition-all">
              Shop Now <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-2 border-white/35 hover:border-white hover:bg-white/8 px-9 py-[14px] font-['Barlow'] text-[15px] font-semibold transition-all">
              Trade Pricing
            </Button>
          </div>
          {/* Inline social proof */}
          <div className="flex gap-0">
            {[
              ["12K+","Customers"],["18.5K","Instagram"],["50K+","Orders"],["1K+","Trade Pros"]
            ].map(([v,l],i)=>(
              <div key={l} className={`${i < 3 ? "pr-6 mr-6 border-r border-white/12" : ""}`}>
                <div className="font-['Roboto'] font-black text-[22px] text-white leading-none">{v}</div>
                <div className="font-['Barlow'] text-[11px] text-white/45 uppercase tracking-[0.06em] mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: floating promo cards */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[420px]">
          {[
            {label:"SAME-DAY DELIVERY",sub:"From shelf to site, your way",emoji:"🚚",bg:"bg-gradient-to-br from-[#0A4679] to-[#1a6da0]",light:true,span:"col-span-2 row-span-1"},
            {label:"20,000+ PRODUCTS",sub:"Premium bathroom brands",emoji:"📦",bg:"bg-gradient-to-br from-[#1e3a4a] to-[#2a4f62]",light:true},
            {label:"EXPERT STAFF",sub:"Counter pros & showroom specialists",emoji:"👩‍💼",bg:"bg-gradient-to-br from-[#243040] to-[#34495e]",light:true},
            {label:"VANITIES",sub:"Find your perfect vanity",emoji:"🪞",bg:"bg-gradient-to-br from-[#eaf2f8] to-[#d0e4f0]",light:false},
          ].map(({label,sub,emoji,bg,light,span},i)=>(
            <div key={label} className={`${bg} ${span} rounded-lg p-5 flex flex-col justify-end cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,.25)] transition-all hover:translateY-[-5px] hover:shadow-[0_20px_48px_rgba(37,55,69,.14)]`}>
              <span className={`text-${i === 0 ? "2xl" : "xl"} mb-2`}>{emoji}</span>
              <div className={`font-['Roboto'] font-bold text-${i === 0 ? "14px" : "12px"} ${light ? "text-white" : "text-[#253745]"} leading-tight`}>{label}</div>
              <div className={`font-['Barlow'] text-[11px] ${light ? "text-white/55" : "text-[#6B7177]"} mt-0.5`}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── DEALS BANNER ─────────────────────────────────────────────────────────────
function DealsBanner() {
  return (
    <div className="bg-[#CC2200] px-[40px] py-[14px] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="font-['Roboto'] font-black text-[16px] text-white tracking-[-0.3px]">🔥 BURDENS DEALS — DON'T MISS OUT!</span>
        <span className="font-['Barlow'] text-[13px] text-white/75">While stocks last</span>
      </div>
      <Button className="bg-white text-[#CC2200] hover:bg-[#253745] hover:text-white border-none px-[22px] py-2 font-['Barlow'] text-[13px] font-bold transition-all">
        VIEW DEALS <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
}

// ── CATEGORIES ───────────────────────────────────────────────────────────────
function Categories() {
  const cats = [
    {label:"Bathroom Vanities",emoji:"🪞",count:"1,200+ products"},{label:"Tapware",emoji:"🚿",count:"800+ products"},
    {label:"Basins",emoji:"🫙",count:"400+ products"},{label:"Showers",emoji:"🚿",count:"600+ products"},
    {label:"Baths",emoji:"🛁",count:"200+ products"},{label:"Toilets",emoji:"🚽",count:"300+ products"},
    {label:"Kitchen Sinks",emoji:"🫙",count:"250+ products"},{label:"Pool Supplies",emoji:"🏊",count:"500+ products"},
  ];
  return (
    <section className="px-[40px] py-18 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-end mb-9">
          <div>
            <p className="font-['Barlow'] text-[11px] font-bold tracking-[0.12em] uppercase text-[#0A4679] mb-2">Browse</p>
            <h2 className="font-['Roboto'] font-black text-[clamp(26px,3vw,38px)] text-[#253745] tracking-[-1px]">Shop by Category</h2>
          </div>
          <a href="#" className="font-['Barlow'] text-[13px] text-[#0A4679] no-underline font-semibold">View all categories →</a>
        </div>
        <div className="grid grid-cols-4 gap-3.5">
          {cats.map(({label,emoji,count})=>(
            <div key={label} className="bg-[#F3F5F6] rounded-lg overflow-hidden cursor-pointer border border-[#e5eaed] shadow-[0_2px_8px_rgba(37,55,69,.04)] transition-all hover:translateY-[-5px] hover:shadow-[0_20px_48px_rgba(37,55,69,.14)]">
              <div className="h-[140px] bg-gradient-to-br from-[#253745]/5 to-[#0A4679]/10 flex items-center justify-center text-[52px] border-b border-[#e5eaed]">
                {emoji}
              </div>
              <div className="p-4">
                <div className="font-['Roboto'] font-bold text-[14px] text-[#253745] mb-1">{label}</div>
                <div className="font-['Barlow'] text-[12px] text-[#6B7177]">{count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── DUAL AUDIENCE ─────────────────────────────────────────────────────────────
function DualAudience() {
  return (
    <section className="px-[40px] py-18 bg-[#F3F5F6]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 gap-5">
        {/* TRADE */}
        <div className="bg-gradient-to-br from-[#253745] to-[#0A4679] rounded-xl p-[48px] relative overflow-hidden shadow-[0_16px_48px_rgba(37,55,69,.2)]">
          <div className="absolute -top-16 -right-16 w-[220px] h-[220px] rounded-full border border-white/7"/>
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#CC2200]"/>
          <span className="text-[36px] block mb-4">🔧</span>
          <p className="font-['Barlow'] text-[11px] font-bold tracking-[0.12em] uppercase text-white/50 mb-2.5">For Trade Professionals</p>
          <h3 className="font-['Roboto'] font-black text-[28px] text-white tracking-[-1px] leading-tight mb-4">
            Live Pricing.<br/>Fast Fulfillment.
          </h3>
          <p className="font-['Barlow'] text-[14px] text-white/65 leading-[1.7] mb-7">
            Exclusive trade accounts with live pricing, site-drop delivery, and counter service from people who know the job.
          </p>
          <ul className="list-none mb-8">
            {["Live trade pricing on login","Fast pick-ups & site-drop delivery","Locals who know the job"].map(i=>(
              <li key={i} className="font-['Barlow'] text-[14px] text-white/75 mb-2 flex gap-2.5 items-center">
                <span className="text-[#7EC8E3] font-bold">✓</span>{i}
              </li>
            ))}
          </ul>
          <div className="flex gap-2.5 flex-wrap">
            <Button className="bg-white text-[#253745] hover:bg-[#CC2200] hover:text-white border-none px-6 py-[13px] font-['Barlow'] text-[13px] font-bold transition-all">
              Open Trade Account
            </Button>
            <Button variant="outline" className="bg-transparent text-white/70 border border-white/25 hover:border-white/60 hover:text-white px-5 py-3 font-['Barlow'] text-[13px] transition-all">
              Trade Login
            </Button>
          </div>
        </div>

        {/* HOMEOWNERS */}
        <div className="bg-white rounded-xl p-[48px] relative overflow-hidden shadow-[0_16px_48px_rgba(37,55,69,.08)] border border-[#e5eaed]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A4679] to-[#7EC8E3]"/>
          <span className="text-[36px] block mb-4">🏠</span>
          <p className="font-['Barlow'] text-[11px] font-bold tracking-[0.12em] uppercase text-[#0A4679] mb-2.5">For Homeowners & Designers</p>
          <h3 className="font-['Roboto'] font-black text-[28px] text-[#253745] tracking-[-1px] leading-tight mb-4">
            Design the Bathroom<br/>of Your Dreams.
          </h3>
          <p className="font-['Barlow'] text-[14px] text-[#6B7177] leading-[1.7] mb-7">
            Browse 20,000+ products across 15 stunning showrooms. Friendly expert advice, no guesswork — just great results.
          </p>
          <ul className="list-none mb-8">
            {["Premium bathroom & kitchen brands","15 showrooms across Victoria","Friendly expert showroom advice","Installation-ready products"].map(i=>(
              <li key={i} className="font-['Barlow'] text-[14px] text-[#6B7177] mb-2 flex gap-2.5 items-center">
                <span className="text-[#0A4679] font-bold">✓</span>{i}
              </li>
            ))}
          </ul>
          <div className="flex gap-2.5 flex-wrap">
            <Button className="bg-[#253745] text-white hover:bg-[#0A4679] border-none px-6 py-[13px] font-['Barlow'] text-[13px] font-bold transition-all">
              Shop Bathrooms
            </Button>
            <Button variant="outline" className="bg-[#F3F5F6] text-[#253745] border-2 border-[#253745] hover:bg-[#253745] hover:text-white px-6 py-3 font-['Barlow'] text-[13px] font-semibold transition-all">
              Find a Showroom
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── APP SECTION ───────────────────────────────────────────────────────────────
function AppSection() {
  return (
    <section className="bg-[#253745] px-[40px] py-18 relative overflow-hidden">
      <div className="absolute -top-25 -right-25 w-[500px] h-[500px] rounded-full border border-white/4"/>
      <div className="max-w-[1280px] mx-auto grid grid-cols-[1fr_280px] gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-[14px] py-[6px] mb-5">
            <span className="text-[14px]">📱</span>
            <span className="font-['Barlow'] text-[11px] font-bold text-white/75 tracking-[0.1em] uppercase">Burdens App for Trade</span>
          </div>
          <h2 className="font-['Roboto'] font-black text-[clamp(28px,3.5vw,46px)] text-white tracking-[-1.5px] leading-tight mb-3.5">
            Manage Orders<br/>On The Go
          </h2>
          <p className="font-['Barlow'] text-[15px] text-white/55 leading-[1.7] mb-7">
            Live pricing & stock · Order directly · Quick re-order
          </p>
          <div className="grid grid-cols-2 gap-2.5 mb-8 max-w-[480px]">
            {["Live pricing & real-time stock","Order directly from your phone","Quick re-order past purchases","Account & invoice management"].map(f=>(
              <div key={f} className="flex gap-2 items-start">
                <span className="text-[#7EC8E3] font-bold flex-shrink-0 mt-0.5">—</span>
                <span className="font-['Barlow'] text-[13px] text-white/65 leading-[1.5]">{f}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Button className="bg-[#CC2200] hover:bg-[#CC2200] text-white border-none px-6 py-3 font-['Barlow'] text-[14px] font-bold flex items-center gap-2 transition-opacity hover:opacity-85">
              <Apple className="w-4 h-4" /> Get iOS App
            </Button>
            <Button className="bg-[#0A4679] hover:bg-[#0A4679] text-white border-none px-6 py-3 font-['Barlow'] text-[14px] font-bold flex items-center gap-2 transition-opacity hover:opacity-85">
              <Download className="w-4 h-4" /> Get Android App
            </Button>
          </div>
        </div>
        {/* Phone */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-[200px] h-[380px] bg-gradient-to-br from-[#1a2d3d] to-[#0d1f2d] rounded-[28px] border-[5px] border-white/12 shadow-[0_32px_64px_rgba(0,0,0,.5)] overflow-hidden flex flex-col -rotate-3">
            <div className="h-5 flex justify-center items-end pb-0.5">
              <div className="w-[60px] h-3 bg-[#0d1f2d] rounded-md"/>
            </div>
            <div className="flex-1 p-2.5 flex flex-col gap-1.5">
              <div className="bg-white/8 rounded-md p-2">
                <div className="font-['Barlow'] text-[8px] text-white/35 mb-0.5 uppercase tracking-[0.05em]">Trade Account</div>
                <div className="font-['Roboto'] text-[12px] font-bold text-white">Good morning, John</div>
              </div>
              {[["Orders","12"],["Pending","3"],["Credit","$4,200"]].map(([l,v])=>(
                <div key={l} className="bg-white/5 rounded-md p-1.5 flex justify-between items-center">
                  <span className="font-['Barlow'] text-[9px] text-white/40">{l}</span>
                  <span className="font-['Roboto'] text-[14px] font-bold text-[#7EC8E3]">{v}</span>
                </div>
              ))}
              <div className="bg-[#0A4679] rounded-md p-2 text-center">
                <div className="font-['Roboto'] text-[10px] font-bold text-white">Quick Reorder</div>
              </div>
              {[1,2,3].map(i=>(
                <div key={i} className="bg-white/3 rounded p-1.5 flex gap-1.5 items-center">
                  <div className="w-5 h-5 rounded bg-white/7"/>
                  <div className="flex-1">
                    <div className="w-[65%] h-1 bg-white/10 rounded mb-0.5"/>
                    <div className="w-[40%] h-0.5 bg-white/6 rounded"/>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[100px] h-[100px] bg-white rounded-md p-2 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-[#253745] to-[#253745] opacity-40 rounded" style={{
                backgroundImage: "repeating-linear-gradient(0deg,#253745 0,#253745 3px,transparent 3px,transparent 6px),repeating-linear-gradient(90deg,#253745 0,#253745 3px,transparent 3px,transparent 6px)"
              }}/>
            </div>
            <span className="font-['Barlow'] text-[11px] text-white/35">Scan to<br/>download</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SOCIAL PROOF ──────────────────────────────────────────────────────────────
function SocialProof() {
  const reviews = [
    {text:"Needed urgent service regards plumbing supplies. Troy got the job done pronto. Best trade counter around.",name:"John M.",role:"Licensed Plumber"},
    {text:"Exceptional service from Scott. Went over and above to track down a delayed basin and kept me informed throughout.",name:"Sarah K.",role:"Interior Designer"},
    {text:"I've been using Burdens for years. Great range, competitive pricing, and the staff actually know what they're talking about.",name:"Harry D.",role:"Home Renovator"},
  ];
  return (
    <section className="px-[40px] py-18 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[20px] text-[#E87722] mb-2">★★★★★</div>
          <h2 className="font-['Roboto'] font-black text-[clamp(24px,2.5vw,34px)] text-[#253745] tracking-[-1px] mb-1.5">
            Trusted by 12,000+ Customers
          </h2>
          <p className="font-['Barlow'] text-[14px] text-[#6B7177]">4.9 stars from 111 verified reviews</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {reviews.map(({text,name,role})=>(
            <div key={name} className="bg-[#F3F5F6] rounded-lg p-8 border border-[#e5eaed] shadow-[0_2px_8px_rgba(37,55,69,.04)] transition-all hover:translateY-[-5px] hover:shadow-[0_20px_48px_rgba(37,55,69,.14)]">
              <div className="text-[16px] text-[#E87722] mb-4">★★★★★</div>
              <p className="font-['Barlow'] text-[14px] text-[#6B7177] leading-[1.7] italic mb-5">"{text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#253745] to-[#0A4679] flex items-center justify-center text-white font-['Roboto'] font-bold text-[15px] flex-shrink-0">
                  {name[0]}
                </div>
                <div>
                  <div className="font-['Roboto'] font-bold text-[13px] text-[#253745]">{name}</div>
                  <div className="font-['Barlow'] text-[11px] text-[#6B7177] mt-0.5">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── INSTAGRAM CTA ─────────────────────────────────────────────────────────────
function InstaCTA() {
  return (
    <section className="bg-gradient-to-br from-[#0A4679] to-[#1a5a8a] px-[40px] py-13">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between flex-wrap gap-6">
        <div>
          <h3 className="font-['Roboto'] font-black text-[clamp(20px,2.5vw,30px)] text-white tracking-[-1px] mb-1.5">
            Follow @burdens for Daily Inspiration
          </h3>
          <p className="font-['Barlow'] text-[14px] text-white/70">
            Join 18,500+ bathroom renovators & trade professionals. Tag us to be featured.
          </p>
        </div>
        <Button className="bg-white text-[#253745] hover:bg-[#253745] hover:text-white border-none px-8 py-[14px] font-['Barlow'] text-[14px] font-bold flex items-center gap-2.5 flex-shrink-0 transition-all">
          <Instagram className="w-4 h-4" /> Follow Now · 18.5K
        </Button>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    {title:"Products",links:["Vanities","Tapware","Basins","Toilets","Showers","Pool Supplies"]},
    {title:"Company",links:["About Burdens","Store Locations","Careers","News","Trades Guide"]},
    {title:"Support",links:["Contact Us","Delivery Info","Returns Policy","FAQs","Customer Reviews"]},
    {title:"Trade",links:["Open Trade Account","Online Trade Account","Trade Login","TRADE TRAK Portal"]},
  ];
  return (
    <footer className="bg-[#253745] px-[40px] pt-16 pb-7">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[240px_repeat(4,1fr)] gap-12 mb-12">
          <div>
            <div className="font-['Roboto'] font-black text-[26px] text-white tracking-[-1px] mb-1">burdens</div>
            <div className="w-6 h-[3px] bg-[#CC2200] mb-4"/>
            <p className="font-['Barlow'] text-[12px] text-white/40 leading-[1.7] mb-4">
              263 Frankston-Dandenong Rd,<br/>Dandenong South, 3175 VIC<br/><br/>
              <PhoneIcon className="w-3 h-3 inline mr-1" /> 1300 202 010
            </p>
            <div className="flex gap-2.5">
              {[
                {icon: Facebook, label: "Facebook"},
                {icon: Instagram, label: "Instagram"},
                {icon: Linkedin, label: "LinkedIn"},
                {icon: Mail, label: "Email"}
              ].map(({icon: Icon, label},k)=>(
                <div key={label} className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center cursor-pointer text-[14px] transition-colors hover:bg-white/16">
                  <Icon className="w-4 h-4 text-white/70 hover:text-white" />
                </div>
              ))}
            </div>
          </div>
          {cols.map(({title,links})=>(
            <div key={title}>
              <h4 className="font-['Barlow'] font-semibold text-[11px] tracking-[0.1em] uppercase text-white/35 mb-4">{title}</h4>
              <ul className="list-none">
                {links.map(l=>(
                  <li key={l} className="mb-2">
                    <a href="#" className="font-['Barlow'] text-[13px] text-white/45 no-underline transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Newsletter */}
        <div className="border-t border-white/7 pt-7 grid grid-cols-1 gap-10 items-center mb-6">
          <p className="font-['Barlow'] text-[13px] text-white/40">
            Sign up for the latest products, sales, and limited offers from Burdens.
          </p>
          <div className="flex gap-0 max-w-[320px]">
            <input placeholder="Your email address" className="flex-1 px-[14px] py-2.5 bg-white/7 border border-white/12 border-r-0 text-white font-['Barlow'] text-[13px] outline-none placeholder-white/40 rounded-l-md"/>
            <Button className="bg-[#CC2200] hover:bg-[#CC2200] text-white border-none px-5 py-2.5 font-['Barlow'] text-[13px] font-bold flex-shrink-0 transition-opacity hover:opacity-85 rounded-r-md">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="border-t border-white/6 pt-5 flex justify-between items-center flex-wrap gap-3">
          <p className="font-['Barlow'] text-[11px] text-white/25">© 2026 Burdens Plumbing · Powered by Shopify · All rights reserved.</p>
          <div className="flex gap-3">
            {["Privacy Policy","Terms of Use","Returns Policy"].map(l=>(
              <a key={l} href="#" className="font-['Barlow'] text-[11px] text-white/25 no-underline transition-colors hover:text-white/50">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomeDesign02() {
  return (
    <div className="bg-white min-h-screen font-['Barlow']">
      <Nav/>
      <Hero/>
      <DealsBanner/>
      <Categories/>
      <DualAudience/>
      <AppSection/>
      <SocialProof/>
      <InstaCTA/>
      <Footer/>
    </div>
  );
}
