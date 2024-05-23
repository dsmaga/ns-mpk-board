export type DataLoaderExpectedResultType = Promise<
  Record<string | number, string>
>;

export type DataLoaderSimpleType = string[];

export type DataLoaderRecordType = Record<string | number, string>;
export type DataLoaderCallbackType = () => Record<string | number, string>;
export type DataLoaderPromiseCallbackType = () => DataLoaderExpectedResultType;

export type DataLoaderExpectedInputType =
  | DataLoaderSimpleType
  | DataLoaderRecordType
  | DataLoaderCallbackType
  | DataLoaderPromiseCallbackType;
