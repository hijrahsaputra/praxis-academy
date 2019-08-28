# Team Collaboration With GitHub
1. Adding Team Members - Organization & Collaborators
2. Pull Requests - Sending & Merging
3. Bug Tracking - Github Issues
4. Analytics - Graphs & Network
5. Project Management - Trello & Pivotal Tracker
6. Continuous Integration - Travis CI
7. Code Review - Line Commenting & URL queries
8. Documenting - Wiki & Hubot

## Tool 1: Adding Team Members
There are generally two ways of setting up Github for team collaboration:
1. Organizations - Menambahkan organisasi Pemerintah Provinsi Bengkulu
![alt text](https://github.com/hijrahsaputra/images/blob/master/1.create_org.png)

Memberikan level akses masing-masing team :
1. **Pull Only**: Fetch and Merge with another repository or a local copy. Read only access.
2. **Push and Pull**: (1) along with updating of remote repo. Read + Write access.
3. **Push, Pull & Administrative**: (1), (2) along with rights to billing info, creating teams as well as canceling Organization accounts. Read + Write + Admin access

![alt text](https://github.com/hijrahsaputra/images/blob/master/akses.png)


2. Menambahkan Collaborators - dengan akses Read + Write access untuk single repository
![alt text](https://github.com/hijrahsaputra/images/blob/master/collabs.png)

## Tool 2: Pull Requests
Dua model pull request di Github: 

1. **Fork & Pull Model** - Used in a public repository for which we don't have push access
2. **Share Repository Model** - Used in a private repository for which we have push access. Fork is not required is this case.

![alt text](https://github.com/hijrahsaputra/images/blob/master/fork.png)

konfirmasi penambahan pull request dengan fork & full model
![alt text](https://github.com/hijrahsaputra/images/blob/master/fork2.png)

hasil setelah ditambahkan pull request dengan fork & full model
![alt text](https://github.com/hijrahsaputra/images/blob/master/fork3.png)

Menggunakan akses SSH key passphrase dengan memasukkan username dan password setiap melakukan ``git push`` atau ``git pull`` dengan langkah sebagai berikut : 
```
$ git clone [ssh-url] [folder-name]
$ cd [folder-name]
```

Menambahkan branch baru dengan melakukan modifikasi terhadap file ```readme.md``` :
```
$ git checkout -b [new-feature]
```
Setelah membuat perubahan, dilakukan commit terhadap perubahan dengan melakukan checkout ke the git master branch
```
$ git add .
$ git commit -m "information added in readme"
$ git checkout master
```

## Tool 3: Bug Tracking


## Tool 4: Analytics


## Tool 5: Project Management


## Tool 6: Continuous Integration

## Tool 7: Code Review


## Tool 8: Documenting
