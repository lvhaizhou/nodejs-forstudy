<!--
 * @Author: Lvhz
 * @Date: 2020-04-11 15:51:26
 * @Descripttion: 
 -->
## vscode中git使用流程  
* git init : 在根目录下会创建一个 .git文件，注意该文件是隐藏的。
* 在根目录创建 .gitignore 文件，输入 node_modules/
* 克隆一个项目： git clone xxxxxxx

### 1、版本提交  
* 添加文件到本地仓库： git  add .
* 提交文件：git commit -m "First commit"
* 添加远程仓库地址到本地仓库  (先到远程仓库的页面上,复制仓库地址)
    * git remote add origin https://github.com/lvhaizhou/nodejs-forstudy.git
    * git remote -v
* push到远程仓库：  git push -u origin master
* 拉取远端origin/master 分支合并到当前分支：git pull origin master
* git status 查看提交修改的文件
* git branch 查看当前分支
* git branch <分支名字>创建分支
* git checkout <分支名字>切换分支
* git merge <分支名字>（不是当前的分支）合并某分支到当前分支
* git branch -d <分支名字>删除分支

### 2、版本回退  
* git reset --hard HEAD^  回退到上一个版本（可以多次使用）
* git reset --hard HEAD^^  回退到上两个版本  
    * git log查看提交历史，然后git reset 回退到指定版本 。这也是每次commit -m" "中写内容的重要性，说不定什么时候就拯救了你写了好几天的代码。hard后面跟的版本号没必要全部写出来，git会自动去补全匹配。

### 3、撤销修改  
* git checkout -- readme.txt  ：把readme.txt文件在工作区的修改全部撤销，这里有两种情况：
    * 一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
    * 一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
    * 总之，就是让这个文件回到最近一次git commit或git add时的状态。
* git checkout -- file命令中的--很重要，没有--，就变成了“切换到另一个分支”的命令。

### 4、删除文件  
* git rm test.txt
* git commit -m "remove test.txt"



<br>


## 遇到的一些问题  

今天用git获取项目的时候提示 git SSL certificate problem: unable to get local issuer certificate  
这个问题是由于没有配置信任的服务器HTTPS验证。默认，cURL被设为不信任任何Cas，就是说，它不信任任何服务器验证。  

<br>

只需要执行下面命令就可以解决  
```
git config --global http.sslVerify false
```