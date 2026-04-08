import React from "react";
import "./dashboard.css";

export default function Dashboard() {
    return (
        <div className="dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">ETHFI</div>
                <div className="icons">
                    <div className="icon active"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main">
                <div className="grid">

                    {/* Wallet Balance */}
                    <div className="card">
                        <h3>Your Wallet Balance</h3>
                        <div className="wallet-item">0 eETH</div>
                        <div className="wallet-item">0 eETHK</div>
                        <div className="wallet-item">0 eETHFI</div>
                    </div>

                    {/* Staking Rewards */}
                    <div className="card">
                        <h3>Staking Rewards</h3>
                        <div className="row">
                            <span>APR</span>
                            <span>3.16%</span>
                        </div>
                        <div className="row">
                            <span>Points</span>
                            <span>0</span>
                        </div>
                    </div>

                    {/* Refer Card */}
                    <div className="card gradient large">
                        <h2>Refer a Friend</h2>
                        <p>
                            Earn rewards when someone stakes using your referral link.
                        </p>
                        <button>Create Referral Link</button>
                    </div>

                    {/* Restaking */}
                    <div className="card center">
                        <h3>LRT Restaking Rewards</h3>
                        <p>Coming Soon 🔥</p>
                        <button className="outline">View Rewards</button>
                    </div>

                    {/* Networks */}
                    <div className="card wide">
                        <h3>Networks</h3>
                        <div className="table">
                            <div className="table-row header">
                                <span>Network</span>
                                <span>TVL</span>
                                <span>Boost</span>
                            </div>
                            <div className="table-row">
                                <span>Liquid ETH</span>
                                <span>$342M</span>
                                <span>4x</span>
                            </div>
                            <div className="table-row">
                                <span>Liquid USD</span>
                                <span>$53.8M</span>
                                <span>4x</span>
                            </div>
                        </div>
                    </div>

                    {/* Rewards */}
                    <div className="card">
                        <h3>Current Season Rewards</h3>
                        <ul>
                            <li>Partner Rewards ✔</li>
                            <li>LRT Tokens ✔</li>
                            <li>ETHFI Rewards</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}