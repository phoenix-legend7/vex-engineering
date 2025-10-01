"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import projectImage1 from "@/assets/projects/1.jpg";
import projectImage2 from "@/assets/projects/2.jpg";
import projectImage3 from "@/assets/projects/3.jpg";
import projectImage4 from "@/assets/projects/4.jpg";
import projectImage5 from "@/assets/projects/5.jpg";
import projectImage6 from "@/assets/projects/6.jpg";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projects = [
    {
      id: 1,
      title: "Civil Engineering - Drainage System",
      category: "Infrastructure",
      location: "Raleigh, NC",
      year: "2023",
      image: projectImage1,
      description: "Designed and installed an efficient drainage system to manage stormwater and prevent flooding. Included grading, pipe network design, and retention solutions to ensure long-term functionality.",
      tags: ["Drainage Design", "Stormwater Management", "Sustainable Infrastructure"],
      client: {
        name: "City of Raleigh",
        // link: "https://example.com",
      }
    },
    {
      id: 2,
      title: "Modern Residential Apartment",
      category: "Residential",
      location: "Las Vegas, NV",
      year: "2023",
      image: projectImage2,
      description: "Constructed a contemporary 3-floor apartment building with 12 residential units, featuring structural design, interior finishes, and integrated MEP systems. Emphasis on natural light, energy efficiency, and resident comfort.",
      tags: ["Multi-Family Housing", "Energy Efficient Design", "Structural Engineering"],
      client: {
        name: "Private Developer",
        // link: "https://example.com",
      }
    },
    {
      id: 3,
      title: "Luxury Residential House",
      category: "Residential",
      location: "Los Angeles, CA",
      year: "2022",
      image: projectImage3,
      description: "Developed a high-end single-family home with modern architectural aesthetics, reinforced concrete framing, and sustainable landscaping. Combined style with functionality and structural integrity.",
      tags: ["Luxury Homes", "Concrete Framing", "Sustainable Design"],
      client: {
        name: "Private Client",
        // link: "https://example.com",
      }
    },
    {
      id: 4,
      title: "Integrated HVAC System",
      category: "Mechanical Systems",
      location: "Miami, FL",
      year: "2022",
      image: projectImage4,
      description: "Installed a state-of-the-art HVAC system in a mixed-use facility, covering ductwork, climate control optimization, and integration with building automation systems. Focused on energy efficiency and occupant comfort.",
      tags: ["HVAC Engineering", "Building Automation", "Energy Efficiency"],
      client: {
        name: "Commercial Facility Owner",
        // link: "https://example.com",
      }
    },
    {
      id: 5,
      title: "Commercial Building Development",
      category: "Commercial",
      location: "Houston, TX",
      year: "2023",
      image: projectImage5,
      description: "Constructed a modern commercial building suitable for offices and retail. Included structural design, MEP coordination, façade work, and interior finishing, ensuring durability and safety compliance.",
      tags: ["Commercial Construction", "MEP Coordination", "Façade Design"],
      client: {
        name: "Real Estate Developer",
        // link: "https://example.com",
      }
    },
    {
      id: 6,
      title: "Full Permit Plan Set with Engineer’s Stamp",
      category: "Engineering & Documentation",
      location: "New York, NY",
      year: "2023",
      image: projectImage6,
      description: "Developed complete permit-ready construction plans including architectural layouts, structural drawings, MEP schematics, and site plans. Reviewed and stamped by a licensed engineer to ensure compliance.",
      tags: ["Permit Documentation", "Structural Engineering", "Code Compliance"],
      client: {
        name: "Residential/Commercial Developer",
        link: undefined,
        // link: "https://example.com",
      }
    }
  ];

  const categories = ["All", "Infrastructure", "Commercial", "Transportation", "Educational", "Residential"];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="mb-2"
                onClick={() => setSelectedCategory(category)}
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
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-hover transition-all duration-300 overflow-hidden animate-scale-in">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
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
                    {!!project.client.name && (
                      <span className="text-sm text-muted-foreground">
                        {project.client.name}
                      </span>
                    )}
                    {!!project.client.link && (
                      <Button onClick={() => window.open(project.client.link, "_blank")} variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
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
            Ready to see your engineering project come to life? Let&apos;s discuss how we can help you achieve your goals.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">Get Project Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
