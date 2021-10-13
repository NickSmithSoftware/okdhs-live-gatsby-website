import GoTrue from 'gotrue-js';

let loaded = false;

let auth;

const initializeAuth = async => {
    if (loaded) return;
    if (typeof window !== 'undefined') {
        auth = (await new GoTrue({
            APIUrl: 'https://okdhslive.netlify.app/.netlify/identity',
            setCookie: true
        })).then((response) => {
            loaded = true
            return response;
        });
    }
}

export const isLoaded = () => loaded;

let timer = setInterval(loop, 1000);
let attempts = 0;
function loop() {
    initializeAuth.then(() => {
        console.log(`Retrieving Auth ${loaded ? "Successful" : "Failed"}`);
        if (loaded) clearInterval(timer);
    }).catch(err => console.error(err));
}