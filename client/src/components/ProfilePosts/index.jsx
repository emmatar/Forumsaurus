import { Link } from "react-router-dom";

// TEMPORARY IMAGE
import dinoEgg from "../../assets/dinoEgg.svg";

const ProfilePosts = () => {
    return (
      <div className="d-flex flex-column flex-row pl-0 mt-1 gap-4 pb-5 align-items-center justify-content-center">
        <div className="list-group w-100 conatiner-fluid">
          <a
            href="#"
            className="list-group-item list-group-item-action border border-2 d-flex gap-3 py-3"
            aria-current="true"
          >
            <img src={dinoEgg} alt="twbs" width="32" height="32" className="rounded-circle bg-warning p-1 flex-shrink-0" />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h5 className="mb-0">TITLE</h5> {/* Get Post Titles */}
                <p className="mb-0 opacity-75">POST BODY</p> {/* Wrap with ellipsis after three lines */}
              </div>
              <small className="opacity-50 text-nowrap">CREATEDON</small> {/* Either by day (1d, 2d) or hour (1h, 8h, 1d) */}
            </div>
          </a>
        </div>
      </div>
    )
}

export default ProfilePosts;
