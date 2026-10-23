'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useState} from 'react';
export default function Header(){
 const path=usePathname();const [open,setOpen]=useState(false);useEffect(()=>setOpen(false),[path]);
 const links=[['/projects','Projects'],['/practice','Practice'],['/about','About us']];
 return <header className={`site-header ${path==='/'?'on-home':''}`}>
 <Link className="site-logo" href="/">A+H ARCHITECTS</Link>
 {path==='/'&&<nav className="home-top-nav" aria-label="Primary navigation">{links.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}</nav>}
 <button className="site-menu-button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/><span/></button>
 {open&&<nav className="site-menu" aria-label="Site navigation">{links.map(([href,label])=><Link href={href} key={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>}
 </header>
}
