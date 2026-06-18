'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background text-foreground" style={{ fontFamily: '"Monaspace Neon", "Monaspace Argon", monospace' }}>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-background" />
          </div>
          <span className="text-2xl font-bold tracking-tight">WRAITH</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Telegram
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Farcaster
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            X
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Documentation
          </Link>
          <button className="px-4 py-2 border border-accent text-accent text-xs font-bold tracking-wider hover:bg-accent hover:text-background transition-all duration-200">
            LAUNCH APP
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 text-center max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-6 leading-tight">
          WRAITH<br />ONCHAIN
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Automated vaults for prediction market arbitrage.
        </p>
        <button className="px-8 py-4 bg-accent text-background font-bold text-lg tracking-wide hover:bg-opacity-90 transition-all duration-200 border border-accent">
          ENTER THE VAULT
        </button>
      </section>

      {/* How It Works Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-20 tracking-tight">
          How the pArbitrage<br />Vault Works
        </h2>

        {/* Desktop Steps Layout */}
        <div className="hidden md:grid gap-8 mb-20">
          <div className="grid grid-cols-4 gap-6">
            {/* Step 1 */}
            <div
              className="border border-border p-8 transition-all duration-300"
              onMouseEnter={() => setHoveredStep(1)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                backgroundColor: hoveredStep === 1 ? '#131313' : 'transparent',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Deposit USDC</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deposit USDC into the vault.
              </p>
              <div className="mt-8 text-2xl text-accent font-light">→</div>
            </div>

            {/* Step 2 */}
            <div
              className="border border-border p-8 transition-all duration-300"
              onMouseEnter={() => setHoveredStep(2)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                backgroundColor: hoveredStep === 2 ? '#131313' : 'transparent',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Receive vault shares</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vault shares are minted based on the current vault price.
              </p>
              <div className="mt-8 text-2xl text-accent font-light">→</div>
            </div>

            {/* Step 3 */}
            <div
              className="border border-border p-8 transition-all duration-300"
              onMouseEnter={() => setHoveredStep(3)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                backgroundColor: hoveredStep === 3 ? '#131313' : 'transparent',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Automated execution</h3>
              <p className="text-muted-foreground leading-relaxed">
                The vault buys both YES and NO when their combined cost is below $1 after fees.
              </p>
              <div className="mt-8 text-2xl text-accent font-light">→</div>
            </div>

            {/* Step 4 */}
            <div
              className="border border-border p-8 transition-all duration-300"
              onMouseEnter={() => setHoveredStep(4)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                backgroundColor: hoveredStep === 4 ? '#131313' : 'transparent',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Redeem USDC</h3>
              <p className="text-muted-foreground leading-relaxed">
                Redeem vault shares for USDC at the current vault price.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Steps Layout */}
        <div className="md:hidden space-y-8 mb-20">
          {[1, 2, 3, 4].map((step, idx) => {
            const titles = [
              'Deposit USDC',
              'Receive vault shares',
              'Automated execution',
              'Redeem USDC',
            ]
            const descriptions = [
              'Deposit USDC into the vault.',
              'Vault shares are minted based on the current vault price.',
              'The vault buys both YES and NO when their combined cost is below $1 after fees.',
              'Redeem vault shares for USDC at the current vault price.',
            ]
            return (
              <div key={step} className="border border-border p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center font-bold flex-shrink-0">
                    {step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight">{titles[idx]}</h3>
                <p className="text-muted-foreground leading-relaxed">{descriptions[idx]}</p>
                {idx < 3 && <div className="mt-4 text-xl text-accent">↓</div>}
              </div>
            )
          })}
        </div>

        {/* Where the arbitrage comes from */}
        <div className="border border-border p-12 mb-20">
          <h3 className="text-2xl font-bold mb-6 tracking-tight">
            Where the arbitrage comes from
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Equivalent prediction markets can price the same outcome differently across venues. When Wraith Onchain can pair YES + NO exposure below $1 after fees, the vault can capture the spread at settlement.
          </p>
        </div>
      </section>

      {/* Why manual arbitrage is hard */}
      <section className="px-8 py-24 max-w-7xl mx-auto border-t border-border">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 tracking-tight">
          Why manual arbitrage<br />is hard
        </h2>

        <p className="text-muted-foreground mb-12 leading-relaxed">
          Finding valid arbitrage requires pairing equivalent markets, calculating prices and fees, checking liquidity, and managing positions across venues before the spread disappears.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Manual */}
          <div className="border border-red-900/50 p-12 bg-red-950/10">
            <h3 className="text-xl font-bold mb-8 tracking-wide text-red-400 uppercase">
              Manual Execution
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-red-400 font-bold">•</span>
                <span>Decisions happen under pressure</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-red-400 font-bold">•</span>
                <span>Reaction time is slow</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-red-400 font-bold">•</span>
                <span>Arbitrage windows are missed</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-red-400 font-bold">•</span>
                <span>Positions are harder to manage</span>
              </li>
            </ul>
          </div>

          {/* Vault */}
          <div className="border border-accent/50 p-12 bg-accent/5">
            <h3 className="text-xl font-bold mb-8 tracking-wide text-accent uppercase">
              Wraith Onchain Vault
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">✓</span>
                <span>Monitors pricing conditions</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">✓</span>
                <span>Executes by predefined rules</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">✓</span>
                <span>Captures valid spread conditions</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">✓</span>
                <span>Packages execution into vault shares</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vault Activity Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto border-t border-border">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Wraith Onchain Vault Activity
        </h2>
        <p className="text-muted-foreground mb-12">Live beta data. Performance is not guaranteed.</p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div>
            <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-3">
              TVL
            </p>
            <p className="text-4xl font-bold tracking-tight">—</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-3">
              Expected APR
            </p>
            <p className="text-4xl font-bold tracking-tight">
              ≈ <span className="text-accent">12%</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2">(COMMUNITY REWARDS NOT INCLUDED)</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-3">
              Open Pairs
            </p>
            <p className="text-4xl font-bold tracking-tight">0</p>
          </div>
        </div>

        {/* Recent Pairs */}
        <div className="border border-border p-12">
          <h3 className="text-xl font-bold mb-8 tracking-tight">Recent captured pairs</h3>
          <p className="text-muted-foreground">
            RECENT PAIRS WILL APPEAR HERE WHEN OPEN POSITIONS ARE AVAILABLE.
          </p>
          <Link
            href="#"
            className="inline-block mt-6 text-accent hover:text-accent/80 transition-colors font-bold tracking-wide text-sm"
          >
            VIEW ALL PAIRS →
          </Link>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="px-8 py-16 max-w-7xl mx-auto border-t border-border">
        <h3 className="text-lg font-bold mb-6 tracking-tight">Risk disclosure</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Wraith Onchain is currently in beta. Vault performance is not guaranteed. Automated strategies may carry execution, settlement, smart contract, and operational risks. Audit is pending.
        </p>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-24 max-w-7xl mx-auto border-t border-border text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tight">
          Explore the Wraith<br />Onchain Vault
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="px-8 py-4 bg-accent text-background font-bold text-lg tracking-wide hover:bg-opacity-90 transition-all duration-200 border border-accent">
            OPEN VAULT APP
          </button>
          <button className="px-8 py-4 border border-accent text-accent font-bold text-lg tracking-wide hover:bg-accent hover:text-background transition-all duration-200">
            READ DOCS
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Wraith Onchain. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
