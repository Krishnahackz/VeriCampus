// VeriCampus deployment configuration.
// After deploying the backend to Render, replace the production URL below.
window.VERICAMPUS_CONFIG = {
  API_BASE: (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? `${location.protocol}//${location.host}/api`
    : "https://YOUR-VERICAMPUS-BACKEND.onrender.com/api"
};
