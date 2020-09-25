import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

// Image
import Activity1 from "../../asset/activity1.png";
import Activity2 from "../../asset/activity2.png";
import Activity3 from "../../asset/activity3.png";
import Activity4 from "../../asset/activity4.png";
import Activity5 from "../../asset/activity5.png";
import Activity6 from "../../asset/activity6.png";
import Facebook from "../../asset/facebook.png";
import Youtube from "../../asset/youtube.png";
import Telegram from "../../asset/telegram.png";

export class index extends Component {
  constructor(props) {
    super(props);
    this.marqueeRef = React.createRef();
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* Carousel */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-interval="3000"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="order-lg-1 order-2 carousel-left-container">
                  <div className="m-4">
                    <h4 className="news-title">
                      ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                      អញ្ជើញជាអធិបតីក្នុងពិធីប្រកាសតែងតាំង
                      និងចូលកាន់មុខតំណែងប្រធានសាលាដំបូងខេត្តព្រៃវែង
                    </h4>
                    <p className="carousel-left-container-date px-1 px-md-2 mt-lg-4">
                      ថ្ងៃទី៤ ខែសីហា ឆ្នាំ២០២០
                    </p>
                  </div>
                  <a
                    type="button"
                    className="btn btn-more-news d-none"
                    href="#"
                  >
                    បន្ថែម
                  </a>
                </div>
                <div
                  className=" order-1 order-lg-2 carousel-img"
                  style={{
                    backgroundImage:
                      "url(http://moj.gov.kh/files/user-folder/2020/08/004/002/017_040820_MOJ_KH.jpg)",
                  }}
                ></div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="order-lg-1 order-2 carousel-left-container">
                  <div className="m-4">
                    <h4 className="news-title">
                      ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                      និងជាអនុប្រធានអាជ្ញាធរជាតិប្រយុទ្ធប្រឆាំងគ្រឿងញៀនអញ្ជើញចូលរួមជាអធិបតីក្នុងពិធីដុតបំផ្លាញគ្រឿងញៀន
                      នៅស្វាយរៀង
                    </h4>
                    <p className="carousel-left-container-date px-1 px-md-2 mt-lg-4">
                      ថ្ងៃទី៤ ខែសីហា ឆ្នាំ២០២០
                    </p>
                  </div>
                  <a
                    type="button"
                    className="btn btn-more-news d-none"
                    href="#"
                  >
                    បន្ថែម
                  </a>
                </div>
                <div
                  className=" order-1 order-lg-2 carousel-img"
                  style={{
                    backgroundImage:
                      "url(http://moj.gov.kh/files/user-folder/2020/08/004/001/007_040820_MOJ_KH.jpg)",
                  }}
                ></div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="order-lg-1 order-2 carousel-left-container">
                  <div className="m-4">
                    <h4 className="news-title">
                      ឯកឧត្តមរដ្ឋមន្ត្រី កើត រិទ្ធ
                      អញ្ជើញជាអធិបតីក្នុងពិធីប្រកាសចូលកាន់មុខតំណែងជាផ្លូវការរបស់ប្រធានសាលាដំបូងខេត្តក្រចេះ
                    </h4>
                    <p className="carousel-left-container-date px-1 px-md-2 mt-3 mt-lg-4">
                      ថ្ងៃទី៣១ ខែកក្កដា ឆ្នាំ២០២០
                    </p>
                  </div>
                  <a
                    type="button"
                    className="btn btn-more-news d-none"
                    href="#"
                  >
                    បន្ថែម
                  </a>
                </div>
                <div
                  className=" order-1 order-lg-2 carousel-img"
                  style={{
                    backgroundImage:
                      "url(http://moj.gov.kh/files/user-folder/2020/07/031/001/003_310720_MOJ_KH.jpg)",
                  }}
                ></div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="order-lg-1 order-2 carousel-left-container">
                  <div className="m-4">
                    <h4 className="news-title">
                      ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                      បួងសួងសុំសេចក្តីសុខលើទ្រព្យសម្បត្តិថ្មីក្នុងវិស័យយុត្តិធម៌
                      នាទឹកដីអង្គរខេត្តសៀមរាប
                    </h4>
                    <p className="carousel-left-container-date px-1 px-md-2 mt-3 mt-lg-4">
                      ថ្ងៃទី២៨ ខែកក្កដា ឆ្នាំ២០២០
                    </p>
                  </div>
                  <a
                    type="button"
                    className="btn btn-more-news d-none"
                    href="#"
                  >
                    បន្ថែម
                  </a>
                </div>
                <div
                  className=" order-1 order-lg-2 carousel-img"
                  style={{
                    backgroundImage:
                      "url(http://moj.gov.kh/files/user-folder/2020/07/028/001/001_280720_MOJ_KH.jpg)",
                  }}
                ></div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="order-lg-1 order-2 carousel-left-container">
                  <div className="m-4">
                    <h4 className="news-title">
                      ឯកឧត្តមរដ្ឋមន្រ្តី​ក្រសួងយុត្តិធម៌ និង​ជាអនុប្រធានទី១
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយស្រុកមោងឬស្សីអញ្ជើញចូលរួមចែកកង់ចំនួន៣៥១​គ្រឿងដល់​សិស្សានុសិស្ស​នៃអនុវិទ្យាល័យតាណាក
                    </h4>
                    <p className="carousel-left-container-date px-1 px-md-2 mt-3 mt-lg-4">
                      ថ្ងៃទី២៧ ខែកក្កដា ឆ្នាំ២០២០
                    </p>
                  </div>
                  <a
                    type="button"
                    className="btn btn-more-news d-none"
                    href="#"
                  >
                    បន្ថែម
                  </a>
                </div>
                <div
                  className=" order-1 order-lg-2 carousel-img"
                  style={{
                    backgroundImage:
                      "url(http://moj-kh.herokuapp.com/Images/slideshow-5.jpg)",
                    backgroundPosition: "0 0",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="marquee">
            <h3 className="px-2">សេចក្ដីជូនដំណឹង</h3>
            <marquee
              ref={this.marqueeRef}
              behavior="scroll"
              direction="left"
              onMouseOver={() => {
                this.marqueeRef.current.stop();
              }}
              onMouseOut={() => {
                this.marqueeRef.current.start();
              }}
            >
              <a href="#">
                ក្នុងស្មារតីរួមចំណែកជាមួយរាជរដ្ឋាភិបាលក្នុងការប្រយុទ្ធប្រឆាំងនឹងជំងឺឆ្លងកូវីដ១៩
                (Covid-19)
              </a>
              <a href="#">
                ក្នុងស្មារតីរួមចំណែកជាមួយរាជរដ្ឋាភិបាលក្នុងការប្រយុទ្ធប្រឆាំងនឹងជំងឺឆ្លងកូវីដ១៩
                (Covid-19)
              </a>
              <a href="#">
                ក្នុងស្មារតីរួមចំណែកជាមួយរាជរដ្ឋាភិបាលក្នុងការប្រយុទ្ធប្រឆាំងនឹងជំងឺឆ្លងកូវីដ១៩
                (Covid-19)
              </a>
            </marquee>
          </div>
          <a
            className="carousel-control-prev d-none"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next d-none"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* End Carousel */}

        {/* Section */}
        <div className="sections-container mt-2">
          {/* Left Section */}
          <div className="left-section">
            {/* Minister Image */}
            <div className="minster-img-container p-2">
              <div className="minister-img">
                <div className="minister-img-title w-100 d-block text-center">
                  <span>ឯកឧត្តម កើត រិទ្ធ រដ្ឋមន្រ្ដីក្រសួងយុត្តិធម៌</span>
                </div>
              </div>
            </div>

            {/* Left Section links */}
            <div className="left-section-links-container my-2 p-2 py-3 pl-4">
              <ul>
                <li>
                  <Link>សកម្មភាពរដ្ឋមន្រ្ដី</Link>
                </li>
                <li>
                  <Link>សកម្មភាពថ្នាក់ដឹកនាំ</Link>
                </li>
                <li>
                  <Link>សុន្ទរកថារដ្ឋមន្រ្ដី</Link>
                </li>
                <li>
                  <Link>សេចក្ដីប្រកាសព័ត៌មាន</Link>
                </li>
              </ul>
            </div>

            {/* Activities */}
            <div className="activities-container mb-2">
              <div className="title mb-1 p-1 px-2 pt-2">
                សកម្មភាពរបស់ក្រសួងយុត្តិធម៌
              </div>
              <div className="activities">
                <div className="activity">
                  <Link>
                    <img src={Activity1} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        ពាក្យស្នើសុំព្រឺតិ្តបត្រ ថ្កោលទោស
                      </span>
                    </p>
                  </Link>
                </div>
                <div className="activity">
                  <Link>
                    <img src={Activity2} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        យុទ្ធការដោះស្រាយ ការកកស្ទះសំណុំរឿង
                      </span>
                    </p>
                  </Link>
                </div>
                <div className="activity">
                  <Link>
                    <img src={Activity3} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        លេខាធិការដ្ឋានសាលា ដំបូងរាជធានី-ខេត្ត
                      </span>
                    </p>
                  </Link>
                </div>
                <div className="activity">
                  <Link>
                    <img src={Activity4} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        សកម្មភាព ក្រសួងយុត្តិធម៌
                      </span>
                    </p>
                  </Link>
                </div>
                <div className="activity">
                  <Link>
                    <img src={Activity5} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        ឯកសារ បោះពុម្ភផ្សាយ
                      </span>
                    </p>
                  </Link>
                </div>
                <div className="activity">
                  <Link>
                    <img src={Activity6} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        បណ្ណាល័យ រូបភាព-វីដេអូ
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sections */}
          <div className="right-section">
            {/* Latest news */}
            <div className="latest-news-container">
              <div className="title mb-1 p-1 px-2 pt-2">ព័ត៌មានថ្មីៗ</div>
              <div className="latest-news row">
                <div className="latest-news-info col-lg-7 pt-0 pt-md-0 py-md-3 px-4">
                  <h1 className="latest-news-info-title">
                    ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                    អញ្ជើញជាអធិបតីក្នុងពិធីប្រកាសតែងតាំង
                    និងចូលកាន់មុខតំណែងប្រធានសាលាដំបូងខេត្តព្រៃវែង
                  </h1>
                  <p className="d-none d-lg-block latest-news-info-description">
                    នៅរសៀលថ្ងៃទី៤ ខែសីហា ឆ្នាំ២០២០ នេះ ឯកឧត្តម កើត រិទ្ធ
                    រដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌ បានអញ្ជើញ​ជាអធិបតីដ៏ខ្ពង់ខ្ពស់
                    ក្នុងពិធីប្រកាសតែងតាំង
                    និងចូលកាន់មុខតំណែងរបស់ប្រធានសាលាដំបូងខេត្តព្រៃវែង
                    <span>
                      <Link style={{ color: "#e53e3e" }}> អានបន្ត...</Link>
                    </span>
                  </p>
                  <p className="latest-news-info-date">
                    ថ្ងៃទី៤ ខែសីហា ឆ្នាំ២០២០
                  </p>
                </div>
                <div className="latest-news-thumbnail col-lg-5 p-0 pb-lg-3 pt-lg-2 pr-lg-2">
                  <div
                    style={{
                      backgroundImage:
                        "url(http://moj.gov.kh/files/user-folder/2020/08/004/002/017_040820_MOJ_KH.jpg)",
                    }}
                    className="py-1"
                  ></div>
                </div>
              </div>
            </div>

            {/* Daily news */}
            <div className="daily-news-container my-2">
              <div className="title mb-1 p-1 px-2 pt-2">
                ព័ត៌មានប្រចាំថ្ងៃ
                <span className="more">
                  <Link style={{ textDecoration: "none", color: "inherit" }}>
                    ច្រើនទៀត...
                  </Link>
                </span>
              </div>
              <div className="daily-news row px-3">
                <div className="each-daily-news col-md-6 col-12 py-4 px-2 m-0">
                  <div
                    className="each-daily-news-thumbnail"
                    style={{ width: "40% !important", height: "100%" }}
                  >
                    <img
                      src="http://moj.gov.kh/files/user-folder/2020/07/027/001/001_270720_MOJ_KH.jpg"
                      alt=""
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div
                    className="each-daily-news-info py-lg-1 pl-2"
                    style={{ width: "60% !important" }}
                  >
                    <h1 className="each-daily-news-info-title">
                      <Link>
                        ឯកឧត្តមរដ្ឋមន្រ្តី​ក្រសួងយុត្តិធម៌ និង​ជាអនុប្រធានទី១
                        នៃក្រុមការងារថ្នាក់ជាតិចុះជួយស្រុកមោងឬស្សី...
                      </Link>
                    </h1>
                    <p className="each-daily-news-info-date">
                      ថ្ងៃទី២៧ ខែកក្កដា ឆ្នាំ២០២០
                    </p>
                  </div>
                </div>
                <div className="each-daily-news col-md-6 col-12 py-4 px-2 m-0">
                  <div
                    className="each-daily-news-thumbnail"
                    style={{ width: "40% !important", height: "100%" }}
                  >
                    <img
                      src="http://www.moj.gov.kh/files/events/1595733428003_240720_MOJ_KH.jpg"
                      alt=""
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div
                    className="each-daily-news-info py-lg-1 pl-2"
                    style={{ width: "60% !important" }}
                  >
                    <h1 className="each-daily-news-info-title">
                      <Link>
                        ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                        អញ្ជើញចូលរួមជាអធិបតីក្នុងពិធីប្រកាសផ្ទេរ
                        និងចូលកាន់មុខតំណែង...
                      </Link>
                    </h1>
                    <p className="each-daily-news-info-date">
                      ថ្ងៃទី២៦ ខែកក្កដា ឆ្នាំ២០២០
                    </p>
                  </div>
                </div>
                <hr className="w-100 m-0 d-none d-md-block" />
                <div className="each-daily-news col-md-6 col-12 py-4 px-2 m-0">
                  <div
                    className="each-daily-news-thumbnail"
                    style={{ width: "40% !important", height: "100%" }}
                  >
                    <img
                      src="http://moj.gov.kh/files/user-folder/2020/07/022/001/017_220720_MOJ_KH.jpg"
                      alt=""
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div
                    className="each-daily-news-info py-lg-1 pl-2"
                    style={{ width: "60% !important" }}
                  >
                    <h1 className="each-daily-news-info-title">
                      <Link>
                        ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                        និងជាអនុប្រធានអាជ្ញាធរជាតិប្រយុទ្ធប្រឆាំងគ្រឿងញៀនអញ្ជើញ...
                      </Link>
                    </h1>
                    <p className="each-daily-news-info-date">
                      ថ្ងៃទី២៤ ខែកក្កដា ឆ្នាំ២០២០
                    </p>
                  </div>
                </div>
                <div className="each-daily-news col-md-6 col-12 py-4 px-2  m-0">
                  <div
                    className="each-daily-news-thumbnail"
                    style={{ width: "40% !important", height: "100%" }}
                  >
                    <img
                      src="http://moj.gov.kh/files/user-folder/2020/07/023/001/001_230720_MOJ_KH.jpg"
                      alt=""
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div
                    className="each-daily-news-info py-lg-1 pl-2"
                    style={{ width: "60% !important" }}
                  >
                    <h1 className="each-daily-news-info-title">
                      <Link>
                        ឯកឧត្តម ជិន ម៉ាលីន រដ្ឋលេខាធិការក្រសួងយុត្តិធម៌
                        បានដឹកនាំក្រុមការងារបច្ចេកទេសរៀបចំ...
                      </Link>
                    </h1>
                    <p className="each-daily-news-info-date">
                      ថ្ងៃទី២៣ ខែកក្កដា ឆ្នាំ២០២០
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Annoucements */}
            <div className="annoucements-container mb-2">
              <div className="title mb-1 p-1 px-2 pt-2">
                សេចក្ដីជូនដំណឹង
                <span className="more">
                  <Link style={{ textDecoration: "none", color: "inherit" }}>
                    ច្រើនទៀត...
                  </Link>
                </span>
              </div>
              <div className="annoucements row px-3">
                <div className="announcement col-md-6 col-12 py-4">
                  <div style={{ marginTop: "-2px" }}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right-short"
                      fill="#e53e3e"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </div>
                  <div className="ml-1">
                    <Link>
                      សារថ្វាយព្រះពរ របស់ថ្នាក់ដឹកនាំ និងមន្ត្រី នៃសាលាឧទ្ធរណ៍
                      និងមហាអយ្យការអមសាលាឧទ្ធរណ៍ព្រះសីហនុ​
                      ក្រាបបង្គំទូលថ្វាយសម្តេចព្រះមហាក្សត្រី....
                    </Link>
                  </div>
                </div>
                <div className="announcement col-md-6 col-12 py-4">
                  <div style={{ marginTop: "-2px" }}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right-short"
                      fill="#e53e3e"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </div>
                  <div className="ml-1">
                    <Link>
                      សារលិខិតចូលរួមរំលែកទុក្ខរបស់ឯកឧត្តមរដ្ឋមន្រ្តី
                      ក្រសួងយុត្តិធម៌ ជូនចំពោះ លោកជំទាវ សួស ណារ៉ា ហ៊ឹម ឆែម
                      ព្រមទាំងក្រុមគ្រួសារ
                    </Link>
                  </div>
                </div>
                <hr className="w-100 m-0 d-none d-md-block" />
                <div className="announcement col-md-6 col-12 py-4">
                  <div style={{ marginTop: "-2px" }}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right-short"
                      fill="#e53e3e"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </div>
                  <div className="ml-1">
                    <Link>
                      សេចក្តីប្រកាសព័ត៌មានរបស់អ្នកនាំពាក្យរបស់ អយ្យការ
                      អមសាលាដំបូងខេត្តស្វាយ រៀង បំភ្លឹអំពីការចុះផ្សាយរបស់
                      គេហទំព័រព័ត៌មាន...
                    </Link>
                  </div>
                </div>
                <div className="announcement col-md-6 col-12 py-4">
                  <div style={{ marginTop: "-2px" }}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right-short"
                      fill="#e53e3e"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </div>
                  <div className="ml-1">
                    <Link>
                      សេចក្តីជូនដំណឹងរបស់ក្រសួងយុត្តិធម៌
                      ស្តីពីកម្មវិធីប្រកាសបើកយុទ្ធនាការដោះស្រាយការកកស្ទះសំណុំរឿងនៅតាមសាលាដំបូងរាជធានី-ខេត្ត
                      ...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Sections */}
          <div className="btm-section mb-3" style={{ clear: "both" }}>
            {/* Bottom Left */}
            <div className="btm-left-section left-section mb-2 mb-sm-2">
              <div className="sub-units-container">
                <div className="title p-1 px-2 pt-2 mb-2">អង្គភាពក្រោមឱវាទ</div>
                <div className="sub-units mt-1 pl-4">
                  <div className="pr-2">
                    <img
                      src="http://moj.gov.kh/files/link_images/1561435465rajp.png"
                      alt=""
                      style={{ height: "70px" }}
                    />
                  </div>
                  <div className="mt-3">
                    <Link style={{ color: "#000", textDecoration: "none" }}>
                      <p>រាជបណ្ឌិតសភាវិជ្ជាជីវះតុលាការ</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="btm-right-section right-section mb-2 mb-sm-2">
              <div className="row m-0">
                <div className="col-12 col-sm-6 p-0 social-media-container mb-2 mb-sm-0">
                  <div className="title p-1 pl-2 mb-2 pt-2">បណ្ដាញសង្គម</div>
                  <div className="social-media pt-3">
                    <img
                      src={Facebook}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "20px",
                      }}
                    />
                    <img
                      src={Youtube}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "20px",
                      }}
                    />
                    <img
                      src={Telegram}
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 p-0 contact-container">
                  <div className="title p-1 pl-2 mb-2 pt-2">ទំនាក់ទំនង</div>
                  <div className="contact p-2 pt-2">
                    <p className="m-0">
                      លេខទូរស័ព្ទ : (+855) 23 216 322 , (+855) 23 217 841{" "}
                    </p>
                    <p>
                      សារអេឡិចត្រូនិច : info@moj.gov.kh{" "}
                      <Link style={{ color: "red" }}>| លម្អិត...</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section */}
      </div>
    );
  }
}

export default index;