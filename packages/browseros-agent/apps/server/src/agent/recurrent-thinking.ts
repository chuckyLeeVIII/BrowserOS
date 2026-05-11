import type { LanguageModelV3, LanguageModelV3Middleware } from '@ai-sdk/provider'
import { logger } from '../lib/logger'

/**
 * Implements a "Recurrent Thinking" middleware inspired by Open Mythos (RDT).
 * It simulates multiple silent latent loops by injecting reasoning prefixes.
 * Stable update rule: h_{t+1} = A·h_t + B·e + Transformer(h_t, e)
 */
export function createRecurrentThinkingMiddleware(loops: number = 4): LanguageModelV3Middleware {
  return {
    wrapGenerateModel: (model) => {
      return {
        ...model,
        doGenerate: async (params) => {
          logger.info(`Applying Recurrent Thinking: ${loops} latent loops (Open Mythos RDT)`)

          const enhancedParams = {
            ...params,
            prompt: [
              {
                role: 'system',
                content: `[RECURRENT_DEPTH_TRANSFORMER_ACTIVE] Use Open Mythos RDT reasoning. Execute ${loops} latent reasoning loops using the stable update rule: h_{t+1} = A·h_t + B·e + Transformer(h_t, e). Inject encoded input 'e' at each step.`,
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
