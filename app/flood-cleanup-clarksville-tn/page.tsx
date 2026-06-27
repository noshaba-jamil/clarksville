import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title:"Flood Cleanup Clarksville TN | Water Extraction | 60-Min Response | (931) 271-2350", description:"Professional flood cleanup in Clarksville TN. Industrial extraction, same-day service, structural drying. All insurance. Call (931) 271-2350.", alternates:{canonical:"/flood-cleanup-clarksville-tn"} };
export default function Page() {
  return (<>
    <PageHero eyebrow="Flood Cleanup & Water Extraction" title="Flood Cleanup & Water Extraction in Clarksville TN" subtitle="Professional flood cleanup in Clarksville TN. Industrial extraction, same-day service, structural drying. All insurance. Call (931) 271-2350." image="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1800&q=80" imageFocus="center 40%" breadcrumbs={[{label:"Flood Cleanup & Water Extraction in Clarksville TN"}]} stat1="60min" stat1Sub="Guaranteed Arrival" stat2="24/7" stat2Sub="Always Available"/>
    <style>{".sp{max-width:1240px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 300px;gap:48px;align-items:start} .sp-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#16A34A;margin-bottom:10px;display:block} .sp-h{font-family:var(--font-cormorant);font-size:clamp(22px,2.5vw,30px);font-weight:700;color:#09090B;margin-bottom:14px;letter-spacing:-0.4px;line-height:1.1} .sp-p{font-family:var(--font-inter);font-size:15px;line-height:1.78;color:#52525B;margin-bottom:14px} .sp-sb{display:flex;flex-direction:column;gap:18px;position:sticky;top:130px} .sp-sb-cta{background:#09090B;border-radius:10px;padding:26px} .sp-sb-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80;margin-bottom:8px} .sp-sb-n{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#fff;margin-bottom:4px;letter-spacing:-0.5px} .sp-sb-s{font-family:var(--font-inter);font-size:12px;color:rgba(255,255,255,.3);margin-bottom:18px} .sp-sb-b1{display:block;background:#22C55E;color:#09090B;padding:12px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:14px;text-align:center;margin-bottom:8px} .sp-sb-b1:hover{background:#16A34A} .sp-sb-b2{display:block;background:transparent;color:rgba(255,255,255,.45);padding:10px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-size:13px;font-weight:500;text-align:center;border:1px solid rgba(255,255,255,.09)} .sp-sb-b2:hover{border-color:rgba(255,255,255,.25);color:rgba(255,255,255,.75)} @media(max-width:1024px){.sp{grid-template-columns:1fr;padding:52px 20px}.sp-sb{position:static}}"}</style>
    <div style={{background:"#fff"}}>
      <div className="sp">
        <main>
          <span className="sp-ey">About This Service</span>
          <h2 className="sp-h">Flood Cleanup & Water Extraction in Clarksville TN</h2>
          <p className="sp-p">Professional flood cleanup in Clarksville TN. Industrial extraction, same-day service, structural drying. All insurance. Call (931) 271-2350. Our IICRC-certified Clarksville team responds within 60 minutes — 24 hours a day, 7 days a week. All insurance accepted including USAA for Fort Campbell military families.</p>
          <p className="sp-p">We handle the complete insurance process — documentation, adjuster communication, and direct billing. You pay only your deductible. Call (931) 271-2350 now for immediate response.</p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:24}}>
            <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:8,background:"#22C55E",color:"#09090B",padding:"13px 24px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontWeight:700,fontSize:14}}>📞 Call (931) 271-2350</a>
            <Link href="/contact" style={{display:"inline-flex",alignItems:"center",gap:8,background:"transparent",color:"#52525B",padding:"12px 20px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontWeight:500,fontSize:14,border:"1px solid #E4E4E7"}}>Free Assessment →</Link>
          </div>
          <nav style={{marginTop:40}} aria-label="Related services">
            <div style={{fontFamily:"var(--font-inter)",fontSize:10,fontWeight:600,letterSpacing:"2.5px",textTransform:"uppercase",color:"#16A34A",marginBottom:12}}>Related Services</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {[["Emergency Water Damage","/emergency-water-damage-clarksville-tn"],["Flood Cleanup","/flood-cleanup-clarksville-tn"],["Mold Remediation","/mold-remediation-clarksville-tn"],["Structural Drying","/structural-drying-clarksville-tn"],["Insurance Claims","/water-damage-insurance-claim-clarksville-tn"]].map(([l,h])=>(
                <Link key={h} href={h} style={{fontFamily:"var(--font-inter)",fontSize:13,fontWeight:500,color:"#16A34A",textDecoration:"none",background:"#F0FDF4",border:"1px solid #BBF7D0",padding:"6px 14px",borderRadius:100}}>{l}</Link>
              ))}
            </div>
          </nav>
        </main>
        <aside className="sp-sb" aria-label="Contact sidebar">
          <div className="sp-sb-cta"><div className="sp-sb-ey">Emergency Line</div><div className="sp-sb-n">(931) 271-2350</div><div className="sp-sb-s">Answered in 60 seconds · 24/7/365</div><a href="tel:+19312712350" className="sp-sb-b1">📞 Call Now</a><Link href="/contact" className="sp-sb-b2">Free Assessment →</Link></div>
        </aside>
      </div>
    </div>
    <div style={{background:"#09090B",padding:"72px 40px",textAlign:"center"}}>
      <h2 style={{fontFamily:"var(--font-cormorant)",fontSize:"clamp(26px,4vw,44px)",fontWeight:700,color:"#fff",marginBottom:14,letterSpacing:-1}}>Ready to Help in Clarksville TN</h2>
      <p style={{fontFamily:"var(--font-inter)",fontSize:15,color:"rgba(255,255,255,.5)",marginBottom:28,maxWidth:480,margin:"0 auto 28px",lineHeight:1.7}}>60-minute response guaranteed. All insurance accepted. Free inspection and assessment.</p>
      <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:9,background:"#22C55E",color:"#09090B",padding:"14px 32px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:16,fontWeight:700}}>📞 (931) 271-2350</a>
    </div>
  </>);
}
