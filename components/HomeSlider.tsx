'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import type {Project} from '../lib/projects';
export default function HomeSlider({projects}:{projects:Project[]}){
 const [active,setActive]=useState(0);
 useEffect(()=>{if(projects.length<2)return;const id=window.setInterval(()=>setActive(i=>(i+1)%projects.length),3000);return()=>window.clearInterval(id)},[projects.length]);
 return <section className="ah-home-carousel" aria-label="Featured projects" aria-roledescription="carousel"><div className="ah-slides">{projects.map((project,i)=><Link href={`/projects/${project.slug}`} key={project.slug} className="ah-slide" style={{transform:`translateX(${(i-active)*100}%)`}} aria-label={`View ${project.title}`} aria-hidden={i!==active} tabIndex={i===active?0:-1}><img src={project.cover} alt={`Architectural portfolio placeholder for ${project.title}`} loading={i<2?'eager':'lazy'}/></Link>)}</div></section>
}
