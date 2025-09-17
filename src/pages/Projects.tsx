import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import bridgeImage from "@/assets/project-bridge.jpg";
import buildingImage from "@/assets/project-building.jpg";
import highwayImage from "@/assets/project-highway.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Metropolitan Bridge Reconstruction",
      category: "Infrastructure",
      location: "Tech City, TC",
      year: "2023",
      image: bridgeImage,
      description: "Complete reconstruction of a 2,400-foot steel and concrete bridge including seismic retrofitting and modern safety features.",
      tags: ["Bridge Design", "Seismic Engineering", "Steel Structures"],
      client: "City of Tech City"
    },
    {
      id: 2,
      title: "Corporate Headquarters Complex",
      category: "Commercial",
      location: "Business District, TC",
      year: "2023",
      image: buildingImage,
      description: "25-story mixed-use complex featuring advanced structural systems and sustainable design elements.",
      tags: ["High-Rise", "Sustainable Design", "Concrete Structures"],
      client: "TechCorp Industries"
    },
    {
      id: 3,
      title: "Interstate Highway Expansion",
      category: "Transportation",
      location: "Regional Corridor",
      year: "2022",
      image: highwayImage,
      description: "Multi-phase highway expansion project including new overpasses, retaining walls, and drainage systems.",
      tags: ["Highway Engineering", "Drainage Design", "Traffic Infrastructure"],
      client: "State Department of Transportation"
    },
    {
      id: 4,
      title: "University Research Facility",
      category: "Educational",
      location: "University Campus, TC",
      year: "2022",
      image: buildingImage,
      description: "State-of-the-art research facility with specialized laboratory requirements and advanced HVAC systems.",
      tags: ["Laboratory Design", "Specialized Structures", "Research Facilities"],
      client: "Tech City University"
    },
    {
      id: 5,
      title: "Residential Tower Development",
      category: "Residential",
      location: "Downtown District, TC",
      year: "2021",
      image: buildingImage,
      description: "35-story residential tower with underground parking and integrated retail spaces.",
      tags: ["Residential Design", "Underground Structures", "Mixed-Use"],
      client: "Metro Development Group"
    },
    {
      id: 6,
      title: "Water Treatment Plant Upgrade",
      category: "Infrastructure",
      location: "Industrial Zone, TC",
      year: "2021",
      image: highwayImage,
      description: "Comprehensive upgrade of municipal water treatment facilities including new filtration systems.",
      tags: ["Water Infrastructure", "Environmental Engineering", "Industrial Facilities"],
      client: "Tech City Water Authority"
    }
  ];

  const categories = ["All", "Infrastructure", "Commercial", "Transportation", "Educational", "Residential"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Showcasing our engineering excellence through successful projects across various sectors. 
            Each project represents our commitment to innovation, quality, and client satisfaction.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-hover transition-all duration-300 overflow-hidden animate-scale-in">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 2} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {project.client}
                    </span>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Measuring success through completed projects and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "$2.5B", label: "Total Project Value" },
              { number: "15+", label: "Years of Excellence" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Next Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to see your engineering project come to life? Let's discuss how we can help you achieve your goals.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Get Project Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;