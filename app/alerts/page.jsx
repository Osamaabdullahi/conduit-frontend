export const metadata = {
  title: "Smart Hydrology & Fertilizer Safety API — Conduit",
  description:
    "Real-time runoff risk scores using rainfall and barometric pressure data for fertilizer safety.",
};

export default function HydrologyAlertsPage() {
  return (
    <>
      <div className="min-h-screen border-t border-line bg-bg">
        <div className="mx-auto max-w-4xl px-4 py-12">
          {/* ============================================ */}
          {/* PAGE HEADER */}
          {/* ============================================ */}
          <div className="mb-12">
            <span className="mb-4 inline-block rounded-sm bg-accent-soft px-3 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-wider text-accent">
              Agricultural Risk API
            </span>
            <h1 className="font-display text-4xl font-semibold text-ink leading-tight">
              Smart Hydrology &amp; Fertilizer Safety API
            </h1>
            <p className="mt-4 text-lg text-ink-soft max-w-3xl">
              Score fertilizer runoff risk in real time from rolling rainfall
              totals and barometric pressure trend.
            </p>
          </div>

          {/* ============================================ */}
          {/* OVERVIEW */}
          {/* ============================================ */}
          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
              Overview
            </h2>
            <p className="text-ink-soft leading-relaxed">
              Every time new telemetry lands for a station, the system re-scores
              runoff risk for that station using a rolling 6-hour window of
              rainfall and pressure readings — no request needed. When the score
              crosses the alert threshold, an alert is created (and a webhook
              fires, if you've subscribed to one).
            </p>
          </section>

          {/* ============================================ */}
          {/* PROBLEM & SOLUTION */}
          {/* ============================================ */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Problem */}
            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <div className="mb-3 text-2xl">🌧️</div>
              <h3 className="mb-2 font-display text-lg font-semibold text-red-700">
                Problem
              </h3>
              <p className="text-sm text-red-600">
                Farmers lose fertilizer to unexpected rainfall shortly after
                application. These losses are invisible until crop yield
                reduction occurs.
              </p>
              <div className="mt-4 rounded-md bg-white/50 p-3">
                <p className="text-sm font-medium text-red-700">
                  💸 Financial loss • Invisible damage • Crop yield reduction
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="rounded-lg border border-green-200 bg-green-50 p-6">
              <div className="mb-3 text-2xl">💡</div>
              <h3 className="mb-2 font-display text-lg font-semibold text-green-700">
                Solution
              </h3>
              <p className="text-sm text-green-700">
                A rule-based hydrology score that combines recent rainfall with
                barometric pressure trend into a single 0–100 runoff risk
                number, recalculated on every ingest.
              </p>
              <div className="mt-4 rounded-md bg-white/50 p-3">
                <p className="text-sm font-medium text-green-700">
                  🎯 Automatic • Real-time • Actionable
                </p>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* DATA INPUTS */}
          {/* ============================================ */}
          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
              Data Inputs
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-line bg-bg p-5">
                <h4 className="mb-3 font-semibold text-ink">💧 Rain Gauges</h4>
                <ul className="space-y-2 text-sm text-ink-soft">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>
                      <strong className="text-ink">Rain Gauge A &amp; B</strong>{" "}
                      — two redundant gauges on the same station. The higher of
                      the two totals for the window is used, so a dry or
                      malfunctioning gauge can't mask real rainfall.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-line bg-bg p-5">
                <h4 className="mb-3 font-semibold text-ink">
                  🌡️ Atmospheric Sensor
                </h4>
                <ul className="space-y-2 text-sm text-ink-soft">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>
                      <strong className="text-ink">
                        BMX Barometric Pressure
                      </strong>{" "}
                      — first vs. last reading in the window determines whether
                      pressure is rising, falling, or steady.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* SCORING MODEL */}
          {/* ============================================ */}
          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
              Scoring Model
            </h2>
            <div className="rounded-lg border border-line bg-bg p-6">
              <p className="mb-4 text-ink-soft">
                The score (0–100) is two weighted, bucketed components added
                together — intentionally simple thresholds rather than a
                machine-learning model, so it's easy to read and tune:
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-md bg-bg-soft border border-line px-4 py-3">
                  <p className="text-xs text-muted">Up to 70 points</p>
                  <p className="text-sm font-semibold text-ink">
                    Rainfall in the last 6 hours
                  </p>
                  <p className="text-xs text-ink-soft">
                    Bucketed: ≥40mm scores 70, down to any measurable rain below
                    5mm scoring 5
                  </p>
                </div>
                <div className="rounded-md bg-bg-soft border border-line px-4 py-3">
                  <p className="text-xs text-muted">Up to 30 points</p>
                  <p className="text-sm font-semibold text-ink">
                    Pressure trend
                  </p>
                  <p className="text-xs text-ink-soft">
                    Falling (≥1 hPa drop) scores 30, steady scores 10, rising
                    scores 0
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* RISK TIERS */}
          {/* ============================================ */}
          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
              Risk Tiers
            </h2>
            <p className="mb-4 text-ink-soft leading-relaxed">
              An alert is only created once the score reaches{" "}
              <span className="font-mono text-accent">50</span> — below that,
              the score still runs internally but nothing is surfaced via the
              API or a webhook.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-bg-soft p-5">
                <span className="rounded-md bg-accent-soft px-2.5 py-1 text-[0.68rem] font-medium text-accent">
                  High · 50–74
                </span>
                <p className="mt-2 text-sm text-ink-soft">
                  "Delay fertilizer application"
                </p>
              </div>
              <div className="rounded-lg border border-line bg-bg-soft p-5">
                <span className="rounded-md bg-red-50 px-2.5 py-1 text-[0.68rem] font-medium text-red-600">
                  Extreme · 75–100
                </span>
                <p className="mt-2 text-sm text-ink-soft">
                  "Do not apply fertilizer"
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted">
              Scores below 50 are classified Low (0–24, "Safe to apply
              fertilizer") or Moderate (25–49, "Monitor weather"), but stay
              internal since they don't cross the alert threshold.
            </p>
          </section>

          {/* ============================================ */}
          {/* API RESPONSE EXAMPLE */}
          {/* ============================================ */}
          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
              API Response Example
            </h2>
            <div className="rounded-lg border border-card-line bg-card px-6 py-4">
              <div className="mb-3.5 flex justify-between border-b border-card-line pb-3.5 font-mono text-[0.68rem] tracking-wide text-[#9a9c8a]">
                <span>GET /alerts/?type=hydrology</span>
                <span className="text-accent">● LIVE</span>
              </div>
              <pre className="whitespace-pre-wrap break-words font-mono text-[0.8rem] leading-relaxed text-[#d7d8c8]">
                <code>{`{
  "id": "6f1c9e2a-2b0e-4b7a-9b7a-5a1f2c3d4e5f",
  "station_name": "Site JKUAT",
  "station_slug": "kenya-kiambu-jkuat-iot-aws-conduitempathy1",
  "alert_type": "hydrology",
  "severity": "high",
  "message": "Runoff risk is high (68/100) at Site JKUAT: 24.5mm rainfall in the last 6h, pressure falling.",
  "is_active": true,
  "resolved_at": null,
  "runoff_risk_score": 68,
  "rainfall_summary": {
    "rain_gauge_a_mm": 22.1,
    "rain_gauge_b_mm": 24.5,
    "effective_rainfall_mm": 24.5,
    "window_hours": 6
  },
  "pressure_trend": "falling",
  "recommendation": "Delay fertilizer application",
  "created_at": "2026-07-09T14:20:11Z",
  "updated_at": "2026-07-09T14:20:11Z"
}`}</code>
              </pre>
            </div>
          </section>

          {/* ============================================ */}
          {/* DATA FLOW */}
          {/* ============================================ */}
          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
              Data Flow
            </h2>
            <div className="overflow-x-auto">
              <div className="flex items-center gap-2 rounded-lg border border-line bg-bg p-4 text-sm">
                <span className="whitespace-nowrap rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                  Step 1
                </span>
                <span className="whitespace-nowrap font-medium text-ink">
                  Weather Station
                </span>
                <span className="text-muted">→</span>
                <span className="whitespace-nowrap font-medium text-ink">
                  Ingestion
                </span>
                <span className="text-muted">→</span>
                <span className="whitespace-nowrap font-medium text-ink">
                  Hydrology Scoring
                </span>
                <span className="text-muted">→</span>
                <span className="whitespace-nowrap font-medium text-ink">
                  Alert (if ≥50)
                </span>
                <span className="text-muted">→</span>
                <span className="whitespace-nowrap font-medium text-ink">
                  API + Webhook
                </span>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* KEY INSIGHT */}
          {/* ============================================ */}
          <section className="mb-12">
            <div className="rounded-lg border-2 border-accent bg-accent/5 p-8 text-center">
              <div className="mb-3 text-3xl">🚀</div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Key Insight
              </h2>
              <p className="mt-3 text-lg text-ink-soft max-w-2xl mx-auto">
                The system turns raw rainfall and pressure readings into
                <strong className="text-ink">
                  {" "}
                  actionable agricultural decision intelligence
                </strong>
                , automatically, on every ingest — no prediction request
                required.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <span className="inline-block rounded-full bg-green-bg px-4 py-1.5 text-sm text-green">
                  ✓ Automatic
                </span>
                <span className="inline-block rounded-full bg-green-bg px-4 py-1.5 text-sm text-green">
                  ✓ Real-time
                </span>
                <span className="inline-block rounded-full bg-green-bg px-4 py-1.5 text-sm text-green">
                  ✓ Actionable
                </span>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* FINAL TAKEAWAY */}
          {/* ============================================ */}
          <section className="mb-12">
            <div className="rounded-lg border-2 border-red-500/30 bg-red-50 p-8 text-center">
              <div className="mb-3 text-3xl">🔥</div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Final Takeaway
              </h2>
              <div className="mt-4 space-y-3">
                <p className="text-lg font-semibold text-red-700">
                  👉 This is not just a weather API
                </p>
                <p className="text-lg font-bold text-ink">
                  👉 This is a{" "}
                  <span className="text-red-600">financial risk signal</span>{" "}
                  for agriculture
                </p>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* GET STARTED CTA */}
          {/* ============================================ */}
          <section className="border-t border-line pt-12">
            <div className="rounded-lg border border-line bg-bg-soft p-8 text-center">
              <h3 className="font-display text-xl font-semibold text-ink">
                Ready to protect your fertilizer investment?
              </h3>
              <p className="mt-2 text-ink-soft">
                Start receiving real-time runoff risk alerts for your farm
                today.
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/signup"
                  className="rounded-md bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a2c1f]"
                >
                  Get Started
                </a>
                <a
                  href="/documentation"
                  className="rounded-md border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-bg-soft"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
