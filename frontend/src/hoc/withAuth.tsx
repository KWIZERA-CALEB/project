"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        if (!loading) setInitialLoad(false);
        if (!loading && !isAuthenticated && initialLoad) {
            router.push("/");
        }
    }, [isAuthenticated, loading, router, initialLoad]);

    if (loading && initialLoad) return <div className='w-full h-[100vh] bg-white flex justify-center items-center'>
        <div className='loader'></div>
    </div>;

    return <>{children}</>;
};

export default ProtectedRoute;
