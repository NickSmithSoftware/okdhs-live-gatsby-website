import winExists from "../../functions/winExists";

export const login = async (email, password, remember) => winExists() ? await window.auth.login(email, password, remember) : {};
/*RESPONSE
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
        "expires_at": 1526062471000
      },
      "id": "example-id",
      "aud": "",
      "role": "",
      "email": "example@netlify.com",
      "confirmed_at": "2018-05-04T23:57:17Z",
      "app_metadata": {
        "provider": "email"
      },
      "user_metadata": {},
      "created_at": "2018-05-04T23:57:17Z",
      "updated_at": "2018-05-04T23:57:17Z"
    }
  }
*/