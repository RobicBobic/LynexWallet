import React, { useState } from 'react';
import { TrendingUp, Shield, BarChart3, Zap, Users, Activity, Award, BarChart2, X, Wallet, ExternalLink, ChevronDown, ChevronUp, Lock, Globe, Bell, DollarSign, TrendingDown, ArrowUpRight, Copy, Check } from 'lucide-react';
import './App.css';
import logo from './logo.png';

function App() {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [copied, setCopied] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('free');

  const features = [
    {
      icon: <BarChart3 size={32} />,
      title: 'Advanced Analytics',
      description: 'Track your portfolio performance with real-time charts, profit/loss analysis, and detailed transaction history across all your wallets. Get insights into your best performing assets and trading patterns.',
      details: ['Real-time price tracking', 'Historical performance data', 'Custom date range analysis', 'Export reports in CSV/PDF']
    },
    {
      icon: <Shield size={32} />,
      title: 'Multi-Chain Support',
      description: 'Connect wallets from Ethereum, Solana, BSC, Polygon, and 50+ other blockchains. One dashboard for all your crypto assets with seamless integration.',
      details: ['50+ blockchain networks', 'Automatic wallet sync', 'Cross-chain analytics', 'NFT support included']
    },
    {
      icon: <Zap size={32} />,
      title: 'Real-Time Tracking',
      description: 'Get instant notifications on wallet activity, price changes, and market movements. Never miss an important update with customizable alerts.',
      details: ['Instant push notifications', 'Price alerts', 'Transaction monitoring', 'Whale movement tracking']
    },
    {
      icon: <Lock size={32} />,
      title: 'Bank-Level Security',
      description: 'Your security is our priority. We use military-grade encryption, never store private keys, and implement regular security audits to protect your data.',
      details: ['256-bit encryption', 'Read-only access', '2FA authentication', 'Regular security audits']
    },
    {
      icon: <Globe size={32} />,
      title: 'DeFi Integration',
      description: 'Track your DeFi positions across major protocols. Monitor liquidity pools, staking rewards, and yield farming opportunities all in one place.',
      details: ['LP token tracking', 'Staking rewards calculator', 'Impermanent loss analysis', '100+ DeFi protocols']
    },
    {
      icon: <Bell size={32} />,
      title: 'Smart Alerts',
      description: 'Set up custom alerts for price movements, portfolio milestones, gas fees, and more. Stay informed without constantly checking your portfolio.',
      details: ['Custom price alerts', 'Gas fee notifications', 'Portfolio milestone alerts', 'Smart contract interactions']
    }
  ];

  const leaderboardData = [
    { rank: 1, wallet: '0x742d...3f4a', pnl: '+$127,450', winRate: '87%', trades: 342, change: '+12.5%', volume: '$2.4M' },
    { rank: 2, wallet: '0x8a3c...9d21', pnl: '+$98,320', winRate: '82%', trades: 278, change: '+8.3%', volume: '$1.8M' },
    { rank: 3, wallet: '0x5f1e...7b89', pnl: '+$76,890', winRate: '79%', trades: 195, change: '+15.7%', volume: '$1.2M' },
    { rank: 4, wallet: '0x3d92...4c56', pnl: '+$64,120', winRate: '75%', trades: 164, change: '+6.2%', volume: '$980K' },
    { rank: 5, wallet: '0x1a4b...8e23', pnl: '+$52,340', winRate: '71%', trades: 143, change: '+9.8%', volume: '$750K' },
    { rank: 6, wallet: '0x9c7f...2d11', pnl: '+$48,900', winRate: '69%', trades: 128, change: '+7.1%', volume: '$680K' },
    { rank: 7, wallet: '0x4e8a...6b33', pnl: '+$43,210', winRate: '68%', trades: 115, change: '+5.9%', volume: '$620K' },
  ];

  const faqs = [
    { 
      question: 'What is LYNEX Wallet?', 
      answer: 'LYNEX Wallet is a comprehensive cryptocurrency wallet analysis platform that provides real-time tracking, advanced analytics, and portfolio management across multiple blockchains. Simply connect your wallet to see detailed insights, performance metrics, and trading statistics. Our platform supports over 50 blockchain networks and provides institutional-grade analytics for retail traders.' 
    },
    { 
      question: 'Which wallets and blockchains are supported?', 
      answer: 'We support all major blockchain wallets including MetaMask, Phantom, Trust Wallet, Ledger, Trezor, Coinbase Wallet, and more. Our platform works across Ethereum, Solana, Binance Smart Chain, Polygon, Avalanche, Arbitrum, Optimism, and 50+ other networks. We also support Bitcoin, Litecoin, and other major cryptocurrencies.' 
    },
    { 
      question: 'Is LYNEX Wallet free to use?', 
      answer: 'LYNEX Wallet offers a free tier with essential features including portfolio tracking for up to 3 wallets, basic analytics, and wallet connection for 5 blockchain networks. Premium plans start at $9.99/month and unlock advanced features like unlimited wallets, detailed trading analytics, tax reporting, DeFi position tracking, priority support, and API access.' 
    },
    {
      question: 'How secure is my data with LYNEX Wallet?',
      answer: 'Your security is our top priority. We never store your private keys or seed phrases. All data is encrypted end-to-end using 256-bit AES encryption, and we use read-only access to display your portfolio. Your sensitive information never leaves your device. We undergo regular security audits by third-party firms and are SOC 2 Type II certified.'
    },
    {
      question: 'Can I track multiple wallets at once?',
      answer: 'Yes! Free users can track up to 3 wallets, while Premium users can track unlimited wallets across different blockchains. You can create custom portfolios, set up alerts, group wallets by strategy, and get comprehensive analytics across all your holdings in one unified dashboard. Enterprise users also get team collaboration features.'
    },
    {
      question: 'Do you offer tax reporting?',
      answer: 'Yes! Premium and Pro users get access to comprehensive tax reporting features. We automatically calculate your gains/losses, generate IRS-compliant reports (Form 8949), and support multiple accounting methods (FIFO, LIFO, HIFO). You can export reports compatible with TurboTax, TaxAct, and other major tax software.'
    },
    {
      question: 'How accurate is the portfolio tracking?',
      answer: 'We use real-time price feeds from multiple sources including major exchanges (Binance, Coinbase, Kraken) and data aggregators (CoinGecko, CoinMarketCap) to ensure accuracy. Our system updates prices every 30 seconds and uses volume-weighted average pricing (VWAP) for the most accurate valuations. Historical data is sourced from blockchain explorers for complete accuracy.'
    },
    {
      question: 'Can I use LYNEX Wallet for business or trading?',
      answer: 'Absolutely! Many professional traders and businesses use LYNEX Wallet. Our Pro and Enterprise plans include features specifically designed for high-volume traders and businesses: team accounts, API access, white-label options, advanced analytics, custom reporting, and dedicated account management. Contact our sales team for enterprise pricing.'
    }
  ];

  const stats = [
    { icon: <Users size={24} />, value: '50K+', label: 'Active Users', description: 'Trusted by traders worldwide' },
    { icon: <Activity size={24} />, value: '$2.5B+', label: 'Assets Tracked', description: 'Total portfolio value monitored' },
    { icon: <BarChart2 size={24} />, value: '15M+', label: 'Transactions', description: 'Analyzed and categorized' },
    { icon: <Award size={24} />, value: '99.9%', label: 'Uptime', description: 'Reliable 24/7 service' },
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with crypto tracking',
      features: [
        'Track up to 3 wallets',
        '5 blockchain networks',
        'Basic portfolio analytics',
        'Weekly email reports',
        'Community support',
        'Mobile app access'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: '/month',
      description: 'For serious traders who need advanced features',
      features: [
        'Track up to 25 wallets',
        'All 50+ blockchain networks',
        'Advanced analytics & insights',
        'Real-time price alerts',
        'Daily email reports',
        'Tax reporting & exports',
        'Priority support',
        'API access',
        'No ads'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Pro',
      price: '$29.99',
      period: '/month',
      description: 'For professional traders and businesses',
      features: [
        'Unlimited wallets',
        'All Premium features',
        'Advanced DeFi analytics',
        'Custom alerts & automations',
        'White-label options',
        'Team collaboration (5 users)',
        'Dedicated account manager',
        'Advanced API access',
        'Custom integrations'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'DeFi Trader',
      avatar: 'AC',
      comment: 'LYNEX Wallet completely transformed how I manage my crypto portfolio. The analytics are incredibly detailed and the multi-chain support is seamless. Best $10/month I spend!',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Portfolio Manager',
      avatar: 'SW',
      comment: 'As a professional managing multiple client portfolios, LYNEX Wallet has become indispensable. The tax reporting alone saves me hours each month. Highly recommend for serious traders.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Crypto Investor',
      avatar: 'MR',
      comment: 'I\'ve tried dozens of portfolio trackers, and LYNEX Wallet is by far the best. The real-time alerts helped me catch a major price movement and saved me thousands. Worth every penny!',
      rating: 5
    }
  ];

  const handleConnectWallet = () => {
    if (walletAddress.trim()) {
      setIsConnected(true);
      setShowWalletModal(false);
      setTimeout(() => {
        alert(`Wallet ${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)} successfully connected!`);
      }, 500);
    } else {
      alert('⚠️ Please enter a valid wallet address');
    }
  };

  const handleDisconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    alert('Wallet disconnected successfully');
  };

  const handleGetStarted = () => {
    setShowWalletModal(true);
  };

  const handleViewDocs = () => {
    alert('Documentation: Learn how to use all features of LYNEX Wallet\n\n• Quick Start Guide\n• API Documentation\n• Video Tutorials\n• Best Practices\n\nVisit: docs.lynexwallet.com');
  };

  const handleJoinCommunity = () => {
    alert('Join Our Community!\n\nConnect with 50,000+ traders:\n\n• Discord: Get instant support\n• Telegram: Daily market insights\n• Twitter: Latest updates\n• Reddit: Community discussions\n\nJoin now: discord.gg/lynexwallet');
  };

  const handleViewOnExplorer = (wallet) => {
    alert(`Opening blockchain explorer for wallet:\n${wallet}\n\nYou can view:\n• Transaction history\n• Token holdings\n• Smart contract interactions\n• Historical balance`);
  };

  const handleUpgradeToPremium = () => {
    alert('Upgrade to Premium!\n\nGet 50% off your first month:\n• Unlimited wallets\n• Advanced analytics\n• Priority support\n• Tax reporting\n\nUse code: LYNEX50\nOffer ends soon!');
  };

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName.toLowerCase());
    if (planName === 'Free') {
      setShowWalletModal(true);
    } else if (planName === 'Premium') {
      alert(`Starting your Premium free trial!\n\nYou get:\n• 14-day free trial\n• Full access to all features\n• Cancel anytime\n• No credit card required\n\nConnect your wallet to begin!`);
      setShowWalletModal(true);
    } else {
      alert('Contact our sales team!\n\nEmail: sales@lynexwallet.com\nPhone: +1 (555) 123-4567\n\nWe\'ll help you set up:\n• Custom pricing\n• Team onboarding\n• Enterprise features\n• Dedicated support');
    }
  };

  const handleCopyWallet = (wallet) => {
    navigator.clipboard.writeText(wallet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendReceiveSwap = (action) => {
    alert(`${action === 'send' ? 'Send' : action === 'receive' ? 'Receive' : 'Swap'} Crypto\n\nThis feature allows you to:\n• ${action === 'send' ? 'Transfer tokens to any wallet' : action === 'receive' ? 'Generate QR code for receiving' : 'Swap tokens instantly'}\n• ${action === 'send' ? 'Set custom gas fees' : action === 'receive' ? 'Share your wallet address' : 'Compare rates across DEXs'}\n• ${action === 'send' ? 'Save frequent recipients' : action === 'receive' ? 'Track incoming transactions' : 'Get best exchange rates'}\n\nConnect your wallet to use this feature!`);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="lynex-wallet">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <img src={logo} alt="LYNEX Wallet Logo" />
            <span>LYNEX Wallet</span>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#leaderboard">Leaderboard</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
          </nav>
          {isConnected ? (
            <button className="btn btn-secondary" onClick={handleDisconnectWallet}>
              <Wallet size={18} />
              {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleGetStarted}>
              Connect Wallet
            </button>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="badge">Now supporting 50+ blockchains</div>
            <h1 className="hero-title">
              Track Your <span className="gradient-text">Crypto Portfolio</span> with Precision
            </h1>
            <p className="hero-description">
              Connect your wallet and get real-time insights, advanced analytics, and comprehensive tracking across all major blockchains. Join 50,000+ traders using LYNEX Wallet to maximize their crypto investments.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large" onClick={handleGetStarted}>
                <TrendingUp size={20} />
                Get Started Free
              </button>
              <button className="btn btn-secondary btn-large" onClick={handleViewDocs}>
                View Documentation
              </button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-value">$2.5B+</div>
                <div className="stat-label">Assets Tracked</div>
              </div>
              <div className="hero-stat">
                <div className="stat-value">50K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="hero-stat">
                <div className="stat-value">50+</div>
                <div className="stat-label">Blockchains</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="portfolio-card">
              <div className="portfolio-header">
                <h3>Portfolio Overview</h3>
                <span className="profit positive">+24.5%</span>
              </div>
              <div className="portfolio-value">
                <div className="value-label">Total Value</div>
                <div className="value-amount">$127,450.32</div>
                <div className="value-change positive">+$24,891.23 (24h)</div>
              </div>
              <div className="chart-placeholder">
                <svg viewBox="0 0 300 150" className="chart">
                  <polyline
                    points="0,120 30,100 60,80 90,70 120,50 150,40 180,30 210,35 240,20 270,10 300,5"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="portfolio-actions">
                <button className="portfolio-btn" onClick={() => handleSendReceiveSwap('send')}>
                  <ArrowUpRight size={16} />
                  Send
                </button>
                <button className="portfolio-btn" onClick={() => handleSendReceiveSwap('receive')}>
                  <TrendingDown size={16} />
                  Receive
                </button>
                <button className="portfolio-btn" onClick={() => handleSendReceiveSwap('swap')}>
                  <DollarSign size={16} />
                  Swap
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Powerful Features for Smart Trading</h2>
            <p className="section-description">
              Everything you need to manage and analyze your cryptocurrency portfolio like a professional trader
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, idx) => (
                    <li key={idx}>✓ {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="leaderboard">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Top Traders Leaderboard</h2>
            <p className="section-description">
              See how the best performers are trading and learn from their strategies
            </p>
          </div>
          <div className="leaderboard-table">
            <div className="table-header">
              <div className="table-cell">Rank</div>
              <div className="table-cell">Wallet</div>
              <div className="table-cell">PnL</div>
              <div className="table-cell">Win Rate</div>
              <div className="table-cell">Trades</div>
              <div className="table-cell">24h Change</div>
              <div className="table-cell">Volume</div>
              <div className="table-cell">Actions</div>
            </div>
            {leaderboardData.map((trader) => (
              <div key={trader.rank} className="table-row">
                <div className="table-cell">
                  <div className="rank-badge">#{trader.rank}</div>
                </div>
                <div className="table-cell">
                  <span className="wallet-address">{trader.wallet}</span>
                </div>
                <div className="table-cell">
                  <span className="pnl positive">{trader.pnl}</span>
                </div>
                <div className="table-cell">
                  <span className="win-rate">{trader.winRate}</span>
                </div>
                <div className="table-cell">
                  <span className="trades">{trader.trades}</span>
                </div>
                <div className="table-cell">
                  <span className="change positive">{trader.change}</span>
                </div>
                <div className="table-cell">
                  <span className="volume">{trader.volume}</span>
                </div>
                <div className="table-cell">
                  <button 
                    className="icon-btn"
                    onClick={() => handleCopyWallet(trader.wallet)}
                    title="Copy Wallet"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                  <button 
                    className="icon-btn"
                    onClick={() => handleViewOnExplorer(trader.wallet)}
                    title="View on Explorer"
                  >
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Plan</h2>
            <p className="section-description">
              Start free and upgrade as you grow. All plans include core tracking features.
            </p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    {plan.price}
                    <span className="plan-period">{plan.period}</span>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-full`}
                  onClick={() => handleSelectPlan(plan.name)}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted by Traders Worldwide</h2>
            <p className="section-description">
              See what our users have to say about LYNEX Wallet
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="avatar">{testimonial.avatar}</div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Everything you need to know about LYNEX Wallet
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedFaq === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-content">
          <h2 className="cta-title">Ready to Take Control of Your Portfolio?</h2>
          <p className="cta-description">
            Join thousands of traders who trust LYNEX Wallet for comprehensive crypto tracking. Start free today!
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large" onClick={handleGetStarted}>
              <TrendingUp size={20} />
              Connect Your Wallet
            </button>
            <button className="btn btn-secondary btn-large" onClick={handleJoinCommunity}>
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-section">
            <div className="logo">
              <img src={logo} alt="LYNEX Wallet Logo" />
              <span>LYNEX Wallet</span>
            </div>
            <p className="footer-description">
              Professional cryptocurrency portfolio tracking and analytics platform trusted by traders worldwide. Track, analyze, and optimize your crypto investments with institutional-grade tools.
            </p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#leaderboard">Leaderboard</a>
            <a href="#pricing">Pricing</a>
            <a href="#api" onClick={(e) => { e.preventDefault(); handleViewDocs(); }}>API</a>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <a href="#docs" onClick={(e) => { e.preventDefault(); handleViewDocs(); }}>Documentation</a>
            <a href="#blog">Blog</a>
            <a href="#support">Support</a>
            <a href="#status">Status</a>
          </div>
          <div className="footer-section">
            <h4>Community</h4>
            <a href="#discord" onClick={(e) => { e.preventDefault(); handleJoinCommunity(); }}>Discord</a>
            <a href="#twitter">Twitter</a>
            <a href="#github">GitHub</a>
            <a href="#telegram">Telegram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 LYNEX Wallet. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Security</a>
          </div>
        </div>
      </footer>

      {/* Wallet Connection Modal */}
      {showWalletModal && (
        <div className="modal-overlay" onClick={() => setShowWalletModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Connect Your Wallet</h3>
              <button className="close-btn" onClick={() => setShowWalletModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-description">
                Enter your wallet address to start tracking your portfolio. We support ENS domains and wallet addresses from all major blockchains.
              </p>
              <input
                type="text"
                className="wallet-input"
                placeholder="0x... or .eth or .sol"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleConnectWallet()}
              />
              <button className="btn btn-primary btn-full" onClick={handleConnectWallet}>
                <Wallet size={18} />
                Connect Wallet
              </button>
              <div className="divider">
                <span>OR CONNECT WITH</span>
              </div>
              <div className="wallet-options">
                <button className="wallet-option" onClick={() => { setWalletAddress('0x742d...3f4a'); handleConnectWallet(); }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" />
                  <span>MetaMask</span>
                </button>
                <button className="wallet-option" onClick={() => { setWalletAddress('0x8a3c...9d21'); handleConnectWallet(); }}>
                  <img src="https://cryptologos.cc/logos/phantom-phantom-logo.svg" alt="Phantom" />
                  <span>Phantom</span>
                </button>
                <button className="wallet-option" onClick={() => { setWalletAddress('0x5f1e...7b89'); handleConnectWallet(); }}>
                  <img src="https://trustwallet.com/assets/images/favicon.ico" alt="Trust Wallet" />
                  <span>Trust Wallet</span>
                </button>
              </div>
              <p className="modal-footer-text">
                We never store your private keys. Your data is encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;