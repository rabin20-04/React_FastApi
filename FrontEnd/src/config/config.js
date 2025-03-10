// const Config={
//     baseApiUrl :import.meta.env.VITE_BASE_URL
// }
// export default Config

// src/config.js (or wherever you keep it)
const Config = {
    baseApiUrl: import.meta.env.VITE_BASE_URL || "http://localhost:8000", // Fallback for local dev
};

export default Config;