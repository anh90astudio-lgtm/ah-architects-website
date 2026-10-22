import type {Project} from '../lib/projects';
export default function ProjectCredits({project}:{project:Project}){
 const url=`https://aharchitects.example/projects/${project.slug}`; // Replace with production domain before publishing.
 const share=[{label:'Facebook',href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`},{label:'LinkedIn',href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`},{label:'X',href:`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`},{label:'E-mail',href:`mailto:?subject=${encodeURIComponent(project.title)}&body=${encodeURIComponent(url)}`}];
 return <section className="project-credits" aria-label="Project credits">
  <div className="project-share"><h2>SHARE</h2>{share.map(x=><a key={x.label} href={x.href} target={x.label==='E-mail'?undefined:'_blank'} rel="noopener noreferrer">{x.label}</a>)}</div>
  <div className="credit-section"><h2>PROJECT INFORMATION</h2><div className="credit-entry"><strong>{project.title}</strong><span>{project.category}</span></div><div className="credit-entry"><strong>Location</strong><span>{project.location}</span></div><div className="credit-entry"><strong>Year</strong><span>{project.year}</span></div><div className="credit-entry"><strong>Area</strong><span>{project.area}</span></div></div>
  <div className="credit-section"><h2>DESIGN TEAM</h2><div className="credit-entry"><strong>A+H Architects</strong><span>Architecture &amp; Interior Design</span></div><p className="credits-note">Individual team members will be added when confirmed.</p></div>
  <div className="credit-section"><h2>COLLABORATORS</h2><p className="credits-note">Consultants, contractors and photography credits will be published when available.</p></div>
 </section>;
}
