"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import PageHeader from "../../components/alerts/PageHeader";
import FilterBar from "../../components/alerts/FilterBar";
import AlertCard from "../../components/alerts/AlertCard";
import CTASection from "../../components/alerts/CTASection";
import { apiClient } from "../../libs/api";
import useAuthStore from "../../store";

export default function AlertsPage() {
  const { apiKey, isAuthenticated } = useAuthStore();

  const [alerts, setAlerts] = useState([]);
  const [stations, setStations] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    next: null,
    previous: null,
  });
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ type: "", station: "", active: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAuthenticated || !apiKey) return;
    apiClient
      .get("/stations/")
      .then(setStations)
      .catch(() => {
        // Station list is only used to populate the filter dropdown —
        // failing silently here just means fewer filter options.
      });
  }, [isAuthenticated, apiKey]);

  const fetchAlerts = useCallback(async () => {
    if (!isAuthenticated) {
      setError("Please sign in to view live alerts.");
      setIsLoading(false);
      return;
    }
    if (!apiKey) {
      setError("Generate an API key from your dashboard to view live alerts.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (filters.type) params.append("type", filters.type);
    if (filters.station) params.append("station", filters.station);
    if (filters.active) params.append("active", filters.active);
    params.append("page", String(page));

    try {
      const response = await apiClient.get(`/alerts/?${params.toString()}`);
      setAlerts(response.results || []);
      setPagination({
        count: response.count || 0,
        next: response.next,
        previous: response.previous,
      });
    } catch (err) {
      console.error("Error fetching alerts:", err);
      setError(err.message || "Failed to load alerts.");
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, isAuthenticated, filters, page]);

  useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  const handleFilterChange = (next) => {
    setFilters(next);
    setPage(1);
  };

  return (
    <>
      <PageHeader />

      <section className="border-t border-line bg-bg py-14">
        <div className="wrap mx-auto max-w-wrap px-5">
          {!isAuthenticated && (
            <div className="mb-8 rounded-lg border border-line bg-bg-soft p-6 text-center">
              <p className="text-ink-soft">
                Alerts are live data pulled straight from{" "}
                <code className="font-mono text-xs bg-bg px-1.5 py-0.5 rounded border border-line">
                  GET /alerts/
                </code>
                .{" "}
                <Link href="/auth/sign-in" className="font-medium text-accent hover:text-ink">
                  Sign in
                </Link>{" "}
                or{" "}
                <Link href="/auth/sign-up" className="font-medium text-accent hover:text-ink">
                  create an account
                </Link>{" "}
                to see them.
              </p>
            </div>
          )}

          {isAuthenticated && !apiKey && (
            <div className="mb-8 rounded-lg border border-line bg-bg-soft p-6 text-center">
              <p className="text-ink-soft">
                No API key found.{" "}
                <Link href="/dashboard" className="font-medium text-accent hover:text-ink">
                  Generate one from your dashboard
                </Link>{" "}
                to load live alerts.
              </p>
            </div>
          )}

          {isAuthenticated && apiKey && (
            <>
              <div className="mb-6">
                <FilterBar
                  filters={filters}
                  stations={stations}
                  onChange={handleFilterChange}
                />
              </div>

              {isLoading && (
                <div className="flex justify-center py-16">
                  <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-accent"></div>
                </div>
              )}

              {!isLoading && error && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-600">
                  {error}
                </div>
              )}

              {!isLoading && !error && alerts.length === 0 && (
                <div className="rounded-lg border border-line bg-bg-soft p-12 text-center">
                  <p className="text-ink-soft">
                    No alerts match these filters right now.
                  </p>
                </div>
              )}

              {!isLoading && !error && alerts.length > 0 && (
                <>
                  <p className="mb-4 text-sm text-muted">
                    {pagination.count} alert{pagination.count === 1 ? "" : "s"}
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {alerts.map((alert) => (
                      <AlertCard key={alert.id} alert={alert} />
                    ))}
                  </div>

                  {(pagination.next || pagination.previous) && (
                    <div className="mt-8 flex items-center justify-center gap-3">
                      <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={!pagination.previous}
                        className="rounded-md border border-line bg-bg px-4 py-2 text-sm text-ink disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Previous
                      </button>
                      <span className="text-sm text-muted">Page {page}</span>
                      <button
                        onClick={() => setPage((p) => p + 1)}
                        disabled={!pagination.next}
                        className="rounded-md border border-line bg-bg px-4 py-2 text-sm text-ink disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}

          <div className="mt-14 flex flex-wrap gap-4 border-t border-line pt-8">
            <Link
              href="/alerts/smart-hydrology"
              className="text-sm font-medium text-accent hover:text-ink"
            >
              How hydrology alerts work →
            </Link>
            <Link
              href="/alerts/livestock-thermal"
              className="text-sm font-medium text-accent hover:text-ink"
            >
              How livestock heat-stress alerts work →
            </Link>
            <Link
              href="/webhooks"
              className="text-sm font-medium text-accent hover:text-ink"
            >
              Manage webhook subscriptions →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
