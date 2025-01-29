import React, { ComponentType } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> => {
    const AuthComponent: React.FC<P> = (props) => {
        const { user, loading, error } = useAuth();
        const router = useRouter();

        if (loading) {
            return <p>Loading..</p>;
        }

        if (error || !user) {
            router.push('/login');
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    // Add display name
    AuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return AuthComponent;
};

export default withAuth;
