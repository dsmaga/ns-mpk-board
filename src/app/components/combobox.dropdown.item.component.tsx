import React from 'react';

const defaultComboboxItemComponentProps = {
  isSelected: false,
  tag: 'li',
};

export type OnSelectCallbackType = (value: string, label: string) => void;

type ComboboxItemComponentPropsType = {
  key: string;
  value: string;
  label: string;
  isSelected?: boolean;
  tag?: string;
  onSelect: OnSelectCallbackType;
};

const ComboboxDropdownItemComponent = (
  props: ComboboxItemComponentPropsType,
) => {
  const { key, value, label, isSelected, tag, onSelect } = {
    ...defaultComboboxItemComponentProps,
    ...props,
  };

  return React.createElement(
    tag,
    { key },
    <div
      className="flex flex-row block pl-2 pr-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      onClick={() => onSelect(value, label)}
    >
      {isSelected ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="min-w-5 w-5 h-5 mr-2"
        >
          <path
            fill-rule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clip-rule="evenodd"
          ></path>
        </svg>
      ) : (
        <span className="min-w-7 inline-block"></span>
      )}
      {label}
    </div>,
  );
};

export default ComboboxDropdownItemComponent;
