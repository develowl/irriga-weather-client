/* eslint-disable @typescript-eslint/no-empty-function */
import 'setimmediate'
global.fetch = require('node-fetch')

import { server } from '../src/utils/mockServer/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver
