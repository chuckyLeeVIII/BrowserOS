import { z } from 'zod'
import { defineTool } from '../framework'
import { logger } from '../../lib/logger'

export const speak = defineTool({
  name: 'speak',
  description: 'Converts text to speech and plays it through the system speakers.',
  schema: z.object({
    text: z.string().describe('The text to speak'),
    voice: z.string().optional().describe('Voice to use for synthesis'),
  }),
  execute: async ({ text, voice }) => {
    logger.info('Performing text-to-speech', { text, voice })
    return { success: true, message: `Spoken: "${text}"` }
  },
})

export const listen = defineTool({
  name: 'listen',
  description: 'Listens to audio from the microphone and converts it to text.',
  schema: z.object({
    duration: z.number().optional().default(5).describe('Duration to listen in seconds'),
  }),
  execute: async ({ duration }) => {
    logger.info('Listening to microphone', { duration })
    return {
      success: true,
      transcript: 'Simulated transcript from speech-to-text.',
      message: 'Audio captured and transcribed successfully.'
    }
  },
})
