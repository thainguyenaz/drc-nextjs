import { NextPageContext } from "next";

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        {statusCode || "Error"}
      </h1>
      <p>
        {statusCode === 404
          ? "This page could not be found."
          : "An unexpected error has occurred."}
      </p>
      <a href="/" style={{ color: "#2d5a27", marginTop: "2rem", display: "inline-block" }}>
        Return Home
      </a>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
