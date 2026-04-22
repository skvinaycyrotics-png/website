/**
 * Production-ready logging utility.
 * In development, it logs to the console with colors.
 * In production, it can be extended to send logs to a service like Datadog or Axiom.
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

const IS_PROD = process.env.NODE_ENV === 'production';

function formatMessage(level: LogLevel, message: string, data?: any) {
  const timestamp = new Date().toISOString();
  const dataString = data ? ` | Data: ${JSON.stringify(data)}` : '';
  return `[${timestamp}] [${level.toUpperCase()}] ${message}${dataString}`;
}

export const logger = {
  info: (message: string, data?: any) => {
    const formatted = formatMessage('info', message, data);
    console.log(formatted);
    // TODO: Send to production logging service
  },

  warn: (message: string, data?: any) => {
    const formatted = formatMessage('warn', message, data);
    console.warn(formatted);
  },

  error: (message: string, error?: Error | any, data?: any) => {
    const formatted = formatMessage('error', message, {
      ...data,
      errorMessage: error?.message || error,
      stack: error?.stack,
    });
    console.error(formatted);
    // TODO: Send to Sentry or similar
  },

  debug: (message: string, data?: any) => {
    if (!IS_PROD) {
      const formatted = formatMessage('debug', message, data);
      console.debug(formatted);
    }
  },
};
