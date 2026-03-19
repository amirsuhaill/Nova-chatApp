import { knowledgeBase, fallbackResponses } from '../data/knowledgeBase';

export function getResponse(userInput, lastSubtopic = null) {
  const input = userInput.toLowerCase().trim();

  let bestScore = 0;
  let bestEntry = null;

  for (const entry of knowledgeBase) {
    let score = 0;

    for (const keyword of entry.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        // longer keyword phrases score higher
        score += keyword.split(' ').length * 2;
      }
    }

    // Context boost: vague follow-ups inherit last subtopic
    if (score === 0 && lastSubtopic && entry.subtopic === lastSubtopic) {
      const vagueFollowUps = ['how far', 'how big', 'tell me more', 'what about', 'more info', 'explain', 'details', 'how old', 'how long', 'how many', 'how much'];
      if (vagueFollowUps.some(phrase => input.includes(phrase))) {
        score += 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  if (bestEntry && bestScore > 0) {
    return { answer: bestEntry.answer, subtopic: bestEntry.subtopic };
  }

  const fallback = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  return { answer: fallback, subtopic: null };
}
