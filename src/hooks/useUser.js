"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const router = useRouter();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then(({ user }) => {
        setUser(user);
        setLoading(false);

        if (!user && redirectTo && !redirectIfFound) {
          router.replace(`${redirectTo}?redirect=${location.pathname}`);
        }
        if (user && redirectIfFound) {
          router.replace(redirectTo);
        }
      });
  }, [redirectTo, redirectIfFound, router]);

  return { user, loading };
}
