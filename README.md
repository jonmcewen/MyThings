Notes:

1) Apache proxy set up due to same-origin policy for ajax calls to web service:

ProxyPass     /services/     http://localhost:8080/
ProxyPass     /admin/        http://localhost:8081/



2) Symlink to this directory added to the document root (not the user root, which doesn't allow FollowSymlinks)
