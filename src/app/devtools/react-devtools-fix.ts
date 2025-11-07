/**
 * Fix for React DevTools with React 19
 * 
 * Suppress the "Invalid argument not valid semver" error that occurs
 * when React DevTools tries to read the React version and receives
 * an empty string. This is a known problem with React 19.
 * 
 * @see https://github.com/facebook/react/issues
 */
export const initReactDevToolsFix = (): void => {
  if (typeof window === 'undefined') {
    return
  }

  // Intercept unhandled errors
  const originalOnError = window.onerror
  window.onerror = (
    message?: string | Event,
    source?: string,
    lineno?: number,
    colno?: number,
    error?: Error
  ): boolean => {
    // Suppress the specific error of React DevTools with React 19
    if (
      (typeof message === 'string' && message.includes('Invalid argument not valid semver')) ||
      (error?.message?.includes('Invalid argument not valid semver'))
    ) {
      return true // Prevent the error from being displayed in the console
    }
    // Call the original handler if it exists
    if (originalOnError && message) {
      return originalOnError.call(window, message, source, lineno, colno, error)
    }
    return false
  }

  // Also capture unhandled errors in promises
  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason?.message?.includes('Invalid argument not valid semver') ||
      (typeof event.reason === 'string' && event.reason.includes('Invalid argument not valid semver'))
    ) {
      event.preventDefault()
    }
  })
}

