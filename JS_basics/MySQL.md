# 資料庫管理系統 DBMS

我們為什麼需要資料庫？我們不能只將所有數據存儲在 Excel 表格中嗎？

儘管我們可以對電子表格中的數據進行排序和過濾，但**資料庫具有廣泛的查詢功能**，可以檢索與選擇條件匹配的所有記錄，並且在多個表格中做*交叉引用記錄*以及*跨多個表格執行複雜的聚合計算*

此外，就查詢資料而言，資料庫比 Excel 快上許多，在資料龐大時差別會更明顯 (Excel 可以處理最多大約 100 萬行數據，但對於現代資料來說明顯容量不足)

database management system (DBMS) 是一種為管理資料庫而設計的管理系統

具有代表性的資料管理系統有：Microsoft SQL Server、 MongoDB 、MySQL 及 PostgreSQL 等

資料庫在概念上來說，可以被分成兩種：

- 關聯式資料庫 Relational Database (or SQL Database) -> SQLite、PostgreSQL、MySQL、SQL Server，用表格儲存
- Non-Relational Database (or NoSQL Database) -> MongoDB、Redis，用 JSON 儲存 (數據彈性更好)

## Relational Database

是一種存儲並提供對*彼此相關*的數據點的訪問的資料庫

例如，一家娛樂公司有一個資料庫來存儲他們所有的藝術家和歌曲數據，所有歌曲都有一位或多於一位作家，所有作家都有一首或多於一首歌曲，因此，該數據庫的每個表格之間是有關連的

ER Diagram (畫出表格於表格間相關的工具) 由美籍台灣人電腦科學家陳品山發明，常用於資訊系統設計中；對於大型的資料庫來說，建構的第一步就是設計資料庫，並且畫出 ER Diagram

# 增刪查改 CRUD

全稱增加 Create(建立)、刪除 Delete、查詢 Read(讀取)、改正 Update(更新)，是在 DBMS 當中，一連串常見的操作行為

增刪查改除了常用於 SQL 資料庫之外，也在與網站的 API 埠口時常使用

_網站的 API 埠口使用 HTTP 協定傳送通訊，所以原本的「增刪查改」所對應的英文詞彙會因此而改名，而不再對應 CRUD_

_比如「查」改為 GET；「增」改為 POST；「改」改為 PUT_

# Keys

關係鍵 keys 是關聯式資料庫的重要組成部分

關係鍵是一個表中的一個或幾個屬性，用來標識該表的每一行或與另一個表產生聯絡

在 DBMS 當中，主要的 keys 有：

1. 主鍵 primary key – 是資料庫表中對儲存資料物件予以**唯一**和完整標識的資料列或屬性的鍵

一筆資料只能有一個主鍵(但可以由兩個以上的行組成 primary key)，且主鍵的取值不能缺失，即不能為空值`Null`

2. 外鍵 Foreign Key – 是指向其他表格的主鍵的欄位，用於確定兩張表格的關聯性

3. 自然鍵 natural key –若使用在真實生活中**唯一確定**一個事物的標識，來當作資料庫的 primary key，則此 primary key 可被稱作是 natural key

例如，台灣的身分證字號可以當作資料庫的 natural key

4. 代理鍵 surrogate key – 相對於 natural key，在當資料表格中的所有現有欄位**都不適合**當主鍵時，例如資料太長，或是意義層面太多，就會製作一個`無意義的欄位`來代為作主鍵

5. 複合主鍵 composite key – 當資料表的 Primary Key，如果是由多個欄位組成，則稱為 composite key

# SQL

結構化查詢語言 Structured Query Language 是一種特定目的程式語言，用於對關聯式資料庫管理系統下達指令

SQL 在 1987 年成為國際標準化組織（ISO）標準。雖然有這一標準的存在，但大部分的 SQL 代碼在不同的資料庫系統中**並不完全具有**的跨平台性

也就是說，雖然 SQL 這門程式語言可以用來操作 DBMS，但每個 DBMS 所接受的 SQL 語法有些微差異

例如，用來操作 MySQL 這個 DBMS 的 SQL 程式碼**不能全部**拿去用來操作 Microsoft SQL Server 這個 DBMS。(此課程中，會學的是 MySQL 所接受的 SQL)

`練習`

先在 MySQL 創造 database，創造完後才能在 popSQL 做連結

