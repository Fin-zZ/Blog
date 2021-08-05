# 前端Vue项目ESLint检查

借助gitlab-runner执行代码检查，可实现云端统一的代码检查，减少代码中的坏味道，统一代码规范。

### 1. 开发进行代码提交

### 2. 云端触发ci.yml文件执行

### 3. gitlab-runner首先也需要install node包，会借助`cache`缓存下来

### 4. 会执行脚本内地`npm run eslint`指令,同时需要在我们本地的package.json文件中的`script`命令里需添加 `"eslint": "eslint --ext .vue --ignore-path .gitignore ."`

    (gitlab-runner的执行环境shell，`直接执行eslint --ext .vue --ignore-path .gitignore .`也是可以的，但实际上会报错，找不到eslint命令，这里稍后处理)

###	5. 根据eslint的结果判断成功与否，进入下一执行阶段。

###	6. 失败，执行git revert，回退一个版本，并记录下来是因为eslint出错导致提交失败（也可用git reset，但没有记录），这里目前git push失败还未找到解决方案。同时向微信群助手发送消息。

###	7. 成功则只是简单发送一条消息（发布频繁的话，可以取消）。

.gitlab-ci.yml文件如下

```yml
stages:
  - install
  - eslint
  - notify

cache:
  key: '$CI_COMMIT_REF_SLUG'

install:
  stage: install
  cache:
    paths:
      - node_modules/
  script:
    - npm i
  tags:
    - sonar
    
eslint:
  stage: eslint
  cache:
    paths:
      - node_modules/
  only: 
    - develop
    - master
  script:
    - npm run eslint
  tags:
    - sonar

notify-fail:
  stage: notify
  cache:
    paths:
      - node_modules/
  script:
    - >
      curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=XXXXXXXXXXXXXXXXXXXXXXXXXXX'
      -H 'Content-Type: application/json'
      -d "可以发送相关的失败通知"
    - git revert -n HEAD~0
    - git commit -m 'eslint_check_failed'
    - cat .git/config
    - git push
  only:
    - master
    - develop
  when: on_failure
  tags:
    - sonar

notify-success:
  stage: notify
  script:
    - >
      curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=XXXXXXXXXXXXXXXXXXXXX'
      -H 'Content-Type: application/json'
      -d "相关的成功通知"
  only:
    - master
  tags:
    - sonar
```

流程很清晰，待商榷的点在于，Eslint检查报错后，有没有必要真的进行`git revert` or `git reset`？
回退版本应该是件慎重的事，再者遇上突发bug，hotfix分支合并入master时，如果也被回退，
是否有些过于苛刻。
最终商量结果：不进行版本回退，只进行企业微信群通知（或者类似通知开发群）。

