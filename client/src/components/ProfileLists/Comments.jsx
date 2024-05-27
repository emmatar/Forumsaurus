import { Link } from "react-router-dom";

// TEMPORARY IMAGE
import dinoEgg from "../../assets/dinoEgg.svg";

// const rawrsTotal = () => {
// get rawrs.length and convert to string
// }

const ProfileComments = () => {
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
              <div className="p-0 m-0">
                <small className="opacity-75">
                    <strong>
                        ProfileUsername</strong> replied to <strong>CommentAuthor</strong>'s comment, "CommentBody which will include, undoubtedly, a number of lines of text"
                </small>
                <p className="my-2">
                    ReplyBody, which will include a number of lines, similar to the comment they are responding to.
                </p>
              </div>
                <small className="opacity-50 text-nowrap">CREATEDON</small> {/* Either by day (1d, 2d) or hour (1h, 8h, 1d) */}
            </div>
          </a>
        </div>
      </div>
    )
}

export default ProfileComments;
