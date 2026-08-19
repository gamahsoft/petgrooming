'use client'

import Image from 'next/image'
import { useState } from 'react'

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(54)

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-lg border bg-card shadow-sm">
      <Image
        src="/images/after-groom.svg"
        alt="Dog after a full groom"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
        <div className="relative h-full" style={{ width: `${10000 / position}%` }}>
          <Image
            src="/images/before-groom.svg"
            alt="Dog before grooming"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-x-4 top-4 flex justify-between text-xs font-semibold uppercase tracking-widest text-white">
        <span className="rounded bg-foreground/70 px-2 py-1">Before</span>
        <span className="rounded bg-primary/90 px-2 py-1">After</span>
      </div>
      <input
        aria-label="Compare before and after groom"
        type="range"
        min="8"
        max="92"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-x-4 bottom-5 accent-accent"
      />
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow"
        style={{ left: `${position}%` }}
      />
    </div>
  )
}
