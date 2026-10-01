window.VERICAMPUS_CONFIG = {
    API_BASE: (location.hostname === "localhost" || location.hostname === "127.0.0.1")
        ? `${location.protocol}//${location.host}/api`
        : "https://vericampus-backend.onrender.com/api"
};