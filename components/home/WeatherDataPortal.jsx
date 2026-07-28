export default function WeatherDataPortal() {
  return (
    <section className="border-t border-line bg-bg-soft py-24">
      <div className="wrap mx-auto max-w-wrap px-5">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-4 inline-block rounded-sm bg-accent-soft px-3 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-wider text-accent">
              Data Portal
            </span>
            <h2 className="mb-5 font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Explore weather data without writing code.
            </h2>
            <p className="mb-5 max-w-[42ch] text-[1.02rem] text-ink-soft">
              The Weather Data Portal is designed for researchers, students,
              Data Analysts, and anyone who needs access to weather data without
              using the API. Browse stations, view current conditions, preview
              datasets, and download historical weather data in just a few
              clicks.
            </p>

            <ul className="mb-7 flex flex-col gap-2.5">
              {[
                "Browse all weather stations across the  country",
                "View current conditions with live metric cards",
                "Preview datasets before downloading",
                "Export historical data in CSV or JSON format",
              ].map((item) => (
                <li
                  key={item}
                  className="relative pl-[22px] text-[0.88rem] text-ink-soft"
                >
                  <span className="absolute left-0 font-bold text-green">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="/data-portal"
                className="rounded-md bg-ink px-[26px] py-[14px] text-[0.95rem] font-medium tracking-wide text-white transition-colors hover:bg-[#2a2c1f]"
              >
                Visit Data Portal
              </a>
              <a
                href="/data-portal#export"
                className="rounded-md border border-line px-[22px] py-3 text-[0.92rem] font-medium transition-colors hover:border-ink-soft"
              >
                Export Data →
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-line bg-bg p-5 transition-shadow hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display text-base font-semibold text-ink">
                    JKUAT Main Station
                  </h4>
                  <p className="text-sm text-ink-soft">
                    Jomo Kenyatta University, Juja
                  </p>
                </div>
                <span className="inline-block rounded-full bg-green px-2.5 py-0.5 text-xs font-medium text-white">
                  Active
                </span>
              </div>
              <div className="mt-3 flex gap-4 text-sm text-ink-soft">
                <span>-1.0917, 37.0169</span>
                <span>•</span>
                <span>1,550m</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 rounded-md bg-bg-soft p-3">
                <div className="text-center">
                  <p className="text-[0.6rem] uppercase text-muted">Temp</p>
                  <p className="text-sm font-semibold text-ink">22.4°C</p>
                </div>
                <div className="text-center">
                  <p className="text-[0.6rem] uppercase text-muted">Humidity</p>
                  <p className="text-sm font-semibold text-ink">64.8%</p>
                </div>
                <div className="text-center">
                  <p className="text-[0.6rem] uppercase text-muted">Wind</p>
                  <p className="text-sm font-semibold text-ink">5.8 m/s</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-line bg-bg p-5 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-xl">📤</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-ink">
                    Export Historical Data
                  </h4>
                  <p className="text-sm text-ink-soft">
                    Select station, date range, and format
                  </p>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-3">
                <span className="rounded-md border border-line px-3 py-1 text-xs text-ink-soft">
                  CSV
                </span>
                <span className="rounded-md border border-line px-3 py-1 text-xs text-ink-soft">
                  JSON
                </span>
                <span className="rounded-md border border-line px-3 py-1 text-xs text-ink-soft">
                  Date Range
                </span>
                <span className="rounded-md border border-line px-3 py-1 text-xs text-ink-soft">
                  Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
