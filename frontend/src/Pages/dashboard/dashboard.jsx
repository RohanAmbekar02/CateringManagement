import "./dashboard.css";

const DashboardCards = () => {
  return (
    <div className="dash-container container">
      <div className="dash-card blue shadow">
        <div className="dash-icon">👥</div>
        <div className="dash-content">
          <p>Total Customers</p>
          <h2>89</h2>
        </div>
      </div>

      <div className="dash-card violet shadow">
         <div className="dash-icon">🛒</div>
        <div className="dash-content">
           <p>Total Items</p>
          <h2>238</h2>
         </div>
      </div>

      <div className="dash-card orange shadow">
        <div className="dash-icon">📦</div>
        <div className="dash-content">
          <p>Total Orders</p>
          <h2>19</h2>
        
        </div>
      </div>

      <div className="dash-card teal shadow">
        <div className="dash-icon">💰</div>
        <div className="dash-content">
          <p>Total Cost</p>
          <h2>₹42K</h2>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
