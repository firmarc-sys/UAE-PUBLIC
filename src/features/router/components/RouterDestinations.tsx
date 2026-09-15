'use client';

import Link from 'next/link';
import {
  Aperture,
  ArrowUpRight,
  Code2,
  Globe2,
  Infinity,
  Pencil,
} from 'lucide-react';
import { EXPERIENCE_CATALOG } from '@/shared/constants/experiences';

const ICONS = {
  interweb: Globe2,
  augment: Infinity,
  code: Code2,
  scribe: Pencil,
  optics: Aperture,
};

export default function RouterDestinations() {
  const destinations = EXPERIENCE_CATALOG.filter((experience) =>
    ['interweb', 'augment', 'code', 'scribe', 'optics'].includes(experience.id),
  );

  return (
    <section className="router-destinations" aria-label="Explore UAE">
      <header className="router-destinations-header">
        <div>
          <span>Five destinations</span>
          <h2>Explore the Router</h2>
        </div>

        <small>One intention. The right workspace.</small>
      </header>

      <div className="router-destination-list">
        {destinations.map((destination) => {
          const Icon = ICONS[
            destination.id as keyof typeof ICONS
          ];

          return (
            <Link
              key={destination.id}
              href={destination.href}
              className="router-destination"
              aria-label={`${destination.label}: ${destination.tagline}`}
            >
              <span className="router-destination-icon">
                <Icon size={20} strokeWidth={1.45} />
              </span>

              <span className="router-destination-copy">
                <strong>{destination.label}</strong>
                <small>{destination.tagline}</small>
              </span>

              <ArrowUpRight size={18} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}