"""
1)Дано лист:
  list = [22, 3,5,2,8,2,-23, 8,23,5]
  - найти min число в листе
  - удалить все одинаковые значения
  - заменить каждое четвертое значение на "Х"
  """
# -
li = [22, 3, 5, 2, 8, 2, -23, 8, 23, 5]
li.sort()
print(li[0])

# -
res = []
for i in li:
    if i not in res:
        res.append(i)

print(res)

# -
print(li[::4])
print(li)

"""
2)вывести на экран пустой квадрат из "*" сторона которого указана в переменой
"""
side = 5

for i in range(side):
    for j in range(side):
        print('*' if i in [0, side - 1] or j in [0, side - 1] else ' ', end='')
    print()

"""
вывести табличку умножения с помощью цикла while

"""

