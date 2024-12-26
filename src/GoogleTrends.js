import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Script from "react-load-script";

export default function GoogleTrends({ type, keyword, url }) {
  useEffect(() => {
    setTimeout(() => {
        window.trends.embed.renderExploreWidgetTo(
            document.getElementById("widget"),
            type,
            {
              comparisonItem: [{ keyword, geo: "KR", time: "today 12-m" }],
              category: 0,
              property: ""
            },
            {
              exploreQuery: `q=${encodeURI(keyword)}&geo=US&date=today 12-m`,
              guestPath: "https://trends.google.com:443/trends/embed/"
            }
          );
    }, 500)
  }, []);
  const handleScriptLoad = _ => {
    
  };

  const renderGoogleTrend = _ => {
    return <Script url={url} onLoad={handleScriptLoad} />;
  };

  return <div className="googleTrend">{renderGoogleTrend()}</div>;
}