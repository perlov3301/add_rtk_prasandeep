 git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  
  git remote add origin https://github.com/perlov3301/react_crash.git
  git remote add origin https://github.com/perlov3301/add_rtk_prasandeep.git

  git push -u origin main

  #deployment folder for html server
  react1>npm run build

  *run cmd as administrator at port 8000
  react1> server -s build -p 8000