```MySQL
mysql> create database myDatabase;
Query OK, 1 row affected (0.01 sec)
```

**database 會運行在電腦 localhost 3306 上** (localhost 3306 不行就打 127.0.0.1)

MySQL 創建完成後，就去 popSQL 做連結，以下為測試沒有連結成功的方式

```popSQL
測試能不能 創建表格
CREATE TABLE employees(
    employeeID int PRIMARY key
)

測試能不能 刪除表格
DROP TABLE employees;
```

## SQL Data Types

|          Data Types          |       Bytes        |                                                     Description                                                      |
| :--------------------------: | :----------------: | :------------------------------------------------------------------------------------------------------------------: |
|             INT              |  4 bytes(32bits)   |                              資料範圍是 (−2)^31 ~ 2^31 − 1 ( -2147483648 ~ 2147483467)                               |
| 帶有小數點的數 DECIMAL(p, s) |    視精確度而定    | p 代表 total digits，s 代表小數點後的 digits。例如，153.23 為例，p 是 5，s 是 2。資料範圍是 (−10)^38 + 1 ~ 10^38 − 1 |
|          VARCHAR(n)          | 變動長度， max=2GB |                                   n 代表可以填幾個字 CHAR，資料範圍是 1 ~ 2^31 − 1                                   |
|           DATETIME           |      8 bytes       |                             資料範圍是 1753/1/1 ~ 9999/12/31 ex: 2008-11-27 08:08:08.888                             |

## SQL 基本語法

通常關鍵字會大寫

### 創造新表格

```popSQL
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ....
);
```

### 得到表格資訊

```popSQL
DESCRIBE table_name
```

`練習`

```popSQL
CREATE TABLE employees (
    employeeID INT PRIMARY KEY AUTO_INCREMENT,  -> PRIMARY KEY 有自帶 NOT NULL 的效果，AUTO_INCREMENT自動加總
    employeeName VARCHAR(25),
    age INT,
    salary INT,
    supervisor INT,
    departmentID INT
);

DESCRIBE employees;
```

![CREATE TABLE](./截圖/CREATE_TABLE.png)

### 新增 Create

#### 指定 column name 和要插入的值

```popSQL
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

`練習`

```popSQL
INSERT INTO employees (employeeID, employeeName, age, salary, supervisor, departmentID)
VALUES(100, "Josh Donaldson", 35, 3500, null, 1);

SELECT * FROM employees; -> 查詢指令
```

![CREATE](./截圖/CREATE.png)

#### 所有 column 添加值，則無需指定 column name

**需要確保值的順序與表中 column 的順序相同**

```popSQL
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

`練習`

```popSQL
INSERT INTO employees
VALUES(101, "Mike Napoli", 40, 2400, 100, 1);

SELECT * FROM employees; -> 查詢指令
```

![CREATE ALL](./截圖/CREATE_ALL.png)

_假設沒有加 employeeID_，結果還會出現 employeeID 是 102，是因為設定 employeeID 時有寫`AUTO_INCREMENT`

```popSQL
INSERT INTO employees (employeeName, age, salary, supervisor, departmentID)
VALUES("Cody Allen", 37, 2400, 100, 2);

SELECT * FROM employees; -> 查詢指令
```

![CREATE WITHOUT PRIMARY KEY](./截圖/CREATE_WITHOUT.png)

### 修改 Update

修改表格中的現有記錄

**注意!!** WHERE 可以指定應該更新哪些記錄，如果省略 WHERE，表中的所有記錄都將被更新

```popSQL
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition; -> 說明要更改表格中的哪些紀錄的位置
```

`練習`

輸入資料時不小心放錯值，108, "Oliver Perez", 30, 1500, 102, 2，如何將 108 改成 107

```popSQL
UPDATE employees
SET employeeID = 107
WHERE employeeID = 108;
```

![UPDATE](./截圖/UPDATE.png)

### 刪除 Delete

#### 刪除表格中的現有記錄

**省略 WHERE，表中的所有記錄都將被刪除**

DELETE 語法只能夠刪除表格中的資料，但表格本身依然存在

```popSQL
DELETE FROM table_name WHERE condition;
```

`練習`

```popSQL
DELETE FROM employees WHERE employeeID = 107;
```

![DELETE](./截圖/DELETE.png)

#### 刪除表格

```popSQL
DROP TABLE table_name;
```

### 查詢 Read

