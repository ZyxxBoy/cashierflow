import Link from "next/link";
import {
  ArrowUpRight,
  Database,
  Package,
  ReceiptText,
  ShoppingCart,
  Store,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { appConfig } from "@/config/app";
import { env } from "@/config/env";

const features = [
  {
    title: "Point of Sale",
    description: "Process retail transactions and manage cash payments.",
    icon: ShoppingCart,
  },
  {
    title: "Inventory Management",
    description: "Track product availability and inventory movements.",
    icon: Package,
  },
  {
    title: "Transaction Management",
    description: "Maintain accurate sales records and transaction receipts.",
    icon: ReceiptText,
  },
  {
    title: "Business Reporting",
    description: "Monitor sales, historical costs, and gross profit.",
    icon: Database,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-slate-900 p-2.5 text-white">
              <Store className="h-6 w-6" />
            </div>

            <div>
              <p className="font-semibold">{appConfig.name}</p>

              <p className="text-xs text-slate-500">Retail Management System</p>
            </div>
          </div>

          <Badge variant="secondary">v{appConfig.version}</Badge>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          <Badge variant="outline">30 Days Fullstack & DevOps Challenge</Badge>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Modern retail management, simplified.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
            CashierFlow is a full-stack Point of Sale and Inventory Management System built with
            Next.js, TypeScript, PostgreSQL, and Prisma.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/api/health"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Check API Status
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <a
              href="#features"
              className="rounded-lg border bg-white px-5 py-3 text-sm font-medium transition hover:bg-slate-100"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div id="features" className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title} className="bg-white">
                <CardHeader className="space-y-3">
                  <div className="w-fit rounded-lg bg-blue-50 p-3 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 rounded-xl border bg-white p-6">
          <div className="flex items-center gap-3">
            <Workflow className="h-5 w-5 text-blue-600" />

            <h2 className="font-semibold">Development Status</h2>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Day 03 — Application Foundation. The project is currently preparing its core development
            environment, modular architecture, and automated testing configuration.
          </p>

          <p className="mt-3 text-xs text-slate-500">Store timezone: {env.STORE_TIMEZONE}</p>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-6 text-sm text-slate-500">
          <p>CashierFlow — Portfolio Project</p>
          <p>Built by ZyxxBoy</p>
        </div>
      </footer>
    </main>
  );
}
