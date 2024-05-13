'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/treinamentos')
  }, [])

  return (
    <div className="w-full">
        <h3>estamos redirecionando você...</h3>
    </div>
  );
}
