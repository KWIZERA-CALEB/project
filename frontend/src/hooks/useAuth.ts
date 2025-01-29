import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { fetchLoggedInUser, logoutUser } from '@/redux/slices/userSlice';

export const useAuth = () => {
    const { token, user, loading, error } = useAppSelector((state) => state.user);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            setIsFetching(true);
            try {
                await dispatch(fetchLoggedInUser());
            } catch (err) {
                console.error("Error fetching logged-in user:", err);
                await dispatch(logoutUser());
            } finally {
                setIsFetching(false);
            }
        };
        if (!user && token) fetchUser();
        else setIsFetching(false);
    }, [dispatch, user, token]);

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
        if (!isFetching && !isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, isFetching, router]);

    return { isAuthenticated, isAdmin, isTalent, user, loading: loading || isFetching, error };
};
