export default abstract class MpkAbstractDataSource<T> {
  private data: T | null = null;

  protected constructor(private readonly url: string) {}

  protected async fetchData(): Promise<void> {
    const response = await fetch(this.url);
    this.data = (await response.json()) as T;
  }

  protected async getData(): Promise<T> {
    if (this.data === null) {
      await this.fetchData();
    }
    return this.data as T;
  }
}