#### 查詢部分資料

```popSQL
SELECT column1, column2, ...
FROM table_name;
```

`練習`

```popSQL
SELECT employeeID, employeeName, age
FROM employees;
```

![READ](./截圖/READ.png)

#### 查詢所有資料

```popSQL
SELECT * FROM table_name;
```

#### 查詢結果排序

`ORDER BY` 關鍵字用於對查詢結果按升序或降序進行排序 (默認是*升序*)

`ASC` -> 升序，`DESC` -> 降序

```popSQL
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 (ASC|DESC), column2 (ASC|DESC), …;
```

`練習`

```popSQL
SELECT *
FROM employees
ORDER BY age;
```

![ORDER_BY](./截圖/ORDER_BY.png)

由大到小

```popSQL
SELECT *
FROM employees
ORDER BY age DESC;
```

![ORDER_BY_DESC](./截圖/ORDER_BY_DESC.png)

#### 過濾記錄

使用`WHERE`，可以使用運算符：`=`, `<`, `<=`, `>`, `>=`, 不等於`<>`, `IN`, `BETWEEN`, `!=` 等等

```popSQL
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

`練習`

```popSQL
SELECT *
FROM employees
WHERE departmentID = 1
ORDER BY age;
```

![ORDER_BY_WHERE](./截圖/ORDER_BY_WHERE.png)

```popSQL
SELECT *
FROM employees
WHERE departmentID = 1 AND salary >= 2000
ORDER BY age;
```

![ORDER_BY_WHERE_AND](./截圖/ORDER_BY_WHERE_AND.png)

### Join 表格

`JOIN` 用於根據兩個或多個表之間的相關 column 的組合

在 JOIN 兩個資料表時，如果不寫`JOIN ON`，而是只寫`JOIN`，則合併的結果為兩個資料表間的笛卡兒乘積 ，也就是兩個資料表中*所有*的可能組合

```popSQL
SELECT column1, column2, ...
FROM table1
JOIN table2 ON table1.columnName = table2.columnName;
```

`練習`

```popSQL
SELECT *
FROM department d
JOIN employees e (後面_e是簡稱)
ON d.headID = e.employeeID;
```

![JOIN](./截圖/JOIN.png)

# SQL 與 NoSQL 比較

`SQL`

優點：

1. 由於關係型資料庫改變表格架構較為困難，通常會保持**數據的一致性**

2. 資料庫內的資料表**連結性高**，可以進行 Join 等複雜查詢

3. 產品**成熟度高**、**穩定性也高**，經過多年發展，較少 bug 需要處理，且提供報表生成等商業功能

缺點：

1. 擴展困難。SQL 通常會*垂直擴展* (增加昂貴和重量級的伺服器)，單台伺服器要持有整個資料庫來確保可靠性與數據的持續可用性。這樣做的代價就是非常昂貴、擴展受到限制

2. 成本高：企業級資料庫的 License 價格很驚人，並且隨著系統的規模，而不斷上升

3. 讀寫慢：這種情況主要發生在數據量達到*一定規模時*，由於 SQL 的系統邏輯非常複雜(MySQL uses both B-Tree, B+Tree, and HASH indexes )，且有可能死鎖 Deadlock 的併發問題，所以其讀寫速度下滑非常嚴重

`NoSQL`

優點：

1. 可擴展性：NoSQL 資料庫一般的設計都能透過硬體的分散式叢集來向外擴展，雲端伺服器供應商通常將這些操作處理成全受管服務

2. 快速的讀寫：主要例子有 Redis (Remote Dictionary Server)，只在 RAM 操作，使得其性能非常出色，每秒可以處理超過 10 萬次讀寫操作。Redis 資料庫的操作，在所有資料都在 RAM 的前提之下，增刪查改都是 O(1)的時間複雜度，不受資料數量影響

3. 低廉的成本：這是 NoSQL 資料庫共有的特點，因為主要都是開源軟體，沒有昂貴的 License 成本

缺點：

1. 不提供對 SQL 的支持：因為不支持 SQL 這樣的傳統資料庫，將會對用戶產生一定的學習和應用遷移成本

2. 支持的特性不夠豐富：現有產品所提供的功能都比較有限，也不像 MS SQL Server 和 Oracle 那樣能提供各種附加功能，比如自動生成報表等

3. 現有產品的不夠成熟：大多數產品都還處於初創期
