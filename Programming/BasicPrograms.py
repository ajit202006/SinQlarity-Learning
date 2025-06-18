# First Program
print("Hello World")

# Two number sum 
print("Enter two number to add.")
a= int(input("Enter First number: "))
b= int(input("Enter Second number: "))
print("Sum of numbers",a,b, "is",a+b)

# Even odd Program
num=int(input("Enter a number to check even or odd: "))
if num%2:
    print("Your number is ODD")
else:
    print("Your number is EVEN.")

# Printin a Series
num=int(input("Enter number to print series: "))
for i in range(1,num+1):
    print(i,end=" ")