import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Calculator, 
  Shield, 
  Wrench, 
  FileCheck, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Structural Design",
      description: "Comprehensive structural engineering for buildings, bridges, and infrastructure projects.",
      features: [
        "Seismic and wind load analysis",
        "Foundation design and analysis",
        "Steel and concrete structure design",
        "Structural rehabilitation and retrofitting"
      ]
    },
    {
      icon: Calculator,
      title: "Structural Analysis",
      description: "Advanced computational analysis and modeling for complex engineering challenges.",
      features: [
        "Finite element analysis (FEA)",
        "Dynamic and static analysis",
        "Load path analysis",
        "Performance-based design"
      ]
    },
    {
      icon: Shield,
      title: "Safety & Risk Assessment",
      description: "Comprehensive safety evaluations and risk mitigation strategies for construction projects.",
      features: [
        "Structural health monitoring",
        "Risk assessment and analysis",
        "Safety protocol development",
        "Code compliance verification"
      ]
    },
    {
      icon: Wrench,
      title: "Construction Support",
      description: "On-site engineering support throughout the construction process.",
      features: [
        "Construction administration",
        "Quality control and inspection",
        "Shop drawing review",
        "Field engineering support"
      ]
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Ensuring all projects meet local, state, and federal regulatory requirements.",
      features: [
        "Building code compliance",
        "Permit assistance and support",
        "Environmental impact assessment",
        "Regulatory documentation"
      ]
    },
    {
      icon: Users,
      title: "Project Management",
      description: "End-to-end project management services ensuring timely and budget-conscious delivery.",
      features: [
        "Project planning and scheduling",
        "Resource allocation and management",
        "Stakeholder coordination",
        "Quality assurance programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Comprehensive civil engineering solutions tailored to meet the unique requirements 
            of your project, from initial concept to final completion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 animate-scale-in">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to delivering exceptional engineering solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your project requirements and objectives" },
              { step: "02", title: "Design", description: "Creating innovative solutions tailored to your needs" },
              { step: "03", title: "Development", description: "Detailed engineering and comprehensive documentation" },
              { step: "04", title: "Delivery", description: "Implementation support and ongoing project assistance" }
            ].map((phase, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how our engineering expertise can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;