export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  badges: string[];
  benefits: { title: string; desc: string }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  areaSize: string;
  serviceType: string;
  location: string;
  notes: string;
}
