"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock, Send, AlertCircle } from "lucide-react";
import { projectTypes, projectTimelines, projectBudgetRanges } from "@/lib/constants";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  projectType?: string;
  timeline?: string;
  budget?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone);
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.trim().length < 2) return 'First name must be at least 2 characters';
        return undefined;
      
      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        if (value.trim().length < 2) return 'Last name must be at least 2 characters';
        return undefined;
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        return undefined;
      
      case 'phone':
        if (value && !validatePhone(value)) return 'Please enter a valid phone number';
        return undefined;
      
      case 'message':
        if (!value.trim()) return 'Project description is required';
        if (value.trim().length < 10) return 'Please provide more details about your project (at least 10 characters)';
        return undefined;
      case 'projectType':
        if (!value.trim()) return 'Project type is required';
        if (!projectTypes.some(pt => pt.value === value)) {
          return 'Please select a valid project type';
        }
        return undefined;

      case 'timeline':
        if (!value.trim()) return 'Project timeline is required';
        if (!projectTimelines.some(tl => tl.value === value)) {
          return 'Please select a valid timeline';
        }
        return undefined;

      case 'budget':
        if (!value.trim()) return 'Project budget is required';
        if (!projectBudgetRanges.some(b => b.value === value)) {
          return 'Please select a valid budget range';
        }
        return undefined;

      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'message', 'projectType', 'timeline', 'budget'];
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) {
        newErrors[field as keyof FormErrors] = error;
        isValid = false;
      }
    });

    // Validate optional fields
    if (formData.phone) {
      const phoneError = validateField('phone', formData.phone);
      if (phoneError) {
        newErrors.phone = phoneError;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (name: string) => {
    const error = validateField(name, formData[name as keyof FormData]);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors below before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
        });
        setErrors({});
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: [<a key="phone" href="tel:+13189484489">+1 (318) 948-4489</a>],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        <a key="email1" href="mailto:team@vexengineering.com">team@vexengineering.com</a>,
        <a key="email2" href="mailto:info@vexengineering.com">info@vexengineering.com</a>
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Ready to start your engineering project? We&apos;re here to help bring your vision to life. 
            Contact us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          name="firstName" 
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          onBlur={() => handleBlur('firstName')}
                          className={`mt-1 ${errors.firstName ? 'border-red-500 focus:border-red-500' : ''}`}
                        />
                        {errors.firstName && (
                          <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4" />
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          name="lastName" 
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          onBlur={() => handleBlur('lastName')}
                          className={`mt-1 ${errors.lastName ? 'border-red-500 focus:border-red-500' : ''}`}
                        />
                        {errors.lastName && (
                          <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4" />
                            {errors.lastName}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          className={`mt-1 ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                        />
                        {errors.email && (
                          <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4" />
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          className={`mt-1 ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                        />
                        {errors.phone && (
                          <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4" />
                            {errors.phone}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input 
                          id="company" 
                          name="company" 
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select 
                          name="projectType" 
                          value={formData.projectType}
                          onValueChange={(value) => handleInputChange('projectType', value)}
                        >
                          <SelectTrigger className={`mt-1 ${errors.projectType ? 'border-red-500 focus:border-red-500' : ''}`}>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem value={type.value} key={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.projectType && (
                          <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4" />
                            {errors.projectType}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="budget">Project Budget Range *</Label>
                      <Select 
                        name="budget" 
                        value={formData.budget}
                        onValueChange={(value) => handleInputChange('budget', value)}
                      >
                        <SelectTrigger className={`mt-1 ${errors.budget ? 'border-red-500 focus:border-red-500' : ''}`}>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectBudgetRanges.map((range) => (
                            <SelectItem value={range.value} key={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.budget && (
                        <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                          <AlertCircle className="h-4 w-4" />
                          {errors.budget}
                        </div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="timeline">Project Timeline *</Label>
                      <Select 
                        name="timeline" 
                        value={formData.timeline}
                        onValueChange={(value) => handleInputChange('timeline', value)}
                      >
                        <SelectTrigger className={`mt-1 ${errors.timeline ? 'border-red-500 focus:border-red-500' : ''}`}>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTimelines.map((timeline) => (
                            <SelectItem value={timeline.value} key={timeline.value}>
                              {timeline.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.timeline && (
                        <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                          <AlertCircle className="h-4 w-4" />
                          {errors.timeline}
                        </div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Project Description *</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        onBlur={() => handleBlur('message')}
                        className={`mt-1 min-h-[100px] ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                        placeholder="Please describe your project requirements, goals, and any specific challenges you're facing..."
                      />
                      {errors.message && (
                        <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                          <AlertCircle className="h-4 w-4" />
                          {errors.message}
                        </div>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Response Promise */}
              <Card className="bg-gradient-hero text-white animate-scale-in">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-white/90 text-sm">
                    We respond to all inquiries within 24 hours. For urgent matters, 
                    please call us directly during business hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
