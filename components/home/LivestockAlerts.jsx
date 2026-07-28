export default function LivestockAlerts() {
  return (
    <section id="alerts" className="border-t border-line bg-bg py-24">
      <div className="wrap grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 rounded-lg border border-card-line bg-card px-[22px] py-4 lg:order-1">
          <div className="mb-3.5 flex justify-between border-b border-card-line pb-3.5 font-mono text-[0.68rem] tracking-wide text-[#9a9c8a]">
            <span>WEBHOOK PAYLOAD</span>
            <span className="text-[#6f7160]">×</span>
          </div>
          <pre className="whitespace-pre-wrap break-words font-mono text-[0.8rem] leading-relaxed text-[#d7d8c8]">
            <code>{`{
  "event": "alert.thermal_stress",
  "data": {
    "station_id": "STN_H042",
    "metric": "WBGT_VALUE",
    "current_value": 29.6,
    "threshold": 28.0,
    "classification": "MODERATE_STRESS",
    "actions": ["activate_cooling_systems", "increase_hydration"]
  }
}`}</code>
          </pre>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-4.5 text-[1.6rem]">⚠</div>
          <a href="/alerts#livestock" className="group inline-block">
            <h2 className="mb-4.5 font-display text-[clamp(1.5rem,2.6vw,1.9rem)] font-semibold leading-snug text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors group-hover:text-accent group-hover:decoration-accent">
              Livestock Thermal Comfort Alert System (WBGT Webhooks)
            </h2>
          </a>
          <p className="mb-5.5 max-w-[42ch] text-[0.98rem] text-ink-soft">
            Protect livestock yield with automated WBGT (Wet Bulb Globe
            Temperature) monitoring. Configure webhooks to trigger fans or
            misting systems the millisecond thresholds are breached.
          </p>

          <a
            href="/alerts/livestock-thermal"
            className="mt-6 inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-accent hover:underline"
          >
            View livestock alerts &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
