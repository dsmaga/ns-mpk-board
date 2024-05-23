import { useCallback, useEffect, useState } from 'react';
import ComboboxComponent from '@/app/components/combobox.component';
import MpkService from '@/services/mpk/mpk.service';
import { StopType } from '@/services/common/types/stop.type';
import ConfigService from '@/services/config/config.service';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { DataLoaderExpectedInputType } from '@/services/common/helpers/data_loader.types';
import StopComponent from '@/app/config/conponents/stop.component';
import { ConfigProfileType } from '@/services/config/config.types';

export default function ProfileComponent(params: {
  profile: ConfigProfileType;
  uuid: string;
}) {
  const { profile, uuid } = params;

  const router = useRouter();

  const [name, setName] = useState(profile.name);
  const [comboboxValue, setComboboxValue] = useState<string>('');
  const [stops, setStops] = useState<DataLoaderExpectedInputType>([]);
  const [selectedStops, setSelectedStops] = useState<StopType[]>(
    profile.stops || [],
  );

  useEffect(() => {
    MpkService.instance.getStopsForSelect().then(setStops);
  }, []);

  const addStop = useCallback(() => {
    if (
      !comboboxValue ||
      selectedStops.filter((stop) => stop.number === comboboxValue).length > 0
    ) {
      return;
    }
    MpkService.instance.getStopById(comboboxValue).then(
      (stop: StopType | undefined) =>
        stop &&
        setSelectedStops((prevState) => {
          return [stop, ...prevState];
        }),
    );
  }, [comboboxValue, selectedStops]);
  const onSubmit = useCallback(() => {
    const config = ConfigService.instance;
    const isNew = uuid === 'new';
    const profile = isNew
      ? config.createProfile(name, selectedStops)
      : config.getProfile(uuid);

    if (!profile) {
      return;
    }

    if (!isNew) {
      profile.name = name;
      profile.stops = selectedStops;
    } else {
      config.getConfig().currentProfile = profile.uuid;
    }

    config.saveConfig();
    router.push(`/config/edit`);
  }, [name, selectedStops, uuid, router]);
  const removeStop = useCallback((stop: StopType) => {
    setSelectedStops((prevState) => {
      return prevState.filter((prevStop) => prevStop.number !== stop.number);
    });
  }, []);
  const changeStop = useCallback(
    (stopNumber: string, lineNumber: string, isChecked: boolean) => {
      setSelectedStops((prevState) => {
        return prevState.map((prevStop) => {
          if (prevStop.number === stopNumber) {
            return {
              ...prevStop,
              lines: isChecked
                ? [...prevStop.lines, lineNumber]
                : prevStop.lines.filter((line) => line !== lineNumber),
            };
          }
          return prevStop;
        });
      });
    },
    [],
  );

  return (
    <form
      className="min-w-full mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="relative w-full mb-5 group">
        <input
          type="text"
          id="profile_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label
          htmlFor="profile_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nazwa profilu
        </label>
      </div>
      <div className="relative w-full mb-5 group">
        <div className="flex flex-row">
          <div className="grow mr-2">
            <label htmlFor="stop_to_add" className="sr-only">
              Przystanek
            </label>
            <ComboboxComponent
              data={stops}
              value={comboboxValue}
              setValue={(value) => {
                setComboboxValue(value);
              }}
            />
          </div>
          <button
            type="button"
            className="p-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={addStop}
          >
            <svg
              className="h-5 w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative w-full mb-5 group">
        <ul>
          {selectedStops.map((stop) => (
            <li key={stop.number}>
              <StopComponent
                stop={stop}
                removeStop={removeStop}
                onChange={changeStop}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex flex-row justify-between mt-6 pt-6 border-t border-slate-700">
        <Link href="/">Wróć</Link>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Zapisz
        </button>
      </div>
    </form>
  );
}
