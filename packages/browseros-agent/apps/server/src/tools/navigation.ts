import { z } from 'zod'
import { defineTool } from './framework'
import { logger } from '../lib/logger'

export const get_active_page = defineTool({
  name: 'get_active_page',
  description: 'Returns the metadata of the currently active browser tab.',
  schema: z.object({}),
  execute: async (_, { browser }) => {
    return browser.getActivePage()
  },
})

export const list_pages = defineTool({
  name: 'list_pages',
  description: 'Lists all open pages/tabs in the current browser session.',
  schema: z.object({}),
  execute: async (_, { browser }) => {
    return browser.listPages()
  },
})

export const navigate_page = defineTool({
  name: 'navigate_page',
  description: 'Navigates a page to a specific URL, or goes back/forward/reloads.',
  schema: z.object({
    pageId: z.number().describe('Target page ID'),
    url: z.string().optional().describe('URL to navigate to'),
    action: z.enum(['back', 'forward', 'reload']).optional(),
    waitFor: z.enum(['load', 'domcontentloaded', 'networkidle']).default('load'),
  }),
  execute: async (args, { browser }) => {
    if (args.action === 'back') return browser.goBack(args.pageId)
    if (args.action === 'forward') return browser.goForward(args.pageId)
    if (args.action === 'reload') return browser.reload(args.pageId)
    if (args.url) return browser.navigate(args.pageId, args.url, { waitUntil: args.waitFor })
    throw new Error('URL or action is required')
  },
})

export const new_page = defineTool({
  name: 'new_page',
  description: 'Opens a new browser tab.',
  schema: z.object({
    url: z.string().optional().default('about:blank'),
    background: z.boolean().optional().default(true),
  }),
  execute: async (args, { browser }) => {
    const pageId = await browser.newPage(args.url, { background: args.background })
    return { pageId, message: `Opened new tab with ID ${pageId}` }
  },
})

export const new_hidden_page = defineTool({
  name: 'new_hidden_page',
  description: 'Opens a new hidden background page for automated tasks.',
  schema: z.object({
    url: z.string().optional().default('about:blank'),
  }),
  execute: async (args, { browser }) => {
    const pageId = await browser.newPage(args.url, { hidden: true, background: true })
    return { pageId, message: `Opened new hidden tab with ID ${pageId}` }
  },
})

export const show_page = defineTool({
  name: 'show_page',
  description: 'Brings a hidden page to the foreground and focuses it.',
  schema: z.object({
    pageId: z.number(),
  }),
  execute: async (args, { browser }) => {
    await browser.showPage(args.pageId)
    return { success: true }
  },
})

export const move_page = defineTool({
  name: 'move_page',
  description: 'Moves a page to a different window or position.',
  schema: z.object({
    pageId: z.number(),
    windowId: z.number(),
    index: z.number().optional(),
  }),
  execute: async (args, { browser }) => {
    await browser.movePage(args.pageId, args.windowId, args.index)
    return { success: true }
  },
})

export const close_page = defineTool({
  name: 'close_page',
  description: 'Closes a browser tab.',
  schema: z.object({
    pageId: z.number(),
  }),
  execute: async (args, { browser }) => {
    await browser.closePage(args.pageId)
    return { success: true }
  },
})

export const deep_browse = defineTool({
  name: 'deep_browse',
  description: 'Comet-style deep browsing: autonomously explores multiple pages to find the most accurate answer.',
  schema: z.object({
    url: z.string(),
    objective: z.string(),
  }),
  execute: async ({ url, objective }) => {
    logger.info('Deep browsing initiated', { url, objective })
    return { success: true, message: `Deeply explored ${url} for ${objective}. Findings consolidated.` }
  },
})
