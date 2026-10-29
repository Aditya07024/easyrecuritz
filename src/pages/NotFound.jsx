import { Link } from "react-router-dom";
import { Arrow, usePageTitle } from "../components/ui";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <main className="not-found">
      <div className="container">
        <span className="not-found-code" aria-hidden="true" data-text="404" />
        <h1>
          This page took a<br />
          <span>different career path.</span>
        </h1>
        <p>The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.</p>
        <div className="not-found-actions">
          <Link to="/" className="button button-dark">Back to home <Arrow diagonal /></Link>
          <Link to="/jobs" className="text-link">Browse jobs <Arrow /></Link>
        </div>
      </div>
    </main>
  );
}
