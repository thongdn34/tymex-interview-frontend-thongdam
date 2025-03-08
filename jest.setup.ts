import '@testing-library/jest-dom'
// eslint-disable-next-line import/no-unresolved
import 'jest-canvas-mock'


// if you need to actually return an element from this, you should mock it locally in your test
global.document.elementsFromPoint = jest.fn(() => [])

// See: https://www.benmvp.com/blog/quick-trick-jest-asynchronous-tests/
beforeEach(() => {
  const nativeConsoleError = console.error
  console.error = (error, ...rest) => {
    const ignoreDeprecationWarning =
      typeof error === 'string' &&
      error.includes('ReactDOM.render is no longer supported in React 18')
    if (ignoreDeprecationWarning) {
      return undefined
    }
    return nativeConsoleError(error, ...rest)
  }
  expect.hasAssertions()
})
