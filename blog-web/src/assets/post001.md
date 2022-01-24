---
title: OpenCV 学习笔记（一）
date: 2019-10-12 17:52:39
tags: OpenCV
categories: OpenCV

---



[OpenCV — 维基百科](https://zh.wikipedia.org/wiki/OpenCV) 

**OpenCV**的全称是Open Source Computer Vision Library，是一个跨平台的[计算机视觉](https://zh.wikipedia.org/wiki/计算机视觉)库。OpenCV是由[英特尔公司](https://zh.wikipedia.org/wiki/英特尔)发起并参与开发，以[BSD许可证](https://zh.wikipedia.org/wiki/BSD许可证)授权发行，可以在商业和研究领域中免费使用。OpenCV可用于开发实时的[图像处理](https://zh.wikipedia.org/wiki/图像处理)、[计算机视觉](https://zh.wikipedia.org/wiki/计算机视觉)以及[模式识别](https://zh.wikipedia.org/wiki/模式识别)程序。



<!--more-->



## 读取和显示图像

- cv2.imread()：读取
- cv2.imwrite()：写入
- cv2.imshow()：显示

```python
img = cv2.imread(img_path, 0)
cv2.namedWindow("imview", cv2.WINDOW_NORMAL)
cv2.imshow("imview", img)
k = cv2.waitKey(0)
if k == ord("s"):
  cv2.imwrite("other.jpg", img)
cv2.destroyAllWindows()
```



![](https://image.youyou-2608.com//blog/20191012/屏幕快照2019-10-0620.25.17.png)



## 视频的操作

### 从摄像头读取视频

- cv2.VideoCapture(0).read()
- cv2.cvtColor()
- cv2.imshow()
- cap.get(propId)

```python
def create_video():
    cap = cv2.VideoCapture(0)
    while True:
        ret, frame = cap.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        cv2.imshow("frame", gray)
        if cv2.waitKey() == ord("q"):
            break
    cap.release()
    cv2.destroyAllWindows()
    
   
def video():
    cap = cv2.VideoCapture(0)
    fourcc = cv2.VideoWriter_fourcc(*'XVID')
    out = cv2.VideoWriter("output.avi", fourcc, 20, 0, (640, 480))
    while (cap.isOpened()):
        ret, frame = cap.read()
        if ret:
            frame = cv2.flip(frame, 0)
            out.write(frame)
            cv2.imshow("video", frame)
            if cv2.waitKey(0) == ord("q"):
                break
        else:
            break
    cap.release()
    out.release()
    cv2.destroyAllWindows()
```



### 从文件中获取视频

cv2.VideoCapture(0)表示打开默认设备，将设备索引号改成视频文件的名称就能从视频文件中读取视频，使用 waitKey()控制播放速度（通常25 ms）。



## OpenCV 中的绘图函数

学会以下函数的使用：

- cv2.line()
- cv2.circle()
- cv2.rectangle()
- cv2.ellipse()
- cv2.putText()

参数：上面所有的绘图函数都需要的参数：

- img ：画布
- color : 指定的颜色，RGB->(255, 255, 0)
- linetype : 线条的类型，8连接，抗锯齿等。lineType=cv2.LINE_AA（抗锯齿）。



### 画线

画一条直线需要指定直线的起点和终点：

```python
def draw_line2():
    canvas = np.zeros((300, 300, 3), dtype="uint8")
    green = (0, 255, 0)
    cv2.line(canvas, (20, 20), (150, 150), color=green)
    cv2.imshow("green line", canvas)
    cv2.waitKey(0)
```



![](https://image.youyou-2608.com//blog/20191012/屏幕快照2019-10-0620.40.01.png)



### 画矩形

绘制矩形需要指定两个点的坐标：

```python
def draw_rectangle():
    canvas = np.zeros((300, 300, 3), dtype="uint8")
    color = (126, 126, 126)
    cv2.rectangle(canvas, (80, 80), (250, 270), color=color)
    cv2.imshow("rectangle", canvas)
    cv2.waitKey(0)
```



![](https://image.youyou-2608.com//blog/20191012/屏幕快照2019-10-0620.49.11.png)



### 画圆

绘制圆形需要指定圆心坐标和半径大小：

```python
def draw_circle():
    canvas = np.zeros((300, 300, 3), dtype="uint8")
    color = (100, 100, 100)
    cv2.circle(canvas, (150, 140), 100, color=color)
    cv2.imshow("circle", canvas)
    cv2.waitKey(0)
```



![](https://image.youyou-2608.com//blog/20191012/屏幕快照2019-10-0620.53.40.png)



### 画椭圆

绘制椭圆需要指定的参数：

1. 中心点坐标
2. 长轴和短轴
3. 沿逆时针方向旋转的角度
4. 顺时针方向起始角度和结束角度

```python
def draw_ellipse():
    canvas = np.zeros((400, 400, 3), dtype="uint8")
    color = (100, 100, 100)
    cv2.ellipse(canvas, (200, 200), (100, 150), 0, 0, 360, color)
    cv2.imshow("ellipse", canvas)
    cv2.waitKey(0)
```



![](https://image.youyou-2608.com//blog/20191012/屏幕快照2019-10-0620.59.20.png)



### 在图片中添加文字

所需参数：

- 添加的文本
- 绘制的位置
- 字体类型
- 字体大小
- 文字的一般属性（颜色，粗细，线条类型等）

```python
def put_text():
    canvas = np.zeros((300, 600, 3), dtype="uint8")
    font = cv2.FONT_HERSHEY_SIMPLEX
    cv2.putText(canvas, 'Kanna Makino', (10, 100), font, 2, (100, 100, 100), 2)
    cv2.imshow("put text", canvas)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
```



![](https://image.youyou-2608.com//blog/20191012/屏幕快照2019-10-0621.12.59.png)





## 简单的鼠标事件

- 学习使用 OpenCV 处理鼠标事件
- 函数：**cv2.setMouseCallback()**



### 简单示例

鼠标事件可以获得事件对应的坐标和事件名称。

```python
def draw_circle(event, x, y, flags, params):
    if event == cv2.EVENT_LBUTTONDBLCLK:
        cv2.circle(img, (x, y), 100, (255, 255, 255), -1, lineType=cv2.LINE_AA)


img = np.zeros((512, 512, 3), dtype="uint8")
cv2.namedWindow('image')
cv2.setMouseCallback('image', draw_circle)

while 1:
    cv2.imshow('image', img)
    if cv2.waitKey(20) & 0xFF == 27:
        break
cv2.destroyAllWindows()
```



![](https://image.youyou-2608.com//blog/20191012/屏幕快照2019-10-0822.11.59.png)





## 用滑动条做调色板

学习目标：

- 学会把滑动条绑定到 OpenCV 的窗口
- cv2.getTrackbarPos()
- cv2.createTrackbar()



### 代码示例

```python
#!/usr/bin/env python
# _*_cdoing:utf-8_*_

import numpy as np
import cv2


def nothing(x):
    pass


img = np.zeros((500, 312, 3), dtype="uint8")
cv2.namedWindow("image")
cv2.createTrackbar("R", "image", 0, 255, nothing)
cv2.createTrackbar("G", "image", 0, 255, nothing)
cv2.createTrackbar("B", "image", 0, 255, nothing)

switch = '0:OFF\n1:ON'
cv2.createTrackbar(switch, "image", 0, 1, nothing)

while 1:
    cv2.imshow("image", img)
    k = cv2.waitKey(1) & 0xFF
    if k == 27:
        break
    r = cv2.getTrackbarPos("R", "image")
    g = cv2.getTrackbarPos("G", "image")
    b = cv2.getTrackbarPos("B", "image")
    s = cv2.getTrackbarPos(switch, "image")

    if s == 0:
        img[:] = 0
    else:
        img[:] = [r, g, b]
cv2.destroyAllWindows()

```



### 习题

> 创建一个画板，可以选择各种颜色的画笔进行绘画操作。

代码：

```python
def draw_circle(event, x, y, flag, params):
  pass

```





## 核心操作

## 图像的基础操作

学习目标：

- 获取像素的值并修改
- 获取图像的属性（信息）
- 图像的 ROI（）
- 图像通道的拆分与合并



### 获取图像的像素

```python
img = cv2.imread("/Users/youyou2608/Pictures/pi.png")
print(img.item(10, 10, 2))
img.itemset((10, 10, 2), 100)
print(img.item(10, 10, 2))
# 图像的属性：行，列，通道，图像数据类型，像素数目等
print(img.shape)
# 像素数目
print(img.size)
# 图像的数据类型
print(img.dtype)

####### 输出 ######
0
100
(487, 423, 3)
618003
uint8

```





### 图像的 ROI

有时对图像的某一特定区域进行搜索比在一张图像中搜索有更高的准确性和性能。



```python
img = cv2.imread("/Users/youyou2608/Pictures/pi.png")
temp = img[100:300, 10:100]
img[0:200, 100:190] = temp
cv2.imshow("image", img)
cv2.waitKey(100000)

```

![](https://image.youyou-2608.com//blog/20191012/QQ20191009-225749.png)



### 拆分及合并图像通道

对 BGR 三个通道分别进行操作。

```python
# 将图片所有共色通道值都设置为0
img = cv2.imread("/Users/youyou2608/Pictures/pi.png")
img[0:300, 0:200, 2] = 0
cv2.imshow("image", img)
```





## 图像上的算术运算

- 学习图像上的加法、减法和位运算等
- cv2.add()
- cv2.addWeighted()



### 加法

进行加法的两幅图像的大小、类型必须一致。

```python
x = np.uint([250])
y = np.uint([20])
print(cv2.add(x, y))  # [[255]]
```



### 图像混合

图像混合其实也是加法，但是不同的是两幅图像的权重不同。

函数：cv2.addWeighted()

```python
img1 = cv2.read("img1.png")
img2 = cv2.read("img2.png")

dst = cv2.addWeighted(img1, 0.7, img2, 0.3, 0)

cv2.imshow("image", dst)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![](https://image.youyou-2608.com//blog/20191012/2019-10-1217.13.11.png)



后续...
