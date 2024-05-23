import { DataLoaderRecordType } from '@/services/common/helpers/data_loader.types';
import ComboboxDropdownItemComponent, {
  OnSelectCallbackType,
} from '@/app/components/combobox.dropdown.item.component';
import React from 'react';
import { tagMapper } from '@/services/common/helpers/tag.mapper';

const defaultComboboxDropdownComponentProps = {
  isOpen: false,
  items: {} as DataLoaderRecordType,
  value: '',
  tag: 'ul' as keyof typeof tagMapper,
  onSelect: (value: string, label: string) => () =>
    console.log('Selected:', value, label),
};

type ComboboxDropdownComponentPropsType = {
  isOpen?: boolean;
  items?: DataLoaderRecordType;
  value?: string;
  tag?: keyof typeof tagMapper;
  onSelect?: OnSelectCallbackType;
};

const ComboboxDropdownComponent = (
  props: ComboboxDropdownComponentPropsType,
) => {
  const { isOpen, items, value, tag, onSelect } = {
    ...defaultComboboxDropdownComponentProps,
    ...props,
  };

  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="absolute top-2 left-0 right-0 z-10 overflow-y-auto max-h-96 bg-white divide-y divide-gray-100 rounded-lg shadow w-100 dark:bg-gray-700">
      {React.createElement(
        tag,
        {
          className: 'py-2 text-sm text-gray-700 dark:text-gray-200',
        },
        Object.entries(items)
          .sort(([, a], [, b]) => a.toString().localeCompare(b.toString()))
          .map(([val, lab]) => (
            <ComboboxDropdownItemComponent
              key={val}
              value={val}
              label={lab}
              isSelected={val === value}
              tag={tagMapper[tag]}
              onSelect={onSelect}
            />
          )),
      )}
    </div>
  );
};

export default ComboboxDropdownComponent;
