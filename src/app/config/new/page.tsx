'use client';
import ProfileComponent from '@/app/config/conponents/profile.component';
import { useEffect, useState } from 'react';
import ConfigService from '@/services/config/config.service';
import { ConfigProfileType } from '@/services/config/config.types';

export default function Page() {
  const [profile, setProfile] = useState<ConfigProfileType>();

  useEffect(() => {
    const configProfile = {
      name: 'Nowy profil',
      stops: [],
      uuid: ConfigService.generateUuid(),
    } as ConfigProfileType;
    setProfile(configProfile);
  }, []);

  return profile ? <ProfileComponent uuid="new" profile={profile} /> : <></>;
}
