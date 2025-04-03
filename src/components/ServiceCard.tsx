
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <Card className="h-full transition-all hover:shadow-md border-none bg-gray-50">
      <CardHeader>
        <div className="mb-5">
          {icon}
        </div>
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base font-light">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" asChild className="group p-0 hover:bg-transparent">
          <Link to={link} className="flex items-center gap-2 text-primary">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
