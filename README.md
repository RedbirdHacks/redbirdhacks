redbirdhacks
============

RedbirdHacks official website: http://redbirdhacks.org

## Git workflow

### Adding a feature

1. Ensure you are on master

        git checkout master

2. Create and switch to a new branch (name it after what the feature is about, examples: fix-auth-bug, add-navbar, refactor-user-model)

        git checkout -b your-branch-name

3. Do your work for this feature on this branch.

Notes:
- Make sure to keep all work done on this branch related to the feature. If you need to work on something else, like another bugfix or feature, create a new branch! It makes it easier to manage changes.
- If you want to backup your work, you can push your branch to the server. THe first time, you will have to tell it where: `git push -u origin your-branch-name`. Afterwards, you can just `git push` while on that branch.

### Merging your feature branch into master

There are two options for merging a branch - via pull request or locally.

#### Via pull request

Choose this if you want someone else to review your changes before you merge

1. Ensure you are on your feature branch

        git checkout your-branch-name

2. Push your branch to server

        git push origin your-branch-name (or just git push if your upstream is set)

3. Create a pull request via the Github GUI
4. Wait for review, start a discussion if necessary, etc.
  - If the review results in you needing to make more changes - simply make them, commit them, and push again. Pushing commits on your feature branch will update the pull request automatically
5. Once your pull request is merged, you can delete your feature branch - it is no longer needed

        git branch -d your-branch-name


#### Locally

Choose this if you __don't__ want someone else to review your changes before merge

1. Ensure you are on the master branch

        git checkout master

2. Pull down any changes

        git pull

3. Merge your branch into master

        git merge your-branch-name

4. Resolve any merge conflicts
  - Git will do it's best to automatically merge branches
  - Any conflicts will be shown to you via `git status`
  - Fix conflicted files by making them what they should be, i.e. open them in your favorite editor, get rid of the conflicting lines you don't want, and get rid of git's markup `>>>> HEAD`, `<<<<`, etc.
  - Once a file's conflicts are resolved, `git add` it
  - If you had to manually resolve conflicts, once you are done you must `git commit` the merge

5. Push master up

        git push

6. Delete your feature branch - it is no longer needed, the changes on that branch now live in master

        git branch -d your-branch-name

### Merging master to production branch
_ONLY DO THIS WHEN MASTER IS STABLE_

1. Ensure you are on production

        git checkout production

2. Merge the master branch into the production branch

        git merge master

3. There should be __no__ merge conflicts. If there are conflicts, then something is wrong. Find the person who is to blame using the Github GUI and resolve the conflicts.

4. Push the updated production branch to the server

        git push origin production // if you have set the upstream, just git push will do

5. Switch back to master

        git checkout master

