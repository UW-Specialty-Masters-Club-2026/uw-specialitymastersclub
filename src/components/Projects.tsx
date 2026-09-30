import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

const Projects = () => {
  const { data } = useWordPressHomepageQuery();
  const projects = data?.projects || [];
  return <section id="projects" className="section-container bg-card">
    <div className="text-center mb-16 slide-up"><h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">AI Projects Showcase & Past Events</h2><div className="w-24 h-1 bg-gold mx-auto" /></div>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">{projects.map((project) => <Card key={project.title} className="card-hover border-2 border-lavender bg-background slide-up overflow-hidden"><div className="h-64 overflow-hidden">{project.image && <img src={project.image} alt={project.title} className="w-full h-full object-cover" />}</div><CardHeader><div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Shield className="h-8 w-8 text-primary" /></div><CardTitle className="text-primary text-2xl">{project.title}</CardTitle><p className="text-muted-foreground">{project.location}</p></CardHeader><CardContent><p className="text-foreground">{project.description}</p></CardContent></Card>)}</div>
  </section>;
};

export default Projects;
