import type { Question, Category } from '../types';

/**
 * Parse markdown content into structured categories and questions
 */
export function parseMarkdownQuestions(markdown: string): Category[] {
  const categories: Category[] = [];

  // Split by category headers (## N. Category Name)
  const sections = markdown.split(/(?=^## \d+\.)/m).filter(Boolean);

  for (const section of sections) {
    // Match category header
    const headerMatch = section.match(/^## (\d+)\. (.+?)[\r\n]/m);
    if (!headerMatch) continue;

    const [, numberStr, name] = headerMatch;
    const number = parseInt(numberStr, 10);
    const categoryId = `cat-${number}`;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');

    // Parse questions within category
    const questions = parseQuestionsFromSection(section, categoryId, name.trim());

    if (questions.length > 0) {
      categories.push({
        id: categoryId,
        number,
        name: name.trim(),
        slug,
        questions
      });
    }
  }

  return categories.sort((a, b) => a.number - b.number);
}

/**
 * Parse individual questions from a category section
 */
function parseQuestionsFromSection(
  section: string,
  categoryId: string,
  categoryName: string
): Question[] {
  const questions: Question[] = [];

  // Split by question headers (### Q: Question text)
  const questionBlocks = section.split(/(?=^### Q:)/m).filter(s => s.trim().startsWith('### Q:'));

  questionBlocks.forEach((block, index) => {
    // Extract question text
    const questionMatch = block.match(/^### Q: (.+?)[\r\n]/m);
    if (!questionMatch) return;

    const questionText = questionMatch[1].trim();

    // Extract answer (everything after **Answer:**)
    const answerStart = block.indexOf('**Answer:**');
    let answer = '';

    if (answerStart !== -1) {
      answer = block.slice(answerStart + 11).trim();
    } else {
      // Fallback: everything after the question header
      answer = block.slice(questionMatch[0].length).trim();
    }

    // Clean up the answer - remove trailing separators
    answer = answer.replace(/\n---\s*$/, '').trim();

    // Extract senior insight if present
    const seniorInsight = extractSeniorInsight(answer);

    questions.push({
      id: `${categoryId}-q${index + 1}`,
      categoryId,
      categoryName,
      question: questionText,
      answer,
      seniorInsight
    });
  });

  return questions;
}

/**
 * Extract the "Senior insight" section from an answer
 */
function extractSeniorInsight(content: string): string | undefined {
  const match = content.match(/\*\*Senior insight:\*\*\s*(.+?)(?=\n\n|\n---|\n###|$)/s);
  return match ? match[1].trim() : undefined;
}

/**
 * Get total question count from categories
 */
export function getTotalQuestionCount(categories: Category[]): number {
  return categories.reduce((sum, cat) => sum + cat.questions.length, 0);
}

/**
 * Flatten all questions from categories
 */
export function getAllQuestions(categories: Category[]): Question[] {
  return categories.flatMap(cat => cat.questions);
}

/**
 * Find a question by ID
 */
export function findQuestionById(categories: Category[], id: string): Question | undefined {
  for (const cat of categories) {
    const question = cat.questions.find(q => q.id === id);
    if (question) return question;
  }
  return undefined;
}

/**
 * Find a category by ID
 */
export function findCategoryById(categories: Category[], id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}
