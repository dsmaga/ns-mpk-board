import {
  DataLoaderCallbackType,
  DataLoaderExpectedInputType,
  DataLoaderExpectedResultType,
  DataLoaderPromiseCallbackType,
  DataLoaderRecordType,
  DataLoaderSimpleType,
} from '@/services/common/helpers/data_loader.types';

const _loadFromStringArray = (
  data: DataLoaderSimpleType,
): DataLoaderExpectedResultType => {
  const items = data.reduce(
    (acc, curr) => {
      acc[curr] = curr;
      return acc;
    },
    {} as Record<string, string>,
  );
  return Promise.resolve(items);
};

const _loadFromObject = (
  data: DataLoaderRecordType,
): DataLoaderExpectedResultType => Promise.resolve(data);

const _loadFromSyncCallback = (
  callback: DataLoaderCallbackType,
): DataLoaderExpectedResultType => Promise.resolve(callback());

const _loadFromAsyncCallback = (
  callback: DataLoaderPromiseCallbackType,
): DataLoaderExpectedResultType => callback();

export default function dataLoader(
  data: DataLoaderExpectedInputType,
): DataLoaderExpectedResultType {
  if (Array.isArray(data)) {
    return _loadFromStringArray(data);
  }

  if (typeof data === 'object') {
    return _loadFromObject(data);
  }

  if (typeof data === 'function') {
    if (data.length === 0) {
      return _loadFromSyncCallback(data as DataLoaderCallbackType);
    }
    return _loadFromAsyncCallback(data as DataLoaderPromiseCallbackType);
  }

  throw new Error('Invalid data type');
}
