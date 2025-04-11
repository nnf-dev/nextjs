import { headers } from 'next/headers';

export default async function Footer() {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname');

    if (pathname?.startsWith('/admin/')) {
        return null;
    }

    return <div className="">Footer</div>;
}
