import Link from 'next/link';
import ProjectCredits from '../../../components/ProjectCredits';
import {notFound} from 'next/navigation';
import {projects,getProject} from '../../../lib/projects';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=getProject(slug);
  if(!p)notFound();
  const index=projects.findIndex(x=>x.slug===slug);
  const next=projects[(index+1)%projects.length];
  return <article className="editorial-project">
    <div className="editorial-hero"><img src={p.images[0]} alt={`${p.title} — project opening photograph`}/></div>
    <div className="editorial-title"><h1>{p.title}</h1><p>{p.category.toUpperCase()}</p></div>
    <section className="editorial-story" aria-label="Project story">
      <div className="editorial-story-inner">
        <p className="editorial-lead">{p.description}</p>
        <p className="editorial-body">Located in {p.location}, {p.title} is an exploration of the relationship between people, place and the everyday experience of architecture. The project considers natural light, spatial connections and the expressive potential of materials.</p>
        <p className="editorial-body">Rather than imposing a fixed visual language, the design seeks an atmosphere shaped by context, use and time. Materials are chosen for their tactile character and the ways in which they respond to light and daily life.</p>
        <dl className="editorial-credits"><div><dt>Location</dt><dd>{p.location}</dd></div><div><dt>Year</dt><dd>{p.year}</dd></div><div><dt>Area</dt><dd>{p.area}</dd></div><div><dt>Type</dt><dd>{p.category}</dd></div></dl>
        <div className="editorial-gallery">
          {p.images.slice(1).map((src,i)=><figure className={i%3===0?'gallery-portrait':'gallery-landscape'} key={`${src}-${i}`}><img src={src} alt={`${p.title} — photograph ${i+2}`} loading="lazy"/></figure>)}
          <blockquote className="editorial-quote"><p>“{p.quote ?? 'Architecture is shaped by the dialogue between everyday life, light and material.'}”</p><cite>{p.quoteAuthor ?? 'A+H Architects'}</cite></blockquote>
          <figure className="gallery-portrait"><img src={p.images[0]} alt={`${p.title} — additional project view`} loading="lazy"/></figure>
          <div className="editorial-drawing"><span>ARCHITECTURAL DRAWINGS</span><p>Plans, sections and details will be published when project documentation is available.</p></div>
        </div>
        <ProjectCredits project={p}/>
        <p className="editorial-image-note">Additional photographs and architectural drawings can be added here through the future CMS.</p>
      </div>
    </section>
    <div className="editorial-next"><span>NEXT PROJECT</span><Link href={`/projects/${next.slug}`}>{next.title} <span aria-hidden="true">↗</span></Link></div>
  </article>
}
