# Archlinux configuration files
## Easy way to manage linux configs
## Linux Config File Version Control and Backup on GitHub
## Refer https://github.com/vastlimits/OS-Conf-Backup-Linux/

A simple script that enables a powerful workflow: manage all configuration files on your Linux machines with Git and back them up on GitHub or any other version control host.

This is how it's used:

-Create a private GitHub repository for each machine's backup.
-Run the script on a Linux machine. It copies all configuration files (and/or anything else you want to backup) to a local Git repository.
-Push the changes from a machine's local repository to GitHub.


# Preparation (Once per Machine You Want to Backup)
12
These preparation steps only need to be done once on each machine whose configuration you want to backup. [Check out how to perform a backup](#performing-a-backup).
14
​
15
## Local Backup Directory

Create a backup data directory, assign write permissions to the `adm` group and set the group ID so that all files created in the directory get the `adm` group:
19
    sudo mkdir -p /backup/data
    sudo chown -R root:adm /backup/
    sudo chmod -R 774 /backup/
    sudo chmod -R g+s /backup
23
Clone the backup script from its public repository into the `bin` subdirectory and make it executable:
25
    git clone https://github.com/vastlimits/OS-Conf-Backup-Linux.git /backup/bin
    chmod 774 /backup/bin/copy_files.sh

 ##  Git Configuration
30
If this is the first time you are using Git on this machine, configure your username and email:
    git config --global user.name "your name"
    git config --global user.email "email@domain.com"
35
Create a Git repository in the backup data directory:
37
    cd /backup/data
    git init
40
## SSH Keypair
43
Create an SSH keypair to be used as GitHub deploy keys. We'll use the computername as key comment, leave the passphrase empty and move the generated keypair to the new repository. We also limit access to the owner or pushing to GitHub is blocked:
44
​
45
    cd /backup/data
    ssh-keygen -t rsa -b 4096 -C "www1-ubuntu"
    mkdir /backup/data/.ssh
    mv ~/.ssh/id_* /backup/data/.ssh/
    chgrp adm .ssh/id_*
    chmod 600 .ssh/id_*
51
## GitHub Repository
53
54
Create the private GitHub repository:
56
- Create a new private repository for the current machine's configuration backup.
57
- Add the public key file `/backup/data/.ssh/id_rsa.pub` as a deploy key to the new repository.
58
​
59
Add the GitHub remote repository and push:
60
    git remote add origin git@github.com:YOUR_ORGANIZATION/YOUR_REPOSITORY.git
62
## Configure What to Backup
64
The script copies every file or directory listed in the source file `/backup/config/backup_src.txt`. Globbing (including recursive wildcard expansion) is enabled. The recommended default content for the backup source file is the following:
66
    /etc/**/*.conf
    /etc/ssh/sshd_config
69
Create the backup sources file:
71
    mkdir /backup/config
73
    nano /backup/config/backup_src.txt
74
    [paste the file content and save the file]
75
## Set the SSH Key Per Repository
77
78
Normally, the SSH keys used by Git are configured once per user. In this case, however, we want to specify the keys per repository.
79
Configure Git to use the new SSH key for this repository:
81
    git config core.sshCommand "ssh -i /backup/data/.ssh/id_rsa -F /dev/null"
83
# Performing a Backup
85
Run the script:
87
    cd /backup/data/
    /backup/bin/copy_files.sh
90
### Quick Git Rub Off
git clone url          # To create directory on local
git add .              # Then add to staging
git commit -m "comments"         # Commit the files to local rep
git push origin master # Commit to Github

### Remove dir from GIT
git rm --cached -r diretory
git add .
git commit -m 'comment'
git push origin master


