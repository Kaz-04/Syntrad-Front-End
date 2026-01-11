import AboutClient from "./AboutClient";

export const metadata = {
  title: 'About Us | Syntrad Services',
  description:
    'Learn more about Syntrad, our mission, expert repair services, and customer reviews.',
  keywords: [
    'Syntrad Services',
    'Electronic Repair',
    'Electrical Services',
    'Customer Reviews',
  ],
  authors: [{ name: 'Kaz Moorjani' }],
  openGraph: {
    title: 'About Us | Syntrad Services',
    description:
      'Delivering expert repair and maintenance solutions with customer satisfaction.',
    url: 'https://www.syntrad.com/about',
    images: ['/assets/about-banner.jpg'],
  },
};

export default function AboutPage() {
  return <AboutClient/>;
}