const devEnv = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const isDev = () => {
    return devEnv;
}
