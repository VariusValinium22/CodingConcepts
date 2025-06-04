
# Run: python fibonacci.py
#================ [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] ==========
# full equation
def fib(n):
    n1 = 1
    n2 = 0
    r = 0
    if 0 <= n <= 1:
        return n
    for f in range(n - 1):
        r = n1 + n2
        n2 = n1
        n1 = r
    return r

fiblist = []
for i in range(10):
    fiblist.append(fib(i))
print(fiblist)
print("Is dataType a number?", type(fiblist[0]) == int)

#=============================================================
#short equation
def fib2(n):
    if n == 0:
        return 0
    elif n == 1 or n == 2: 
        return 1
    return fib2(n-1) + fib2(n-2)

fiblist2=[]
for i in range(10):
    fiblist2.append(fib2(i))
print(fiblist2)
print("Is dataType a number?", type(fiblist[0]) == int)
#===============================================



