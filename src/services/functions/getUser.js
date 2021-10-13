import winExists from "../../functions/winExists";

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
