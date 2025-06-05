import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';

const publicRoutes = ['/', '/login', '/signup', '/forgot-password', '/magic-link-login', '/reset-password'];

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user && !publicRoutes.includes(router.pathname)) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user && !publicRoutes.includes(router.pathname)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
