'use client'
import {useAuth} from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
    const {user} = useAuth();
    const router = useRouter();
    
    useEffect(() => {
        if (!user || user.role !== "admin") {
            router.push("/");  // Редиректим, если нет прав
        }
    }, [user, router]);  // useEffect будет реагировать только на изменения user и router

    if (!user || user.role !== "admin") {
        return null;  // Пока рендерим null, до того как редирект будет выполнен
    }

    return (
        <div>
            <h1>Admin Panel</h1>
            <p>Welcome dear {user.name}</p>
        </div>
    )
}