import React from 'react';

import './orders.css';

export default function orders() {
  return (
      <div className="orderTabel">
        <table>
          <thead className="Head">
            <tr>
              <th>Order Number</th>
              <th>Status</th>
              <th>Operator</th>
              <th>Location</th>
              <th>Start Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#2458</td>
              <td><p className="Canceled">Canceled</p></td>
              <td>Darrel Williamson</td>
              <td>corona,Michigan</td>
              <td>03/03/12,22:43</td>
              <td>01/05/12,17:15</td>
            </tr>
            <tr>
              <td>#3530</td>
              <td><p className="Success">Delivered</p></td>
              <td>Dustin Wilson</td>
              <td>Westminster,Kentucky</td>
              <td>01/04/12, 22:50</td>
              <td>10/09/12, 17:50</td>
            </tr>
            <tr>
              <td>#4540</td>
              <td><p className="Success">Delivered</p></td>
              <td>Jerome Simmons</td>
              <td>Desto,Okalhoma</td>
              <td>03/04/12,22:43</td>
              <td>01/08/15,17:15</td>
            </tr>
            <tr>
              <td>#9498</td>
              <td><p className="Process">Pending</p></td>
              <td>Norma Russel</td>
              <td>San jose,South Dakota</td>
              <td>03/05/12,22:43</td>
              <td>01/06/15,17:15</td>
            </tr>
            <tr>
              <td>#5004</td>
              <td><p className="Canceled">Canceled</p></td>
              <td>Regina Bell</td>
              <td>San jose</td>
              <td>03/03/12,22:43</td>
              <td>01/09/15,17:15</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}
