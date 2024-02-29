const validCredentials = [
    {
        email: 'admin',
        password: 'admin1234'
    },
    {
        email: 'guest',
        password: 'guest1234'
    },
    
]
export const checkIsValidUser = (email = '', password = '') => {
    console.log(email, password)
    
    return new Promise(async (resolve, reject) => {
        try {
            const isValid = validCredentials.some((credential)=>(credential?.email === email && credential?.password === password) )
            // console.log(isValid)
            resolve(isValid)
        } catch (e) {
            resolve(false)
        }
    })
}