/**
 * Parses a JWT token and returns the payload as a JSON object.
 * token - The JWT token to be parsed.
 * return The payload of the JWT token as a JSON object.
 */
export const parseJwt = (token: string) => {
    // Extract the base64Url part of the token
    const base64Url = token.split('.')[1];
    // Replace characters that are not valid in base64Url with characters that are valid in base64
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // Decode the base64 string and convert it to a JSON string
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    // Parse the JSON string and return the resulting object
    return JSON.parse(jsonPayload);
};

