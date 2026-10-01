import ElectricalClient from './ElectricalClient';
import { createPageMetadata } from '../../seo';

export const metadata = createPageMetadata({
  title: 'Electrical & Electronic Engineering | Syntrad',
  description:
    'Syntrad delivers expert electrical and electronic engineering services across industrial and commercial systems — three-phase power, PCB diagnostics and electronic fault-finding.',
  path: '/engineering/electrical',
  keywords: [
    'Electrical engineering',
    'Electronic engineering',
    'PCB diagnostics',
    'Three-phase power',
    'Industrial electrical systems',
    'Commercial electrical services',
  ],
  image: 'https://www.syntradltd.co.uk/assets/homeMain.png',
});

export default function ElectricalPage() {
  return <ElectricalClient />;
}