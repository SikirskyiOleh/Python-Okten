# Создать класс Rectangle:
# -конструктор принимает две стороны x,y
# -описать арифметические методы:
#   + сума площадей двух экземпляров класса
#   - разница площадей
#   == или площади равны
#   != не равны
#   >, < меньше или больше
#   при вызове метода len() подсчитывать сумму сторон

class Rectangle:

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return (self.x * self.y) + (other.x * other.y)

    def __sub__(self, other):
        return (self.x * self.y) - (other.x * other.y)

    def __eq__(self, other):
        return (self.x * self.y) == (other.x * other.y)

    def __ne__(self, other):
        return (self.x * self.y) != (other.x * other.y)

    def __gt__(self, other):
        return (self.x * self.y) > (other.x * other.y)

    def __lt__(self, other):
        return (self.x * self.y) < (other.x * other.y)

    def __len__(self):
        return self.x + self.y
