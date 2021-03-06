import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
   constructor(props) {
      super(props);
      this.state = { newTypes: [] };
   }
   async componentDidMount() {
      const data = await fetch(
         "http://demo.mcs.gov.kh/moj/wp-json/wp/v2/categories?_fields=id,name,slug&parent=2"
      ).then((res) => res.json());
      this.setState({
         newTypes: data,
      });
      console.log(this.state.newTypes);
   }
   render() {
      return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light p-lg-0">
            <Link className="navbar-brand d-lg-none p-lg-0 p-sm-2">មាតិកា</Link>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown active">
                     <Link
                        className="nav-link"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                     >
                        អំពីក្រសួង
                     </Link>
                     <div
                        className="dropdown-menu "
                        aria-labelledby="navbarDropdown"
                     >
                        <Link className="dropdown-item" to="/welcome-message">
                           សារស្វាគមន៏
                        </Link>
                        <Link
                           className="dropdown-item"
                           to="/ministry-biography"
                        >
                           ជីវប្រវត្តិក្រសួង
                        </Link>
                        <Link className="dropdown-item" to="/404">
                           ជីវប្រវត្តិរដ្ឋមន្រ្ដី
                        </Link>
                        <Link className="dropdown-item" to="/structure">
                           រចនាសម្ព័ន្ឋក្រសួង
                        </Link>
                        <Link
                           className="dropdown-item"
                           to="/previous-ministers"
                        >
                           រដ្ឋមន្រ្ដីក្រសួងយុត្តិធម៌ចាប់ពីឆ្នាំ(1993-បច្ចុប្បន្ន)
                        </Link>
                        <Link className="dropdown-item" to="/404">
                           ព័ត៍មានមន្រ្តីរាជការក្រសួងយុត្តិធម៌
                        </Link>
                     </div>
                  </li>
                  <li className="nav-item dropdown ">
                     <Link
                        className="nav-link"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                     >
                        បណ្ដុំឯកសារ
                     </Link>
                     <div
                        className="dropdown-menu "
                        aria-labelledby="navbarDropdown"
                     >
                        <Link className="dropdown-item" to="/404">
                           ច្បាប់និងបទបញ្ញត្តិ
                        </Link>
                        <Link className="dropdown-item" to="/404">
                           សន្ទានុក្រមពាក្យច្បាប់
                        </Link>
                        <Link className="dropdown-item" to="/404">
                           បណ្ណាល័យឯកសារ
                        </Link>
                        <Link className="dropdown-item" to="/404">
                           Search Engine
                        </Link>
                     </div>
                  </li>
                  <li className="nav-item dropdown ">
                     <Link
                        className="nav-link"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        to={`/news/all`}
                     >
                        ព័ត៌មាននិងឯកសារ
                     </Link>
                     <div
                        className="dropdown-menu "
                        aria-labelledby="navbarDropdown"
                     >
                        {this.state.newTypes.map((v) => (
                           <Link
                              className="dropdown-item"
                              key={v.slug}
                              to={{
                                 pathname: `/news/${v.slug}`,
                                 state: { id: v.id },
                              }}
                           >
                              {v.name}
                           </Link>
                        ))}
                        {/* <Link className="dropdown-item">ព័ត៌មានក្រសួង</Link>
                        <Link className="dropdown-item">
                           ព័ត៌មានថ្នាក់ដឹកនាំ
                        </Link>
                        <Link className="dropdown-item">
                           ព័ត៌មានលេខាធិការដ្ឋានសាលាដំបូងរាជធានី-ខេត្ត
                        </Link> */}
                     </div>
                  </li>
                  <li className="nav-item dropdown ">
                     <Link
                        className="nav-link"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                     >
                        សេវាសាធារណៈ
                     </Link>
                     <div
                        className="dropdown-menu "
                        aria-labelledby="navbarDropdown"
                     >
                        <Link className="dropdown-item" to="/criminal-record">
                           ពាក្យស្នើសុំព្រឹត្តិបត្រថ្កាលទោស
                        </Link>
                     </div>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/404">
                        ការបោះពុម្ពផ្សាយ
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/contact">
                        ទំនាក់ទំនងសាធារណៈ
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}

export default Navbar;
