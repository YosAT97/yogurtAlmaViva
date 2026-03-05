self.addEventListener("install", e => { self.skipWaiting(); }); self.addEventListener("activate", e => { console.log("Service worker activo"); }); self.addEventListener("fetch", event => { });
