'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import type {Project} from '../lib/projects';
export default function HomeSlider({projects}:{projects:Project[]}){
 const [active,setActive]=useState(0);
 useEffect(()=>{if(projects.length<2)return;const id=window.setInterval(()=>setActive(i=>(i+1)%projects.length),3000);return()=>window.clearInterval(id)},[projects.length]);
 const go=(direction:number)=>setActive(i=>(i+direction+projects.length)%projects.length);
 return <section className="ah-home-carousel" aria-label="Featured projects" aria-roledescription="carousel">
  <div className="ah-slides">{projects.map((project,i)=><Link href={`/projects/${project.slug}`} key={project.slug} className={`ah-slide ${i===active?'is-active':''}`} aria-label={`View ${project.title}`} aria-hidden={i!==active} tabIndex={i===active?0:-1}><img src={project.cover} alt={`Placeholder image for ${project.title}`} loading={i<2?'eager':'lazy'}/></Link>)}</div>
  <div className="ah-slider-controls" aria-label="Slideshow controls"><button onClick={()=>go(-1)} aria-label="Previous slide">←</button><div className="ah-slider-dots">{projects.map((p,i)=><button key={p.slug} onClick={()=>setActive(i)} className={i===active?'active':''} aria-label={`Show slide ${i+1}`} aria-current={i===active?'true':undefined}/>)}</div><button onClick={()=>go(1)} aria-label="Next slide">→</button></div>
 </section>
}
