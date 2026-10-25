import React from "react";

export interface TestimonialItem {
  id: string | number;
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarUrl?: string;
}

export interface TestimonialRow {
  id: string | number;
  speed?: string;
  direction?: "left" | "right";
  testimonials: TestimonialItem[];
}

export interface TestimonialsData {
  title?: string;
  subtitle?: string;
  rows: TestimonialRow[];
}

export interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarUrl?: string;
}

export interface HorizontalScrollerProps {
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right";
}

export interface TestimonialsSectionProps {
  data: TestimonialsData;
  className?: string;
}

/**
 * Derives up to 2 uppercase initials from a person's name
 */
export function getInitials(name: string): string {
  if (!name) return "LK";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const AVATAR_PALETTES = [
  "bg-emerald-100 text-emerald-800 border-emerald-300",
  "bg-blue-100 text-blue-800 border-blue-300",
  "bg-amber-100 text-amber-800 border-amber-300",
  "bg-purple-100 text-purple-800 border-purple-300",
  "bg-teal-100 text-teal-800 border-teal-300",
  "bg-rose-100 text-rose-800 border-rose-300",
  "bg-indigo-100 text-indigo-800 border-indigo-300",
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < (name || "").length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_PALETTES[Math.abs(hash) % AVATAR_PALETTES.length];
}

/**
 * TestimonialCard
 * Uses author initials as DP (no profile picture image), per user design requirements.
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorTitle,
}) => {
  return (
    <div className="testimonial-card flex flex-col justify-between items-start gap-4 p-6 bg-white rounded-2xl shadow-[0_4px_20px_-2px_rgba(17,24,39,0.06)] border border-[#E5E7EB] w-[320px] sm:w-[380px] shrink-0 hover:shadow-md hover:border-neutral-300 transition-all text-left">
      <p className="text-neutral-700 text-sm sm:text-[15px] leading-relaxed italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-3.5 mt-2 pt-4 border-t border-neutral-100 w-full">
        {/* Name initial badge as DP instead of profile picture */}
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm tracking-wider shrink-0 border select-none shadow-xs ${getAvatarColor(
            authorName
          )}`}
          aria-label={authorName}
        >
          {getInitials(authorName)}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-bold text-neutral-900 truncate">
            {authorName}
          </h4>
          <p className="text-xs text-neutral-500 truncate">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * HorizontalScroller
 * Self-contained infinite horizontal scroller with pause-on-hover and seamless looping.
 */
export const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  speed = "40s",
  direction = "left",
}) => {
  const animName =
    direction === "right"
      ? "testimonial-scroll-reverse"
      : "testimonial-scroll-forward";

  return (
    <>
      <style>{`
        @keyframes testimonial-scroll-forward {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes testimonial-scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <div className="w-full overflow-hidden relative py-2 select-none">
        {/* Soft edge fade overlays that never break cross-browser */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Scrolling track: w-max ensures 100% of both copies are accounted for */}
        <div
          className="flex w-max items-center gap-6 hover:[animation-play-state:paused]"
          style={{
            animation: `${animName} ${speed} linear infinite`,
          }}
        >
          <div className="flex shrink-0 items-center gap-6">{children}</div>
          <div className="flex shrink-0 items-center gap-6" aria-hidden="true">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * TestimonialsSection
 * Props: data { title, subtitle, rows[] }
 */
export default function TestimonialsSection({
  data,
  className = "",
}: TestimonialsSectionProps) {
  return (
    <section
      className={`testimonials-section relative flex flex-col items-center gap-10 p-4 sm:p-8 w-full max-w-7xl mx-auto overflow-hidden ${className}`}
    >
      {(data.title || data.subtitle) && (
        <div className="flex flex-col items-center gap-3 text-center z-10 max-w-2xl mx-auto">
          {data.title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              {data.title}
            </h2>
          )}
          {data.subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-xl">
              {data.subtitle}
            </p>
          )}
        </div>
      )}

      <div className="flex flex-col gap-5 z-10 w-full">
        {data.rows.map((row) => (
          <HorizontalScroller
            key={row.id}
            speed={row.speed}
            direction={row.direction}
          >
            {row.testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                authorName={t.authorName}
                authorTitle={t.authorTitle}
                avatarUrl={t.avatarUrl}
              />
            ))}
          </HorizontalScroller>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 85% 67% at 50% 100%, rgba(0,108,73,0.06) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />
    </section>
  );
}
