def romanToInt(self, s: str) -> int:
    d = {'I': 1, 'V': 5, 'X': 10, 'L':50, 'C': 100, 'D': 500, 'M':1000}
    count = 0
    for i in range(len(s)):
        if s[i] in d:
            if (i+1) != len(s) and d[s[i]] < d[s[i+1]]:
                count -= d[s[i]]
                continue
            count += d[s[i]]
            
    return count