@ECHO off

ECHO =========================================
ECHO  COPY FILES FROM PRIVATE TO PUBLIC 
ECHO =========================================

REM copy the cv related files from personal git repo
REM copy css/js/logo/doc/imgs and then update the links

SET "src=D:\GitHub\UK_Teaching"
SET "srccss=%src%\assets\dist\css"
SET "srcjs=%src%\assets\dist\js"
SET "srccv=%src%\Uni\CV"
SET "srccvdocs=%src%\Uni\CV\docs"
SET "dst=D:\GitHub\academic_cv"
SET "dstcss=%dst%\components"

REM check help file for all options, /n* excludes certain log information

REM copy html and folders

ROBOCOPY "%srccv%" "%dst%" /e /z /pf /eta /nfl /ndl /nc /ns /njh /xd "%srccvdocs%" "%srccv%\.github" "%srccv%\.git" /xf "*.doc" "*.docx" "*.pdf"

REM copy css and js to components folder 
XCOPY /Y /F /Q "%srccss%\cv.css" "%dstcss%\cv.css" 
XCOPY /Y /F /Q "%srccss%\margin_controls.css" "%dstcss%\margin_controls.css"
XCOPY /Y /F /Q "%srccss%\reveal.css" "%dstcss%\reveal.css"

REM XCOPY /Y /F /Q "%srcjs%\cv.js" "%dstcss%\cv.js" 
XCOPY /Y /F /Q "%srcjs%\pub_list.js" "%dstcss%\pub_list.js"
XCOPY /Y /F /Q "%srcjs%\ref_list.js" "%dstcss%\ref_list.js"

ECHO src path = %src%
ECHO dst path = %dst%
ECHO Copy DONE!

ECHO =========================================
ECHO  UPDATE RELATIVE HYPERLINKS IN HTML 
ECHO =========================================


REM move the target folder 

SET "pwd=%cd%"
CD %dst%

ECHO working in folder: [%cd%]

REM call python script to update references

SET "pyd=update_cv_links.py"

python %pyd%

ECHO =========================================
ECHO  PUSH TO PUBLIC GIT REPOSITORY 
ECHO =========================================

ECHO working in folder: [%cd%]

REM make sure all has been updated

SET "fixed=synced from working version on "
SET "mydatetime=%date%-%time%"
SET "msg=%fixed%%mydatetime%"

git add .
git commit -am "%msg%"
git push

REM go back to the original folder

CD %pwd%

ECHO Job DONE!