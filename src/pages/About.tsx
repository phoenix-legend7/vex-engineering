import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every calculation, every design, every decision is made with engineering precision and attention to detail.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "We embrace cutting-edge technology and innovative solutions to solve complex engineering challenges.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to excellence drives us to exceed expectations in every project we undertake.",
    },
  ];

  const achievements = [
    "LEED Certified Engineers on staff",
    "ISO 9001:2015 Quality Management Certified",
    "Member of American Society of Civil Engineers (ASCE)",
    "Licensed in 12+ states across the country",
    "Over 500 successful projects completed",
    "Award-winning structural designs",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              About VEXEngineering
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Founded on the principles of engineering excellence, innovation, and client satisfaction, 
              VEXEngineering has been at the forefront of civil engineering solutions for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  VEXEngineering was founded in 2009 by a team of passionate civil engineers who shared 
                  a vision of transforming the infrastructure landscape through innovative design and 
                  sustainable engineering practices.
                </p>
                <p>
                  What started as a small consultancy has grown into a full-service civil engineering 
                  firm, serving clients across multiple states and sectors. Our growth has been driven 
                  by our unwavering commitment to quality, safety, and client satisfaction.
                </p>
                <p>
                  Today, we're proud to be recognized as industry leaders, combining traditional 
                  engineering principles with modern technology to deliver exceptional results for 
                  our clients.
                </p>
              </div>
            </div>
            <div className="bg-gradient-hero rounded-2xl p-8 text-white animate-scale-in">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-6">
                To provide innovative, sustainable, and cost-effective civil engineering solutions 
                that enhance communities and improve quality of life while maintaining the highest 
                standards of safety and environmental responsibility.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project and decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-hover transition-all duration-300 animate-scale-in">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Certifications & Achievements
              </h2>
              <p className="text-muted-foreground mb-8">
                Our credentials and achievements reflect our commitment to excellence 
                and professional standards in civil engineering.
              </p>
              <Button variant="default" asChild>
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
            <div className="animate-scale-in">
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to start your next engineering project? Our team is here to help turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;