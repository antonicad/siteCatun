"use client";

import { useEffect } from "react";

export default function MailerLiteEmbed() {
  useEffect(() => {
    (function (w, d, e, u, f, l, n) {
      w[f] =
        w[f] ||
        function () {
          (w[f].q = w[f].q || []).push(arguments);
        };
      l = d.createElement(e);
      l.async = 1;
      l.src = u;
      n = d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l, n);
    })(
      window,
      document,
      "script",
      "https://assets.mailerlite.com/js/universal.js",
      "ml"
    );

    window.ml("account", "1984146");
  }, []);

  return <div className="ml-embedded" data-form="yAY6bc"></div>;
}