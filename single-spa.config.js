import { registerApplication, start } from "single-spa";

/* 
   In order to register an application with single-spa, 
   import and call the registerApplication function; 
   and include:
   - the application name,
   - a loadingFunction,
   - an activityFunction 
   as parameters.
*/

registerApplication(
  // Nome dell'applicazione da caricare
  "home",
  // Funzione di caricamento (LoadingFunction)
  // loadingFunction must be a function that returns a Promise
  () => {},
  // Funzione di attivazione (activityFunction)
  // activityFunction must be a function that returns a truthy 
  // value that represents whether the application 
  // should be active, and must be a pure function.
  // The most common scenario is to determine if an application is active by looking at window.location
  location =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/home")
);


/* 
   Lastly, we also import the start function from the single-spa package 
   and call it in order for applications be mounted. 
   Before start is called, applications will be loaded into 
   the browser but not bootstrapped/mounted/unmounted.
*/
start();
