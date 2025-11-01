"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("userRole");

    if (!token || role !== "admin") {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return null;
  return <>{children}</>;
}
