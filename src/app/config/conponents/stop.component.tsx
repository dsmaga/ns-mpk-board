import { StopType } from '@/services/common/types/stop.type';
import React from 'react';

type StopComponentPropsType = {
  stop: StopType;
  removeStop: (stop: StopType) => void;
  onChange: (
    stopNumber: string,
    lineNumber: string,
    isChecked: boolean,
  ) => void;
};

const StopComponent = (props: StopComponentPropsType) => {
  const { stop, removeStop, onChange } = props;
  return (
    <div className="w-full bg-white p-4 mb-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row justify-between">
        <h4 className="mb-4 mr-4">
          {stop.name} ({stop.number})
        </h4>
        <button
          type="button"
          className="p-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          onClick={() => removeStop(stop)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 min-w-5 min-h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {Object.entries(stop.direction_desc).map(([number, desc]) => {
        const id = `${stop.number}_${number}`;
        return (
          <div className="flex items-center mb-3" key={id}>
            <input
              id={id}
              type="checkbox"
              checked={stop.lines.includes(number)}
              value={number}
              onChange={(e) => onChange(stop.number, number, e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={id}
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {number} ({desc})
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default StopComponent;
