export default interface StorageInterface {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}
