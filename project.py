class stack:
    arr=[]
    top=0
    def __init__(self):
        arr=int(arr)
        top=-1
    def push(self,val):
        top+=1
        arr[top]=val
    def pop(self):
        top-=1
    def empty(self):
        return top==self.size()-1


def print(s):
    while not s.empty:

        print(s.peak())
        s.pop()    
f=stack()
f.push(8)
f.push(9)
f.push(5)
print(f)
f.pop()
print(f)

