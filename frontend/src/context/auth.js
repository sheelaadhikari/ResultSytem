// import { useState, useEffect, useContext, createContext, } from 'react';


// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({
//         user: null,
//         token: "",
//         isLoggedIn: undefined
//     });

//     useEffect(() => {
//         const data = localStorage.getItem('auth');
//         if (data) {
//             const parseData = JSON.parse(data);
//             setAuth({
//                 ...auth,
//                 user: parseData.user,
//                 token: parseData.token,
//                 isLoggedIn: true,
//             });
//         }
//         else {
//             setAuth({ ...auth, isLoggedIn: false })
//         }
//         //eslint-disable nextline

//     }, [auth]);

//     return (
//         <AuthContext.Provider value={[auth, setAuth]}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// //context hook
// const useAuth = () => useContext(AuthContext);
// export { useAuth, AuthProvider };