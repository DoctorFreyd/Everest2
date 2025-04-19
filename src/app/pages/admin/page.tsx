'use client'
import {useAuth} from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
    const {user} = useAuth();
    const router = useRouter();
    
    useEffect(() => {
        if (!user || user.role !== "admin") {
            router.push("/");  // Checkin user role
        }
    }, [user, router]);  // useEffect will be reactin only on the changing of user и router

    if (!user || user.role !== "admin") {
        return null;  // While we render null, before the redirect is executed
    }

    return (
        <div>
            <h1>Admin Panel</h1>
            <p>Welcome dear {user.name}</p>
        </div>
    )
}