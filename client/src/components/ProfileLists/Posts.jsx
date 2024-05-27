import { Link } from "react-router-dom";

// TEMPORARY IMAGE
import dinoEgg from "../../assets/dinoEgg.svg";

// const rawrsTotal = () => {
// get rawrs.length and convert to string
// }

const ProfilePosts = () => {
    return (
      <div className="d-flex flex-column flex-row pl-0 mt-1 gap-4 pb-5 align-items-center justify-content-center">
        <div className="list-group w-100 conatiner-fluid">
          <div className="list-group-item border border-2 d-flex gap-3 py-3" aria-current="true"
          >
            <img src={dinoEgg} alt="twbs" width="32" height="32" className="rounded-circle bg-warning p-1 flex-shrink-0" />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <a href="#" className="text-decoration-none text-black">
                <h5 className="mb-0 fw-bolder mb-2">(Post.Body)(Could include a very long text, depending on how long the entry retrieved from the database is...)</h5> {/* Get Post Titles */}
                </a>
                <div className="d-flex px-0 gap-1 align-items-center">
                  <button className="bg-primary border text-white py-2 px-3 rounded-pill d-flex align-items-center gap-1 justify-content-start">
                    <img src={dinoEgg} style={{filter: 'invert(1)'}} alt="twbs" width="20" height="20" className="flex-shrink-0"></img>
                    <p className="mb-0">0 rawr!'s</p>
                  </button>
                  <button className="bg-primary border text-white py-2 px-3 rounded-pill d-flex align-items-center gap-1 justify-content-start">
                    <img src={dinoEgg} style={{filter: 'invert(1)'}} alt="twbs" width="20" height="20" className="flex-shrink-0"></img>
                    <p className="mb-0">0 comments</p>
                  </button>
                </div>
              </div>
              <small className="opacity-50 text-nowrap">CREATEDON</small> {/* Either by day (1d, 2d) or hour (1h, 8h, 1d) */}
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProfilePosts;
