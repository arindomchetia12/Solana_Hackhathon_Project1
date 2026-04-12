import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Footer from "../components/Footer";

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar-new">
                <div className="sidebar-top">
                    <div className="solaire-logo">
                        <div className="logo-box">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
                            </svg>
                        </div>
                        <div className="logo-text">
                            <h3>SOLAIRE</h3>
                            <p>AI OS</p>
                        </div>
                    </div>

                    <nav className="nav-group">
                        <label>CORE</label>
                        <Link to="/dashboard" className="nav-item active">
                            <span className="nav-icon">📊</span> Dashboard
                        </Link>
                        <Link to="/intent" className="nav-item">
                            <span className="nav-icon">🎯</span> Intent Agent <span className="status-dot"></span>
                        </Link>
                        <Link to="/payflow" className="nav-item">
                            <span className="nav-icon">#</span> PayFlow <span className="badge">3</span>
                        </Link>
                        <Link to="/guardian" className="nav-item">
                            <span className="nav-icon">🛡️</span> WalletGuardian
                        </Link>
                    </nav>

                    <nav className="nav-group">
                        <label>MORE</label>
                        <Link to="/about" className="nav-item">
                            <span className="nav-icon">ℹ️</span> About
                        </Link>
                        <Link to="/profile" className="nav-item">
                            <span className="nav-icon">👤</span> Profile
                        </Link>
                        <Link to="/settings" className="nav-item">
                            <span className="nav-icon">⚙️</span> Settings
                        </Link>
                    </nav>
                </div>

                <div className="sidebar-bottom">
                    <div className="wallet-status">
                        <span className="status-indicator"></span> 7xKp...3mWq
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Header */}
                <header className="main-header">
                    <div className="header-left">
                        <h1>Good morning</h1>
                        <p>Your onchain OS is active and watching.</p>
                    </div>
                    <div className="header-right">
                        <div className="status-pill blue">Devnet</div>
                        <button className="icon-btn">
                            <span className="icon">🔔</span>
                            <span className="notif-dot"></span>
                        </button>
                    </div>
                </header>

                {/* Intent Agent Input */}
                <section className="intent-agent-section">
                    <div className="intent-card">
                        <label>● INTENT AGENT — TELL ME WHAT TO DO</label>
                        <div className="input-group">
                            <input type="text" placeholder="e.g. Send 1 SOL to John every Friday..." />
                            <button className="execute-btn">Execute</button>
                        </div>
                        <div className="quick-actions">
                            <button className="tag">Send 0.5 SOL to Alice</button>
                            <button className="tag">Stake 2 SOL</button>
                            <button className="tag">Weekly payment</button>
                            <button className="tag">Scan wallet</button>
                        </div>
                    </div>
                </section>

                {/* Metrics Stats Grid */}
                <section className="stats-grid">
                    <div className="stat-card">
                        <label>SOL BALANCE</label>
                        <div className="stat-value">12.48</div>
                        <div className="stat-sub">≈ $1,803 USD</div>
                        <div className="stat-trend positive">+2.1% today</div>
                    </div>
                    <div className="stat-card">
                        <label>STAKED</label>
                        <div className="stat-value">5.00</div>
                        <div className="stat-sub">7.52% APR - Jito</div>
                        <div className="stat-trend positive">+0.003 SOL today</div>
                    </div>
                    <div className="stat-card">
                        <label>SCHEDULED</label>
                        <div className="stat-value">3</div>
                        <div className="stat-sub">active payments</div>
                        <div className="stat-trend">Next: Friday</div>
                    </div>
                    <div className="stat-card">
                        <label>GUARDIAN ALERTS</label>
                        <div className="stat-value">1</div>
                        <div className="stat-sub">risky tx blocked</div>
                        <div className="stat-trend negative">Review needed</div>
                    </div>
                </section>

                {/* Bottom Activity/Schedule Grid */}
                <section className="bottom-grid">
                    {/* Recent Activity */}
                    <div className="activity-card">
                        <div className="card-header">
                            <h3>Recent activity</h3>
                            <button className="text-btn">View all</button>
                        </div>
                        <div className="activity-list">
                            <div className="activity-item">
                                <div className="activity-icon purple">↑</div>
                                <div className="activity-info">
                                    <h4>Sent to Alice.sol</h4>
                                    <p>2 hours ago</p>
                                </div>
                                <div className="activity-amount negative">-0.5 SOL</div>
                            </div>
                            <div className="activity-item">
                                <div className="activity-icon green">↓</div>
                                <div className="activity-info">
                                    <h4>Received from James</h4>
                                    <p>Yesterday</p>
                                </div>
                                <div className="activity-amount positive">+2.0 SOL</div>
                            </div>
                            <div className="activity-item">
                                <div className="activity-icon orange">⚠</div>
                                <div className="activity-info">
                                    <h4>Blocked unknown contract</h4>
                                    <p>Yesterday</p>
                                </div>
                                <div className="activity-amount blocked">Blocked</div>
                            </div>
                            <div className="activity-item">
                                <div className="activity-icon purple">↑</div>
                                <div className="activity-info">
                                    <h4>Staking deposit · Jito</h4>
                                    <p>2 days ago</p>
                                </div>
                                <div className="activity-amount negative">-5.0 SOL</div>
                            </div>
                        </div>
                    </div>

                    {/* PayFlow Schedule */}
                    <div className="schedule-card">
                        <div className="card-header">
                            <h3>PayFlow schedule</h3>
                            <button className="text-btn">+ Add payment</button>
                        </div>
                        <div className="schedule-list">
                            <div className="schedule-item">
                                <div className="schedule-meta">
                                    <span className="dot purple"></span>
                                    <div>
                                        <h4>John · Rent split</h4>
                                        <p>Every Friday</p>
                                    </div>
                                </div>
                                <div className="schedule-details">
                                    <div className="amount">1.0 SOL</div>
                                    <div className="next">Next: Apr 11</div>
                                </div>
                            </div>
                            <div className="schedule-item">
                                <div className="schedule-meta">
                                    <span className="dot green"></span>
                                    <div>
                                        <h4>Savings vault</h4>
                                        <p>Monthly · 1st</p>
                                    </div>
                                </div>
                                <div className="schedule-details">
                                    <div className="amount">0.5 SOL</div>
                                    <div className="next">Next: May 1</div>
                                </div>
                            </div>
                            <div className="schedule-item">
                                <div className="schedule-meta">
                                    <span className="dot orange"></span>
                                    <div>
                                        <h4>DAO subscription</h4>
                                        <p>Weekly · Mon</p>
                                    </div>
                                </div>
                                <div className="schedule-details">
                                    <div className="amount">0.1 SOL</div>
                                    <div className="next">Next: Apr 14</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}