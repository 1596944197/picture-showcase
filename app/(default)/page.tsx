"use client";
import { useScrollHeight } from "@/hooks/useScrollHeight";
import { lazy, Suspense } from "react";

const LazyToTop = lazy(async () => {
  const component = await import("@/components/ui/ToTop");
  return {
    default: component.ToTop,
  };
});

export default function Home() {
  const { scrollHeight } = useScrollHeight("/");
  return (
    <section>
      <Suspense>{scrollHeight && <LazyToTop />}</Suspense>
    </section>
  );
}
