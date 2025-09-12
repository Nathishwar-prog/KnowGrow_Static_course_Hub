import React from 'react';
import { SimpleTable } from '../components';

const KeyboardShortcuts: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Keyboard shortcuts can significantly speed up your development workflow. This page provides a reference of common shortcuts for web browsers and code editors.</p>
    <p className="text-lg leading-relaxed mt-4">Note: Shortcuts for Mac users typically replace `Ctrl` with `Cmd (⌘)` and `Alt` with `Option (⌥)`.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Browser Shortcuts (Chrome/Firefox)</h2>
    <SimpleTable
      headers={['Shortcut (Windows/Linux)', 'Shortcut (Mac)', 'Action']}
      rows={[
        ['Ctrl + T', 'Cmd + T', 'Open a new tab'],
        ['Ctrl + W', 'Cmd + W', 'Close the current tab'],
        ['Ctrl + Shift + T', 'Cmd + Shift + T', 'Reopen the last closed tab'],
        ['F12 or Ctrl + Shift + I', 'Cmd + Option + I', 'Open Developer Tools'],
        ['Ctrl + R or F5', 'Cmd + R', 'Reload the page'],
        ['Ctrl + Shift + R', 'Cmd + Shift + R', 'Hard reload the page (ignore cache)'],
        ['Ctrl + F', 'Cmd + F', 'Find text on the page'],
        ['Ctrl + U', 'Cmd + Option + U', 'View page source'],
      ]}
    />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">VS Code Shortcuts</h2>
    <h3 className="text-2xl font-bold mt-8 mb-3">General</h3>
    <SimpleTable
      headers={['Shortcut (Windows/Linux)', 'Shortcut (Mac)', 'Action']}
      rows={[
        ['Ctrl + P', 'Cmd + P', 'Quick Open, Go to File...'],
        ['Ctrl + Shift + P', 'Cmd + Shift + P', 'Show Command Palette'],
        ['Ctrl + ,', 'Cmd + ,', 'Open User Settings'],
        ['Ctrl + K Ctrl + S', 'Cmd + K Cmd + S', 'Open Keyboard Shortcuts'],
      ]}
    />

    <h3 className="text-2xl font-bold mt-8 mb-3">Editing</h3>
    <SimpleTable
      headers={['Shortcut (Windows/Linux)', 'Shortcut (Mac)', 'Action']}
      rows={[
        ['Ctrl + X', 'Cmd + X', 'Cut line (empty selection)'],
        ['Ctrl + C', 'Cmd + C', 'Copy line (empty selection)'],
        ['Alt + ↑ / ↓', 'Option + ↑ / ↓', 'Move line up/down'],
        ['Shift + Alt + ↑ / ↓', 'Shift + Option + ↑ / ↓', 'Copy line up/down'],
        ['Ctrl + Shift + K', 'Cmd + Shift + K', 'Delete line'],
        ['Ctrl + D', 'Cmd + D', 'Add selection to next find match'],
        ['Ctrl + Shift + L', 'Cmd + Shift + L', 'Select all occurrences of current selection'],
        ['Ctrl + /', 'Cmd + /', 'Toggle line comment'],
        ['Shift + Alt + F', 'Shift + Option + F', 'Format document'],
        ['F2', 'F2', 'Rename Symbol'],
      ]}
    />
  </>
);

export default KeyboardShortcuts;