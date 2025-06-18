# Program to print series 
# Here Ai represents the element at the position i of the series
# The equation for every element of the series is :
# A0 = 1 and Ai = A(i-1) + i 
start=1
i=1
end=int(input("Enter number of terms in the series: "))
while i<=end:
    print(start)
    start+=i
    i+=1

# Another Series Printing program
# here for element at odd position we add 3 and for even position we subtract 1 to get next element

start=1
gap = 3
end=int(input("Enter number of terms in the series: "))
i=1
while i <=end:
    print(start)
    start+=gap
    if gap==3:
        gap =-1
    else:
        gap=3
    i+=1
