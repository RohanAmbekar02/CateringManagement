import React from "react";
import "./customer-details.css";

import { FaEdit, FaTrash } from "react-icons/fa";

const Customers = () => {



  const items = [
    { id: 1, name: "pooja Deshmukh", Number: 9827345378 },
    { id: 2, name: "Rajesh Patil", Number: 9871423897 },
    { id: 3, name: "Anjili joshi", Number: 9356829017 },
    { id: 4, name: "Sachin Gupta", Number: 9353682849 },
    { id: 5, name: "Priya Mishra", Number: 94518223471 },
    { id: 6, name: "pooja Deshmukh", Number: 9827345378 },
    { id: 7, name: "Neha Kulkani", Number: 9827345378 },
    { id: 8, name: " Nitin Mishara", Number: 9827345378 },
    { id: 9, name: "pooja Deshmukh", Number: 9827345378 },

  ];

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="items-title m-0">Customers</h2>

        <button className="btn text-white btn-primary"   >
          + Add Customer
        </button>


      </div>

      {/* Search */}
      <div className="mb-3 d-flex">
        <input
          type="text"
          className="form-control w-100 mr-2"
          placeholder="Search Customers..."
        />
        <button className="btn  ms-2 btn-primary " >
          <i className="fas fa-search fs-5 text-white"></i>

        </button>
      </div>

      {/* Table */}
      <div className="table-responsive ">
        <table className="table table-bordered align-middle table-striped ">
          <thead className="table-light">
            <tr>
              <th className="action-col">Actions</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }} >Mo.Number</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="action-col ">
                  <div className="action-btns">
                    <button className="btn  btn-sm btn-outline-primary  ">
                      <FaEdit />
                    </button>
                    <button className="btn  btn-sm btn-outline-danger ">
                      <FaTrash />
                    </button>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.Number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers