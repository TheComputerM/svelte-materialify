module.exports = {
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'svelte'],
  rootDir: 'src',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
