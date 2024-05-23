'use client';
import MpkService from '@/services/mpk/mpk.service';
import { useEffect, useState } from 'react';
import { DeparturesFlatType } from '@/services/mpk/mpk.departures.data_source';
import Link from 'next/link';
import ConfigService from '@/services/config/config.service';

export default function Home() {
  const config = ConfigService.instance;
  const mpk: MpkService = MpkService.instance;
  const [departures, setDepartures] = useState<DeparturesFlatType[]>([]);
  const [selectedProfile, setSelectedProfile] = useState(
    config.getConfig().currentProfile,
  );

  useEffect(() => {
    const fn = async () => {
      const currentStops = config.getCurrentProfile()?.stops || [];
      const stops: string[] = currentStops.map((stop) => `${+stop.number}`);
      const departures = (await mpk.getDepartures(...stops)).filter((dep) => {
        const number = +dep.number;
        const stop = currentStops.find((stop) => +stop.number === number);
        if (!stop) {
          return false;
        }
        return stop.lines.includes(dep.line);
      });
      setDepartures(departures);
    };
    const interval = setInterval(fn, 10000);
    fn();
    return () => clearInterval(interval);
  }, [mpk, selectedProfile, config]);

  return (
    <div className="min-w-full">
      <div className="flex flex-row">
        <form className="m-w-sm mx-auto grow mr-2">
          <select
            id="activeProfile"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedProfile}
            onChange={(e) => {
              setSelectedProfile(e.target.value);
              config.getConfig().currentProfile = e.target.value;
              config.saveConfig();
            }}
          >
            {config.getConfig().profiles.map((profile) => (
              <option key={profile.uuid} value={profile.uuid}>
                {profile.name}
              </option>
            ))}
          </select>
        </form>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Link
            href={`/config/edit`}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Edytuj
          </Link>
          {config.getConfig().profiles.length > 1 && (
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={() => {
                config.removeCurrentProfile();
                setSelectedProfile(config.getConfig().currentProfile);
              }}
            >
              Usuń
            </button>
          )}
          <Link
            href="/config/new"
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Nowy
          </Link>
        </div>
      </div>
      <table className="border-collapse border border-slate-500 my-3 min-w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 dark:border-slate-600 font-semibold p-2 md:p-4 text-slate-900 dark:text-slate-200 text-left">
              Linia
            </th>
            <th className="border border-slate-300 dark:border-slate-600 font-semibold p-2 md:p-4 text-slate-900 dark:text-slate-200 text-left">
              Kierunek
            </th>
            <th className="border border-slate-300 dark:border-slate-600 font-semibold p-2 md:p-4 text-slate-900 dark:text-slate-200 text-left">
              Przystanek
            </th>
            <th className="border border-slate-300 dark:border-slate-600 font-semibold p-2 md:p-4 text-slate-900 dark:text-slate-200 text-left">
              Odjazd
            </th>
          </tr>
        </thead>
        <tbody>
          {departures.map((departure, index) => (
            <tr key={index}>
              <td className="border border-slate-300 dark:border-slate-700 p-2 md:p-4 text-gray-900 dark:text-slate-400">
                <h3>{departure.line}</h3>
              </td>
              <td className="border border-slate-300 dark:border-slate-700 p-2 md:p-4 text-gray-900 dark:text-slate-400">
                {departure.direction}
              </td>
              <td className="border border-slate-300 dark:border-slate-700 p-2 md:p-4 text-gray-900 dark:text-slate-400">
                {departure.name}
              </td>
              <td className="border border-slate-300 dark:border-slate-700 p-2 md:p-4 text-gray-900 dark:text-slate-400">
                {departure.departure}
                <br className="hidden md:block" />
                <small className="hidden md:inline-block">
                  {new Date(departure.timeToDeparture).toLocaleString()}
                </small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
