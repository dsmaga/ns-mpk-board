import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import dataLoader from '@/services/common/helpers/data_loader.helper';
import {
  DataLoaderExpectedInputType,
  DataLoaderRecordType,
} from '@/services/common/helpers/data_loader.types';
import ComboboxDropdownComponent from '@/app/components/combobox.dropdown.component';

const comboboxComponentDefaultProps = {
  placeholder: '',
  value: '',
  setValue: () => {},
};

type ComboboxComponentPropsType = {
  data: DataLoaderExpectedInputType;
  placeholder?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
};

const ComboboxComponent = (props: ComboboxComponentPropsType) => {
  const { data, placeholder, value, setValue } = {
    ...comboboxComponentDefaultProps,
    ...props,
  };

  const [dataItems, setDataItems] = useState<DataLoaderRecordType>({});
  const [filteredDataItems, setFilteredDataItems] =
    useState<DataLoaderRecordType>({});
  const [filter, setFilter] = useState<string>(value);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onSelect = useCallback(
    (val: string, lab: string) => {
      setValue(val);
      setFilter(lab);
      setIsOpen(false);
    },
    [setValue],
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    dataLoader(data).then((items) => {
      setDataItems(items);
      setFilteredDataItems(items);
      value && setFilter(items[value] || '');
    });
  }, [data, value]);

  useEffect(() => {
    if (!filter || filter === dataItems[value]) {
      setFilteredDataItems(dataItems);
      return;
    }
    setFilteredDataItems(
      Object.fromEntries(
        Object.entries(dataItems).filter(
          ([val, lab]) =>
            lab.toLowerCase().includes(filter.toLowerCase()) || val === value,
        ),
      ),
    );
  }, [filter, dataItems, value]);

  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={filter}
        placeholder={placeholder}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        onChange={(e) => setFilter(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() =>
          setTimeout(() => {
            setIsOpen(false);
          }, 400)
        }
      />
      <div className="relative">
        <ComboboxDropdownComponent
          isOpen={isOpen}
          items={filteredDataItems}
          value={value}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
};
export default ComboboxComponent;
