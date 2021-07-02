# 1)написати прогу яка вибирає зі введеної строки цифри і виводить їх через кому,
# наприклад:
# st = 'as 23 fdfdg544' введена строка
# 2,3,5,4,4        #вивело в консолі.
st = 'as 23 fdfdg544'
li = ''

for i in st:
    if i.isdecimal():
        li += i

li = ', '.join(li)
print(li)

# 2)написати прогу яка вибирає зі введеної строки числа і виводить їх
# так як вони написані
# наприклад:
#   st = 'as 23 fdfdg544 34' #введена строка
#   23, 544, 34              #вивело в консолі
res = ''

for i in st:
    if i.isdigit():
        res += i
    else:
        res += ' '

res = ', '.join(res.split())
print(res)

# 1) есть строка:
# greeting = 'Hello, world'
# записать каждый символ в лист поменяв его на верхний регистр
# пример:
# ['H', 'E', 'L', 'L', 'O', ',', ' ', 'W', 'O', 'R', 'L', 'D']
greeting = 'Hello, world'

lis = [item.upper() for item in greeting]

print(lis)

# с диапазона от 0-50 записать в лист только не парные числа, при этом возвести их в квадрат
# пример:
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, ...]
num = [i ** 2 for i in range(51) if i % 2 != 0]

print(num)


# - створити функцію яка виводить ліст
def printlist(list):
    print(list)


# - створити функцію яка приймає три числа та виводить та повертає найменьше.
def minnumber(a, b, c):
    minN = min(a, b, c)
    print(minN)
    return minN


# - створити функцію яка приймає три числа та виводить та повертає найбільше.
def maxnumber(a, b, c):
    maxN = max(a, b, c)
    print(maxN)
    return maxN


# - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
def num(*args):
    minn = min(*args)
    maxn = max(*args)
    print(maxn)
    return minn


# - створити функцію яка повертає найбільше число з ліста
def limax(lis):
    maxn = int(max(lis))
    return maxn


# - створити функцію яка повертає найменьше число з ліста
def limin(lis):
    minn = int(min(lis))
    return minn


# - створити функцію яка приймає ліст чисел та складає значення елементів ліста та повертає його.
def func(li):
    res = 0
    for item in li:
        res += item
    return res


# - створити функцію яка приймає ліст чисел та повертає середнє арифметичне його значень.
def sa(li):
    res = 0
    for item in li:
        res += item
    res = res / len(li)
    return res


# - є функція:
# def pr():
#     return 'Hello_boss_!!!'
#  написати декоратор до цієї функції, який замінює нижні підчеркування на пробіли і повертає це значення

def decor(func):
    def wrap():
        return func().replace('_', ' ')


@decor
def pr():
    return 'Hello_boss_!!!'
