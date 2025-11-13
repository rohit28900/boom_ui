'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardClient from './DashboardClient';

interface User {
  name: string;
  email: string;
  role: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // 1️⃣ Ensure hydration before reading localStorage
  useEffect(() => {
    setHydrated(true);
  }, []);

  // 2️⃣ Read token and user data
  useEffect(() => {
    if (!hydrated) return;

    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token) {
      router.replace('/admin/login');
      return;
    }

    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error('Failed to parse user data:', err);
        localStorage.removeItem('user');
      }
    }
  }, [hydrated, router]);

  // 3️⃣ Avoid flicker before hydration
  if (!hydrated) return null;

  // 4️⃣ Show loading state if user not loaded yet
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-600">Loading dashboard...</p>
      </div>
    );
  }

  // 5️⃣ Pass user data to your actual dashboard component
  return <DashboardClient user={user} />;
}
