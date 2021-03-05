##                                     云医院HIS项目

###项目构成

```css
前端项目名：HIS
后端项目名：neu_his
采用前后端分离
```



## 技术栈

```css
前端框架：
	-Layui
	-JQuery
多页面采用iframe操作

后端框架：
	-Springboot
	-MyBatisPlus
	-Shiro
MySQL数据库
```



## 页面说明

### 1、登录模块
	-0. login.html：登录页面

**登录首页采用轮播图和登录卡形式**

![](C:\Users\dell\Desktop\img\img1.png)

------

![](C:\Users\dell\Desktop\img\img2.png)

### 2、门诊基础业务模块（挂号员/收费员/药房）

####页面构成

```css
-1. patientMenu.html          挂号员页面

	-1.1 register.html        挂号页面

	-1.2 pay.html             缴费页面
		-1.2.1 bill.html      发票页面

	-1.3 backRegister.html    退号页面

	-1.4 backPay.html         退费页面
	 	-1.4.1 backBill.html  冲红发票页面

	-1.5 medicineOut.html     药房发药页面

	-1.6 medicineManage.html  退药页面
```

#### 页面布局

```css
←左：基于Layui后台的Tab功能区，用于切换页面
```

```css
↑中上：记录了Tab窗口，搜索区，用户信息等
```

```css
↓中下：iframe页面区，控制页面主要业务逻辑
```

```css
→右：快捷功能区，提供某些便捷功能，如：
	查找病历，页面目录，赋值（测试用），清空表单，置顶等;
	对于医生页面：还提供诸如待诊、已诊患者列表，表单扩大等功能。
```

**实例如图：**



![](C:\Users\dell\Desktop\img\img5.png)



**挂号页面样式上采用纸张形式：如挂号页面、退号页面、缴费页面样张**

####2.１.挂号页面

<img src="C:\Users\dell\Desktop\img\img6.png" style="zoom: 50%;" />



####2.２.缴费页面

<img src="C:\Users\dell\Desktop\img\img9.png" style="zoom:50%;" />

###2.３.退号页面

<img src="C:\Users\dell\Desktop\img\img7.png" style="zoom:50%;" />

### 3、医生诊断模块

#### 页面构成

```css
-2 doctorMenu.html                     医生页面
	-2.1 diagnose.html                 门诊诊断页面
		-2.1.1 west_diagnosis.html     增加西医诊断列表页面
	-2.2 prescribe.html                处方开药
		-2.2.1 medicineAdd.html        增加药品列表页面
		-2.2.2 medicineEdit.html	   增加药品详情页面诊断
```
#### 页面布局

`与挂号页面布局基本一致`



#### 3.1.诊断页面



##### 初始样式

![](C:\Users\dell\Desktop\img\img12.png)



##### 总体样式

<img src="C:\Users\dell\Desktop\img\img13.png" style="zoom:50%;" />

#### 3.2.处方页面



##### 初始样式

![](C:\Users\dell\Desktop\img\img16.png)

##### 总体样式

<img src="C:\Users\dell\Desktop\img\img17.png" style="zoom:50%;" />

##### 页面扩大（局部）

![](C:\Users\dell\Desktop\img\img31.png)