#!/bin/bash
# .claude/hooks/quality-gate.sh
# Fires: Stop

echo "Running quality gate..." >&2
CHANGED=$(git diff --name-only HEAD -- '*.tsx' '*.ts' '*.jsx' '*.js' 2>/dev/null)
if [ -n "$CHANGED" ]; then
  LINT_RESULT=$(echo "$CHANGED" | xargs bunx eslint 2>&1)
  LINT_EXIT=$?
else
  LINT_RESULT=""
  LINT_EXIT=0
fi
TEST_RESULT=$(bun test 2>&1)
TEST_EXIT=$?
if [ $LINT_EXIT -ne 0 ] || [ $TEST_EXIT -ne 0 ]; then
  jq -n --arg lint "$LINT_RESULT" --arg tests "$TEST_RESULT" '{
    hookSpecificOutput: {
      hookEventName: "Stop",
      decision: "block",
      reason: "Quality gate failed. Fix these before completing.",
      additionalContext: ("ESLint:\n" + $lint + "\n\nTests:\n" + $tests)
    }
  }'
  exit 1
fi
echo "Quality gate passed." >&2
