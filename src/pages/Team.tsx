import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Principal Engineer & Founder",
      education: "Ph.D. Structural Engineering, MIT",
      experience: "20+ years",
      specialization: "Seismic Design, High-Rise Structures",
      certifications: ["P.E.", "S.E.", "LEED AP"],
      bio: "Dr. Mitchell founded VEXEngineering with a vision to transform infrastructure through innovative engineering solutions. Her expertise in seismic design has been instrumental in numerous landmark projects.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      title: "Director of Operations",
      education: "M.S. Civil Engineering, Stanford",
      experience: "18+ years",
      specialization: "Project Management, Construction Administration",
      certifications: ["P.E.", "PMP", "OSHA 30"],
      bio: "Michael oversees all operational aspects of our projects, ensuring timely delivery and exceptional quality standards. His leadership has been key to our consistent client satisfaction.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Senior Structural Engineer",
      education: "Ph.D. Earthquake Engineering, UC Berkeley",
      experience: "15+ years",
      specialization: "Bridge Design, Seismic Retrofitting",
      certifications: ["P.E.", "S.E.", "Bridge Inspector"],
      bio: "Dr. Rodriguez specializes in complex bridge engineering and seismic retrofitting projects. Her innovative approaches have earned recognition from the engineering community.",
      image: "/api/placeholder/300/300"
    }
  ];

  const engineers = [
    {
      name: "James Thompson",
      title: "Senior Civil Engineer",
      specialization: "Transportation Infrastructure",
      certifications: ["P.E.", "PTOE"],
      experience: "12+ years"
    },
    {
      name: "Lisa Park",
      title: "Structural Engineer",
      specialization: "Commercial Buildings",
      certifications: ["P.E.", "LEED Green Associate"],
      experience: "8+ years"
    },
    {
      name: "David Kumar",
      title: "Project Engineer",
      specialization: "Residential Structures",
      certifications: ["E.I.T.", "CAD Certified"],
      experience: "5+ years"
    },
    {
      name: "Rachel Adams",
      title: "Environmental Engineer",
      specialization: "Sustainability & Compliance",
      certifications: ["P.E.", "LEED AP", "CEM"],
      experience: "10+ years"
    },
    {
      name: "Mark Wilson",
      title: "Geotechnical Engineer",
      specialization: "Foundation Design",
      certifications: ["P.E.", "G.E."],
      experience: "14+ years"
    },
    {
      name: "Anna Kowalski",
      title: "Design Engineer",
      specialization: "CAD/BIM Modeling",
      certifications: ["AutoCAD Certified", "Revit Professional"],
      experience: "6+ years"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our Expert Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Meet the experienced engineers and professionals who bring innovation, 
            expertise, and dedication to every project we undertake.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Guiding VEXEngineering with decades of combined experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 animate-scale-in">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.title}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      {member.education}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Award className="h-4 w-4 mr-2" />
                      {member.experience}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {member.certifications.map((cert, certIndex) => (
                      <Badge key={certIndex} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    <strong>Specialization:</strong> {member.specialization}
                  </p>

                  <p className="text-sm text-muted-foreground mb-6">
                    {member.bio}
                  </p>

                  <div className="flex justify-center space-x-3">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Engineering Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Talented professionals driving innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineers.map((engineer, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 animate-scale-in">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary text-xl font-bold">
                      {engineer.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {engineer.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {engineer.title}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Focus:</strong> {engineer.specialization}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Experience:</strong> {engineer.experience}
                    </p>

                    <div className="flex flex-wrap justify-center gap-1">
                      {engineer.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Team Excellence
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to professional growth and expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Team Members" },
              { number: "95%", label: "Licensed Engineers" },
              { number: "200+", label: "Years Combined Experience" },
              { number: "25+", label: "Professional Certifications" }
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
            Join Our Team
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented engineers and professionals to join our growing team. 
            Be part of building tomorrow's infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">View Open Positions</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Submit Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;