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

// TODO

### Merging master to production branch (__ONLY WHEN IT IS STABLE__)

// TODO

