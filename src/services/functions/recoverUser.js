import winExists from "../../functions/winExists";

export const recoverUser = async (token, remember) => winExists() ? await window.auth.recover(token, remember) : {};
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