@ECHO off

REM =========================================
REM | 	COPY FILES FROM PRIVATE TO PUBLIC	|
REM =========================================

REM copy the cv related files from personal git repo
REM copy css/js/logo/doc/imgs and then update the links

SET "src=D:\GitHubWork\UK_Teaching"
SET "srccss=%src%\assets\dist\css"
SET "srcjs=%src%\assets\dist\js"
SET "srccv=%src%\Uni\CV"
SET "dst=D:\GitHub\academic_cv"
SET "dstcss=%dst%\components"

REM check help file for all options, /n* excludes certain log information

REM copy html and folders

ROBOCOPY "%srccv%" "%dst%" /e /z /pf /eta /nfl /ndl /nc /ns /njh /xd ".github" ".git"

REM copy css and js to components folder 

XCOPY /Y /F /Q "%srccss%\cv.css" "%dstcss%\cv.css" 
XCOPY /Y /F /Q "%srccss%\reveal.css" "%dstcss%\reveal.css"
REM XCOPY /Y /F /Q "%srcjs%\cv.js" "%dstcss%\cv.js" 
XCOPY /Y /F /Q "%srcjs%\pub_list.js" "%dstcss%\pub_list.js"
XCOPY /Y /F /Q "%srcjs%\ref_list.js" "%dstcss%\ref_list.js"

ECHO src path = %src%
ECHO dst path = %dst%
ECHO Copy DONE!

REM =========================================
REM | 	PUSH TO PERSONAL GIT REPOSITORY 	|
REM =========================================


REM move the target folder 

SET "pwd=%cd%"
CD %dst%

ECHO working in folder: [%cd%]

REM call python script to update references

SET "pyd=update_cv_links.py"

python %pyd%

REM go back to the original folder

CD %pwd%

ECHO Job DONE!