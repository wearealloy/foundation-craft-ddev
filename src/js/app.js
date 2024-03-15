import "../css/globals.css";
import "focus-visible";

// add import if sticky header is needed
// import './components/stcky-header'


// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR")
  });
}
