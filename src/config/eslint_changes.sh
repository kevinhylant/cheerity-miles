#!/bin/sh
START_DATE=$(date +"%s")

echo "\Linting Javascript:\n"

yarn run lint
if [[ "$?" == 0 ]]; then
  echo "\t\033[32mESLint Passed!"
else
  echo "\t\033[41mESLint Failed :("
  PASS=false
fi

if ! ${PASS}; then
  echo "\033[41mCOMMIT FAILED:\033[0m Your commit contains files that should pass ESLint but do not. Please fix the ESLint errors and try again.\n"
  exit 1
else
  echo "\033[42mCOMMIT SUCCEEDED\033[0m\n"
fi

END_DATE=$(date +"%s")

DATE_DIFF=$(($END_DATE - $START_DATE))
echo "ESLinting changed files took $(($DATE_DIFF / 60)) minutes and $(($DATE_DIFF % 60 )) seconds to complete. "

exit $?
