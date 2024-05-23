import StorageInterface from '@/services/storage/storage.interface';
import { ConfigProfileType, ConfigType } from '@/services/config/config.types';
import { configDefaults } from '@/services/config/config.defaults';
import { v4 as uuidv4 } from 'uuid';
export default class ConfigService {
  private readonly config: ConfigType;
  private static _instance: ConfigService;
  private static _storage: StorageInterface = global?.localStorage;

  static get instance() {
    if (!ConfigService._instance) {
      ConfigService._instance = new ConfigService();
    }
    return ConfigService._instance;
  }

  static set storage(storage: StorageInterface) {
    ConfigService._storage = storage;
  }

  private constructor() {
    const savedConfig = ConfigService._storage?.getItem('config') || null;
    this.config =
      savedConfig === null
        ? configDefaults
        : (JSON.parse(savedConfig) as ConfigType);
  }

  getConfig(): ConfigType {
    return this.config;
  }

  saveConfig() {
    ConfigService._storage?.setItem('config', JSON.stringify(this.config));
  }

  getProfile(uuid: string) {
    return this.config.profiles.find((profile) => profile.uuid === uuid);
  }

  getCurrentProfile() {
    return this.getProfile(this.config.currentProfile);
  }

  removeCurrentProfile() {
    this.config.profiles.splice(
      this.config.profiles.findIndex(
        (profile) => profile.uuid === this.config.currentProfile,
      ),
      1,
    );
    this.config.currentProfile = this.config.profiles[0].uuid;
    this.saveConfig();
  }

  createProfile(
    name: string,
    stops: ConfigProfileType['stops'],
  ): ConfigProfileType {
    const newProfile: ConfigProfileType = {
      uuid: ConfigService.generateUuid(),
      name,
      stops,
    };
    this.config.profiles.push(newProfile);
    return newProfile;
  }

  static generateUuid(): string {
    return uuidv4();
  }
}
