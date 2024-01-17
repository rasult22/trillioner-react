import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'trillioner.diary.app',
  appName: 'Ежедневник',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
