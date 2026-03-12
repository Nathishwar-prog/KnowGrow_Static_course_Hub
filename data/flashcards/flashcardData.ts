export interface FlashcardData {
  id: string;
  front: string;
  back: string;
  category: 'python' | 'numpy' | 'pandas' | 'general';
  tags: string[];
}

export const ALL_FLASHCARDS: FlashcardData[] = [
  // Python Basics
  {
    id: 'py-list-vs-tuple',
    front: 'What is the main difference between a Python List and a Tuple?',
    back: 'Lists are mutable (can be changed), while Tuples are immutable (cannot be changed).',
    category: 'python',
    tags: ['basics', 'data-types']
  },
  {
    id: 'py-f-string',
    front: 'How do you create an f-string in Python?',
    back: 'Prefix the string with "f" or "F", e.g., f"Hello {name}"',
    category: 'python',
    tags: ['syntax', 'strings']
  },
  // NumPy
  {
    id: 'np-shape',
    front: 'What NumPy attribute returns the dimensions of an array?',
    back: '`array.shape` returns a tuple representing the size of each dimension.',
    category: 'numpy',
    tags: ['arrays', 'basics']
  },
  {
    id: 'np-broadcasting',
    front: 'What is "Broadcasting" in NumPy?',
    back: 'The mechanism that allows NumPy to work with arrays of different shapes during arithmetic operations.',
    category: 'numpy',
    tags: ['performance', 'arrays']
  },
  // Pandas
  {
    id: 'pd-iloc-vs-loc',
    front: 'What is the difference between `.iloc` and `.loc` in Pandas?',
    back: '`.iloc` is integer-based indexing, while `.loc` is label-based indexing.',
    category: 'pandas',
    tags: ['indexing', 'dataframes']
  },
  {
    id: 'pd-nulls',
    front: 'How do you check for missing values in a Pandas DataFrame?',
    back: '`df.isnull()` or `df.isna()` returns a boolean mask for missing values.',
    category: 'pandas',
    tags: ['data-cleaning']
  }
];
