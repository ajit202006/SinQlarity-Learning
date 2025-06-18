# Printing Butterfly Pattern
while 1:
    n=int(input("Enter number of lines in pattern (Odd number): "))
    if not n%2:
        print("Please Enter a valid number.")
    else:
        break
# Initializing useful values
x,y=1,n-2
gap=1
#for rows
for i in range(n):
    #for columns
    for j in range(n):
        if j<x or j>y:
            print("*",end="")
        else:
            print(" ",end="")
    if i>=n//2:
        gap=-1
    x+=gap
    y-=gap
    print()