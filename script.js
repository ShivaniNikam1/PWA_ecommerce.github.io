// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/service-worker.js")
//     .then(function (registration) {
//       console.log("Registration successful, scope is:", registration.scope);
//     })
//     .catch(function (error) {
//       console.log("Service worker registration failed, error:", error);
//     });
// }
// navigator.serviceWorker.register("/service-worker.js", { scope: "/app/" });
// navigator.serviceWorker.register("/app/service-worker.js", { scope: "/app" });


// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
//       .then(function(registration) {
//         console.log('Registration successful, scope is:', registration.scope);
//       })
//       .catch(function(error) {
//         console.log('Service worker registration failed, error:', error);
//       });
//   }