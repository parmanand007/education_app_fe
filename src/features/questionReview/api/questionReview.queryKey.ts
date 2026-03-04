export const questionReviewQueryKey = {
  all: ['question-review'],

  list: (filters: any) => ['question-review', 'list', filters],

  programs: (search: string) => ['question-review', 'programs', search],

  learningPoints: (search: string) => ['question-review', 'learning-points', search],
}