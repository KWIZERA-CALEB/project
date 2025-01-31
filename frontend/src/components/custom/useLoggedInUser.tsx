'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks'
import { fetchLoggedInUser } from '@/redux/slices/userSlice';

export default function UseLoggedInUser() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLoggedInUser());
  }, [dispatch]);

  return null;
}
