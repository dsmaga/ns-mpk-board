'use client';
import ProfileComponent from '@/app/config/conponents/profile.component';
import { useEffect, useState } from 'react';
import ConfigService from '@/services/config/config.service';
import { ConfigProfileType } from '@/services/config/config.types';

export default function Page() {
  const config = ConfigService.instance;
  const uuid = config.getConfig().currentProfile;
  const [profile, setProfile] = useState<ConfigProfileType>();

  useEffect(() => {
    setProfile(config.getProfile(uuid));
  }, [uuid, config]);

  return profile ? <ProfileComponent uuid={uuid} profile={profile} /> : <></>;
}
