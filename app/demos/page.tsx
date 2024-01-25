import Link from 'next/link';

import { DEMOS } from '@/lib/config';

export default function Demos() {
  return (
    <div className="grid">
      {DEMOS.map((demo) => (
        <div key={demo.slug} className={`${demo.cssClass} margin-bottom-1 padding-1`}>
          <h2>{demo.title}</h2>
          <p>
            {demo.description}
          </p>
          <Link className="button" href={`.${demo.slug}`}>See it</Link>
        </div>
      ))}
    </div>
  )
}
