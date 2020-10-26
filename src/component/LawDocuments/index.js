import React, { Component } from "react";
import styles from "./index.module.css";

import Paginate from "../Shared/Pagination";

export class index extends Component {
  render() {
    return (
      <div className={styles.lawDocumentsContainer}>
        <h1>Search for any Document</h1>
        <div className={styles.inputContainer + " row m-0"}>
          <input type="text" placeholder="ឈ្មោះឯកសារ"></input>
          <input type="text" placeholder="ខ្លឹមសារនៅក្នុងអត្ថបទ"></input>
          <input type="text" placeholder="អ្នកចុះហត្ថលេខា"></input>
          <input type="text" placeholder="..."></input>
        </div>

        {/* Table */}
        <div className={"px-2 table-responsive-lg " + styles.tableContainer}>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">លេខសំគាល់</th>
                <th scope="col">ឈ្មោះឯកសារ</th>
                <th scope="col">ប្រភេទឯកសារ</th>
                <th scope="col">ថ្ងៃបោះពុម្ភ</th>
                <th scope="col">Pdf(ខ្មែរ)</th>
                <th scope="col">Pdf(អង់គ្លេស)</th>
                <th scope="col">ចែករំលែក</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          {/* Pagination */}
          <Paginate pageCount={1} />
        </div>
      </div>
    );
  }
}

export default index;