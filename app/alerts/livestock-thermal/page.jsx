export const metadata = {
  title: "Livestock Thermal Comfort Alert System — Conduit",
  description:
    "Real-time WBGT monitoring with automated webhook alerts for livestock heat stress detection.",
};

export default function LivestockAlertsPage() {
  return (
    <div className="min-h-screen border-t border-line bg-bg">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <span className="mb-4 inline-block rounded-sm bg-accent-soft px-3 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-wider text-accent">
            Real-Time Alert System
          </span>
          <h1 className="font-display text-4xl font-semibold text-ink leading-tight">
            Livestock Thermal Comfort Alert System
          </h1>
          <p className="mt-4 text-lg text-ink-soft max-w-3xl">
            WBGT Webhooks — Real-Time Early Warning for Livestock Heat Stress
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
            Overview
          </h2>
          <p className="text-ink-soft leading-relaxed">
            The system provides real-time livestock heat stress detection using
            <strong className="text-ink">
              {" "}
              WBGT (Wet Bulb Globe Temperature)
            </strong>
            , read directly from each weather station's measurements. When a
            station's WBGT crosses your configured threshold, a webhook is fired
            to your subscription URL.
          </p>
        </section>

        {/* Problem & Solution */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-red-200 bg-red-50 p-6">
            <div className="mb-3 text-2xl">⚠️</div>
            <h3 className="mb-2 font-display text-lg font-semibold text-red-700">
              Problem
            </h3>
            <p className="text-sm text-red-600">
              Livestock farmers experience delayed responses to heat stress,
              leading to:
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-red-600">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Reduced milk production</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Decreased egg yield</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Animal mortality</span>
              </li>
            </ul>
            <p className="mt-3 text-sm text-red-600 font-medium">
              Current systems are manual and reactive.
            </p>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-6">
            <div className="mb-3 text-2xl">💡</div>
            <h3 className="mb-2 font-display text-lg font-semibold text-green-700">
              Solution
            </h3>
            <p className="text-sm text-green-700">
              A webhook-based alerting system that evaluates WBGT on every new
              measurement and fires signed HTTP notifications the moment a
              station crosses your threshold.
            </p>
            <div className="mt-4 rounded-md bg-white/50 p-3">
              <p className="text-sm font-medium text-green-700">
                ⚡ Real-time • Automated • Proactive
              </p>
            </div>
          </div>
        </div>

        {/* Core Mechanism */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
            Core Mechanism
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-line bg-bg-soft p-5 text-center">
              <div className="mb-2 text-2xl">📊</div>
              <h4 className="mb-1 font-semibold text-ink">Input</h4>
              <p className="text-sm text-ink-soft">
                WBGT value on each new weather measurement
              </p>
            </div>
            <div className="rounded-lg border border-line bg-bg-soft p-5 text-center">
              <div className="mb-2 text-2xl">⚖️</div>
              <h4 className="mb-1 font-semibold text-ink">Rule</h4>
              <p className="text-sm text-ink-soft">
                WBGT threshold <br />
                <span className="font-mono text-accent">(default: 22°C)</span>
              </p>
            </div>
            <div className="rounded-lg border border-line bg-bg-soft p-5 text-center">
              <div className="mb-2 text-2xl">🔔</div>
              <h4 className="mb-1 font-semibold text-ink">Action</h4>
              <p className="text-sm text-ink-soft">
                Trigger a signed webhook notification
              </p>
            </div>
          </div>
        </section>

        {/* Severity Tiers */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
            Severity Tiers
          </h2>
          <p className="mb-4 text-ink-soft leading-relaxed">
            Once WBGT is at or above the threshold, severity scales with how far
            above it the reading is:
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-line bg-bg-soft p-5">
              <span className="rounded-md bg-accent-soft px-2.5 py-1 text-[0.68rem] font-medium text-accent">
                Moderate
              </span>
              <p className="mt-2 text-sm text-ink-soft">
                WBGT at or up to 3°C above threshold
              </p>
            </div>
            <div className="rounded-lg border border-line bg-bg-soft p-5">
              <span className="rounded-md bg-accent-soft px-2.5 py-1 text-[0.68rem] font-medium text-accent">
                High
              </span>
              <p className="mt-2 text-sm text-ink-soft">
                3°C to 6°C above threshold
              </p>
            </div>
            <div className="rounded-lg border border-line bg-bg-soft p-5">
              <span className="rounded-md bg-red-50 px-2.5 py-1 text-[0.68rem] font-medium text-red-600">
                Extreme
              </span>
              <p className="mt-2 text-sm text-ink-soft">
                6°C or more above threshold
              </p>
            </div>
          </div>
        </section>

        {/* System Components */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
            System Components
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-line bg-bg p-5">
              <h4 className="mb-2 font-semibold text-ink">
                1. WBGT Data Source
              </h4>
              <p className="text-sm text-ink-soft">
                Pre-computed WBGT stored on each incoming weather measurement —
                the alert engine reads it as-is, it never recalculates it.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-bg p-5">
              <h4 className="mb-2 font-semibold text-ink">2. Alert Engine</h4>
              <p className="text-sm text-ink-soft">
                Evaluates each new measurement's WBGT against the threshold,
                independently per station.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-bg p-5">
              <h4 className="mb-2 font-semibold text-ink">
                3. Subscription System
              </h4>
              <p className="text-sm text-ink-soft">
                From your dashboard, register a webhook URL and optionally
                narrow it to livestock alerts and/or a single station. A signing
                secret is generated for you and shown once.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-bg p-5">
              <h4 className="mb-2 font-semibold text-ink">
                4. Webhook Dispatcher
              </h4>
              <p className="text-sm text-ink-soft">
                Sends an HTTP POST signed with HMAC-SHA256 (
                <code className="font-mono text-xs">X-Conduit-Signature</code>).
                Failed deliveries are retried automatically every 5 minutes up
                to a configured attempt limit.
              </p>
            </div>
          </div>
        </section>

        {/* Alert Coalescence */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
            Alert Coalescence
          </h2>
          <div className="rounded-lg border border-line bg-bg-soft p-6">
            <p className="text-ink-soft">
              While a station's WBGT stays at or above threshold, no duplicate
              alert is created — the existing one stays open. Once WBGT drops
              back below the threshold, the alert is resolved (and a
              resolved-event webhook fires), so the next crossing opens a fresh
              alert.
            </p>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-accent font-mono text-xs">
                No spam
              </span>
              <span className="text-ink-soft">•</span>
              <span className="text-ink-soft">One alert per episode</span>
              <span className="text-ink-soft">•</span>
              <span className="text-ink-soft">Resolved events too</span>
            </div>
          </div>
        </section>

        {/* Data Flow */}
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
                Alert Engine
              </span>
              <span className="text-muted">→</span>
              <span className="whitespace-nowrap font-medium text-ink">
                Threshold Evaluation
              </span>
              <span className="text-muted">→</span>
              <span className="whitespace-nowrap font-medium text-ink">
                Signed Webhook Dispatch
              </span>
              <span className="text-muted">→</span>
              <span className="whitespace-nowrap font-medium text-ink">
                Your Subscription URL
              </span>
            </div>
          </div>
        </section>

        {/* Webhook Payload Example */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
            Webhook Payload Example
          </h2>
          <div className="rounded-lg border border-card-line bg-card px-6 py-4">
            <div className="mb-3.5 flex justify-between border-b border-card-line pb-3.5 font-mono text-[0.68rem] tracking-wide text-[#9a9c8a]">
              <span>WEBHOOK PAYLOAD</span>
              <span className="text-[#c15a2c]">⚠ ALERT</span>
            </div>
            <pre className="whitespace-pre-wrap break-words font-mono text-[0.8rem] leading-relaxed text-[#d7d8c8]">
              <code>{`{
  "event": "alert.created",
  "alert": {
    "id": "a7d3f1b0-9c4e-4a2d-8f1a-2b3c4d5e6f70",
    "alert_type": "livestock",
    "severity": "moderate",
    "message": "Livestock heat stress at Site JKUAT: WBGT 24.6°C exceeds the 22.0°C threshold.",
    "station": "kenya-kiambu-jkuat-iot-aws-conduitempathy1",
    "is_active": true,
    "wbgt_value": 24.6,
    "threshold": 22.0,
    "created_at": "2026-07-09T14:20:11Z",
    "resolved_at": null
  }
}`}</code>
            </pre>
            <p className="mt-3 text-xs text-muted">
              Delivered with an{" "}
              <code className="font-mono">X-Conduit-Signature</code> header —{" "}
              <code className="font-mono">sha256=&lt;hmac&gt;</code> of the raw
              body, computed with your subscription's secret.
            </p>
          </div>
        </section>

        {/* Key Takeaway */}
        <section className="mb-12">
          <div className="rounded-lg border-2 border-accent bg-accent/5 p-8 text-center">
            <div className="mb-3 text-3xl">🔥</div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Final Takeaway
            </h2>
            <p className="mt-3 text-lg text-ink-soft max-w-2xl mx-auto">
              You are building a{" "}
              <strong className="text-ink">
                real-time agricultural early warning system
              </strong>
              , not just an API.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-block rounded-full bg-green-bg px-4 py-1.5 text-sm text-green">
                ✓ Real-time
              </span>
              <span className="inline-block rounded-full bg-green-bg px-4 py-1.5 text-sm text-green">
                ✓ Automated
              </span>
              <span className="inline-block rounded-full bg-green-bg px-4 py-1.5 text-sm text-green">
                ✓ Proactive
              </span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="border-t border-line pt-12">
          <div className="rounded-lg border border-line bg-bg-soft p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-ink">
              Ready to protect your livestock?
            </h3>
            <p className="mt-2 text-ink-soft">
              Start receiving real-time WBGT alerts for your farm today.
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
  );
}
