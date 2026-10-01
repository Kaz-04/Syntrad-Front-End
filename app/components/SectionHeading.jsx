import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SectionHeading({ title, action }) {
  return (
    <div className="flex items-end justify-between mb-2 gap-4">
      <h2 className="font-display text-3xl font-bold relative text-left pt-1.5 before:content-[''] before:absolute before:left-0 before:top-0 before:w-10 before:h-[2px] before:bg-red-600">
        {title}
      </h2>

      {action && (
        <Link
          href={action.href}
          className="text-red-500 text-sm font-medium inline-flex items-center gap-1 hover:text-red-400 transition-colors shrink-0 whitespace-nowrap"
        >
          {action.label}
          <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}