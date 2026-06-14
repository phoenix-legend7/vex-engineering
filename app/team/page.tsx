import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Award, GraduationCap, Phone } from "lucide-react";
import Image from "next/image";

export default function Team() {
  const leadership = [
    {
      name: "Dr. Michael Brian",
      title: "Principal Engineer & Founder",
      education: "Ph.D. Structural Engineering, MIT",
      experience: "20+ years",
      specialization: "Seismic Design, High-Rise Structures",
      certifications: ["P.E.", "S.E.", "LEED AP"],
      phone: "+1 (757) 979-3380",
      bio: "Dr. Brian founded VexEngineering with a vision to transform infrastructure through innovative engineering solutions. His expertise in seismic design has been instrumental in numerous landmark projects.",
      image: "/photos/Michael Brian.jpg"
    },
    {
      name: "Oleksandr Nalapko",
      title: "Professional Architect",
      education: "M.S. Architectural Engineering",
      experience: "18+ years",
      specialization: "Project Management, Construction Administration",
      certifications: ["P.E.", "PMP", "OSHA 30"],
      phone: "+380 9981 88207",
      bio: "Oleksandr oversees all operational aspects of our projects, ensuring timely delivery and exceptional quality standards. His leadership has been key to our consistent client satisfaction.",
      image: "/photos/Oleksandr Nalapko.jpg"
    },
    {
      name: "Richard Gordon",
      title: "Principal Architect",
      education: "M.Arch., Harvard Graduate School of Design",
      experience: "18+ years",
      specialization: "Sustainable Design, Mixed-Use Development",
      certifications: ["AIA", "LEED AP BD+C", "NCARB"],
      phone: "+1 (415) 462-4262",
      bio: "Richard brings visionary architectural design expertise to complex projects, specializing in sustainable and mixed-use developments. His innovative approach to design has earned multiple industry awards.",
      image: "/photos/Richard Gordon.jpg"
    },
  ];

  const engineers = [
    {
      name: "Michael Dutton",
      title: "Senior Civil Engineer",
      specialization: "Transportation Infrastructure",
      certifications: ["P.E.", "PTOE"],
      experience: "12+ years"
    },
    {
      name: "Jun Quan",
      title: "Structural Engineer",
      specialization: "Commercial Buildings",
      certifications: ["P.E.", "LEED Green Associate"],
      experience: "8+ years"
    },
    {
      name: "William Pontius",
      title: "Project Engineer",
      specialization: "Residential Structures",
      certifications: ["E.I.T.", "CAD Certified"],
      experience: "5+ years"
    },
    {
      name: "Michael Kampfe",
      title: "Mechanical Engineer",
      specialization: "HVAC & Plumbing",
      certifications: ["P.E.", "LEED AP", "CEM"],
      experience: "10+ years"
    },
    {
      name: "Robert Bush",
      title: "Professional Engineer",
      specialization: "Land Development / Foundation Design",
      certifications: ["P.E.", "L.S."],
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
              Guiding VexEngineering with decades of combined experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 animate-scale-in">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                    {member.image ? (
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-full" 
                      />
                    ) : (
                      <span className="text-primary text-3xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
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
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}>
                        {member.phone}
                      </a>
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
              { number: "11+", label: "Team Members" },
              { number: "95%", label: "Licensed Professionals" },
              { number: "120+", label: "Years Combined Experience" },
              { number: "28+", label: "Professional Certifications" }
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
    </div>
  );
}
