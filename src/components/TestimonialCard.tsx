
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, role, company, image }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6 flex flex-col h-full">
        <Quote className="text-primary mb-4" size={32} />
        <p className="text-lg mb-6 flex-grow">{quote}</p>
        <div className="flex items-center mt-auto">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
