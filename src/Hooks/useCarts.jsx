import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const useCarts = () => {
    // const { user } = useContext(AuthContext);
    const {user,loading} = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const {refetch, data: cart = []  } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res);
            return res.data;
        },
    })
    return [cart, refetch]

}


export default useCarts;