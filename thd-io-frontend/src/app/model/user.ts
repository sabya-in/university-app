/*
{
    "success": true,
    "token": "Bearer eyJhbGciOiJIXYUZ",
    "user": {
        "id": "61cb55e32c301bfb357dbd3e",
        "name": "sabya",
        "username": "sabya@gm.com"
    }
}
*/

export interface User {
      success: string;
      token: string;
      user: {
        id: string;
        name: string;
        username: string;
      };
}
