import Script from "next/script";
import React from "react";

const Page = () => {
  return (
    <div>
      <script
        src="http://localhost:3000/widget.js"
        data-id="80be8022-7fb2-42ca-8c9f-9b97decb4d2f"
        defer
      ></script>
    </div>
  );
};

export default Page;
