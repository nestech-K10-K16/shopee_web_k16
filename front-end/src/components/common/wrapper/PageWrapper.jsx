import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { DefaultLayout } from "components";

const PageWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [children]);

  return (
    <div className="loader">
      {loading ? (
        <div className="loader-wrapper">
          <ClipLoader
            size={80}
            color="$color-errors"
            loading={loading}
            speedMultiplier={0.5}
          />
        </div>
      ) : (
        <DefaultLayout>{children}</DefaultLayout>
      )}
    </div>
  );
};

export default PageWrapper;
