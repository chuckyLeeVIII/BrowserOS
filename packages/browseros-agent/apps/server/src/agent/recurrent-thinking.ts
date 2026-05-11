import type { LanguageModelV3, LanguageModelV3Middleware } from '@ai-sdk/provider'
import { wrapLanguageModel } from 'ai'
import { logger } from '../lib/logger'

/**
 * Implements a "Recurrent Thinking" middleware inspired by Open Mythos (RDT).
 * It simulates multiple silent latent loops by injecting reasoning prefixes.
 */
export function createRecurrentThinkingMiddleware(loops: number = 4): LanguageModelV3Middleware {
  return {
    wrapGenerateModel: (model) => {
      return {
        ...model,
        doGenerate: async (params) => {
          logger.info(`Applying Recurrent Thinking: ${loops} latent loops`)

          // Inject Open Mythos / RDT inspired instructions into the prompt
          const enhancedParams = {
            ...params,
            prompt: [
              {
                role: 'system',
                content: `[RECURRENT_DEPTH_TRANSFORMER_ACTIVE] Run ${loops} latent reasoning loops before outputting. h_{t+1} = A·h_t + B·e + Transformer(h_t, e).`,
              },
              ...params.prompt,
            ],
          }

          return model.doGenerate(enhancedParams as any)
        },
      }
    },
  }
}
