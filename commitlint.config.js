module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 120],
    'type-enum': [
      2,
      'always',
      ['minorFeat', 'majorFeat', 'bug', 'lint', 'docs', 'style', 'refactor', 'test', 'fix', 'chore', 'perf', 'build','revert']
    ],
    'type-case': [2, 'always', ['lower-case', 'camel-case']],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'sentence-case'],
    'jira-match': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'jira-match': ({ subject }) => {
          const jiraPattern = /^[A-Z]{2,5}-\d{1,5} - .+/;
          return [
            jiraPattern.test(subject),
            `The commit subject must start with a Jira ID (e.g., ZRP-2262 - Add login page)`
          ];
        },
      },
    },
  ],
};
