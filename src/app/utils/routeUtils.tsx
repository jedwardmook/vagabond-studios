'use client';
import { usePathname } from 'next/navigation';

const useIsAdminRoute = () => {
	const pathname = usePathname();
	return pathname.startsWith('/admin');
};

export default useIsAdminRoute;