import { FaWeight } from "react-icons/fa";
import "./details.css";

export default function Details() {
  return (
    <div className="page shadow container-fluid">


      <h2 className="page-title ml-2">Orders</h2>


      <div className="search-row">
        <div className="search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Search by customer name..." />
        </div>
        <button className="add-btn">+</button>
      </div>


      <div className="filters">
        <button className="filter active">All</button>
        <button className="filter"><i class="fa-sharp fa-solid fa-circle-check text-success"></i> Paid</button>
        <button className="filter"><i class="fa-solid fa-clock text-warning"></i> Pending</button>
      </div>




      {["धुमताळी", "कडवडी", "नवत तळी"].map((place, i) => (
        <div className="order-card shadow" key={i}>
          <div>
            <div className="order-title">
              🔒 मुख्याध्यापक, कि. प. प. शाळा, पुणे
            </div>


            <div className="green">
              ₹ Total amount: ₹ {i === 2 ? "6500.00" : i === 1 ? "4950.00" : "4990.00"}
            </div>

            <div className="red">
              ₹ Remaining amount: ₹ {i === 2 ? "6500.00" : i === 1 ? "4950.00" : "4990.00"}
            </div>
          </div>


          <div className="actions">
            <button className="pending-btn">Pending</button>


            <button className="icon book-icon"><i className="fa-solid fa-book"></i></button>
            <button className="icon phone-icon"><i className="fa-solid fa-phone"></i></button>
            <button className="icon delect-icon"><i className="fa-solid fa-trash"></i></button>
            <button className="icon pencil-icon"><i className="fa-solid fa-pencil text-primary"></i></button>
            <span className="dots">...</span>

          </div>

        </div>
      ))}

    </div>
  );
}