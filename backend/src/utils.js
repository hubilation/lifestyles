function throwIfNotLoggedIn(ctx) {
    if (!ctx.request.userId) {
        throw new Error("You must be logged in to to do that");
    }
}

function isUserOrHasPermission(ctx, userId, permissionsNeeded) {
    const loggedInUser = ctx.request.user;
    
    if (userId === loggedInUser.id) {
        return;
    }
    const matchedPermissions = user.permissions.filter(permissionTheyHave =>
        permissionsNeeded.includes(permissionTheyHave)
    );

    if (!matchedPermissions.length) {
        throw new Error(`You do not have sufficient permissions
    
          : ${permissionsNeeded}
    
          You Have:
    
          ${user.permissions}
          `);
    }
}

exports.throwIfNotLoggedIn = throwIfNotLoggedIn;
exports.isUserOrHasPermission = isUserOrHasPermission;