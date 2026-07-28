export const metadata = {
  title: "Smart Hydrology & Fertilizer Safety API — Conduit",
  description:
    "Predictive runoff risk scores using real-time rainfall and barometric pressure data for fertilizer safety.",
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
              Predictive Agriculture API
            </span>
            <h1 className="font-display text-4xl font-semibold text-ink leading-tight">
              Smart Hydrology &amp; Fertilizer Safety API
            </h1>
            <p className="mt-4 text-lg text-ink-soft max-w-3xl">
              Predict fertilizer runoff risk using real-time rainfall and
              barometric pressure data.
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
              This system predicts fertilizer runoff risk using real-time
              rainfall and barometric pressure data to protect smallholder
              farmers from financial loss caused by heavy storms.
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
                Farmers lose fertilizer due to unexpected rainfall shortly after
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
                A predictive hydrology API that evaluates rainfall and
                atmospheric pressure trends to generate real-time runoff risk
                scores.
              </p>
              <div className="mt-4 rounded-md bg-white/50 p-3">
                <p className="text-sm font-medium text-green-700">
                  🎯 Predictive • Real-time • Actionable
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
                <h4 className="mb-3 font-semibold text-ink">
                  💧 Hydrology Sensors
                </h4>
                <ul className="space-y-2 text-sm text-ink-soft">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>
                      <strong className="text-ink">Rain Gauge A</strong> —
                      instant rainfall rate
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>
                      <strong className="text-ink">Rain Gauge B</strong> — daily
                      accumulation
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
                      — hPa
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* DETECTION LOGIC */}
          {/* ============================================ */}
          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
              Detection Logic
            </h2>
            <div className="rounded-lg border border-line bg-bg-soft p-6">
              <p className="mb-4 text-ink-soft">
                The system identifies the following patterns:
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-md bg-bg border border-line px-4 py-3 text-center">
                  <div className="text-2xl mb-1">🌧️</div>
                  <p className="text-sm font-medium text-ink">Rainfall Onset</p>
                  <p className="text-xs text-ink-soft">
                    Detection of initial rainfall
                  </p>
                </div>
                <div className="rounded-md bg-bg border border-line px-4 py-3 text-center">
                  <div className="text-2xl mb-1">📉</div>
                  <p className="text-sm font-medium text-ink">
                    Rapid Pressure Drops
                  </p>
                  <p className="text-xs text-ink-soft">
                    Atmospheric pressure decline
                  </p>
                </div>
                <div className="rounded-md bg-bg border border-line px-4 py-3 text-center">
                  <div className="text-2xl mb-1">⛈️</div>
                  <p className="text-sm font-medium text-ink">
                    Storm Formation
                  </p>
                  <p className="text-xs text-ink-soft">
                    Weather pattern analysis
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* PREDICTIVE MODEL */}
          {/* ============================================ */}
          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
              Predictive Model
            </h2>
            <div className="rounded-lg border border-line bg-bg p-6">
              <p className="mb-4 text-ink-soft">
                The API computes a runoff risk score (0–100) using:
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-md bg-bg-soft border border-line px-4 py-3">
                  <p className="text-xs text-muted">Factor 1</p>
                  <p className="text-sm font-semibold text-ink">
                    Rainfall Intensity
                  </p>
                  <p className="text-xs text-ink-soft">Rate of precipitation</p>
                </div>
                <div className="rounded-md bg-bg-soft border border-line px-4 py-3">
                  <p className="text-xs text-muted">Factor 2</p>
                  <p className="text-sm font-semibold text-ink">
                    Rolling Precipitation Trends
                  </p>
                  <p className="text-xs text-ink-soft">
                    Historical rain patterns
                  </p>
                </div>
                <div className="rounded-md bg-bg-soft border border-line px-4 py-3">
                  <p className="text-xs text-muted">Factor 3</p>
                  <p className="text-sm font-semibold text-ink">
                    Barometric Pressure Drop Rate
                  </p>
                  <p className="text-xs text-ink-soft">
                    Threshold: &gt;2 hPa/hour
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* OUTPUT LAYER */}
          {/* ============================================ */}
          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
              Output Layer
            </h2>
            <div className="rounded-lg border border-line bg-bg p-6">
              <div className="mb-4">
                <p className="text-sm text-muted">Endpoint</p>
                <code className="block rounded-md bg-bg-soft px-3 py-2 font-mono text-sm text-accent border border-line mt-1">
                  /V1/AGRI/HYDROLOGY/RUNOFF-PREDICTION
                </code>
              </div>
              <div>
                <p className="text-sm text-muted mb-2">Response Includes</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <div className="rounded-md border border-line px-4 py-2 text-center">
                    <p className="text-xs text-muted">Score</p>
                    <p className="text-sm font-semibold text-ink">
                      Runoff Risk (0–100)
                    </p>
                  </div>
                  <div className="rounded-md border border-line px-4 py-2 text-center">
                    <p className="text-xs text-muted">Likelihood</p>
                    <p className="text-sm font-semibold text-ink">
                      Storm Likelihood
                    </p>
                  </div>
                  <div className="rounded-md border border-line px-4 py-2 text-center">
                    <p className="text-xs text-muted">Recommendation</p>
                    <p className="text-sm font-semibold text-ink">
                      Apply / Delay Fertilizer
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                <span>GET /V1/AGRI/HYDROLOGY/RUNOFF-PREDICTION</span>
                <span className="text-accent">● LIVE</span>
              </div>
              <pre className="whitespace-pre-wrap break-words font-mono text-[0.8rem] leading-relaxed text-[#d7d8c8]">
                <code>{`{
  "location": "Mola_Ridge_04",
  "prediction": {
    "runoff_risk_score": 82,
    "storm_likelihood": "HIGH",
    "confidence_interval": 0.05,
    "recommendation": "DELAY_APPLICATION",
    "risk_factors": ["imminent_heavy_rain", "high_soil_saturation"]
  },
  "inputs": {
    "rainfall_rate_mmh": 12.4,
    "pressure_drop_hpa": 3.1,
    "soil_moisture_pct": 78
  },
  "timestamp": "2026-07-09T14:20:11Z"
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
                  Ingestion Layer
                </span>
                <span className="text-muted">→</span>
                <span className="whitespace-nowrap font-medium text-ink">
                  Time-Series Analysis
                </span>
                <span className="text-muted">→</span>
                <span className="whitespace-nowrap font-medium text-ink">
                  Prediction Engine
                </span>
                <span className="text-muted">→</span>
                <span className="whitespace-nowrap font-medium text-ink">
                  API
                </span>
                <span className="text-muted">→</span>
                <span className="whitespace-nowrap font-medium text-ink">
                  Farmers
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
                The system transforms raw hydrological data into
                <strong className="text-ink">
                  {" "}
                  actionable agricultural decision intelligence
                </strong>
                , preventing financial loss through predictive storm analysis.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <span className="inline-block rounded-full bg-green-bg px-4 py-1.5 text-sm text-green">
                  ✓ Predictive
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
                  👉 This is not a weather API
                </p>
                <p className="text-lg font-bold text-ink">
                  👉 This is a{" "}
                  <span className="text-red-600">
                    financial risk prediction system
                  </span>{" "}
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
                Start receiving real-time runoff risk predictions for your farm
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
