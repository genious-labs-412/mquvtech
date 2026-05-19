import { Mail, Phone, MapPin } from 'lucide-react';

export const contactCards = [
  {
    id: 1,
    title: 'Email Us',
    value: 'connect@mquvtech.com',
    icon: Mail,
    link: 'mailto:connect@mquvtech.com',
  },
  {
    id: 2,
    title: 'Call Us',
    value: '8851053251',
    icon: Phone,
    link: 'tel:8851053251',
  },
  {
    id: 3,
    title: 'Our Office',
    value: 'Head Office, Greater Noida, India',
    icon: MapPin,
    link: 'https://www.google.com/maps/search/?api=1&query=Greater+Noida,+India',
  },
];

export const services = [
  'Digital Transformation',
  'Mobile App Development',
  'Enterprise Web Application',
  'Business Automation / AI',
  'Cloud Architecture',
];

export const budgets = [
  '$10k - $25k',
  '$25k - $50k',
  '$50k - $100k',
  '$100k+',
];

export const timelines = [
  '1 - 3 Months',
  '3 - 6 Months',
  '6+ Months',
];