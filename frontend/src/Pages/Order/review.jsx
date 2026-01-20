import './review.css';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// download pdf code

   const handleDownloadPdf = () => {
  const invoice = document.querySelector(".card");
  const btn = document.querySelector(".btn.btn-success");

     // hide button
    if (btn) btn.style.display = "none";

      html2canvas(invoice, { scale: 2, useCORS: true, scrollY: -window.scrollY })
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pageWidth - 20; 
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

     
      let scale = 1;
      if (imgHeight > pageHeight - 20) {
        scale = (pageHeight - 20) / imgHeight;
      }

      const finalWidth = imgWidth * scale;
      const finalHeight = imgHeight * scale;
      const x = (pageWidth - finalWidth) / 2;
      const y = 10; 

      pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight);
      pdf.save("Invoice.pdf");

     
      if (btn) btn.style.display = "block";
    });
};


const OderpreviewBill = () => {
  return (
<div className="table-text">

     <div className="card" >
     <div className="invoice-header" >
          <p className="shree-text">॥ Shree ॥</p>

     <button className="btn btn-success" onClick={handleDownloadPdf}> Download PDF </button>
       <h2 className="name">Catering Management System</h2>
          </div>

        <div className="bill-info">
          <div>
            <p><b>Bill No:</b> inv_86</p>
           <p><b>To:</b> Customer Name</p>
            <p><b>Mobile:</b> 9850837400</p>
          </div>
          <div className="date">
            <p><b>Date:</b> 09/01/2026</p>
          </div>
        </div>

          <table className="invoice-table">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Particulars</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ग्लास</td>
              <td>50</td>
              <td>5</td>
              <td>250</td>
            </tr>
            <tr>
              <td>2</td>
              <td>चमचे</td>
              <td>50</td>
              <td>3</td>
              <td>150</td>
            </tr>
            <tr>
              <td>3</td>
              <td>वाटी</td>
              <td>30</td>
              <td>6</td>
              <td>180</td>
            </tr>
           <tr>
              <td>4</td>
              <td>ताट</td>
              <td>50</td>
              <td>7</td>
              <td>350</td>
            </tr>


             <tr>
              <td>5</td>
              <td>कढई</td>
              <td>1</td>
              <td>300</td>
              <td>300</td>
            </tr>


             <tr>
              <td>6</td>
              <td>प्रेशर कुकर</td>
              <td>1</td>
              <td>400</td>
              <td>400</td>
            </tr>

            <tr>
              <td>7</td>
              <td>सिलिंडर</td>
              <td>1</td>
              <td>50</td>
              <td>500</td>
            </tr>

            <tr>
              <td>8</td>
              <td>मोठी भांडी</td>
              <td>3</td>
              <td>200</td>
              <td>600</td>
            </tr>

           
          </tbody>
        </table>
          <div className="amount-box">
          <p>Bill Amount: <span>₹ 2730</span></p>
          <p>Paid Amount: <span>₹ 0</span></p>
          <p className="Unpaid-Amount">Unpaid Amount: <span>₹ 2730</span></p>
        </div>
        <hr></hr>
         <h6> <span  className="bill-text"> Bill Amount In Words: </span><span className='Two-Thousand-text'>Two Thousand Seven Hundred Thirty.</span></h6>

          <div className="signature">
          <p>Customer Signature</p>
          <p>Authorized Signatory</p>
        </div>
        </div>
         </div>
  );
};

export default OderpreviewBill;