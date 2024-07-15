import { useState } from 'react'
import './App.scss'

function App() {



  return (
    <>
      <div className="app">
      <header className="header">
        <div className="user-info">
          <img src="user-avatar-url" alt="User Avatar" className="avatar" />
          <div className="user-details">
            <p>Sohel Rana</p>
            <button className="balance-button"> Balance : 0 </button>
            <span> </span>
          </div>
        </div>
      </header>
      <main>
        <section className="actions">
          <div className="action-item">Send Money</div>
          <div className="action-item">Recharge</div>
          <div className="action-item">Cash Out</div>
          <div className="action-item">Make Payment</div>
          <div className="action-item">Add Money</div>
          <div className="action-item">Pay Bill</div>
          <div className="action-item">Tickets</div>
          <div className="action-item">More</div>
        </section>
        <h2>My bKash</h2>
        <section className="my-bkash">
       
          <div className="bkash-item">Sohel Rana</div>
          <div className="bkash-item">Akash</div>
          <div className="bkash-item">Internet</div>
          <div className="bkash-item">Card</div>
        </section>
        <section className="advertisement">
          <img src="ad-banner-url" alt="Advertisement" />
        </section>
        <h2>Suggestions</h2>
        <section className="suggestions">
         
          <div className="suggestion-item">Visa</div>
          <div className="suggestion-item">BTCL</div>
          <div className="suggestion-item">CoronaBD</div>
          <div className="suggestion-item">Donation</div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-item">Home</div>
        <div className="footer-item">Scan QR</div>
        <div className="footer-item">Inbox</div>
      </footer>
    </div>
    </>
  )
}

export default App
