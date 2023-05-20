import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

import img1 from "../public/images/404.jpg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="">
      <img src={img1} alt="" />
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
      <button className="btn btn-accent">
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
}
