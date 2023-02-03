# # # def merge_sort(unsorted_array):
# # #     if len(unsorted_array) > 1:
# # #         mid = len(unsorted_array) // 2  # Finding the mid of the array
# # #         left = unsorted_array[:mid]  # Dividing the array elements
# # #         right = unsorted_array[mid:]  # into 2 halves

# # #         merge_sort(left)
# # #         merge_sort(right)

# # #         i = j = k = 0

# # #         #  data to temp arrays L[] and R[]
# # #         while i < len(left) and j < len(right):
# # #             if left[i] < right[j]:
# # #                 unsorted_array[k] = left[i]
# # #                 i += 1
# # #             else:
# # #                 unsorted_array[k] = right[j]
# # #                 j += 1
# # #             k += 1

# # #         # Checking if any element was left
# # #         while i < len(left):
# # #             unsorted_array[k] = left[i]
# # #             i += 1
# # #             k += 1

# # #         while j < len(right):
# # #             unsorted_array[k] = right[j]
# # #             j += 1
# # #             k += 1


# # # # Code to print the list
# # # def print_list(array1):
# # #     for i in range(len(array1)):
# # #         print(array1[i], end=" ")
# # #     print()


# # # # driver code to test the above code
# # # if __name__ == '__main__':
# # #     array = [12, 11, 13, 5, 6, 7]
# # #     print("Given array is", end="\n")
# # #     print_list(array)
# # #     merge_sort(array)
# # #     print("Sorted array is: ", end="\n")
# # #     print_list(array)

# # def arrayManipulation(n, queries):
# #     arr = [0] * (n+1)
# #     # add the value at first index
# #     # subtract the value at last index + 1
# #     print(arr)
# #     for q in queries:
# #         start, end, amt = q
# #         print( start, end, amt)
# #         arr[start-1] += amt
# #         arr[end] -= amt

# #     # max value and running sum
# #     print(arr)
# #     mv = -1
# #     running = 0
# #     for a in arr:
# #         running += a
# #         if running > mv:
# #             mv = running

# #     return mv

# # print (arrayManipulation(5,[ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]))



# def prefix_sums(A):
#   n = len(A)
#   P = [0] * (n + 1)
#   for k in range(1, n + 1):
#     print(k)
#     P[k] = P[k - 1] + A[k - 1]
#   return P
  
# print(prefix_sums([100, 100, 0, 0, -100, -100]))

# importing the required module
import matplotlib.pyplot as plt

# x axis values
x = [1,2,3]
# corresponding y axis values
y = [2,4,1]

# plotting the points
plt.plot(x, y)

# naming the x axis
plt.xlabel('x - axis')
# naming the y axis
plt.ylabel('y - axis')

# giving a title to my graph
plt.title('My first graph!')

# function to show the plot
plt.show()
