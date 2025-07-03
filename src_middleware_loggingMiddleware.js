const loggingMiddleware = {
  log: (message, level = 'INFO') => {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    // In a real scenario, this would append to a custom log store or send to a server
    console.log(logEntry); // Placeholder for custom logging implementation
  },
  error: (message) => {
    loggingMiddleware.log(message, 'ERROR');
  },
  warn: (message) => {
    loggingMiddleware.log(message, 'WARN');
  },
  info: (message) => {
    loggingMiddleware.log(message, 'INFO');
  },
};

export default loggingMiddleware;