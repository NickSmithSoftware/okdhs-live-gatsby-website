import winExists from "../../functions/winExists";

export const register = async (email, password) => winExists() ? await window.auth.signup(email, password) : {};
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