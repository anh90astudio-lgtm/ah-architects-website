'use client';
import {useEffect,useState} from 'react';import Link from 'next/link';import type {Project} from '../lib/projects';
export default function HomeSlider({projects}:{projects:Project[]}){
 const [active,setActive]=useState(0);useEffect(()=>{const id=window.setInterval(()=>setActive(i=>(i+1)%projects.length),6500);return()=>clearInterval(id)},[projects.length]);
 const go=(d:number)=>setActive(i=>(i+d+projects.length)%projects.length);
 return <main className="home-stage"><div className="home-photo-frame">{projects.map((p,i)=><Link key={p.slug} href={`/projects/${p.slug}`} className={`home-photo ${i===active?'visible':''}`} aria-hidden={i!==active} tabIndex={i===active?0:-1}><img src={p.cover} alt={p.title}/></Link>)}
 <div className="home-caption"><h1>Architecture<br/>for a Life in Place</h1><p>We create places rooted in context, material and everyday life, where architecture, people and nature live in balance.</p><Link href="/projects">View projects <span>→</span></Link></div>
 <div className="home-counter">{String(active+1).padStart(2,'0')} <span/> {String(projects.length).padStart(2,'0')}</div>
 <div className="home-bottom"><div className="home-progress">{projects.map((p,i)=><button aria-label={`Go to slide ${i+1}`} key={p.slug} className={i===active?'selected':''} onClick={()=>setActive(i)}/>)}</div><div className="home-arrows"><button onClick={()=>go(-1)} aria-label="Previous">←</button><button onClick={()=>go(1)} aria-label="Next">→</button></div></div></div></main>
}
