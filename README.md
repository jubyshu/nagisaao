
- Juby’s blog
- Juby的博客
- ジュビーのブログ
-------
###Git###
初始化一个Git仓库：`git init`  
添加文件到Git仓库：  1. `git add`  2. `git commit -m''`，`-m`后面是提交说明   
掌握工作区的状态：`git status`  
查看修改内容：`git diff`  
查看从最近到最远的提交日志：`git log`  
版本回退：`git reset --hard`  
查看命令历史：`git reflog`  
撤销修改：`git checkout --file`  
删除文件：`git rm`  
关联远程库：`git remote add origin git@server-name:path/repo-name.git`  
第一次推送master分支的所有内容：`git push -u origin master`  
推送最新修改：`git push origin master`  
克隆远程库到本地：`git clone`  
创建并切换分支：`git checkout -b`  
合并指定分支到当前分支：`git merge`  
查看分支：`git branch`  
删除分支：`git branch -d`  
查看分支合并图：`git log --graph`  