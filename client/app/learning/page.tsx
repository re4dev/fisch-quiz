'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

const LearningPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/learning/1`);
  }, []);
};

export default LearningPage;
