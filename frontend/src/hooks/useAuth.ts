import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { fetchLoggedInUser, logoutUser } from '@/redux/slices/userSlice';

export const useAuth = () => {
    const { token, user, loading, error } = useAppSelector((state) => state.user);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [checkedAuth, setCheckedAuth] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                await dispatch(fetchLoggedInUser());
            } catch (err) {
                console.error("Error fetching logged-in user:", err);
                await dispatch(logoutUser());
            } finally {
                setCheckedAuth(true);
            }
        };

        if (!user && !checkedAuth) fetchUser();
        else setCheckedAuth(true);
    }, [dispatch, user, checkedAuth]);

    const decodedToken = useMemo(() => {
        if (token) {
            try {
                return jwtDecode<{ exp: number }>(token);
            } catch (err) {
                console.error("Invalid token:", err);
                return null;
            }
        }
        return null;
    }, [token]);

    const isAuthenticated = !!token && (!decodedToken || decodedToken.exp * 1000 > Date.now());
    const isAdmin = user?.role === 'admin';
    const isTalent = user?.role === 'talent';

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(logoutUser());
            router.push('/');
        }
    }, [isAuthenticated, router, dispatch]);

    return { isAuthenticated, isAdmin, isTalent, user, loading: loading, error };
};
