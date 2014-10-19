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
2. Push your branch to server
3. Create a pull request via Github GUI
4. Wait for review - you may need to make more changes or your branch will be merged in
5. Delete your feature branch - it is no longer needed


#### Locally

Choose this if you _don't_ want someone else to review your changes before merge

1. Ensure you are on the master branch
2. Pull down any changes
3. Merge your branch into master
4. Resolve any merge conflicts
5. Push master up
6. Delete your feature branch - it is no longer needed

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

