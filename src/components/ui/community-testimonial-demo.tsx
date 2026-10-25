import React from "react";
import TestimonialsSection from "@/components/ui/community-testimonial";

export default function DemoOne() {
  const testimonialsData = {
    title: "Don't just take our word for it",
    subtitle:
      "See what our users are saying about how our app has transformed their daily routines and helped them build lasting habits.",
    rows: [
      {
        id: "row1",
        speed: "50s",
        direction: "left" as const,
        testimonials: [
          {
            id: "t1",
            quote:
              "This course completely changed how I approach accounting vouchers. The hands-on feedback is incredibly motivating!",
            authorName: "Sarah K.",
            authorTitle: "Accounts Executive",
          },
          {
            id: "t2",
            quote:
              "I've tried countless online accounting tutorials, and this is the first that actually stuck. Practical, clear, and effective.",
            authorName: "Michael B.",
            authorTitle: "Commerce Graduate",
          },
          {
            id: "t3",
            quote:
              "The 1-on-1 trainer feedback is a game-changer. Our entire batch felt guided and confident in interview preparation.",
            authorName: "Emily W.",
            authorTitle: "Tax Assistant",
          },
        ],
      },
      {
        id: "row2",
        speed: "40s",
        direction: "right" as const,
        testimonials: [
          {
            id: "t4",
            quote:
              "The GST portal simulation lab is stunning. Working on real invoices eliminated all my fear of commercial billing.",
            authorName: "David L.",
            authorTitle: "GST Billing Specialist",
          },
          {
            id: "t5",
            quote:
              "Simple, no clutter, does exactly what industry demands. The reconciliation drills were exceptionally useful.",
            authorName: "Jessica P.",
            authorTitle: "Junior Accountant",
          },
          {
            id: "t6",
            quote:
              "Practicing with genuine commercial ledger files showed me how accounting operates in real businesses. Worth every minute.",
            authorName: "Alex C.",
            authorTitle: "Audit Trainee",
          },
        ],
      },
      {
        id: "row3",
        speed: "60s",
        direction: "left" as const,
        testimonials: [
          {
            id: "t7",
            quote:
              "The TEPL verified digital certification helped my profile stand out immediately with campus corporate recruiters.",
            authorName: "Kenji T.",
            authorTitle: "B.Com Honors Graduate",
          },
          {
            id: "t8",
            quote:
              "Finally, a Tally institute that focuses on current GST and TDS laws rather than outdated manual exercises. Highly recommended!",
            authorName: "Maria G.",
            authorTitle: "Payroll Associate",
          },
          {
            id: "t9",
            quote:
              "The placement assistance was genuine and transparent. Guided interview mock sessions made all the difference.",
            authorName: "Chris R.",
            authorTitle: "Accounts Manager",
          },
        ],
      },
    ],
  };

  return (
    <div
      className="app-root min-h-screen flex items-center justify-center py-20 px-4"
      aria-label="Testimonials showcase"
    >
      <TestimonialsSection data={testimonialsData} />
    </div>
  );
}
