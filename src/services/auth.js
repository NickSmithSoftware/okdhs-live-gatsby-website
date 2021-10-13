import GoTrue from 'gotrue-js';

let loaded = false;

let auth;

initializeAuth();

const initializeAuth = async => {
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







export const requestPasswordRecovery = async (email) => await auth.requestPasswordRecovery(email);
/* RESPONSE
/ {}
*/



export const recoverUser = async (token, remember) => await auth.recover(token, remember);
/* RESPONSE
{
    "response": {
      "api": {
        "apiURL": "https://example.netlify.com/.netlify/identity",
        "_sameOrigin": true,
        "defaultHeaders": {}
      },
      "url": "https://example.netlify.com/.netlify/identity",
      "token": {
        "access_token": "example-jwt-token",
        "token_type": "bearer",
        "expires_in": 3600,
        "refresh_token": "example-refresh_token",
        "expires_at": 1526107729000
      },
      "id": "example-id",
      "aud": "",
      "role": "",
      "email": "example@netlify.com",
      "confirmed_at": "2018-05-12T05:48:49Z",
      "invited_at": "2018-05-04T23:40:00Z",
      "recovery_sent_at": "2018-05-12T05:48:13Z",
      "app_metadata": {
        "provider": "email"
      },
      "user_metadata": {},
      "created_at": "2018-05-04T23:40:00Z",
      "updated_at": "2018-05-04T23:40:00Z"
    }
}
*/



export const getUser = async => await auth.currentUser();
/* RESPONSE
    {
        "api": {
        "apiURL": "https://example.netlify.com/.netlify/identity",
        "_sameOrigin": true,
        "defaultHeaders": {}
        },
        "url": "https://example.netlify.com/.netlify/identity",
        "token": {
        "access_token": "example-jwt-token",
        "token_type": "bearer",
        "expires_in": 3600,
        "refresh_token": "example-refresh_token",
        "expires_at": 1525214326000
        },
        "id": "example-id",
        "aud": "",
        "role": "",
        "email": "example@example.com",
        "confirmed_at": "2018-05-01T19:21:00Z",
        "app_metadata": {
        "provider": "email"
        },
        "user_metadata": {},
        "created_at": "2018-05-01T19:21:00Z",
        "updated_at": "2018-05-01T19:21:00Z"
    }
*/

export const confirmUser = async (token, remember) => await auth.confirm(token, remember);
/* RESPONSE
    {
    "response": {
        "api": {
        "apiURL": "https://example.netlify.com/.netlify/identity",
        "_sameOrigin": true,
        "defaultHeaders": {}
        },
        "url": "https://example.netlify.com/.netlify/identity",
        "token": {
        "access_token": "example-jwt-token",
        "token_type": "bearer",
        "expires_in": 3600,
        "refresh_token": "example-refresh_token",
        "expires_at": 1526110512000
        },
        "id": "example-id",
        "aud": "",
        "role": "",
        "email": "example@netlify.com",
        "confirmed_at": "2018-05-12T06:35:13Z",
        "confirmation_sent_at": "2018-05-12T06:34:35Z",
        "app_metadata": {
        "provider": "email"
        },
        "user_metadata": {},
        "created_at": "2018-05-12T06:34:35Z",
        "updated_at": "2018-05-12T06:34:35Z"
    }
    }
*/

export const updateUser = async (metadata) => await getUser().update(metadata);
/* RESPONSE
    {
    "api": {
        "apiURL": "https://example.netlify.com/.netlify/identity",
        "_sameOrigin": true,
        "defaultHeaders": {}
    },
    "url": "https://example.netlify.com/.netlify/identity",
    "token": {
        "access_token": "example-jwt-token",
        "token_type": "bearer",
        "expires_in": 3600,
        "refresh_token": "example-refresh_token",
        "expires_at": 1525215471000
    },
    "id": "example-id",
    "aud": "",
    "role": "",
    "email": "example@example.com",
    "confirmed_at": "2018-05-01T19:21:00Z",
    "app_metadata": {
        "provider": "email"
    },
    "user_metadata": {},
    "created_at": "2018-05-01T19:21:00Z",
    "updated_at": "2018-05-01T22:04:07.923944421Z",
    "new_email": "new-example@example.com",
    "email_change_sent_at": "2018-05-01T22:04:07.49197052Z"
    }
*/

export const getJWT = async => await getUser().jwt();

/* RESPONSE
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjUyMTk4MTYsInN1YiI6ImE5NG.98YDkB6B9JbBlDlqqef2nme2tkAnsi30QVys9aevdCw debugger eval code:1:43
*/

export const logout = async => await getUser().logout();