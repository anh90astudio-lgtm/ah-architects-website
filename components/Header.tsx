'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
export default function Header(){
 const path=usePathname(); const [open,setOpen]=useState(false);
 const detail=path.startsWith('/projects/');
 const links=[['/projects','Projects'],['/practice','Practice'],['/studio','About us']];
 return <header className={`ah-header ${detail?'ah-header--detail':''} ${path==='/'?'ah-header--home':''}`}>
  <Link href="/" className="ah-wordmark" aria-label="A+H Architects — Home">A+H ARCHITECTS</Link>
  {detail?<button type="button" className="ah-hamburger" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="ah-nav" onClick={()=>setOpen(!open)}><span/><span/><span/></button>:null}
  <nav id="ah-nav" className={`ah-nav ${detail?(open?'ah-nav--open':'ah-nav--hidden'):''}`} aria-label="Main navigation">{links.map(([href,label])=><Link href={href} key={href} className={path===href?'active':''} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>
 </header>
}
