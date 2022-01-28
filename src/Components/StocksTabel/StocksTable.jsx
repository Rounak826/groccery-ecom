import React from 'react'
import { Check, X } from 'react-feather';
import './table.css';


export default function StocksTable() {
  return (
    <div className="table-container">
      <table className=" ghg flex-container">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Status</th>
            <th>Qty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody bgcolor="#f1f1f1">
          <tr>
            <td>ABCG113</td>
            <td>Lorem Ipsum</td>
            <td>Expired</td>
            <td>0</td>
            <td>
              <div className="Flex-buttons">
                <button className='B9' variant="primary">
                  <Check />
                </button>{'  '}
                <button className='B10' variant="primary" >
                  <X />
                </button>{'  '}
              </div>
            </td>

          </tr>
          <tr>
            <td>ABCG113</td>
            <td>Lorem Ipsum</td>
            <td>Expired</td>
            <td>0</td>
            <td>
              <div className="Flex-buttons">
                <button className='B9' variant="primary">
                  <Check />
                </button>{'  '}
                <button className='B10' variant="primary" >
                  <X />
                </button>{'  '}
              </div>
            </td>

          </tr>
          <tr>
            <td>ABCG113</td>
            <td>Lorem Ipsum</td>
            <td>Expired</td>
            <td>0</td>
            <td>
              <div className="Flex-buttons">
                <button className='B9' variant="primary">
                  <Check />
                </button>{'  '}
                <button className='B10' variant="primary" >
                  <X />
                </button>{'  '}
              </div>
            </td>

          </tr>
          <tr>
            <td>ABCG113</td>
            <td>Lorem Ipsum</td>
            <td>Expired</td>
            <td>0</td>
            <td>
              <div className="Flex-buttons">
                <button className='B9' variant="primary">
                  <Check />
                </button>{'  '}
                <button className='B10' variant="primary" >
                  <X />
                </button>{'  '}
              </div>
            </td>

          </tr>
          <tr>
            <td>ABCG113</td>
            <td>Lorem Ipsum</td>
            <td>Expired</td>
            <td>0</td>
            <td>
              <div className="Flex-buttons">
                <button className='B9' variant="primary">
                  <Check />
                </button>{'  '}
                <button className='B10' variant="primary" >
                  <X />
                </button>{'  '}
              </div>
            </td>

          </tr>
          <tr>
            <td>ABCG113</td>
            <td>Lorem Ipsum</td>
            <td>Expired</td>
            <td>0</td>
            <td>
              <div className="Flex-buttons">
                <button className='B9' variant="primary">
                  <Check />
                </button>{'  '}
                <button className='B10' variant="primary" >
                  <X />
                </button>{'  '}
              </div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>

  );
}
