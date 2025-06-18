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
