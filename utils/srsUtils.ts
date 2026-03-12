/**
 * Spaced Repetition System (SRS) Utility
 * Based on a modified SuperMemo-2 (SM2) algorithm.
 * 
 * Quality ratings (0-3):
 * 0: "Again" - Total failure, repeat immediately.
 * 1: "Hard" - Correct but with significant effort.
 * 2: "Good" - Correct after some hesitation.
 * 3: "Easy" - Perfect response.
 */

export interface SRSStats {
  interval: number;       // Days until next review
  repetitionCount: number; // Consecutive successful repetitions
  easinessFactor: number; // Multiplier for interval
  lastReview: string;     // ISO date
  nextReview: string;     // ISO date
}

export const INITIAL_STATS: SRSStats = {
  interval: 0,
  repetitionCount: 0,
  easinessFactor: 2.5,
  lastReview: new Date().toISOString(),
  nextReview: new Date().toISOString(),
};

export function calculateNextSRS(stats: SRSStats, quality: number): SRSStats {
  let { interval, repetitionCount, easinessFactor } = stats;

  if (quality >= 1) { // Correct (Hard, Good, Easy)
    if (repetitionCount === 0) {
      interval = 1;
    } else if (repetitionCount === 1) {
      interval = 4; // Slightly faster ramp-up than pure SM2
    } else {
      interval = Math.round(interval * easinessFactor);
    }
    repetitionCount += 1;
  } else { // Incorrect (Again)
    repetitionCount = 0;
    interval = 0; // Repeat today
  }

  // Update Easiness Factor (EF)
  // EF' = EF + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02))
  // For quality 3 (Easy), EF increases. For quality 1-2, it decreases.
  easinessFactor = easinessFactor + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02));
  
  // EF should not be lower than 1.3
  if (easinessFactor < 1.3) easinessFactor = 1.3;

  const now = new Date();
  const nextDate = new Date();
  nextDate.setDate(now.getDate() + interval);

  return {
    interval,
    repetitionCount,
    easinessFactor,
    lastReview: now.toISOString(),
    nextReview: nextDate.toISOString(),
  };
}

export function isCardDue(nextReview: string): boolean {
  const nextDate = new Date(nextReview);
  const now = new Date();
  // Strip time for daily due check
  nextDate.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return nextDate <= now;
}
