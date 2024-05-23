import ConfigService from '@/services/config/config.service';

export const saveConfig = (
  target: object,
  key: string | symbol,
  descriptor: PropertyDescriptor,
) => {
  const childFunction = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const result = childFunction.apply(this, args);
    ConfigService.instance.saveConfig();
    return result;
  };
  return descriptor;
};
