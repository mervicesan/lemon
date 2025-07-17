import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Clock, 
  MapPin,
  Phone,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Customers" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Emergency Service" },
    { icon: MapPin, number: "50+", label: "Mile Service Radius" }
  ];

  const certifications = [
    "Auto Glass Safety Council Certified",
    "Insurance Approved Contractor", 
    "Nebraska State Licensed",
    "OSHA Safety Compliant"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Omaha Auto Glass Repair
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your trusted local auto glass experts, committed to providing exceptional 
              service and quality repairs throughout the Omaha area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <div className="mb-6">
                <Badge className="bg-primary/10 text-primary mb-4">
                  Locally Owned & Operated
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Professional Auto Glass Services You Can Trust
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Omaha Auto Glass Repair, we understand that your vehicle's glass is crucial 