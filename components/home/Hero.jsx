import Reading from "./Reading";

export default function Hero() {
  return (
    <section className="bg-bg pb-16 pt-12 lg:pb-20 lg:pt-14">
      <div className="wrap grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <span className="mb-4 inline-block rounded-sm bg-accent-soft px-3 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-wider text-accent">
            Weather &amp; Agricultural Risk API
          </span>
          <h1 className="mb-5 max-w-[28ch] font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.15] tracking-tight lg:max-w-[26ch]">
            Live weather, read straight off the instruments — turned into
            decisions farmers can act on.
          </h1>
          <p className="mb-7 max-w-[42ch] text-[1.02rem] text-ink-soft">
            Conduit streams real-time telemetry from IoT weather stations across
            the country. One key, one base URL.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="/auth/sign-up"
              className="rounded-md bg-ink px-[22px] py-[13px] text-[0.92rem] font-medium tracking-wide text-white transition-colors hover:bg-[#2a2c1f]"
            >
              Get a free API key
            </a>
            <a
              href="/documentation"
              className="rounded-md border border-line px-[22px] py-3 text-[0.92rem] font-medium transition-colors hover:border-ink-soft"
            >
              Read the docs
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-card-line bg-card px-[22px] py-4">
            <div className="mb-3 flex gap-1.5">
              <span className="h-[9px] w-[9px] rounded-full bg-[#e0605a]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#e0b552]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#5aa66b]" />
            </div>
            <pre className="whitespace-pre-wrap break-words font-mono text-[0.8rem] leading-relaxed text-[#d7d8c8]">
              <code>{`curl https://api.conduit.dev/v1/stations/current \\
  -H "Authorization: Api-Key YOUR_SECRET_KEY"`}</code>
            </pre>
          </div>

          <div className="rounded-lg border border-line bg-white px-[22px] py-4 shadow-[0_12px_30px_-18px_rgba(20,20,15,0.35)]">
            <div className="mb-3.5 flex items-center justify-between border-b border-line pb-3.5 font-mono text-[0.72rem] uppercase tracking-wide text-muted">
              <span>Site 3K8T — Nairobi</span>
              <span className="inline-flex items-center gap-1.5 text-green">
                <i className="inline-block h-1.5 w-1.5 rounded-full bg-green" />{" "}
                Live telemetry
              </span>
            </div>
            <div className="grid grid-cols-3 gap-x-3 gap-y-4">
              <Reading label="Air Temp" value="22.4°C" />
              <Reading label="Humidity" value="64.8%" />
              <Reading label="Pressure" value="1012.3" />
              <Reading label="Wind" value="5.8m/s" />
              <Reading label="Dew Point" value="19.2°C" />
              <Reading label="Rain (24h)" value="1.4mm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
