'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function Home() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [showDocsModal, setShowDocsModal] = useState(false)
  const [showVaultModal, setShowVaultModal] = useState(false)
  const [showAppModal, setShowAppModal] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground" style={{ fontFamily: '"Monaspace Neon", "Monaspace Argon", monospace' }}>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 md:py-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Wraith Onchain Logo" 
            width={36} 
            height={36}
            className="w-9 h-9 md:w-10 md:h-10"
          />
          <span className="text-lg md:text-xl font-bold tracking-tight">WRAITH</span>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={() => setShowDocsModal(true)}
            className="text-xs md:text-sm text-muted-foreground hover:text-accent neon-glow transition-colors"
          >
            Docs
          </button>
          <a 
            href="https://x.com/okwraithonchain" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs md:text-sm text-muted-foreground hover:text-accent neon-glow transition-colors"
          >
            X
          </a>
          <button 
            onClick={() => setShowAppModal(true)}
            className="px-3 md:px-4 py-1.5 md:py-2 border border-accent text-accent text-xs font-bold tracking-wider hover:bg-accent hover:text-background neon-glow transition-all duration-200"
          >
            LAUNCH APP
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 text-center max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
          WRAITH<br />ONCHAIN
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
          Automated vaults for prediction market arbitrage.
        </p>
        <button 
          onClick={() => setShowVaultModal(true)}
          className="px-6 md:px-8 py-3 md:py-4 bg-accent text-background font-bold text-sm md:text-base tracking-wide hover:bg-opacity-90 neon-glow transition-all duration-200 border border-accent"
        >
          ENTER THE VAULT
        </button>
      </section>

      {/* How It Works Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-20 tracking-tight">
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
              <h3 className="text-sm md:text-base font-bold mb-4 tracking-tight">Deposit USDC</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Deposit USDC into the vault.
              </p>
              <div className="mt-8 text-xl md:text-2xl text-accent font-light">→</div>
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
              <h3 className="text-sm md:text-base font-bold mb-4 tracking-tight">Receive vault shares</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Vault shares are minted based on the current vault price.
              </p>
              <div className="mt-8 text-xl md:text-2xl text-accent font-light">→</div>
            </div>

            {/* Step 3 */}
            <div
              className="border border-border p-6 md:p-8 transition-all duration-300"
              onMouseEnter={() => setHoveredStep(3)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                backgroundColor: hoveredStep === 3 ? '#131313' : 'transparent',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent text-background flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0">
                  3
                </div>
              </div>
              <h3 className="text-sm md:text-base font-bold mb-4 tracking-tight">Automated execution</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                The vault buys both YES and NO when their combined cost is below $1 after fees.
              </p>
              <div className="mt-8 text-xl md:text-2xl text-accent font-light">→</div>
            </div>

            {/* Step 4 */}
            <div
              className="border border-border p-6 md:p-8 transition-all duration-300"
              onMouseEnter={() => setHoveredStep(4)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                backgroundColor: hoveredStep === 4 ? '#131313' : 'transparent',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent text-background flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0">
                  4
                </div>
              </div>
              <h3 className="text-sm md:text-base font-bold mb-4 tracking-tight">Redeem USDC</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Redeem vault shares for USDC at the current vault price.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Steps Layout */}
        <div className="md:hidden space-y-6 mb-12 md:mb-20">
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
              <div key={step} className="border border-border p-4">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-9 h-9 rounded-full bg-accent text-background flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {step}
                  </div>
                </div>
                <h3 className="text-sm font-bold mb-2 tracking-tight">{titles[idx]}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{descriptions[idx]}</p>
                {idx < 3 && <div className="mt-3 text-lg text-accent">↓</div>}
              </div>
            )
          })}
        </div>

        {/* Where the arbitrage comes from */}
        <div className="border border-border p-6 md:p-12 mb-12 md:mb-20">
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 tracking-tight">
            Where the arbitrage comes from
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            Equivalent prediction markets can price the same outcome differently across venues. When Wraith Onchain can pair YES + NO exposure below $1 after fees, the vault can capture the spread at settlement.
          </p>
        </div>
      </section>

      {/* Why manual arbitrage is hard */}
      <section className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto border-t border-border">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16 tracking-tight">
          Why manual arbitrage<br />is hard
        </h2>

        <p className="text-xs md:text-sm text-muted-foreground mb-10 md:mb-12 leading-relaxed">
          Finding valid arbitrage requires pairing equivalent markets, calculating prices and fees, checking liquidity, and managing positions across venues before the spread disappears.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Manual */}
          <div className="border border-red-900/50 p-6 md:p-12 bg-red-950/10">
            <h3 className="text-sm md:text-base font-bold mb-6 md:mb-8 tracking-wide text-red-400 uppercase">
              Manual Execution
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex gap-3 text-xs md:text-sm text-muted-foreground">
                <span className="text-red-400 font-bold flex-shrink-0">•</span>
                <span>Decisions happen under pressure</span>
              </li>
              <li className="flex gap-3 text-xs md:text-sm text-muted-foreground">
                <span className="text-red-400 font-bold flex-shrink-0">•</span>
                <span>Reaction time is slow</span>
              </li>
              <li className="flex gap-3 text-xs md:text-sm text-muted-foreground">
                <span className="text-red-400 font-bold flex-shrink-0">•</span>
                <span>Arbitrage windows are missed</span>
              </li>
              <li className="flex gap-3 text-xs md:text-sm text-muted-foreground">
                <span className="text-red-400 font-bold flex-shrink-0">•</span>
                <span>Positions are harder to manage</span>
              </li>
            </ul>
          </div>

          {/* Vault */}
          <div className="border border-accent/50 p-6 md:p-12 bg-accent/5">
            <h3 className="text-sm md:text-base font-bold mb-6 md:mb-8 tracking-wide text-accent uppercase">
              Wraith Onchain Vault
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex gap-3 text-xs md:text-sm text-muted-foreground">
                <span className="text-accent font-bold flex-shrink-0">✓</span>
                <span>Monitors pricing conditions</span>
              </li>
              <li className="flex gap-3 text-xs md:text-sm text-muted-foreground">
                <span className="text-accent font-bold flex-shrink-0">✓</span>
                <span>Executes by predefined rules</span>
              </li>
              <li className="flex gap-3 text-xs md:text-sm text-muted-foreground">
                <span className="text-accent font-bold flex-shrink-0">✓</span>
                <span>Captures valid spread conditions</span>
              </li>
              <li className="flex gap-3 text-xs md:text-sm text-muted-foreground">
                <span className="text-accent font-bold flex-shrink-0">✓</span>
                <span>Packages execution into vault shares</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vault Activity Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto border-t border-border">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 tracking-tight">
          Wraith Onchain Vault Activity
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground mb-8 md:mb-12">Live beta data. Performance is not guaranteed.</p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20">
          <div>
            <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2 md:mb-3">
              TVL
            </p>
            <p className="text-3xl md:text-4xl font-bold tracking-tight">—</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2 md:mb-3">
              Expected APR
            </p>
            <p className="text-3xl md:text-4xl font-bold tracking-tight">
              ≈ <span className="text-accent">12%</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2">(COMMUNITY REWARDS NOT INCLUDED)</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2 md:mb-3">
              Open Pairs
            </p>
            <p className="text-3xl md:text-4xl font-bold tracking-tight">0</p>
          </div>
        </div>

        {/* Recent Pairs */}
        <div className="border border-border p-6 md:p-12">
          <h3 className="text-sm md:text-base font-bold mb-4 md:mb-8 tracking-tight">Recent captured pairs</h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            RECENT PAIRS WILL APPEAR HERE WHEN OPEN POSITIONS ARE AVAILABLE.
          </p>
          <button className="inline-block mt-4 md:mt-6 text-accent hover:text-accent neon-glow transition-colors font-bold tracking-wide text-xs md:text-sm">
            VIEW ALL PAIRS →
          </button>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto border-t border-border">
        <h3 className="text-sm md:text-base font-bold mb-4 md:mb-6 tracking-tight">Risk disclosure</h3>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Wraith Onchain is currently in beta. Vault performance is not guaranteed. Automated strategies may carry execution, settlement, smart contract, and operational risks. Audit is pending.
        </p>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto border-t border-border text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 tracking-tight">
          Explore the Wraith<br />Onchain Vault
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          <button 
            onClick={() => setShowAppModal(true)}
            className="px-6 md:px-8 py-3 md:py-4 bg-accent text-background font-bold text-sm md:text-base tracking-wide hover:bg-opacity-90 neon-glow transition-all duration-200 border border-accent"
          >
            OPEN VAULT APP
          </button>
          <button 
            onClick={() => setShowDocsModal(true)}
            className="px-6 md:px-8 py-3 md:py-4 border border-accent text-accent font-bold text-sm md:text-base tracking-wide hover:bg-accent hover:text-background neon-glow transition-all duration-200"
          >
            READ DOCS
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-8 py-8 md:py-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-xs md:text-sm text-muted-foreground">
          <p className="mb-2">© 2024 Wraith Onchain. All rights reserved.</p>
          <p>Powered by <a href="https://x.com/Conn3ctprotocol" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 neon-glow transition-colors">@Conn3ctprotocol</a></p>
        </div>
      </footer>
      {/* Docs Modal */}
      {showDocsModal && (
        <div className="fixed inset-0 modal-overlay flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-border sticky top-0 bg-background/95">
              <h2 className="text-lg md:text-xl font-bold tracking-tight">Documentation</h2>
              <button 
                onClick={() => setShowDocsModal(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4 md:p-6 space-y-6">
              <section>
                <h3 className="text-sm md:text-base font-bold mb-3 tracking-tight text-accent">Overview</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                  Wraith Onchain is an automated vault designed for prediction market arbitrage. It continuously monitors pricing conditions across multiple prediction markets and executes arbitrage strategies when optimal conditions are met.
                </p>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-bold mb-3 tracking-tight text-accent">How It Works</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-foreground mb-1">1. Deposit USDC</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Deposit USDC into the vault to receive vault shares. Your contribution is now part of the vault&apos;s capital pool.</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-foreground mb-1">2. Vault Shares</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Vault shares are minted proportionally based on your deposit relative to the total vault TVL and current vault price.</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-foreground mb-1">3. Automated Execution</p>
                    <p className="text-xs md:text-sm text-muted-foreground">The vault monitors multiple prediction markets and executes arbitrage when YES + NO combined cost is below $1 after all fees.</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-foreground mb-1">4. Redemption</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Redeem your vault shares for USDC at the current vault price. Your share of profits is automatically included.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-bold mb-3 tracking-tight text-accent">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>Automated execution eliminates reaction time delays</span>
                  </li>
                  <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>Multi-venue market monitoring for optimal opportunities</span>
                  </li>
                  <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>Professional risk management and position sizing</span>
                  </li>
                  <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>Transparent pricing and fee structure</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-bold mb-3 tracking-tight text-accent">Risks</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-xs md:text-sm text-red-400/80">
                    <span className="flex-shrink-0">•</span>
                    <span>Smart contract risk - vault is currently in beta and audit is pending</span>
                  </li>
                  <li className="flex gap-2 text-xs md:text-sm text-red-400/80">
                    <span className="flex-shrink-0">•</span>
                    <span>Market risk - prediction outcomes may not match vault expectations</span>
                  </li>
                  <li className="flex gap-2 text-xs md:text-sm text-red-400/80">
                    <span className="flex-shrink-0">•</span>
                    <span>Operational risk - execution failures or delays may occur</span>
                  </li>
                  <li className="flex gap-2 text-xs md:text-sm text-red-400/80">
                    <span className="flex-shrink-0">•</span>
                    <span>Settlement risk - delays or failures at market venues</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-bold mb-3 tracking-tight text-accent">Performance</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3">
                  Expected APR: ≈12% (community rewards not included). Actual performance depends on market conditions, arbitrage opportunities, and execution success rates.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground italic">
                  Performance is not guaranteed. Past results do not indicate future performance.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* Vault Details Modal */}
      {showVaultModal && (
        <div className="fixed inset-0 modal-overlay flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-lg max-w-2xl w-full">
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
              <h2 className="text-lg md:text-xl font-bold tracking-tight">Wraith Onchain Vault</h2>
              <button 
                onClick={() => setShowVaultModal(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4 md:p-6 space-y-6">
              <section>
                <h3 className="text-sm md:text-base font-bold mb-3 tracking-tight text-accent">What is the Vault?</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  The Wraith Onchain Vault is an automated smart contract system that discovers and executes arbitrage opportunities in prediction markets. Instead of manually tracking prices across venues, the vault continuously scans for profitable pairs where YES + NO prices sum to less than $1.
                </p>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-bold mb-3 tracking-tight text-accent">How Arbitrage Works</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3">
                  When two prediction markets price the same outcome differently, a spread exists. If you can buy both YES and NO for less than $1 combined, you lock in a guaranteed profit at settlement regardless of the actual outcome.
                </p>
                <div className="bg-card border border-border p-3 rounded text-xs md:text-sm text-muted-foreground font-mono">
                  <p>Example:</p>
                  <p>Market A: YES = $0.55</p>
                  <p>Market B: NO = $0.40</p>
                  <p>Cost: $0.55 + $0.40 = $0.95</p>
                  <p className="text-accent mt-2">Profit at settlement: $1.00 - $0.95 - fees = ~4% return</p>
                </div>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-bold mb-3 tracking-tight text-accent">Why Use the Vault?</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="text-accent flex-shrink-0">•</span>
                    <span>24/7 automated monitoring - never miss an opportunity</span>
                  </li>
                  <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="text-accent flex-shrink-0">•</span>
                    <span>Instant execution when conditions are met</span>
                  </li>
                  <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="text-accent flex-shrink-0">•</span>
                    <span>No technical knowledge required</span>
                  </li>
                  <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="text-accent flex-shrink-0">•</span>
                    <span>Professional position management</span>
                  </li>
                </ul>
              </section>

              <div className="bg-accent/10 border border-accent/30 p-4 rounded">
                <p className="text-xs md:text-sm text-foreground font-semibold mb-3">Ready to start?</p>
                <button className="w-full px-4 py-2.5 bg-accent text-background font-bold text-sm tracking-wide hover:bg-opacity-90 neon-glow transition-all duration-200 border border-accent">
                  CONNECT WALLET
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Vault App Modal */}
      {showAppModal && (
        <div className="fixed inset-0 modal-overlay flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-border sticky top-0 bg-background/95">
              <h2 className="text-lg md:text-xl font-bold tracking-tight">Vault Dashboard</h2>
              <button 
                onClick={() => setShowAppModal(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4 md:p-6">
              {/* Dashboard Header */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="border border-border p-4 rounded">
                  <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">TVL</p>
                  <p className="text-2xl md:text-3xl font-bold tracking-tight">$2.45M</p>
                  <p className="text-xs text-muted-foreground mt-1">↑ 12% this month</p>
                </div>
                <div className="border border-border p-4 rounded">
                  <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">Your Balance</p>
                  <p className="text-2xl md:text-3xl font-bold tracking-tight">$50,000</p>
                  <p className="text-xs text-accent mt-1">23,810 shares</p>
                </div>
                <div className="border border-border p-4 rounded">
                  <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">Expected APR</p>
                  <p className="text-2xl md:text-3xl font-bold tracking-tight text-accent">≈ 12%</p>
                  <p className="text-xs text-muted-foreground mt-1">Community rewards TBA</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="border border-border p-4 md:p-6 rounded mb-6">
                <h3 className="text-sm md:text-base font-bold mb-4 tracking-tight">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-foreground">Arbitrage Executed</p>
                      <p className="text-xs text-muted-foreground">YES/NO pair on Sports Market</p>
                    </div>
                    <p className="text-xs md:text-sm font-bold text-accent">+$1,245</p>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-foreground">Settlement Received</p>
                      <p className="text-xs text-muted-foreground">Previous arbitrage settled</p>
                    </div>
                    <p className="text-xs md:text-sm font-bold text-accent">+$892</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-foreground">Deposit</p>
                      <p className="text-xs text-muted-foreground">USDC deposited to vault</p>
                    </div>
                    <p className="text-xs md:text-sm font-bold text-foreground">$50,000</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-accent text-background font-bold text-sm tracking-wide hover:bg-opacity-90 neon-glow transition-all duration-200 border border-accent rounded">
                  DEPOSIT MORE USDC
                </button>
                <button className="w-full px-4 py-3 border border-accent text-accent font-bold text-sm tracking-wide hover:bg-accent hover:text-background neon-glow transition-all duration-200 rounded">
                  WITHDRAW
                </button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                This is a mock interface for demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
