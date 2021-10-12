import GoTrue from 'gotrue-js';

export const auth = async () => {
    return await new GoTrue({
        APIUrl: 'https://okdhslive.netlify.app/.netlify/identity',
        setCookie: true
    })
}

export const signUp = async (email, password) => {
    await a.signup(email, password)
}