## Alice 
```
hj@hj:~$ mkdir rhymes
hj@hj:~$ cd rhymes
hj@hj:~/rhymes$ git config --global user.name "alicepraxis"
hj@hj:~/rhymes$ git config --global user.email "mmmbengkulu05@gmail.com"
hj@hj:~/rhymes$ git init
Initialized empty Git repository in /home/hj/rhymes/.git/
hj@hj:~/rhymes$ touch README.txt
hj@hj:~/rhymes$ git add README.txt
hj@hj:~/rhymes$ git commit -m 'First commit.'
[master (root-commit) e34657f] First commit.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.txt
hj@hj:~/rhymes$ echo 'This repo is a collection of my favorite nursery rhymes.' >> README.txt
hj@hj:~/rhymes$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")
hj@hj:~/rhymes$ git diff
diff --git a/README.txt b/README.txt
index e69de29..c83e022 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This repo is a collection of my favorite nursery rhymes.
hj@hj:~/rhymes$ git add README.txt
hj@hj:~/rhymes$ git commit -m 'Added project overview to README.txt'
[master aefb37e] Added project overview to README.txt
 1 file changed, 1 insertion(+)
hj@hj:~/rhymes$ wget https://github.com/bryanhirsch/rhymes/blob/master/all-around-the-mulberry-bush.txt
--2019-08-28 10:13:49--  https://github.com/bryanhirsch/rhymes/blob/master/all-around-the-mulberry-bush.txt
Resolving github.com (github.com)... 52.74.223.119
Connecting to github.com (github.com)|52.74.223.119|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: ‘all-around-the-mulberry-bush.txt’

all-around-the-mulb     [  <=>               ]  69,08K   180KB/s    in 0,4s    

2019-08-28 10:13:52 (180 KB/s) - ‘all-around-the-mulberry-bush.txt’ saved [70733]

hj@hj:~/rhymes$ wget https://github.com/bryanhirsch/rhymes/blob/master/jack-and-jill.txt
--2019-08-28 10:14:17--  https://github.com/bryanhirsch/rhymes/blob/master/jack-and-jill.txt
Resolving github.com (github.com)... 52.74.223.119
Connecting to github.com (github.com)|52.74.223.119|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: ‘jack-and-jill.txt’

jack-and-jill.txt       [   <=>              ]  65,02K  90,3KB/s    in 0,7s    

2019-08-28 10:14:19 (90,3 KB/s) - ‘jack-and-jill.txt’ saved [66581]

hj@hj:~/rhymes$ wget https://github.com/bryanhirsch/rhymes/blob/master/old-mother-hubbard.txt
--2019-08-28 10:14:30--  https://github.com/bryanhirsch/rhymes/blob/master/old-mother-hubbard.txt
Resolving github.com (github.com)... 52.74.223.119
Connecting to github.com (github.com)|52.74.223.119|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: ‘old-mother-hubbard.txt’

old-mother-hubbard.     [  <=>               ]  69,45K   218KB/s    in 0,3s    

2019-08-28 10:14:31 (218 KB/s) - ‘old-mother-hubbard.txt’ saved [71117]

hj@hj:~/rhymes$ wget https://github.com/bryanhirsch/rhymes/blob/master/twinkle-twinkle.txt
--2019-08-28 10:14:42--  https://github.com/bryanhirsch/rhymes/blob/master/twinkle-twinkle.txt
Resolving github.com (github.com)... 52.74.223.119
Connecting to github.com (github.com)|52.74.223.119|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: ‘twinkle-twinkle.txt’

twinkle-twinkle.txt     [        <=>         ]  63,95K  21,9KB/s    in 2,9s    

2019-08-28 10:14:46 (21,9 KB/s) - ‘twinkle-twinkle.txt’ saved [65486]

hj@hj:~/rhymes$ wget https://github.com/bryanhirsch/rhymes/blob/master/hokey-pokey.txt
--2019-08-28 10:14:58--  https://github.com/bryanhirsch/rhymes/blob/master/hokey-pokey.txt
Resolving github.com (github.com)... 52.74.223.119
Connecting to github.com (github.com)|52.74.223.119|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: ‘hokey-pokey.txt’

hokey-pokey.txt         [     <=>            ]  65,83K  49,7KB/s    in 1,3s    

2019-08-28 10:15:00 (49,7 KB/s) - ‘hokey-pokey.txt’ saved [67408]

hj@hj:~/rhymes$ git add all-around-the-mulberry-bush.txt
hj@hj:~/rhymes$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   all-around-the-mulberry-bush.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	hokey-pokey.txt
	jack-and-jill.txt
	old-mother-hubbard.txt
	twinkle-twinkle.txt

hj@hj:~/rhymes$ git commit -m 'Added all-around-the-mulberry-bush.txt.'
[master bbd5a1c] Added all-around-the-mulberry-bush.txt.
 1 file changed, 958 insertions(+)
 create mode 100644 all-around-the-mulberry-bush.txt
hj@hj:~/rhymes$ git add jack-and-jill.txt
hj@hj:~/rhymes$ git commit -m 'Added jack-and-jill.txt.'
[master dbde4d1] Added jack-and-jill.txt.
 1 file changed, 898 insertions(+)
 create mode 100644 jack-and-jill.txt
hj@hj:~/rhymes$ git add .
hj@hj:~/rhymes$ git commit -m 'Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt'
[master 0606457] Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
 3 files changed, 2780 insertions(+)
 create mode 100644 hokey-pokey.txt
 create mode 100644 old-mother-hubbard.txt
 create mode 100644 twinkle-twinkle.txt
hj@hj:~/rhymes$ git log
commit 060645776250d4cc49873f840483adf94491b3d5 (HEAD -> master)
Author: alicepraxis <mmmbengkulu05@gmail.com>
Date:   Wed Aug 28 10:15:51 2019 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit dbde4d131f49629a0df13bde7eea3a692b8b0371
Author: alicepraxis <mmmbengkulu05@gmail.com>
Date:   Wed Aug 28 10:15:35 2019 +0700

    Added jack-and-jill.txt.

commit bbd5a1c800ba72b6aed17f4b965b1887f150d617
Author: alicepraxis <mmmbengkulu05@gmail.com>
Date:   Wed Aug 28 10:15:23 2019 +0700

    Added all-around-the-mulberry-bush.txt.

commit aefb37e601254f89a24f4fcee406d8defa640a4b
Author: alicepraxis <mmmbengkulu05@gmail.com>
Date:   Wed Aug 28 10:13:24 2019 +0700

    Added project overview to README.txt
hj@hj:~/rhymes$ git log --oneline
0606457 (HEAD -> master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
dbde4d1 Added jack-and-jill.txt.
bbd5a1c Added all-around-the-mulberry-bush.txt.
aefb37e Added project overview to README.txt
e34657f First commit.
hj@hj:~/rhymes$ git log -p
commit 060645776250d4cc49873f840483adf94491b3d5 (HEAD -> master)
Author: alicepraxis <mmmbengkulu05@gmail.com>
Date:   Wed Aug 28 10:15:51 2019 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/hokey-pokey.txt b/hokey-pokey.txt
new file mode 100644
index 0000000..44f9c6e
--- /dev/null
+++ b/hokey-pokey.txt
@@ -0,0 +1,916 @@
+
+
+
+
+
+
+<!DOCTYPE html>
+<html lang="en">
+  <head>
+    <meta charset="utf-8">
+  <link rel="dns-prefetch" href="https://github.githubassets.com">
hj@hj:~/rhymes$ git remote add origin https://github.com/alicepraxis/rhymes.git
hj@hj:~/rhymes$ git push -u origin master
Username for 'https://github.com': alicepraxis
Password for 'https://alicepraxis@github.com': 
Counting objects: 17, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (14/14), done.
Writing objects: 100% (17/17), 21.80 KiB | 1.68 MiB/s, done.
Total 17 (delta 6), reused 0 (delta 0)
remote: Resolving deltas: 100% (6/6), done.
To https://github.com/alicepraxis/rhymes.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.


hj@hj:~$ cd rhymes
hj@hj:~/rhymes$ git remote rename origin alicepraxis
hj@hj:~/rhymes$ git remote add bobpraxis https://github.com/alicepraxis/rhymes.git
hj@hj:~/rhymes$ git remote
alicepraxis
bobpraxis
hj@hj:~/rhymes$ git remote -v
alicepraxis	https://github.com/alicepraxis/rhymes.git (fetch)
alicepraxis	https://github.com/alicepraxis/rhymes.git (push)
bobpraxis	https://github.com/alicepraxis/rhymes.git (fetch)
bobpraxis	https://github.com/alicepraxis/rhymes.git (push)
hj@hj:~/rhymes$ git fetch bobpraxis 
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/alicepraxis/rhymes
 * [new branch]      hickory-dickory -> bobpraxis/hickory-dickory
 * [new branch]      master          -> bobpraxis/master
hj@hj:~/rhymes$ git branch -a
* master
  remotes/alicepraxis/master
  remotes/bobpraxis/hickory-dickory
  remotes/bobpraxis/master

hj@hj:~/rhymes$ git checkout -b hickory-dickory bobpraxis/hickory-dickory
Branch hickory-dickory set up to track remote branch hickory-dickory from bobpraxis.
Switched to a new branch 'hickory-dickory'
hj@hj:~/rhymes$ git diff master hickory-dickory 
diff --git a/hickory-dickory-dock.txt b/hickory-dickory-dock.txt
new file mode 100644
index 0000000..eee59ad
--- /dev/null
+++ b/hickory-dickory-dock.txt
@@ -0,0 +1,899 @@
+
+
+
+
+
+
+<!DOCTYPE html>
+<html lang="en">
+  <head>
+    <meta charset="utf-8">
+  <link rel="dns-prefetch" href="https://github.githubassets.com">
+  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
+  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
+
+
+
+  <link crossorigin="anonymous" media="all" integrity="sha512-UDS3MR1FfvqHmqZAs2MWSDCWPwLemVRLqCwld4/zfwH0vhv7I6RYmDnMnNAVQKP1YYvqnccOCH4iOhFaUUyrjw==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-2e9090135c22aad5f56c2f72dcba7880.css" />
+  <link crossorigin="anonymous" media="all" integrity="sha512-l4JpykYR1c86XfE0TExTqRFbnoD7WA39FhTTEgPt22zLFiepYq+L+3XUGBZoGsnBv15oKHTomwpEAUrCbmoRqw==" rel="stylesheet" href="https://github.githubassets.com/assets/site-2f0f446a127a5a480dfb139991acd1cd.css" />
+    <link crossorigin="anonymous" media="all" integrity="sha512-D8GUhgLn0Pm94+eZHS2+GVyUSkcIQCn86Is/aPo/SqDdh84zzgsUc3pYlfSvK7YJvxqihMWsJET2Tsc6QOD5Ow==" rel="stylesheet" href="https://github.githubassets.com/assets/github-e0bb7eeb3d3f55bf57453459bf0da4e8.css" />
+    
+    
+    
+    
+
+  <meta name="viewport" content="width=device-width">
+  
+  <title>rhymes/hickory-dickory-dock.txt at master · bryanhirsch/rhymes · GitHub</title>
+    <meta name="description" content="Alice&#39;s repo. (This is an example repo for a how-to blog post about collaboration with Git.) - bryanhirsch/rhymes">
hj@hj:~/rhymes$ git log -1 -p
commit 2dfc0f35bbe02e32a43be3ce24afdc79cd844ef5 (HEAD -> hickory-dickory, bobpraxis/hickory-dickory)
Author: bobpraxis <mmmbengkulu06@gmail.com>
Date:   Wed Aug 28 10:30:56 2019 +0700

    Added hickory-dickory-dock.txt.

diff --git a/hickory-dickory-dock.txt b/hickory-dickory-dock.txt
new file mode 100644
index 0000000..eee59ad
--- /dev/null
+++ b/hickory-dickory-dock.txt
@@ -0,0 +1,899 @@
+
+
+
+
+
+
+<!DOCTYPE html>
+<html lang="en">
+  <head>
+    <meta charset="utf-8">
+  <link rel="dns-prefetch" href="https://github.githubassets.com">
+  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
+  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
+
+
+
+  <link crossorigin="anonymous" media="all" integrity="sha512-UDS3MR1FfvqHmqZAs2MWSDCWPwLemVRLqCwld4/zfwH0vhv7I6RYmDnMnNAVQKP1YYvqnccOCH4iOhFaUUyrjw==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-2e9090135c22aad5f56c2f72dcba7880.css" />
+  <link crossorigin="anonymous" media="all" integrity="sha512-l4JpykYR1c86XfE0TExTqRFbnoD7WA39FhTTEgPt22zLFiepYq+L+3XUGBZoGsnBv15oKHTomwpEAUrCbmoRqw==" rel="stylesheet" href="https://github.githubassets.com/assets/site-2f0f446a127a5a480dfb139991acd1cd.css" />
+    <link crossorigin="anonymous" media="all" integrity="sha512-D8GUhgLn0Pm94+eZHS2+GVyUSkcIQCn86Is/aPo/SqDdh84zzgsUc3pYlfSvK7YJvxqihMWsJET2Tsc6QOD5Ow==" rel="stylesheet" href="https://github.githubassets.com/assets/github-e0bb7eeb3d3f55bf57453459bf0da4e8.css" />
+    
+    
+    
hj@hj:~/rhymes$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'alicepraxis/master'.
hj@hj:~/rhymes$ git merge hickory-dickory 
Updating 0606457..2dfc0f3
Fast-forward
 hickory-dickory-dock.txt | 899 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 899 insertions(+)
 create mode 100644 hickory-dickory-dock.txt
hj@hj:~/rhymes$ git branch -D hickory-dickory 
Deleted branch hickory-dickory (was 2dfc0f3).
```
