import Link from 'next/link';
import ProjectCredits from '../../../components/ProjectCredits';
import {notFound} from 'next/navigation';
import {projects,getProject} from '../../../lib/projects';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=getProject(slug); if(!p)notFound();
 const index=projects.findIndex(x=>x.slug===slug); const next=projects[(index+1)%projects.length];
 return <article className="editorial-project">
  <div className="editorial-hero"><img src={p.images[0]} alt={`${p.title} — placeholder hero photograph`}/></div>
  <div className="editorial-title editorial-title--standalone"><h1>{p.title.toLocaleLowerCase('en-US').replace(/(^|[\s’\-])([a-z])/g, (_m, prefix, letter) => prefix + letter.toUpperCase())}</h1><p>{p.category.split('/')[0].trim().toUpperCase()}</p></div>
  <section className="editorial-mobile-facts" aria-label="Project information"><dl>
   <div><dt>LOCATION</dt><dd>{p.location}</dd></div>
   <div><dt>LAND</dt><dd>—</dd></div>
   <div><dt>TYPE</dt><dd>{p.category.split('/')[0].trim()}</dd></div>
   <div><dt>COMPLETION</dt><dd>{p.year}</dd></div>
   <div><dt>SIZE</dt><dd>{p.area}</dd></div>
  </dl></section>
  <div className="editorial-intro-grid">
   <div className="editorial-primary">
    <p className="editorial-lead">{p.description}</p>
    <p className="editorial-body">Located in {p.location}, {p.title} is an exploration of the relationship between people, place and the everyday experience of architecture. The project considers natural light, spatial connections and the expressive potential of materials.</p>
    <figure className="editorial-feature-image"><img src={p.images[1]??p.images[0]} alt={`${p.title} — project image`} loading="lazy"/></figure>
   </div>
   <aside className="editorial-facts" aria-label="Project facts"><dl>
    <div><dt>Location</dt><dd>{p.location}</dd></div><div><dt>Year</dt><dd>{p.year}</dd></div><div><dt>Site Area</dt><dd>{p.area}</dd></div>
    <div className="fact-divider"><dt>Design Team</dt><dd>A+H Architects</dd></div><div><dt>Collaborators</dt><dd>—</dd></div><div><dt>Structural Engineer</dt><dd>—</dd></div><div><dt>MEP Engineer</dt><dd>—</dd></div><div><dt>Landscape</dt><dd>—</dd></div><div><dt>Photography</dt><dd>—</dd></div>
   </dl></aside>
  </div>
  <section className="editorial-lower" aria-label="Project story and gallery">
   <div className="editorial-quote-row"><blockquote className="editorial-quote"><p>“{p.quote??'Architecture is experienced through the quiet relationship between light, material and everyday life.'}”</p><cite>{p.quoteAuthor??'A+H Architects'}</cite></blockquote><figure><img src={p.images[0]} alt={`${p.title} — detail photograph`} loading="lazy"/></figure></div>
   <div className="editorial-gallery">{p.images.slice(1).map((src,i)=><figure key={`${src}-${i}`}><img src={src} alt={`${p.title} — photograph ${i+2}`} loading="lazy"/></figure>)}</div>
   <p className="editorial-image-note">Project photography and drawings shown here are placeholders pending the studio’s final assets.</p>
   <ProjectCredits project={p}/>
  </section>
  <div className="editorial-next"><span>NEXT PROJECT</span><Link href={`/projects/${next.slug}`}>{next.title} <span aria-hidden="true">↗</span></Link></div>
 </article>
}
