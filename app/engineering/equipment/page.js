import EquipmentClient from './EquipmentClient';
import { createPageMetadata } from '../../seo';

export const metadata = createPageMetadata({
  title: 'Specialist Equipment Engineering | Syntrad',
  description:
    'Syntrad designs, supports and enhances specialist equipment with deep technical expertise, advanced diagnostics and precision engineering for demanding environments.',
  path: '/engineering/equipment',
  keywords: [
    'Specialist equipment engineering',
    'Precision engineering',
    'Equipment diagnostics',
    'Industrial support',
    'Technical equipment maintenance',
    'Syntrad engineering',
  ],
  image: 'https://www.syntradltd.co.uk/assets/homeMain.png',
});

export default function EquipmentPage() {
  return <EquipmentClient />;
}