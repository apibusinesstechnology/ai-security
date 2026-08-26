"use client";
import VerifyForm from "../components/RegisterForm2";
import { useSearchParams } from "next/navigation";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const pendingUserId = searchParams.get("pendingUserId");

  return (
    <VerifyForm
      pendingUserId={pendingUserId!}
      onSuccess={() => {
        // Redirection après succès
        window.location.href = "/dashboard";
      }}
    />
  );
}