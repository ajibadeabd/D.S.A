
def firstClass():
 memo = {}
 def gibonacci(n, x, y):
    if n == 0: 
        return x 
    elif n == 1: 
        return y 
    else:
        # using memoization to avoid redundant calculations 

        if (n-1,x,y) in memo:
            prev1 = memo[(n-1,x,y)]
        else:
            prev1 = gibonacci(n-1,x,y)
            memo[(n-1,x,y)] = prev1
        if (n-2,x,y) in memo:
            prev2 = memo[(n-2,x,y)]
        else:
            prev2 = gibonacci(n-2,x,y)
            memo[(n-2,x,y)] = prev2
        return prev1 - prev2
 
 return gibonacci
gibonacci = firstClass()
print(gibonacci(0,0,1))
print(gibonacci(1,0,1))
print(gibonacci(2,0,1))
print(gibonacci(17,0,1))