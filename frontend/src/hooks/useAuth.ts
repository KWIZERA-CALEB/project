import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import jwtDecode from 'jwt-decode';

export const useAuth = () => {
    const { token, user } = useAppSelector((state) => state.user);
    const router = useRouter();

    const isAuthenticated = !!token;
    const isAdmin = user?.role === 'admin';
    const isTalent = user?.role === 'talent';

    // if (token) {
    //     const decodedToken: any = jwtDecode(token);
    //     const currentTime = Date.now() / 1000;

    //     if (decodedToken.exp < currentTime) {
    //         router.push('/');
    //     }
    // }

    // if (!isAuthenticated) {
    //     router.push('/');
    // }

    // if (!isAdmin) {
    //     router.push('/challenges');
    // }

    return { isAuthenticated, isAdmin, isTalent };
};