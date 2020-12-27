export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="/static/client.js" type="application/javascript"></script>
  <script>
    window.__token__ = '${token}'
  </script>
  <title>Reddit for me</title>
</head>
<body>
  <div id="react_root">${content}</div>
</body>
</html>
`;