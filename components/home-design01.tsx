'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  ShoppingCart, 
  LogIn, 
  Users, 
  TrendingUp, 
  Award, 
  MapPin, 
  Lightbulb, 
  Star,
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

const HomeDesign01 = () => {
  const NavBar = () => (
    <nav className="sticky top-0 z-50 bg-white border-b-2" style={{ borderColor: '#CC2200' }}>
      <div className="bg-slate-800 px-10 py-2 text-center">
        <span className="text-white/70 font-barlow text-xs tracking-wide">
          🇦🇺 Australian Owned & Operated · 15 Stores Across Victoria · 60+ Years Trusted by the Trade
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        <div className="flex flex-col items-center gap-2">
          <div className="font-roboto text-3xl font-bold text-slate-800 tracking-tight flex items-center gap-1.5 border-b-2 border-red-600">
            burdens
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          {['Vanities', 'Tapware', 'Bathroom', 'Kitchen & Laundry', 'Plumbing', 'Pool Supplies', 'Brands'].map((item) => (
            <a key={item} href="#" className="text-slate-600 font-barlow text-sm font-medium uppercase tracking-wide transition-colors hover:text-blue-800">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-slate-600 font-barlow text-sm font-medium">Login</a>
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white border-none px-5 py-2 font-barlow text-sm font-bold flex items-center gap-1.5"
          >
            <ShoppingCart size={16} />
            Cart (0)
          </Button>
        </div>
      </div>
    </nav>
  )

  const Hero = () => (
    <section className="min-h-screen flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 55%, #0c4a6e 100%)' }}>
      {/* <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px"
      }}/> */}
      

      <div className="max-w-7xl mx-auto px-10 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"/>
              <span className="font-barlow text-xs font-semibold text-white/80 tracking-widest uppercase">50,000+ Orders Delivered</span>
            </div>
            <h1 className="font-roboto font-black text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-tight mb-6">
              BATHROOM &<br/>
              <span className="text-sky-300 font-light tracking-tight">PLUMBING</span><br/>
              DONE RIGHT.
            </h1>
            <p className="font-barlow text-lg text-white/70 leading-relaxed max-w-lg mb-10">
              Premium products for trade professionals and homeowners. 15 showrooms, same-day delivery, and expert advice — since 1957.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg"
                className="bg-white text-slate-800 hover:bg-red-600 hover:text-white border-none px-9 py-4 font-barlow text-base font-bold tracking-wide transition-all shadow-lg"
              >
                Shop Now <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 px-9 py-4 font-barlow text-base font-semibold transition-all shadow-lg"
              >
                Trade Pricing
              </Button>
            </div>
            <div className="flex gap-0">
              {[
                ["12K+","Customers"],["18.5K","Instagram"],["50K+","Orders"],["1K+","Trade Pros"]
              ].map(([v,l],i)=>(
                <div key={l} className={`${i < 3 ? "pr-6 mr-6 border-r border-white/12" : ""}`}>
                  <div className="font-roboto font-black text-2xl text-white leading-none">{v}</div>
                  <div className="font-barlow text-xs text-white/45 uppercase tracking-widest mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 h-96">
            {[
              {label:"SAME-DAY DELIVERY",sub:"From shelf to site, your way",emoji:"🚚",bg:"from-blue-800 to-blue-600",light:true,span:"col-span-2"},
              {label:"20,000+ PRODUCTS",sub:"Premium bathroom brands",emoji:"📦",bg:"from-slate-700 to-slate-600",light:true},
              {label:"EXPERT STAFF",sub:"Counter pros & showroom specialists",emoji:"👩‍💼",bg:"from-slate-800 to-slate-700",light:true},
              {label:"VANITIES",sub:"Find your perfect vanity",emoji:"🪞",bg:"from-slate-100 to-slate-200",light:false},
              {label:"18.5K FOLLOWERS",sub:"Follow for daily inspiration",emoji:"😎",bg:"from-slate-100 to-slate-200",light:false},
            ].map(({label,sub,emoji,bg,light,span},i)=>(
              <div key={label} className={`bg-gradient-to-br ${bg} ${span} rounded-lg p-5 flex flex-col justify-end cursor-pointer shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl`}>
                <span className={`text-2xl ${i === 0 ? "text-3xl" : ""} mb-2`}>{emoji}</span>
                <div className={`font-roboto font-bold ${i === 0 ? "text-sm" : "text-xs"} ${light ? "text-white" : "text-slate-800"} leading-tight`}>{label}</div>
                <div className={`font-barlow text-xs ${light ? "text-white/60" : "text-slate-600"} mt-1`}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

  const DealsBanner = () => (
    <div className="bg-red-600 py-3.5 overflow-hidden">
      <div className="flex animate-marquee">
        {/* First set */}
        <div className="flex items-center gap-8 px-10">
          <span className="font-roboto font-black text-base text-white tracking-tight whitespace-nowrap">🔥 BURDENS DEALS — DON'T MISS OUT!</span>
          <span className="font-barlow text-sm text-white/75 whitespace-nowrap">While stocks last</span>
          <Button className="bg-white text-red-600 hover:bg-slate-800 hover:text-white border-none px-6 py-2 font-barlow text-sm font-bold transition-all rounded-none">
            VIEW DEALS <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
        {/* Second set - identical duplicate for seamless loop */}
        <div className="flex items-center gap-8 px-10">
          <span className="font-roboto font-black text-base text-white tracking-tight whitespace-nowrap">🔥 BURDENS DEALS — DON'T MISS OUT!</span>
          <span className="font-barlow text-sm text-white/75 whitespace-nowrap">While stocks last</span>
          <Button className="bg-white text-red-600 hover:bg-slate-800 hover:text-white border-none px-6 py-2 font-barlow text-sm font-bold transition-all rounded-none">
            VIEW DEALS <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
        {/* Third set - identical duplicate for seamless loop */}
        <div className="flex items-center gap-8 px-10">
          <span className="font-roboto font-black text-base text-white tracking-tight whitespace-nowrap">🔥 BURDENS DEALS — DON'T MISS OUT!</span>
          <span className="font-barlow text-sm text-white/75 whitespace-nowrap">While stocks last</span>
          <Button className="bg-white text-red-600 hover:bg-slate-800 hover:text-white border-none px-6 py-2 font-barlow text-sm font-bold transition-all rounded-none">
            VIEW DEALS <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
        {/* Fourth set - identical duplicate for seamless loop */}
        <div className="flex items-center gap-8 px-10">
          <span className="font-roboto font-black text-base text-white tracking-tight whitespace-nowrap">🔥 BURDENS DEALS — DON'T MISS OUT!</span>
          <span className="font-barlow text-sm text-white/75 whitespace-nowrap">While stocks last</span>
          <Button className="bg-white text-red-600 hover:bg-slate-800 hover:text-white border-none px-6 py-2 font-barlow text-sm font-bold transition-all rounded-none">
            VIEW DEALS <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )

  // ── CATEGORIES ───────────────────────────────────────────────────────────────
  function Categories() {
    const cats = [
      {label:"Bathroom Vanities",emoji:"🪞",count:"1,200+ products"},{label:"Tapware",emoji:"🚿",count:"800+ products"},
      {label:"Basins",emoji:"🫙",count:"400+ products"},{label:"Showers",emoji:"🚿",count:"600+ products"},
      {label:"Baths",emoji:"🛁",count:"200+ products"},{label:"Toilets",emoji:"🚽",count:"300+ products"},
      {label:"Kitchen Sinks",emoji:"🫙",count:"250+ products"},{label:"Pool Supplies",emoji:"🏊",count:"500+ products"},
    ];
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="font-barlow text-xs font-bold tracking-widest uppercase text-blue-800 mb-2">Browse</p>
              <h2 className="font-roboto font-black text-3xl md:text-4xl text-slate-800 tracking-tight">Shop by Category</h2>
            </div>
            <a href="#" className="font-barlow text-sm text-blue-800 no-underline font-semibold">View all categories →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cats.map(({label,emoji,count})=>(
              <div key={label} className="bg-slate-50 rounded-lg overflow-hidden cursor-pointer border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="h-32 bg-gradient-to-br from-slate-800/5 to-blue-800/10 flex items-center justify-center text-5xl border-b border-slate-200">
                  {emoji}
                </div>
                <div className="p-4">
                  <div className="font-roboto font-bold text-sm text-slate-800 mb-1">{label}</div>
                  <div className="font-barlow text-xs text-slate-600">{count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // ── DUAL AUDIENCE ─────────────────────────────────────────────────────────────
  function DualAudience() {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-blue-800 rounded-xl p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-white/10"/>
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"/>
              <span className="text-4xl block mb-4">🔧</span>
              <p className="font-barlow text-xs font-bold tracking-widest uppercase text-white/50 mb-3">For Trade Professionals</p>
              <h3 className="font-roboto font-black text-3xl text-white tracking-tight leading-tight mb-4">
                Live Pricing.<br/>Fast Fulfillment.
              </h3>
              <p className="font-barlow text-sm text-white/70 leading-relaxed mb-8">
                Exclusive trade accounts with live pricing, site-drop delivery, and counter service from people who know the job.
              </p>
              <ul className="list-none mb-8">
                {["Live trade pricing on login","Fast pick-ups & site-drop delivery","Locals who know the job"].map(i=>(
                  <li key={i} className="font-barlow text-sm text-white/75 mb-2 flex gap-2.5 items-center">
                    <span className="text-sky-300 font-bold">✓</span>{i}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-white text-slate-800 hover:bg-red-600 hover:text-white border-none px-6 py-3 font-barlow text-sm font-bold transition-all">
                  Open Trade Account
                </Button>
                <Button variant="outline" className="bg-transparent text-white/70 border border-white/25 hover:border-white/60 hover:text-white px-5 py-3 font-barlow text-sm transition-all">
                  Trade Login
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-12 relative overflow-hidden shadow-xl border border-slate-200">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 to-sky-300"/>
              <span className="text-4xl block mb-4">🏠</span>
              <p className="font-barlow text-xs font-bold tracking-widest uppercase text-blue-800 mb-3">For Homeowners & Designers</p>
              <h3 className="font-roboto font-black text-3xl text-slate-800 tracking-tight leading-tight mb-4">
                Design the Bathroom<br/>of Your Dreams.
              </h3>
              <p className="font-barlow text-sm text-slate-600 leading-relaxed mb-8">
                Browse 20,000+ products across 15 stunning showrooms. Friendly expert advice, no guesswork — just great results.
              </p>
              <ul className="list-none mb-8">
                {["Premium bathroom & kitchen brands","15 showrooms across Victoria","Friendly expert showroom advice","Installation-ready products"].map(i=>(
                  <li key={i} className="font-barlow text-sm text-slate-600 mb-2 flex gap-2.5 items-center">
                    <span className="text-blue-800 font-bold">✓</span>{i}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-slate-800 text-white hover:bg-blue-800 border-none px-6 py-3 font-barlow text-sm font-bold transition-all">
                  Shop Bathrooms
                </Button>
                <Button variant="outline" className="bg-slate-50 text-slate-800 border-2 border-slate-800 hover:bg-slate-800 hover:text-white px-6 py-3 font-barlow text-sm font-semibold transition-all">
                  Find a Showroom
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ── APP SECTION ───────────────────────────────────────────────────────────────
  function AppSection() {
    return (
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5"/>
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 mb-5">
                <span className="text-base">📱</span>
                <span className="font-barlow text-xs font-bold text-white/75 tracking-widest uppercase">Burdens App for Trade</span>
              </div>
              <h2 className="font-roboto font-black text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
                Manage Orders<br/>On The Go
              </h2>
              <p className="font-barlow text-base text-white/60 leading-relaxed mb-8">
                Live pricing & stock · Order directly · Quick re-order
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-lg">
                {["Live pricing & real-time stock","Order directly from your phone","Quick re-order past purchases","Account & invoice management"].map(f=>(
                  <div key={f} className="flex gap-2 items-start">
                    <span className="text-sky-300 font-bold flex-shrink-0 mt-0.5">—</span>
                    <span className="font-barlow text-sm text-white/65 leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-red-600 hover:bg-red-700 text-white border-none px-6 py-3 font-barlow text-base font-bold flex items-center gap-2 transition-opacity hover:opacity-90 rounded-none">
                  <Apple size={18} /> Get iOS App
                </Button>
                <Button className="bg-blue-800 hover:bg-blue-900 text-white border-none px-6 py-3 font-barlow text-base font-bold flex items-center gap-2 transition-opacity hover:opacity-90 rounded-none">
                  <Download size={18} /> Get Android App
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-68 h-120 bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl border-4 border-white/10 shadow-2xl overflow-hidden flex flex-col -rotate-3">
                <div className="h-5 flex justify-center items-end pb-1">
                  <div className="w-16 h-3 bg-slate-900 rounded-md"/>
                </div>
                <div className="flex-1 p-2.5 flex flex-col gap-1.5">
                  <div className="bg-white/10 rounded-md p-2">
                    <div className="font-barlow text-xs text-white/35 mb-0.5 uppercase tracking-wide">Trade Account</div>
                    <div className="font-roboto text-xs font-bold text-white">Good morning, John</div>
                  </div>
                  {[["Orders","12"],["Pending","3"],["Credit","$4,200"]].map(([l,v])=>(
                    <div key={l} className="bg-white/5 rounded-md p-1.5 flex justify-between items-center">
                      <span className="font-barlow text-xs text-white/40">{l}</span>
                      <span className="font-roboto text-sm font-bold text-sky-300">{v}</span>
                    </div>
                  ))}
                  <div className="bg-blue-800 rounded-md p-2 text-center">
                    <div className="font-roboto text-xs font-bold text-white">Quick Reorder</div>
                  </div>
                  {[1,2,3].map(i=>(
                    <div key={i} className="bg-white/5 rounded p-1.5 flex gap-1.5 items-center">
                      <div className="w-4 h-4 rounded bg-white/10"/>
                      <div className="flex-1">
                        <div className="w-2/3 h-1 bg-white/10 rounded mb-0.5"/>
                        <div className="w-1/2 h-0.5 bg-white/5 rounded"/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="flex gap-2 items-center">
                <div className="w-24 h-24 bg-white rounded-lg p-2 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-800 opacity-40 rounded" style={{
                    backgroundImage: "repeating-linear-gradient(0deg,#1e293b 0,#1e293b 3px,transparent 3px,transparent 6px),repeating-linear-gradient(90deg,#1e293b 0,#1e293b 3px,transparent 3px,transparent 6px)"
                  }}/>
                </div>
                <span className="font-barlow text-xs text-white/35">Scan to<br/>download</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ── SOCIAL PROOF ──────────────────────────────────────────────────────────────
  function SocialProof() {
    const reviews = [
      {text:"Needed urgent service regards plumbing supplies. Troy got the job done pronto. Best trade counter around.",name:"John M.",role:"Licensed Plumber"},
      {text:"Exceptional service from Scott. Went over and above to track down a delayed basin and kept me informed throughout.",name:"Sarah K.",role:"Interior Designer"},
      {text:"I've been using Burdens for years. Great range, competitive pricing, and the staff actually know what they're talking about.",name:"Harry D.",role:"Home Renovator"},
    ];
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-12">
            <div className="text-2xl text-amber-500 mb-2">★★★★★</div>
            <h2 className="font-roboto font-black text-3xl md:text-4xl text-slate-800 tracking-tight mb-2">
              Trusted by 12,000+ Customers
            </h2>
            <p className="font-barlow text-sm text-slate-600">4.9 stars from 111 verified reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map(({text,name,role})=>(
              <div key={name} className="bg-slate-50 rounded-lg p-8 border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="text-lg text-amber-500 mb-4">★★★★★</div>
                <p className="font-barlow text-sm text-slate-600 leading-relaxed italic mb-5">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-blue-800 flex items-center justify-center text-white font-roboto font-bold text-sm flex-shrink-0">
                    {name[0]}
                  </div>
                  <div>
                    <div className="font-roboto font-bold text-sm text-slate-800">{name}</div>
                    <div className="font-barlow text-xs text-slate-600 mt-0.5">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // ── INSTAGRAM CTA ─────────────────────────────────────────────────────────────
  function InstaCTA() {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between flex-wrap gap-6">
          <div>
            <h3 className="font-roboto font-black text-2xl md:text-3xl text-white tracking-tight mb-2">
              Follow @burdens for Daily Inspiration
            </h3>
            <p className="font-barlow text-sm text-white/70">
              Join 18,500+ bathroom renovators & trade professionals. Tag us to be featured.
            </p>
          </div>
          <Button className="bg-white text-slate-800 hover:bg-slate-800 hover:text-white border-none px-8 py-3.5 font-barlow text-base font-bold flex items-center gap-2.5 flex-shrink-0 transition-all">
            <Instagram size={18} /> Follow Now · 18.5K
          </Button>
        </div>
      </section>
    )
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
      <footer className="bg-slate-800 px-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            <div>
              <div className="font-roboto font-black text-2xl text-white tracking-tight mb-1">burdens</div>
              <div className="w-6 h-0.5 bg-red-600 mb-4"/>
              <p className="font-barlow text-xs text-white/40 leading-relaxed mb-4">
                263 Frankston-Dandenong Rd,<br/>Dandenong South, 3175 VIC<br/><br/>
                <PhoneIcon size={12} className="inline mr-1" /> 1300 202 010
              </p>
              <div className="flex gap-2.5">
                {[
                  {icon: Facebook, label: "Facebook"},
                  {icon: Instagram, label: "Instagram"},
                  {icon: Linkedin, label: "LinkedIn"},
                  {icon: Mail, label: "Email"}
                ].map(({icon: Icon, label},k)=>(
                  <div key={label} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer text-sm transition-colors hover:bg-white/20">
                    <Icon className="w-4 h-4 text-white/70 hover:text-white" />
                  </div>
                ))}
              </div>
            </div>
            {cols.map(({title,links})=>(
              <div key={title}>
                <h4 className="font-barlow font-semibold text-xs tracking-widest uppercase text-white/35 mb-4">{title}</h4>
                <ul className="list-none">
                  {links.map(l=>(
                    <li key={l} className="mb-2">
                      <a href="#" className="font-barlow text-sm text-white/45 no-underline transition-colors hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-6">
            <p className="font-barlow text-sm text-white/40">
              Sign up for the latest products, sales, and limited offers from Burdens.
            </p>
            <div className="flex gap-0 max-w-xs">
              <input placeholder="Your email address" className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 border-r-0 text-white font-barlow text-sm outline-none placeholder-white/40 rounded-l-md"/>
              <Button className="bg-red-600 hover:bg-red-700 text-white border-none px-5 py-2.5 font-barlow text-sm font-bold flex-shrink-0 transition-opacity hover:opacity-90 rounded-r-md">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="border-t border-white/10 pt-5 flex justify-between items-center flex-wrap gap-3">
            <p className="font-barlow text-xs text-white/25"> 2026 Burdens Plumbing · Powered by Shopify · All rights reserved.</p>
            <div className="flex gap-3">
              {["Privacy Policy","Terms of Use","Returns Policy"].map(l=>(
                <a key={l} href="#" className="font-barlow text-xs text-white/25 no-underline transition-colors hover:text-white/50">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <div className="min-h-screen bg-white font-barlow">
      <NavBar />
      <Hero />
      <DealsBanner />
      <Categories />
      <DualAudience />
      <AppSection />
      <SocialProof />
      <InstaCTA />
      <Footer />
    </div>
  )
}

export default HomeDesign01

