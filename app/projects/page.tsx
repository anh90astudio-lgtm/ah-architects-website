import Link from 'next/link';
import {projects} from '../../lib/projects';
export const metadata={title:'Projects'};
export default function Projects(){return <main className="ah-projects"><section className="ah-project-list" aria-label="Projects">{projects.map((p,i)=><Link href={`/projects/${p.slug}`} className="ah-project-item" key={p.slug}><div className="ah-project-image"><img src={p.cover} alt={`${p.title} — placeholder image`} loading={i<2?'eager':'lazy'}/></div><div className="ah-project-meta"><h2>{p.title}</h2><p>{p.location.toUpperCase()} <span aria-hidden="true">|</span> {p.year}</p></div></Link>)}</section></main>}
