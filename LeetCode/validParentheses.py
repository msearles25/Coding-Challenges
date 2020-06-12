def isValid(self, s: str) -> bool:
    brackets = { "{": "}", '[': ']', '(': ')'}
    stack = []
    counter = 0

    for i in s:
        if i == '|':
            counter += 1
        if i in brackets:
            stack.append(brackets[i])
        elif i in brackets.values():
            if not stack or i != stack.pop():
                return False
    if not stack:
        return True
    return False      

    print(isValid('([)]'))