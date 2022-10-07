import Link from 'next/link';
import React from 'react';
import { MainLayout } from '../../components';

export default function PricingPage() {
    return (
        <MainLayout>
            <h1>Pricing Page</h1>

            <h1 className='title'>
                Go to <Link href="/">Home</Link>
            </h1>

            <p className='description'>
                Get started by editing{' '}
                <code className='code'>pages/pricing/pricing.tsx</code>
            </p>
        </MainLayout>
    )
}
