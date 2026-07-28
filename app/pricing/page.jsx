import {
  PageHeader,
  PricingCards,
  ComparisonTable,
  FAQ,
  CTASection,
} from "../../components/pricing";

export const metadata = {
  title: "Pricing — Conduit",
  description:
    "Simple, transparent pricing for precision agriculture telemetry. Start free, scale as you grow.",
};

export default function PricingPage() {
  return (
    <>
      <a id="top" />
      <PageHeader />
      <PricingCards />
      <ComparisonTable />
      <FAQ />
      <CTASection />
      <div className="h-8 bg-[#e8e4d8]"></div>
    </>
  );
}
