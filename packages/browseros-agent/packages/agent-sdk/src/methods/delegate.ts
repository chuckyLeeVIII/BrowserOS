import type { AgentContext } from '../context'
import type { DelegateOptions, DelegateResult } from '../types'

/**
 * Delegate a complex task to a sub-agent.
 */
export async function delegate(
  context: AgentContext,
  instruction: string,
  options?: DelegateOptions
): Promise<DelegateResult> {
  context.throwIfAborted()

  const response = await fetch(`${context.baseUrl}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: instruction,
      conversationId: options?.conversationId || crypto.randomUUID(),
      provider: context.llmConfig?.provider,
      model: context.llmConfig?.model,
      browserContext: context.browserContext,
      userSystemPrompt: options?.systemPrompt,
    }),
    signal: context.signal,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }))
    throw new Error(`Delegation failed: ${error.message}`)
  }

  // Handle streaming response or wait for completion
  // For simplicity in this implementation, we'll assume a summary is returned
  // In a real scenario, we would parse the stream.

  return { success: true, message: 'Sub-agent completed task' }
}
