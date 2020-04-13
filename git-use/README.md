## vscode中git使用流程  
* git init : 在根目录下会创建一个 .git文件，注意该文件是隐藏的。
* 在根目录创建 .gitignore 文件，输入 node_modules/
* 添加文件到本地仓库： git  add .
* 提交文件：git commit -m "First commit"
* 添加远程仓库地址到本地仓库  (先到远程仓库的页面上,复制仓库地址)
    * git remote add origin https://github.com/lvhaizhou/nodejs-forstudy.git
    * git remote -v
* push到远程仓库：  git push -u origin master
* 拉取远端origin/master 分支合并到当前分支：git pull origin master
* 克隆一个项目： git clone xxxxxxx