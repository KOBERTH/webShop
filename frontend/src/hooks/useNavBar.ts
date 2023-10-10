import { useState } from 'react';

export function useNavBar() {
  const [profile, setProfile] = useState(false);
  const [categories, setCategories] = useState(false);

  const [email, setEmail] = useState(localStorage.getItem('email') || '');

  const handleLogout = () => {
    localStorage.removeItem('email');
    setEmail('');
    location.reload()
  };

  const handleProfile = () => {
    setProfile(!profile)
    setCategories(false)
  };

  const handleCategories = () => {
    setCategories(!categories)
    setProfile(false)
  };

  return { email, categories, profile, handleLogout, handleProfile, handleCategories }
}