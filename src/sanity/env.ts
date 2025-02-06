export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-05'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "sk0mbSy3Y2xXaQrIHAVHhnKFjAb74Jw1K9qncmXlLjHK3jFa3DsLOOCFicqp8nPACe5R6mkjHKAayNRS2YGJs8ziQvUdUElU284vtPYu4qU1zzOfOlvrUZUsekbpEEXEqDhIHwHQeZlWID2qd54FNn78slJNHFSPa3RB1LZKJZ3YE0bgywgz",
  'Missing environment variable: NEXT_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
