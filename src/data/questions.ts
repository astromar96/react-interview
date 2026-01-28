import { parseMarkdownQuestions, getAllQuestions, getTotalQuestionCount } from './parser';
import rawQuestions from './questions.md?raw';

// Parse the markdown content into structured data
export const categories = parseMarkdownQuestions(rawQuestions);

// Flatten all questions for easy searching
export const allQuestions = getAllQuestions(categories);

// Get total count
export const totalQuestions = getTotalQuestionCount(categories);

// Export for convenience
export { findQuestionById, findCategoryById } from './parser';
